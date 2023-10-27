const fs = require('fs')
const path = require('path')

function copyFileToBuild(sourceFile, targetDir) {
  const scriptDir = __dirname
  const projectRootDir = path.resolve(scriptDir, '.')
  console.log('scriptDir:', projectRootDir)
  const sourcePath = path.join(projectRootDir, sourceFile)
  console.log('sourcePath:', sourcePath)
  const targetPath = path.join(
    projectRootDir,
    targetDir,
    path.basename(sourceFile)
  )
  console.log('targetPath:', targetPath)

  if (!fs.existsSync(path.dirname(targetPath))) {
    fs.mkdirSync(path.dirname(targetPath), { recursive: true })
  }

  fs.copyFileSync(sourcePath, targetPath)

  console.log(`Copied ${sourcePath} to ${targetPath}`)
}

function copyFileToBuild2(sourcePath, targetPath) {
  const sp = path.resolve(sourcePath)
  const tp = path.resolve(targetPath)
  console.log('sourcePath2', sp)
  console.log('targetPath2', tp)
  if (!fs.existsSync(tp)) {
    fs.mkdirSync(tp, { recursive: true })
  }

  fs.copyFileSync(sp, tp)

  console.log(`Copied ${sp} to ${tp}`)
}

module.exports = { copyFileToBuild, copyFileToBuild2 }
