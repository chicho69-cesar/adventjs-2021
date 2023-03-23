function decodeNumber(symbols: string): number {
  type Decoder = {
    '.': number;
    ',': number;
    ':': number;
    ';': number;
    '!': number;
  }
  
  const MAP: Decoder = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  }

  return symbols
    .split('')
    .map((symbol: string) => MAP[symbol] || NaN)
    .reduce(
      (result: number, value: number, index: number, array: number[]) =>
        result + (value < array[index + 1] ? - value : value),
      0
    )
}