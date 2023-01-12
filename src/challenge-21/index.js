function canCarry(capacity, trip) {
  const minPos = Math.min(...trip.map((t) => t[1]))
  const maxPos = Math.max(...trip.map((t) => t[2]))
  
  const gifsPerStop = [ ...Array(maxPos - minPos).keys() ]
    .map(index => {
      const stop = index + minPos
      return trip
        .filter(([ _, ini, end ]) => stop >= ini && stop < end)
        .reduce((acc, [ regalos ]) => acc + regalos, 0)
    })

  return gifsPerStop.every(num => num <= capacity)
}

function canCarryAlt(capacity, trip) {
  let pendingSteps = []

  for (let index = 0; index < trip.length; index++) {
    const currentStep = trip[index]
    if (currentStep[0] > capacity) return false

    pendingSteps = pendingSteps.filter(step => step[2] > currentStep[1])
    const pendingGifts = pendingSteps.reduce((acc, step) => acc + step[0], 0)
    if (currentStep[0] + pendingGifts > capacity) return false

    pendingSteps.push(currentStep)
  }

  return true
}

module.exports = canCarry