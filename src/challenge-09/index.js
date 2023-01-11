function groupBy(collection, it) {
  let result = {}

  for (let item of collection) {
    let index = ((typeof it) === 'function')
      ? it(item)
      : item[it]

    result[index] = result[index]
      ? [ ...result[index], item ]
      : [ item ]
  }

  return result
}

function grouByAlt(collection, it) {
  return collection.reduce((acc, item) => {
    const value = typeof it === 'function' ? it(item) : item[it]
    acc[value] = acc[value] ? [ ...acc[value], item ] : [ item ]

    return acc
  }, {})
}

module.exports = groupBy