
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

console.log(findMinMax1([3,2,67,4,9,7, 1]))
