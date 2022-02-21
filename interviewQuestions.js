
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

// console.log(isPalindrome('racecar'));


// min max finder from array

function findMinMax(arr){
    let result = {
        min: arr[0],
        max: arr[0]
    }
    for (let index in arr){
        if(arr[index] > result.max){
            result.max = arr[index]
        }
        if(arr[index] < result.min){
            result.min = arr[index]
        }
    }
    return result
}



function findMinMax(arr){
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    }
}
// =====
function findMinMax(arr){
    return {
        min: arr.reduce((a,b) => a < b ? a : b),
        max: arr.reduce((a,b) => a > b ? a : b)
    }
}
// =====
function findMinMax(arr){
    return {
        min: arr.reduce((acc, cur) => Math.min(acc, cur)),
        max: arr.reduce((acc, cur) => Math.max(acc, cur))
    }
}
// ======
function findMinMax(arr){
    return arr.reduce(function(acc, curr){
        acc.min = Math.min(acc.min, curr)
        acc.max = Math.max(acc.max, curr)
        return acc
    }, {min: arr[0], max: arr[0]})
}

// =======

function findMinMax(arr){
    return arr.reduce(function(acc, curr){
        if(curr < acc.min){
            acc.min = curr
        }
        if(curr > acc.max){
            acc.max = curr
        }
        return acc
    }, {min: arr[0], max: arr[0]})
}

// =======

function findMinMax(arr){
    return {
        min: arr.reduce((min, num) => {
            return num < min ? num : min;
        }),
        max: arr.reduce((max, num) => {
            return num > max ? num : max;
        })
    }
}

// =====
// didn't work as acc.min is undefined
function findMinMax1(arr){
    let result = arr.reduce((acc,cur) => {
        if(cur < acc.min){
            acc.min = cur;
        }
        if(cur > acc.max){
            acc.max = cur;
        }
    }, {min: arr[0], max: arr[0]});
    return result;
}

// console.log(findMinMax1([3,2,67,4,9,7, 1]))

// find balanced parenthesis from string

function findParenthesis(str){
    let left = 0, right = 0;
    let arr = str.split('')
    for (let item of arr){
        if(item === '('){
            left++
        }
        if( item === ')'){
            right++
        }
    }
    return left === right
}

function isBalanced(str){
    let stack = [];
    for (let char of str){
        if(char === '('){
            stack.push(char)
        }else if(stack.pop() !== '('){
            return false
        }
    }
    return stack.length !== 0 ? false : true
}


// console.log(isBalanced(')('))


// find the longest word in a string

function findLongestWord(str){
    let arr = str.split(' ')
    let longest = 0;
    for (let word of arr){
        if(word.length > longest){
            longest = word.length
        }
    }
    return longest
}


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))


// write a function that takes a string and returns the number of vowels in the string

function countVowels(str){
    let arr = str.split('')
    let count = 0;
    for (let char of arr){
        if(/[aeiou]/i.test(char)){
            count++
        }
    }
    return count
}

// console.log(countVowels('The quick brown fox jumped over the lazy dog'))

// write a function that takes a string and returns the number of consonants in the string

function countConsonants(str){
    let arr = str.split('')
    let count = 0;
    for (let char of arr){
        if(/[bcdfghjklmnpqrstvwxyz]/i.test(char)){
            count++
        }
    }
    return count
}

// console.log(countConsonants('The quick brown fox jumped over the lazy dog'))


// write a function returns unique values form array

function returnUniqueValues1(arr){
    return new Set([...arr])
}

function returnUniqueValues2(arr){
    let result = []
    for (let item of arr){
        if(!result.includes(item)){
            result.push(item)
        }
    }
    return result

}

function returnUniqueValues(arr){
    return arr.reduce((acc, curr) => {
        if(!acc.includes(curr)){
            return acc.push(curr)
        }
    }, [])
}

function returnUniqueValues(arr){
    let result = []
    arr.forEach(item => {
        if(!result.includes(item)){
            result.push(item)
        }
    })
    return result
}

// console.log(returnUniqueValues([1,2,34,5,5,2,1,2]))

// write a function that reverse a string

function reverseString1(str){
    return str.split('').reverse().join('')
}

function reverseString2(str){
    let arr = str.split('')
    let res = []
    for (let item of arr){
        res.unshift(item)
    }
    return res.join('')
}

function reverseString(str){
    let reversedString = ''
    str.split('').forEach(char => {
        reversedString = char + reverseString;
    });

    return reversedString
}



// console.log(reverseString('salomM'))
