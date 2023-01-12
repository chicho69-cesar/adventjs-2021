function canReconfigure(from, to) {
  const hasOnlyOneAsignPerChar = (origin, dest) => {
    const charCounters = {}
  
    origin.forEach((char, index) => {
      charCounters[char] ||= new Set()
      charCounters[char].add(dest[index])
    })
    
    return Object.values(charCounters).every(counter => counter.size === 1)
  }

  if (from.length !== to.length) {
    return false
  }

  const fromChars = from.split('')
  const toChars = to.split('')
  
  return hasOnlyOneAsignPerChar(fromChars, toChars) && hasOnlyOneAsignPerChar(toChars, fromChars)
}

function canReconfigureAlt(from, to) {
  if (from.length !== to.length) return false

  const fromMap = new Map()
  const toMap = new Map()
  for (let i = 0; i < from.length; i++) {
    if (fromMap.has(from[i]) && fromMap.get(from[i]) !== to[i]) return false
    if (toMap.has(to[i]) && toMap.get(to[i]) !== from[i]) return false

    fromMap.set(from[i], to[i])
    toMap.set(to[i], from[i])
  }

  return true
}

module.exports = canReconfigure