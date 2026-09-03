const fs = require('fs')
const os = require('os')
const path = require('path')
const { spawnSync } = require('child_process')

const projectDirectory = process.cwd()
const buildArguments = ['build', ...process.argv.slice(2)]

const runBuild = cwd => {
  const gatsbyCli = path.join(cwd, 'node_modules', 'gatsby', 'cli.js')
  return spawnSync(
    process.execPath,
    [gatsbyCli, ...buildArguments],
    { cwd, stdio: 'inherit', env: { ...process.env, GATSBY_TELEMETRY_DISABLED: '1' } },
  )
}

if (process.platform !== 'win32' || /^[\x00-\x7F]*$/.test(projectDirectory)) {
  const result = runBuild(projectDirectory)
  process.exit(result.status ?? 1)
}

const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'gatsby-portfolio-'))
const sourceEntries = [
  'config',
  'src',
  'static',
  'gatsby-browser.js',
  'gatsby-config.js',
  'gatsby-node.ts',
  'gatsby-ssr.js',
  'package.json',
  '.env.production',
]

try {
  for (const entry of sourceEntries) {
    const source = path.join(projectDirectory, entry)
    if (fs.existsSync(source)) {
      fs.cpSync(source, path.join(temporaryDirectory, entry), { recursive: true })
    }
  }

  fs.symlinkSync(
    path.join(projectDirectory, 'node_modules'),
    path.join(temporaryDirectory, 'node_modules'),
    'junction',
  )

  console.log(`Building from temporary ASCII-only path ${temporaryDirectory}…`)
  const result = runBuild(temporaryDirectory)

  const temporaryPublic = path.join(temporaryDirectory, 'public')
  if (result.status === 0 && fs.existsSync(temporaryPublic)) {
    const projectPublic = path.join(projectDirectory, 'public')
    fs.rmSync(projectPublic, { recursive: true, force: true })
    fs.cpSync(temporaryPublic, projectPublic, { recursive: true })
  }

  process.exitCode = result.status ?? 1
} finally {
  fs.rmSync(temporaryDirectory, { recursive: true, force: true })
}
