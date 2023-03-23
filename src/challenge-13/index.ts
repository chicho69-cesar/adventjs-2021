function wrapGifts(gifts: string[]): string[] {
  if (gifts.length === 0) {
    return [];
  }

  const wrap: string = '*'.repeat(gifts[0].length);
  return [ wrap, ...gifts, wrap ].map((item: string) => `*${ item }*`);
}