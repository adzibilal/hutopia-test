function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  function highestPalindrome(string, k) {
    function generatePalindromes(str, replacementsLeft) {
      if (replacementsLeft === 0) {
        return isPalindrome(str) ? parseInt(str) : -1;
      }
  
      let maxPalindrome = -1;
  
      for (let i = 0; i < str.length; i++) {
        const newStr = str.substring(0, i) + str.substring(i + 1);
        const palindrome = generatePalindromes(newStr, replacementsLeft - 1);
  
        maxPalindrome = Math.max(maxPalindrome, palindrome);
      }
  
      return maxPalindrome;
    }
  
    return generatePalindromes(string, k);
  }
  
  function findHighestPalindrome() {
    const inputString = document.getElementById('inputString').value;
    const replacementCount = parseInt(document.getElementById('replacementCount').value);
  
    const resultElement = document.getElementById('result');
  
    if (inputString && !isNaN(replacementCount)) {
      const result = highestPalindrome(inputString, replacementCount);
  
      if (result !== -1 && !isNaN(result)) {
        resultElement.textContent = `Highest Palindrome: ${result}`;
      } else {
        resultElement.textContent = 'No palindrome found.';
      }
    } else {
      resultElement.textContent = 'Please enter a valid input.';
    }
  }
  