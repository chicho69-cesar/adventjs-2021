function createXmasTree(height: number): string {
  const data: string[] = [];

  for (let index = 1; index <= height; index++) {
    const row: string =
      '_'.repeat(height - index) +
      '*'.repeat(index * 2 - 1) +
      '_'.repeat(height - index);

    data.push(row);
  }

  const trunk: string = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);

  data.push(trunk);
  data.push(trunk);

  return data.join('\n');
}