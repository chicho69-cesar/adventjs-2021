function missingReindeer(ids) {
  const unpaired = ids
    .sort((a, b) => a - b)
    .find((id, index) => id !== index)

  return unpaired ? unpaired - 1 : ids.length
}

function missingReindeerAlt1(ids) {
  return [ ...Array(ids.length + 1).keys() ]
    .find(id => !ids.includes(id));
}

function missingReindeerAlt2(ids) {
  const index = ids
    .indexOf(ids.sort((a, b) => a - b)
    .filter((reno, i) => reno !== i)[0])

  return index === -1 ? Math.max(...ids)+1 : index
}

module.exports = missingReindeer