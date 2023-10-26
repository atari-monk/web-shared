import { existsSync, mkdirSync, copyFileSync } from 'fs'
import { resolve, join, basename, dirname } from 'path'

function copyFileToBuild(sourceFile, targetDir) {
  const scriptDir = __dirname
  const projectRootDir = resolve(scriptDir, '.')
  console.log('scriptDir:', projectRootDir)
  const sourcePath = join(projectRootDir, sourceFile)
  const targetPath = join(
    projectRootDir,
    targetDir,
    basename(sourceFile)
  )

  if (!existsSync(dirname(targetPath))) {
    mkdirSync(dirname(targetPath), { recursive: true })
  }

  copyFileSync(sourcePath, targetPath)

  console.log(`Copied ${sourcePath} to ${targetPath}`)
}

export default copyFileToBuild
