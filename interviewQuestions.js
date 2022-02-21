
// palindrome checker function 
function isPalindrome(str) {
  var reversed = str.split('').reverse().join('');
  return str === reversed;
}

function isPalindrome(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

function isPalindrome(str){
    return str.split(' ').join('').split('').every((char, i) => {
        return char === str[str.length - i - 1];
    }
    );
}

console.log(isPalindrome('racecar'));