function checkSledJump(heights) {
  const maxHeightIndex = heights.indexOf(Math.max(...heights))

  if (maxHeightIndex === 0) return false
  if (maxHeightIndex === heights.length - 1) return false

  const isValidHeight = (height, index, array) => {
    if (index === maxHeightIndex) return true
    if (index < maxHeightIndex && height < array[index + 1]) return true
    if (index > maxHeightIndex && array[index - 1] > height) return true

    return false
  }

  return heights.every(isValidHeight)
}

function checkSledJumpAlt(heights) {
  const areItemsAsc = elements => {
    if (elements.length !== [ ...new Set(elements) ].length) {
      return false;
    }

    return elements
      .slice(0, -1)
      .reduce((_, item, index) => 
        item < elements[index + 1]
      , false);
  }

  const maxIndex = heights.indexOf(Math.max(...heights))
  const itemsBefore = heights.slice(0, maxIndex + 1)
  const itemsAfter = heights.slice(maxIndex).reverse()
  return areItemsAsc(itemsBefore) && areItemsAsc(itemsAfter)
}

module.exports = checkSledJump