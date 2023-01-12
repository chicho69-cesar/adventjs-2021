function canMouseEat(direction, game) {
  let row = game.findIndex(row => row.includes('m'))
  let col = game[row].indexOf('m')

  switch (direction) {
    case 'up':
      row--
      break
    case 'down':
      row++
      break
    case 'right':
      col++
      break
    case 'left':
      col--
      break
  }
  
  try {
    return game[row][col] === '*'
  } catch (error) {
    return false
  }
}

function canMouseEatAlt(direction, game) {
  const getMousePosition = game => {
    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[0].length; j++) {
        if (game[i][j] === 'm') return [i, j]
      }
    }
  }

  const [i, j] = getMousePosition(game)
  switch (direction) {
    case 'up':
      return game[i - 1]?.[j] === '*'
    case 'down':
      return game[i + 1]?.[j] === '*'
    case 'left':
      return game[i]?.[j - 1] === '*'
    case 'right':
      return game[i]?.[j + 1] === '*'
  }
}

module.exports = canMouseEat