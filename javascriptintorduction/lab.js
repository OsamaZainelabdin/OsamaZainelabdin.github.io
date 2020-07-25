/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

/* Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

function isVowel(character) {
    character = character.toLowerCase();
    if (character === 'a' ||
        character === 'e' ||
        character === 'i' ||
        character === 'o' ||
        character === 'u' ||
        character === 'y')
        return true;
    else
        return false;
}


function sum(arr) {
    let s = 0;
    for (var i = 0; i < arr.length; i++)    {
        s = s + arr[i];
    }

    return s;
}

function multiply(arr) {
    let s = 1;
    for (var i = 0; i < arr.length; i++) {
        s = s * arr[i];
    }

    return s;
}

/*
 Define a function reverse() that computes the reversal of a string. 
 For example, reverse("jag testar") should return the string "ratset gaj".
 */
function reverse(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse();     
    var joinArray = reverseArray.join("");     
    return joinArray; 
}

/*
 Write a function findLongestWord() that takes an array of words 
 and returns the length of the longest one.
  */
function findLongestWord(arrOfWords) {
    let longest = arrOfWords[0];
    
    for (var i = 1; i < arrOfWords.length; i++) {
        if (longest.length < arrOfWords[i].length)
            longest = arrOfWords[i];
    }

    return longest;
}

/**Write a function filterLongWords() 
 * that takes an array of words and an integer i and returns the array of words 
 * that are longer than i.**/

function filterLongWords(arrayOfWords, i) {
    var newArr = [];

    for (var x = 0; x < arrayOfWords.length; x++) {
        if (i < arrayOfWords[x].length) {
            newArr.push(arrayOfWords[x]);
        }
    }
    return newArr;
}


/*Console logging section */
//console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
//console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
/**
console.assert(myFunctionTest(44, maxOfThree(5, 4, 44)), 444);

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

console.log("Expected output of isVowel('e') is true: " + myFunctionTest(true, isVowel('e')));

console.log("Expected output of multiply([1,2,3]) is 6: " + myFunctionTest(6, multiply([1, 2, 3])));
console.log("Expected output of multiply([1,2,3,2]) is 12: " + myFunctionTest(12, multiply([1, 2, 3, 2])));

console.log("Expected output of sum([1,2,3]) is 6: " + myFunctionTest(6, sum([1, 2, 3])));
console.log("Expected output of sum([1,3,4]) is 8: " + myFunctionTest(8, sum([1, 2, 3])));

console.log("Expected output of reverse('rest')  is tser: " + myFunctionTest('tser', reverse('rest')));
console.log("Expected output of reverse('st')  is ts: " + myFunctionTest('ts',reverse('st')));
console.log("Expected output of findLongestWord(['a', 'ab', 'abc', 'abcdefgh', 'x']) is abcdefgh: " + myFunctionTest('abcdefgh', findLongestWord(['a', 'ab', 'abc', 'abcdefgh', 'x'])));

console.log("Expected output of filterLongWords(filterLongWords(['aa', 'bbb', 'dddd', 'eeee', 'ffff'], 2)) is abcdefgh: " + myFunctionTest(['bbb', 'dddd', 'eeee', 'ffff'], filterLongWords(['aa', 'bbb', 'dddd', 'eeee', 'ffff'], 2)));
**/