function pangram(letter: any): boolean {
  const alphabet: string[] = 'abcdefghijklmnñopqrstuvwxyz'.split('');
  const ntilde: any = '&ntilde;'
  const letterTransformed: any = letter
    .toLowerCase()
    .replaceAll('ñ', ntilde)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replaceAll(ntilde, 'ñ');

  return alphabet.every((char: string) => letterTransformed.includes(char));
}