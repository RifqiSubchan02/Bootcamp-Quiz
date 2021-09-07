function isPalindrome(str) {
  str = str.toLowerCase().split("");
  let i = 0;
  let j = str.length - 1;
  for (let index = 0; index < str.length; index++) {
    if (str[i] != str[j]) return "is not palindrome";
    i++;
    j--;
  }
  return "is palindrome";
}

console.log(isPalindrome("kasur ini rUsak"));