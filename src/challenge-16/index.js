function decodeNumber(symbols) {
  const MAP = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  }

  return symbols
    .split('')
    .map((symbol) => MAP[symbol] || NaN)
    .reduce(
      (result, value, index, array) =>
        result + (value < array[index + 1] ? - value : value),
      0
    )
}

module.exports = decodeNumber