function contains(store, product) {
  let result = false

  for (const key in store) {
    if (typeof store[key] === 'object') {
      result = contains(store[key], product)
    } else {
      if (`${store[key]}` === product) {
        result = true
        break
      } else {
        continue
      }
    }
  }

  return result
}

function containsAlt1(store, product) {
  const flattenObjectValues = (object) => {
    const values = []

    Object.values(object).forEach(value => {
      if (typeof value === 'object') {
        values.push(...flattenObjectValues(value))
      } else {
        values.push(value)
      }
    })

    return values
  }

  return flattenObjectValues(store).includes(product)
}

function containsAlt2(store, product) {
  return new RegExp(`:"${product}"`, 'i').test(JSON.stringify(store));
}

function containsAlt3(store, searchProduct) {
  return (
    typeof store === "object"
    ? Object.values(store).some( contenedor => contains(contenedor, searchProduct) )
    : store === searchProduct
  )
}

module.exports = contains