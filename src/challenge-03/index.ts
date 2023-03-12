function isValid(letter: string): boolean {
  const gifts: () = letter.match(/\((.*?)(\)|$)/gm);

  if (gifts === null) return true;

  const invalidGift = gifts.find((gift: string) => {
    return (
      gift.length === 2 ||
      gift.slice(-1) !== ')' ||
      gift.slice(1, -1).match(/[(){}[\]]/)
    );
  });

  return invalidGift === undefined;
}