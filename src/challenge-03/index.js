function isValid(letter) {
  const gifts = letter.match(/\((.*?)(\)|$)/gm);

  if (gifts === null) return true;

  const invalidGift = gifts.find(gift => {
    return (
      gift.length === 2 ||
      gift.slice(-1) !== ')' ||
      gift.slice(1, -1).match(/[(){}[\]]/)
    );
  });

  return invalidGift === undefined;
}

function isValidAlternative(letter) {
  let stack = [];
  let content = [];
  let isValid = false;
 
  for (let i = 0; i < letter.length; i++) {
    if ((letter[i] === '[' || letter[i] === ']' || letter[i] === '{' || letter[i] === '}') && stack[stack.length - 1] === '(')  {
      isValid = false;
      break;
    }

    if (letter[i] === '(') {
      stack.push(letter[i]);
    } else if (letter[i] === ')' && stack[stack.length - 1] === '(' && content.length > 0) {
      stack.pop();
    } else if (letter[i] === ')' && stack[stack.length - 1] === '(' && content.length === 0) {
      stack.pop();
      break;
    } else {
      content.push(letter[i]);
    }

    console.log(isValid);
    console.log(content, stack);
  }

  if (stack.length === 0 && content.length > 0) {
    isValid = true;
  }

  return isValid;
}

module.exports = isValid;