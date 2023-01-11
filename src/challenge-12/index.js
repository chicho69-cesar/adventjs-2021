function getMinJump(obstacles) {
  if (obstacles.length === 0) return 1

  for (let step = 2; ; step++) {
    if (obstacles.every(obstacle => obstacle % step !== 0)) {
      return step
    }
  }
}

function getMinJumpAlt1(obstacles) {
  const maxObstacle = Math.max(...obstacles)
  let obstaculeFound = true
  let jumpSize = 1
  
  const someObstacleInJumps = (numJumps) => [ ...Array(numJumps) ]
      .map((_, index) => (index + 1) * jumpSize)
      .some((jumpDrop) => obstacles.includes(jumpDrop))

  while (jumpSize < maxObstacle && obstaculeFound) {
    const numJumps = Math.floor(maxObstacle / jumpSize++)
    obstaculeFound = someObstacleInJumps(numJumps)
  }

  return jumpSize
}

function getMinJumpAlt2(obstacles) {
  let jump = 1

  for (let i = 0; i <= Math.max(...obstacles); i = i+jump) {
    if(obstacles.includes(i)){
      i = 0
      jump++
    }
  }

  return jump
}

function getMinJumpAlt3(obstacles) {
  const obstaclesArray = [ ...obstacles ].sort((a, b) => a - b)
  let band = false, jump = true, counter = 1

  while (!band) {
    for (let i = 0; i <= obstaclesArray[obstaclesArray.length - 1]; i += counter) {
      if (obstaclesArray.includes(i)) jump = false
    }

    if (jump) {
      band = true
    } else {
      jump = true
      counter ++
    }
  }    

  return counter
}

module.exports = getMinJump