function wrapGifts(gifts) {
  if (gifts.length === 0) {
    return []
  }

  const wrap = '*'.repeat(gifts[0].length)
  return [ wrap, ...gifts, wrap ].map(item => `*${ item }*`)
}

function wrapGiftsAlt(gifts) {
  if (!gifts.length) return []

  const base = '*'.repeat(gifts[0].length + 2)
  const wrappedGifts = gifts.map(gift => `*${ gift }*`)

  return [ base, ...wrappedGifts, base ]
}

module.exports = wrapGifts