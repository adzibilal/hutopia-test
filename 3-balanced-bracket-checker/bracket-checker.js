function checkBalancedBracket() {
    const bracketInput = document.getElementById('bracketInput').value;
    const result = isBalanced(bracketInput);
    document.getElementById('result').textContent = `Result: ${result}`;
  }
  
  function isBalanced(input) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
  
    for (let i = 0; i < input.length; i++) {
      const bracket = input[i];
  
      if (openingBrackets.includes(bracket)) {
        stack.push(bracket);
      } else if (closingBrackets.includes(bracket)) {
        const lastOpeningBracket = stack.pop();
  
        if (
          (bracket === ')' && lastOpeningBracket !== '(') ||
          (bracket === ']' && lastOpeningBracket !== '[') ||
          (bracket === '}' && lastOpeningBracket !== '{')
        ) {
          return 'NO';
        }
      }
    }
  
    return stack.length === 0 ? 'YES' : 'NO';
  }
  