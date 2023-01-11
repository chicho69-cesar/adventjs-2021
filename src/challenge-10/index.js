function getCoins(change) {
  return [ 50, 20, 10, 5, 2, 1 ]
    .map(value => {
      const coins = Math.floor(change / value)
      change %= value

      return coins
    })
    .reverse()
}

function getCoinsAlt1(change) {
  let coins = [ 0, 0, 0, 0, 0, 0 ]
  let money = [ 1, 2, 5, 10, 20, 50 ]

  let module = 0

  const getModule = cash => {
    if (cash >= 50) return 5
    else if (cash >= 20) return 4
    else if (cash >= 10) return 3
    else if (cash >= 5) return 2
    else if (cash >= 2) return 1
    else if (cash === 1) return 0
    else return -1
  }

  do {
    if (change === 0) return coins
    module = getModule(change)
    if (module === -1) break
    coins[module] += Math.floor(change / money[module])
    change %= money[module]
  } while (change > 0)

  return coins
}

function getCoinsAlt2(change) {
  const coins = [ 1, 2, 5, 10, 20, 50 ]
  let pending = change

  return coins.reduceRight((result, coin) => {
    const numCoins = pending / coin
    result.unshift(Math.floor(numCoins))
    pending = pending % coin
    return result
  }, [])
}

function getCoinsAlt3(change) {
  let cambio = Array(coins.length).fill(0)

  for (let i = coins.length-1; i >= 0; i--) {
    if(change / coins[i] >= 1){
      cambio[i] = Math.floor(change / coins[i])
      change = change % coins[i]
    }
  }

  return cambio
}

module.exports = getCoins