function maxProfit(prices: number[]): number {
  let max: number = -1;
  let compra: number = 0;
  let venta: number = 0;

  for (let i: number = 0; i < prices.length; i++) {
    for (let j: number = i + 1; j < prices.length; j++) {
      if ((prices[j] > prices[i]) && ((prices[j] - prices[i]) > max)) {
        max = (prices[j] - prices[i]);
        compra = prices[i];
        venta = prices[j];
      }
    }
  }

  return max !== -1 ? (venta - compra) : -1;
}