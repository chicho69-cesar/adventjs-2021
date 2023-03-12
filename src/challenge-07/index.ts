function contains(store: Object, product: string): boolean {
  let result: boolean = false

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