const shouldBuyFidelity = require('./index.js')

const cases = [
  [ 1, 10, 20 ],
  [ 30, 50, 100 ]
]

describe('Day 11 challenge', () => {
  test.each(cases[0])('should NOT buy the fidelity card when going $input times', input => {
      expect(shouldBuyFidelity(input)).toBeFalsy()
    }
  )

  test.each(cases[1])('should buy the fidelity card when going $input times', input => {
      expect(shouldBuyFidelity(input)).toBeTruthy()
    }
  )
})