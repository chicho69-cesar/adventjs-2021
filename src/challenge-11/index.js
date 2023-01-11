function shouldBuyFidelity(times) {
  const fidelityPrice = [...Array(times).keys()].reduce((acc, value) => {
    return acc + 12 * Math.pow(0.75, value + 1)
  }, 250)

  return fidelityPrice < times * 12
}

function shouldBuyFidelityAlt1(times) {
  if (times < 1) {
    return false
  }

  const ticketPrice = 12
  const voucherPrice = 250
  const discount = 0.75
  const totalWithNormalPrice = ticketPrice * times
  
  const totalWithFidelity = 250 + Array(times).fill(0).reduce((result, _value, index) => {
    return result + ticketPrice * Math.pow(discount, index + 1)
  })
  return totalWithFidelity < totalWithNormalPrice
}

function shouldBuyFidelityAlt2(times) {
  const getDiscount = ocurrences => {
    let discount = 0
    for (let i = 1; i <= ocurrences; i++) discount += Math.pow(0.75, i)
    return discount
  }

  let normal = 12 * times
  let fidelity = 250 + (12 * getDiscount(times))
  return normal >= fidelity
}

module.exports = shouldBuyFidelity