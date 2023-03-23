function fixFiles(files: string[]): string[] {
  const counter: {} = {};

  return files.map((file: string) => {
    counter[file] = ++counter[file] || 0;
    return counter[file] > 0 ? `${ file }(${ counter[file] })` : file;
  });
}