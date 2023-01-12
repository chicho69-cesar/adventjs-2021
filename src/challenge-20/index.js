function pangram(letter) {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz'.split('')
  const ntilde = '&ntilde;'
  const letterTransformed = letter
    .toLowerCase()
    .replaceAll('ñ', ntilde)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replaceAll(ntilde, 'ñ')

  return alphabet.every((char) => letterTransformed.includes(char))
}

function pangramAlt(letter) {
  letter = letter
    .toLowerCase()
    .replace(/[áä]/g, 'a')
    .replace(/[éë]/g, 'e')
    .replace(/[íï]/g, 'i')
    .replace(/[óö]/g, 'o')
    .replace(/[úü]/g, 'u')

  return 'abcdefghijklmnñopqrstuvwxyz'
    .split('')
    .every(char => letter.includes(char))
}

module.exports = pangram