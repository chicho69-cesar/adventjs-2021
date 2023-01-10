function daysToXmas(date) {
  const christmasDate = new Date("Dec 25, 2021")
  const secondsTillChristmas = christmasDate.getTime()/1000 - date.getTime()/1000
  const daysTillChristmas = secondsTillChristmas/60/60/24
  return Math.ceil(daysTillChristmas)
}

module.exports = daysToXmas