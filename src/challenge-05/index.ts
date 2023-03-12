function daysToXmas(date: any) {
  const XMAS_DATE: any = new Date('Dec 25, 2021')
  const MS_IN_A_DAY: number = 1000 * 3600 * 24
  return Math.ceil((XMAS_DATE - date) / MS_IN_A_DAY)
}