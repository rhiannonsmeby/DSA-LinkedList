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
function countOccurances(string) {
    if (string.length === 0) {
        return '0'
    }
    let arr = string.toLowerCase().split(' ');
    let comparisonArr = [];
    //populate comparisonArr with each word, with no repeats 
    arr.forEach(item => {
        if (!comparisonArr.includes(item)) {
            comparisonArr.push(item)
        }
    });
    let answerArr = [];
    for (let i = 0; i < comparisonArr.length; i++) {
        let tempArr = [];
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (comparisonArr[i] === arr[j]) {
                count++;
                tempArr.push(arr[j])
            }
            if (!arr[j + 1]) {
                answerArr.push(`${comparisonArr[i]} = ${count}`)
            }
        }
    }
    return answerArr.join(', ')
}
console.log(countOccurances('hello')) //'hello = 1'
//neither of these are working... moving awn
console.log(countOccurances('hello hello')) //'hello = 2'
console.log(countOccurances('Hello there how are you, can you tell me how...'))

 /**
  * 2. given a sorted linkedlist, write an algorithm to delete all duplicate numbers
  * from the sorted linkedlist
  */
function deleteDuplicates(list) {
    //create a variable for current node
    let current = list.head;
    //create a variable for next
    let nextNode = list.head.next;
    //while we ar not on the last item of the list
    while (current.next !== null) {
        //check if our current node's valuse is equal to the next node's value
        if  (current.value === nextNode.value) {
            //if it is, assisgn the current node's next value
            current.next = nextNode.next
            nextNode = nextNode.next
        }
        //if it is not matching
        else {
            //current = current.next (move the pointer)
            current = current.next;
            //nextNode = nextNode.next (move the pointer)
            nextNode = nextNode.next
        }
    }
    return list;
}

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
 function deleteDupes(arr) {
     for (let i = 0; i< arr.length; i++) {
         if (arr[i] === arr[i+1]) {
             arr.splice(i, 1);
             deleteDupes(arr)
         }
     }
     return arr;
 }
 console.log(deleteDupes([1,1,1,2,3,4,6,6,7,8], 'dupes'))
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
    * keys values
    * how you handle collisions: 
    * - seperate chaining 
    * - linear probing 
    * hash maps are unordered associations between keys and values
    * hashing is the process of mapping a key to its location
    * hash map is a data structure that uses the concept of hashing 
    * With hashmaps, if we store the element as a key in the hash map, the number
    * of comparisons that we would needto do to find out the key would be constant
    * O(1)
    * the hash function is what gives us the mapping hash function = mapping function
    * - a good hash function is uniform: each key is equally likely to hash to any
    * of the n number of slots, independently of where any other key has hashed to
    * and attempts to distribute the keys as evenly as possible among slots in the
    * hash table
    * The example hash function uses the ASCII value of the characters in the string,
    * adds them together and uses other info to get a better distribution in the hash
    * table
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

//how will you reverse a linked list
// listReverse(head) {
//     let prev = null;
//     let curr = head;
//     let next = null;
//     while (curr !== null) {
//         //keep track of what is next
//         next = curr.next;
//         //reversing
//         curr.next = prev;
//         //advance previous and current
//         prev = curr;
//         curr = next;
//     }
//     //return the new head
//     return prev;
// }
/**
 * 
 * to reverse a linked list:
 * set up some variables-
 * - current = head
 * - next = null
 * - prev = null
 * while current != null {
 *  save current.next in the next variable
 *  set current.next to previous
 *  set previous to current
 *  set current to next 
 * also if we don't rename the head i think it even gets easier
 * while current isn't null
 * - let next = head.next
 * - let head.next = previous
 * - let previous = head
 * - let head = next
 * return prev because it holds the new head :)
 * 
 * }
 * 
 */

//how will you find the length of a singly linked list
//let counter = 1;
//let current = head
//if (!head) return 0
//while (current !== null) {
//  counter++
//}
//return counter
//is it that easy?????

//how will you implement bubble sort/ merge sort

//how will you implement a BST
//write a program to calculate the number of leaf nodes in a binary tree

//implement a priority queue

//balance a binary tree

//how would you remove duplicates from an array

//how would you detect and remove a loop in a linked list


//function compare

//function findMode but with a linked list
function findMode(linkedlist) {
    //set a varible current to the head of the LL
    //set a varible arr = []
    //while current !== null
    //let currTotal = 1;
    //let modeOccur = 1;
    //let num = 0;
      //arr.push(current)
      //++current
    //arr.sort()
    //loop through sorted array
            //if (arr[i] = arr[i + 1] {
            // currTotal++
            //num = arr[i]
            //      if(currTotal > modeOccur) {
                        //modeOccur = temp;
                    //}
            // }
        //
        //}
    //if mode count === 1 return 'there is no mode in this list'
    //otherwise, return 'The mode is (num) and it occured (modeOCcur) times
    //}
} 

function findX(arr) {
    let sorted = arr.sort()
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] !== (sorted[i - 1] + 1)) {
            return sorted[i] - 1
        }
    }
}
console.log(findX([1,3,2,5,9,7,8,6])) //4

function findXAgain(arr) {
    let n = 0;
    let sumOfArray = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            n = arr[i]
        }
        sumOfArray += arr[i]
    }
    return (n * (n +1) / 2) - sumOfArray
}
console.log(findXAgain([1,3,2,5,9,7,8,6])) //4


//input: "LaunchCode"
//remove all the vowels
//remove every other character
//return what's left

function removeChars(str) {
    let arr = str.split('');
    let newResult = [];
    let final = [];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < vowels.length; j++) {
    //         if (arr[i] === vowels[j]) {
    //             arr.splice(1, arr[i])
    //         }
    //     }
    // }
    // return arr.join('')
    for (let i = 0; i < arr.length; i++) {
        if (!vowels.includes(arr[i])) {
            newResult.push(arr[i])
        }
    }

    for (let i = 0; i < newResult.length; i++) {
        if (i % 2 === 0) {
            final.push(newResult[i])
        }
    }
    return final.join('')
}

console.log(removeChars('LaunchCode'))

/**
 * Please complete this short exercise using any language you like: Write a function that takes in a string of words separated by spaces, 
 * strips out all nonalphabetic characters, then sorts the words in alphabetical order and returns the first word. For example, given @c$cc.
 *  %aa!a bbb#?@, it should return aaa. Paste the function above.
 * **/

function beesWax(str) {
    //remove all non-alphabetical letters

    //sort the words in alphabetical order

    //return the first word
}

console.log(beesWax("@c$cc. %aa!a bbb#?@")) //aaa
//remove non-aplhabetical letters: ccc aaa bbb
//sort the words in alphabetical order: aaa bbb ccc //
//return the first word: aaa