#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const catalogPath = path.join(repoRoot, 'datasets', 'catalog.json')
const defaultAuditOut = path.join(repoRoot, 'data', 'dataset-audits')
const defaultStageRoot = path.join(repoRoot, 'data', 'staged-datasets')

const diabetesTerms = [
  'diabetes', 'diabetic', 'glucose', 'insulin', 'a1c', 'hba1c', 'cgm', 'dexcom',
  'tidepool', 'nightscout', 'metformin', 'endocrin', 'pancreas', 'retinopathy',
  'neuropathy', 'nephropathy', 'foot', 'wound', 'brfss', 'nhanes', 'mimic'
]
const sensitiveTerms = [
  'patient', 'mrn', 'dob', 'birth', 'name', 'address', 'phone', 'email', 'ssn',
  'insurance', 'claim', 'diagnosis', 'medication', 'lab', 'ehr', 'emr', 'clinical'
]
const datasetExtensions = new Set([
  '.csv', '.tsv', '.json', '.jsonl', '.parquet', '.arrow', '.feather', '.xlsx', '.xls',
  '.sas7bdat', '.xpt', '.dta', '.sav', '.db', '.sqlite', '.sqlite3', '.zip', '.gz',
  '.tgz', '.tar', '.7z', '.txt', '.md', '.pdf'
])

function loadCatalog() {
  return JSON.parse(fs.readFileSync(catalogPath, 'utf8'))
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function stableHash(value) {
  return crypto.createHash('sha256').update(JSON.stringify(value, Object.keys(value).sort())).digest('hex')
}

function fileHash(filePath, maxBytes = 1024 * 1024) {
  const fd = fs.openSync(filePath, 'r')
  try {
    const stat = fs.fstatSync(fd)
    const len = Math.min(stat.size, maxBytes)
    const buffer = Buffer.alloc(len)
    fs.readSync(fd, buffer, 0, len, 0)
    return crypto.createHash('sha256').update(buffer).digest('hex')
  } finally {
    fs.closeSync(fd)
  }
}

function classify(filePath, stat) {
  const ext = path.extname(filePath).toLowerCase()
  const name = path.basename(filePath).toLowerCase()
  const full = filePath.toLowerCase()
  const diabetesHits = diabetesTerms.filter((term) => full.includes(term))
  const sensitiveHits = sensitiveTerms.filter((term) => full.includes(term))
  const isDatasetLike = datasetExtensions.has(ext)
  const sizeMb = Number((stat.size / 1024 / 1024).toFixed(3))
  let risk = 'unknown'
  if (sensitiveHits.length > 0) risk = 'review_required'
  if (sensitiveHits.length > 2 || full.includes('patient') || full.includes('mimic')) risk = 'high_review_required'
  if (diabetesHits.length > 0 && risk === 'unknown') risk = 'diabetes_relevant_review'
  return { ext, name: path.basename(filePath), size_mb: sizeMb, is_dataset_like: isDatasetLike, diabetes_hits: diabetesHits, sensitive_hits: sensitiveHits, risk }
}

function usage() {
  console.log(`OpenDiabetic dataset CLI\n\nCommands:\n  list                              List cataloged datasets\n  show <dataset_id>                 Show catalog metadata and access notes\n  stage <dataset_id> [dest]         Create a local staging folder and access README\n  audit <path> [--out dir] [--limit n] [--hash] [--shard-size n]\n                                    Stream-scan a NAS/local dataset path and write manifest shards\n  summarize <audit_dir>             Summarize an audit output directory\n  init-nas <path>                   Create OpenDiabetic dataset intake folders on NAS\n\nExamples:\n  npm run datasets -- list\n  npm run datasets -- show mimic-iv\n  npm run datasets -- stage nhanes /mnt/swarm/opendiabetic-datasets/staged\n  npm run datasets -- audit /mnt/swarm --out /mnt/swarm/opendiabetic-dataset-audit --limit 10000\n`)
}

function parseOptions(args) {
  const opts = { _: [] }
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg === '--hash') opts.hash = true
    else if (arg.startsWith('--')) {
      const key = arg.slice(2).replace(/-/g, '_')
      opts[key] = args[i + 1]
      i++
    } else opts._.push(arg)
  }
  return opts
}

function commandList() {
  const catalog = loadCatalog()
  for (const d of catalog.datasets) {
    console.log(`${d.id}\t${d.access_level}\t${d.privacy_risk}\t${d.name}`)
  }
}

function commandShow(id) {
  const catalog = loadCatalog()
  const d = catalog.datasets.find((item) => item.id === id)
  if (!d) throw new Error(`Unknown dataset id: ${id}`)
  console.log(JSON.stringify(d, null, 2))
}

function commandStage(id, dest = defaultStageRoot) {
  const catalog = loadCatalog()
  const d = catalog.datasets.find((item) => item.id === id)
  if (!d) throw new Error(`Unknown dataset id: ${id}`)
  const dir = path.join(dest, id)
  ensureDir(dir)
  const manifest = {
    dataset_id: d.id,
    name: d.name,
    created_at: new Date().toISOString(),
    access_level: d.access_level,
    privacy_risk: d.privacy_risk,
    source_url: d.source_url,
    license_notes: d.license_notes,
    raw_data_expected_here: path.join(dir, 'raw'),
    processed_expected_here: path.join(dir, 'processed'),
    receipts_expected_here: path.join(dir, 'receipts'),
    doctrine: 'Do not upload, redistribute, or train on this data until license, consent, and PHI review are complete.'
  }
  ensureDir(path.join(dir, 'raw'))
  ensureDir(path.join(dir, 'processed'))
  ensureDir(path.join(dir, 'receipts'))
  fs.writeFileSync(path.join(dir, 'dataset_manifest.json'), JSON.stringify(manifest, null, 2))
  fs.writeFileSync(path.join(dir, 'README.md'), `# ${d.name}\n\nDataset ID: \`${d.id}\`\n\nAccess level: ${d.access_level}\nPrivacy risk: ${d.privacy_risk}\n\nSource: ${d.source_url || 'local/user-owned'}\n\nLicense/access notes: ${d.license_notes}\n\n## Required Review Before Developer Use\n\n- [ ] source confirmed\n- [ ] license confirmed\n- [ ] PHI/PII risk reviewed\n- [ ] permitted use recorded\n- [ ] raw data stored locally only\n- [ ] access receipt created\n\nDo not use for diagnosis, treatment, medication dosing, or emergency triage.\n`)
  console.log(`Created staging folder: ${dir}`)
}

function walk(root, onFile, options = {}) {
  const stack = [root]
  let count = 0
  while (stack.length > 0) {
    const current = stack.pop()
    let entries
    try {
      entries = fs.readdirSync(current, { withFileTypes: true })
    } catch (err) {
      options.warnings.push({ path: current, warning: `read_failed: ${err.message}` })
      continue
    }
    for (const entry of entries) {
      const p = path.join(current, entry.name)
      if (entry.isDirectory()) {
        if (!['node_modules', '.git', 'dist'].includes(entry.name)) stack.push(p)
      } else if (entry.isFile()) {
        count++
        onFile(p)
        if (options.limit && count >= options.limit) return count
      }
    }
  }
  return count
}

function commandAudit(root, opts) {
  const absRoot = path.resolve(root)
  const out = path.resolve(opts.out || defaultAuditOut)
  const shardSize = Number(opts.shard_size || 5000)
  const limit = opts.limit ? Number(opts.limit) : undefined
  const warnings = []
  ensureDir(out)
  let shard = []
  let shardIndex = 0
  let total = 0
  let datasetLike = 0
  let diabetesRelevant = 0
  let reviewRequired = 0
  const topExt = {}

  function flush() {
    if (shard.length === 0) return
    const file = path.join(out, `manifest-shard-${String(shardIndex).padStart(5, '0')}.jsonl`)
    fs.writeFileSync(file, shard.map((row) => JSON.stringify(row)).join('\n') + '\n')
    shard = []
    shardIndex++
  }

  const started = new Date().toISOString()
  walk(absRoot, (filePath) => {
    let stat
    try { stat = fs.statSync(filePath) } catch { return }
    const c = classify(filePath, stat)
    if (!c.is_dataset_like && c.diabetes_hits.length === 0 && c.sensitive_hits.length === 0) return
    const rel = path.relative(absRoot, filePath)
    const row = {
      path: rel,
      ext: c.ext,
      size_bytes: stat.size,
      size_mb: c.size_mb,
      modified_at: stat.mtime.toISOString(),
      is_dataset_like: c.is_dataset_like,
      diabetes_hits: c.diabetes_hits,
      sensitive_hits: c.sensitive_hits,
      risk: c.risk
    }
    if (opts.hash) {
      try { row.sample_sha256 = fileHash(filePath) } catch (err) { row.hash_warning = err.message }
    }
    total++
    if (c.is_dataset_like) datasetLike++
    if (c.diabetes_hits.length > 0) diabetesRelevant++
    if (c.risk.includes('review')) reviewRequired++
    topExt[c.ext || '[none]'] = (topExt[c.ext || '[none]'] || 0) + 1
    shard.push(row)
    if (shard.length >= shardSize) flush()
  }, { limit, warnings })
  flush()

  const summary = {
    audit_id: `nas-audit-${crypto.randomUUID()}`,
    created_at: new Date().toISOString(),
    started_at: started,
    root: absRoot,
    limited: Boolean(limit),
    limit: limit || null,
    shard_size: shardSize,
    manifest_shards: shardIndex,
    matched_files: total,
    dataset_like_files: datasetLike,
    diabetes_relevant_files: diabetesRelevant,
    review_required_files: reviewRequired,
    top_extensions: Object.fromEntries(Object.entries(topExt).sort((a, b) => b[1] - a[1]).slice(0, 25)),
    warnings,
    verdict: reviewRequired > 0 ? 'REVIEW_REQUIRED' : 'PASS_WITH_LIMITATIONS',
    doctrine: 'This audit indexes local paths and metadata. It does not grant permission to share or train on any dataset.'
  }
  summary.summary_hash = stableHash(summary)
  fs.writeFileSync(path.join(out, 'audit-summary.json'), JSON.stringify(summary, null, 2))
  fs.writeFileSync(path.join(out, 'README.md'), `# OpenDiabetic NAS Dataset Audit\n\nRoot: \`${absRoot}\`\nMatched files: ${total}\nDiabetes-relevant files: ${diabetesRelevant}\nReview-required files: ${reviewRequired}\n\nRaw data was not copied. Review manifests and source licenses before developer access.\n`)
  console.log(JSON.stringify(summary, null, 2))
}

function commandSummarize(dir) {
  const summaryPath = path.join(path.resolve(dir), 'audit-summary.json')
  if (!fs.existsSync(summaryPath)) throw new Error(`Missing audit-summary.json in ${dir}`)
  console.log(fs.readFileSync(summaryPath, 'utf8'))
}

function commandInitNas(root) {
  const base = path.resolve(root)
  const dirs = [
    '00_AUDIT_SUMMARIES', '01_CATALOG', '02_STAGED_PUBLIC_DATASETS', '03_CREDENTIALED_RESTRICTED',
    '04_LOCAL_PRIVATE_DATASETS', '05_DERIVED_DEIDENTIFIED', '06_SYNTHETIC', '07_DEVELOPER_ACCESS_PACKS',
    '08_RECEIPTS', '09_DO_NOT_SHARE_RAW', '90_INBOX_TO_CLASSIFY'
  ]
  for (const d of dirs) ensureDir(path.join(base, d))
  fs.writeFileSync(path.join(base, 'README.md'), `# OpenDiabetic Dataset NAS Root\n\nThis folder organizes local medical/diabetes datasets for audited developer use.\n\nRules:\n\n- Do not place raw private data in public folders.\n- Do not train models until source, license, consent, and PHI review are complete.\n- Keep receipts for every developer access pack.\n- No diagnosis, dosing, or emergency triage claims.\n`)
  console.log(`Initialized dataset NAS root: ${base}`)
}

try {
  const [command, ...rest] = process.argv.slice(2)
  if (!command || command === 'help' || command === '--help') usage()
  else if (command === 'list') commandList()
  else if (command === 'show') commandShow(rest[0])
  else if (command === 'stage') commandStage(rest[0], rest[1])
  else if (command === 'audit') {
    const opts = parseOptions(rest)
    if (!opts._[0]) throw new Error('audit requires a path')
    commandAudit(opts._[0], opts)
  } else if (command === 'summarize') commandSummarize(rest[0])
  else if (command === 'init-nas') commandInitNas(rest[0] || '/mnt/swarm/opendiabetic-datasets')
  else throw new Error(`Unknown command: ${command}`)
} catch (err) {
  console.error(`ERROR: ${err.message}`)
  process.exit(1)
}
