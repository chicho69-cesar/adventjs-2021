function canReconfigure(from: string, to: string) {
  const hasOnlyOneAsignPerChar = (origin: any[], dest: string[]): boolean => {
    const charCounters: {} = {}
  
    origin.forEach((char: any, index: number) => {
      charCounters[char] ||= new Set();
      charCounters[char].add(dest[index]);
    });
    
    return Object.values(charCounters).every((counter: any) => {
      return counter.size === 1;
    });
  }

  if (from.length !== to.length) {
    return false;
  }

  const fromChars: string[] = from.split('');
  const toChars: string[] = to.split('');
  
  return hasOnlyOneAsignPerChar(fromChars, toChars) && hasOnlyOneAsignPerChar(toChars, fromChars);
}