function maxProfit(prices) {
  let max = -1, compra, venta

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if ((prices[j] > prices[i]) && ((prices[j] - prices[i]) > max)) {
        max = (prices[j] - prices[i])
        compra = prices[i]
        venta = prices[j]
      }
    }
  }

  return max !== -1 ? (venta - compra) : -1
}

function maxProfitAlt1(prices) {
  return prices.reduce((maxProfit, price, index, array) => {
    const profit = Math.max(...array.slice(index + 1)) - price
    return profit > 0 && profit > maxProfit ? profit : maxProfit
  }, -1)
}

function maxProfitAlt2(prices) {
  let nextIndex = 0

  const allProfit = prices.reduce((result, price, index) => {
    if (index < nextIndex) {
      return result
    }

    const foundLastIndex = prices.slice(index).findIndex(p => p < price)
    nextIndex = foundLastIndex === -1 ? prices.length : foundLastIndex
    
    const rest = prices.slice(index + 1, nextIndex)
    const min = price
    const max = rest.length > 0 ? Math.max(...rest) : price
    const profit = max - min
    return profit > 0 ? [...result, profit] : result
  }, [])
  
  return allProfit.length > 0 ? Math.max(...allProfit) : -1
}

function maxProfitAlt3(prices) {
  let profit = 0
  let mappedPrices = [ ...prices ]

  mappedPrices.forEach(price => {
    prices.shift()
    prices.forEach( comparePrice => {
      profit = (
        (comparePrice - price) > profit
        ? comparePrice - price
        : profit
      )
    })
  })
  
  return profit || -1
}

module.exports = maxProfit