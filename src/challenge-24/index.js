// TODO: Something is bad with this code, fix it
function checkIsSameTreeAlt(treeA, treeB) {
  const countDecorations = bigTree => {
    return [ bigTree ].reduce((acc, { value, left, right }) => {
      const totalLeft = left ? countDecorations(left) : 0
      const totalRight = right ? countDecorations(right) : 0   
      return acc + value + totalLeft + totalRight
    }, 0)
  }

  return countDecorations(treeA) === countDecorations(treeB)
}

function checkIsSameTree(treeA, treeB) {
  const checkTrees = function (treeA, treeB) {
    if (!treeA && !treeB) return true
    if (!treeA && treeB) return false
    if (treeA && !treeB) return false
    if (treeA.value !== treeB.value) return false

    return (
      checkTrees(treeA.left, treeB.left) && checkTrees(treeA.right, treeB.right)
    )
  }

  const inverseTree = function (tree) {
    return JSON.parse(
      JSON.stringify(tree)
        .replaceAll('left', 'tmp')
        .replaceAll('right', 'left')
        .replaceAll('tmp', 'right')
    )
  }

  return checkTrees(treeA, treeB) || checkTrees(treeA, inverseTree(treeB))
}

module.exports = checkIsSameTree