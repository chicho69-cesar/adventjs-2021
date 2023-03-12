function listGifts(letter: string): {} {
  return letter
    .trim()
    .split(/\s+/)
    .filter(gift => !gift.startsWith('_'))
    .reduce((acc, gift) => {
      acc[gift] = acc[gift] ? acc[gift] + 1 : 1
      return acc
    }, {})
}