function sumPairs(numbers: number[], result: number): (number[] | null) {
  const set: Set<number> = new Set(numbers)

  const isRepeatedNumber = (number: number): boolean =>
    numbers.filter(value => number === value).length > 1

  for (const number1 of set) {
    const number2: number = result - number1

    if (number1 === number2) {
      if (isRepeatedNumber(number1)) {
        return [ number1, number1 ]
      }
    } else if (set.has(number2)) {
      return [ number1, number2 ]
    }
  }

  return null
}