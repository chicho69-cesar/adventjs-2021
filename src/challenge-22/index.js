function countDecorations(tree) {
  const leftDecorations = tree.left 
    ? countDecorations(tree.left) : 0
  const rightDecorations = tree.right 
    ? countDecorations(tree.right) : 0

  return tree.value + leftDecorations + rightDecorations
}

function countDecorationsAlt(bigTree) {
  return [ bigTree ].reduce((acc, { value, left, right }) => {
    const totalLeft = left ? countDecorations(left) : 0
    const totalRight = right ? countDecorations(right) : 0   
    return acc + value + totalLeft + totalRight
  }, 0)
}

module.exports = countDecorations