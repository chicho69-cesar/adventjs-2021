function listGifts(letter) {
  return letter
    .trim()
    .split(/\s+/)
    .filter(gift => !gift.startsWith('_'))
    .reduce((acc, gift) => {
      acc[gift] = acc[gift] ? acc[gift] + 1 : 1
      return acc
    }, {})
}

function listGiftsAlternative(letter) {
  let newLetter = letter.split(' ');
  let filtered = newLetter.filter(element => element !== '');

  let gifts = {};

  filtered.forEach(element => {
    if (element[0] !== '_') {
      gifts[element] = gifts[element] ? gifts[element] + 1 : 1;
    }
  });

  return gifts;
}

module.exports = listGifts;