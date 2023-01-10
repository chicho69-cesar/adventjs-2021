function sumPairs(numbers, result) {
  const set = new Set(numbers)

  const isRepeatedNumber = number =>
    numbers.filter(value => number === value).length > 1

  for (const number1 of set) {
    const number2 = result - number1

    if (number1 === number2) {
      if (isRepeatedNumber(number1)) {
        return [number1, number1]
      }
    } else if (set.has(number2)) {
      return [number1, number2]
    }
  }

  return null
}

function sumPairsAlternative(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) {
        return [numbers[i], numbers[j]]
      }
    }
  }

  return null
}

module.exports = sumPairs