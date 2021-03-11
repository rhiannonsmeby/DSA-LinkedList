/**
 * 1. given a document, implement an algorithm to count the number of word
 * occurances
 * e.g. input: "Hello there how are you, can you tell me how..."
 * output: [hello = 1, there = 1, how = 2, are = 1, you = 2]
 */
//sort method 
function wordOccurCount(str) {
    let arr = str.split(' ').sort()
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let counter = 1;
        let word = arr[i];
        if (word === arr[i + 1]) {
            counter++;
        }
        if (result !== (word)) {
            result.push(`${word} = ${counter}`)
        }
        else {
            result
        }
    }
    return result.join(', ')
}
//simplest solution 
console.log(wordOccurCount('hello')) //'hello = 1'
//neither of these are working... moving awn
console.log(wordOccurCount('hello hello')) //'hello = 2'
console.log(wordOccurCount('Hello there how are you, can you tell me how...')) 
//hello = 1, there = 1, how = 2, are = 1, you = 2

 /**
  * 2. given a sorted linkedlist, write an algorithm to delete all duplicate numbers
  * from the sorted linkedlist
  */
 function noDupes(list) {
    let current = list.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next
            }
        }
        current = current.next;
    }
 }
  /**
   * 3. given a string, write an algorithm to count the number of words in the string
   * that are palindromes. The output must include a list of palindromes and the
   * number of palindromes
   */
  function palindromes(str) {
      let arrWords = str.toLowerCase().split(' ');
      let counter = 0;
      let palindrome = []
      for (let j = 0; j < arrWords.length; j++) {
        let result = [];
        let arr = arrWords[j].split('')
        for (let i = arr.length; i >= 0; i--) {
            result.push(arr[i])
        }
        if (result.join('') === arrWords[j]) {
            counter++;
            palindrome.push(arrWords[j]);
        }
      }
      return `${palindrome.join(' ')}- palindromes: ${counter}`
  }
  console.log(palindromes('dad'))
  console.log(palindromes('dad racecar harrison mom')) //dad racecar mom- palidromes: 3

  function DSApalindrome(str) {

  }

  
   /**
    * 4. explain how a hash table works
    */

/**
 * 5. given 2 linkedlists where each node in each linked list represents a character
 * in a string, write a function compare() that compares the 2 strings, it returns
 * 0 if both strings are the same, 1 if the first linkedlist is lexicographically
 * greater, and -1 if the second string is lexicographically greater
 */
function compare(list1, list2) {

}

/**
 * 6. given a list of integers, find the mode and the frequency of the mode. 
 * The mode in a list of numbers is the value that occurs the most often. If
 * no number in the list is repeated then there is no mode for the list
 */
function findMode(nums) {
    //is it an array?
    arr = nums.sort()
    console.log(arr)
    //if no numeber is repeated return null
    //create a tempCount variable to count the number of times the current number
    //has been counted
    //create a variable tempMode where we can store the count for the current num
    //create a mode variable where well store number with the highest count
    //create a highestCounter variable for
    let modeCount = 1;
    let temp = 1;
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            temp++;
            if (temp > modeCount) {
                modeCount = temp
                num = arr[i]
            }
        }
    }
    if (modeCount === 1) {
        return `There is no mode in this list`
    }
    return `The mode is ${num} and it occurs ${modeCount} times in the list`;
    
    
}
console.log(findMode([1,1,1,1,1])) //The mode is 1 and it occurs 5 times in the list
console.log(findMode([1,2,2,3,4,5])) //The mode is 2 and it occurs 2 times in the list
console.log(findMode([1,2,3,4,5])) //There is no mode in this list

/**
 * 7. write a function that takes an array of numbers and returns the greatest
 * difference you can get by subtracting any two of those numbers
 */
function greatestDif(nums) {
    //set a minimum and maximum variable to the first item in the array
    let max = nums[0];
    let min = nums[0];
    //loop through the array to find the minimum and maximum values
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] >= max) {
            max = nums[i]
        }
        if (nums[i] <= min) {
            min = nums[i]
        }
    }
    //return the maximum - the minimum
    return (max - min)
}

console.log(greatestDif([1,2,3,4,5,6])) //5
console.log(greatestDif([2,19,30,10])) //28
//O(n)

var reversed = function(x) {
    let reverseN = x.toString().split('').reverse().join('');
    let result = Number(reverseN)
    console.log(result)
    
    if (result < (Math.pow(2, -31)) || result > (Math.pow(2, 31))-1) {
        return 0
    }
    return result;
};
console.log(reversed(123))
console.log(reversed(-123))

var reverse = function(x) {
    let arr = x.toString().split('')
    let temp = [];
    if (arr[0] === '-') {
        temp = arr[0]
        arr.shift()
    }
    console.log(arr, 'arr')
    console.log(temp)
    let newNum = arr.reverse().join('');
    let result = Number(temp.concat(newNum))
    console.log(result)
   
    if (result < (Math.pow(2, -31)) || result > (Math.pow(2, 31))-1) {
        return 0
    }  

    return result;
}
console.log(reverse(123))
console.log(reverse(-123))

var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('')
    let result = Number(reversed)
    console.log(result)
    if (result === x) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(121))

var strStr = function(haystack, needle) {
    if (haystack === '' && needle === '') {
        return 0
    }
    let arr = haystack.split('')
    let arr2 = needle.split('')
    console.log(arr)
    console.log(arr2)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString(), 'arr')
        console.log(arr2[0].toString(), 'arr2')
        if (arr[i] == arr2[0]) {
            return i;
        }
        
    }
    return -1
};
console.log(strStr('', '')) //0
console.log(strStr('hello', 'll')) //2