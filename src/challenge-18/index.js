function fixFiles(files) {
  const counter = {}

  return files.map(file => {
    counter[file] = ++counter[file] || 0
    return counter[file] > 0 ? `${ file }(${ counter[file] })` : file
  })
}

function fixFilesAlt(files) {
  const fixedFiles = []
  const filesCounter = {}

  files.forEach(file => {
    const fixedFile = fixedFiles.includes(file)
      ? `${ file }(${ filesCounter[file] })`
      : file

    fixedFiles.push(fixedFile)
    filesCounter[file] = (filesCounter[file] || 0) + 1
  })

  return fixedFiles
}

module.exports = fixFiles