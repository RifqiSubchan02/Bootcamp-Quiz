function isPalindrome(number) {
  if (isNaN(number)) {
    return `${number} is not a number`;
  }
  number = number.toString();
  if (number.charAt(0) !== number.charAt(3) || number.charAt(1) !== number.charAt(2)) return `${number} is not palindrome`;
  return `${number} is palindrome`;
}

console.log(isPalindrome("abcd"));
console.log(isPalindrome("123a"));
console.log(isPalindrome("1234"));
console.log(isPalindrome(1221));
console.log(isPalindrome("8888"));