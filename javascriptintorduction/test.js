// Test Functions
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

/**
Define a function sum() and a function multiply() 
that sums and multiplies(respectively) all the numbers in an array of numbers.
For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4]) should return 24.
**/
function sum(arr) {
    let s = 0;
    for (var i = 0; i < arr.length; i++)    {
        s = s + arr[i];
    }

    return s;
}

function multiply(arr) {
    let s = 0;
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
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.assert(maxOfThree(5, 4, 44), 44);

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.assert(maxOfThree(55, 4, 44), 55);

console.log("Expected output of isVowel('e') is true: " + myFunctionTest(true, isVowel('e')));
console.assert(isVowel('e'), true);

console.log("Expected output of isVowel('d') is false: " + myFunctionTest(false, isVowel('d')));
console.assert(isVowel('d'), false);

console.assert(multiply([1, 2, 3]), 6);
console.log("Expected output of multiply([1,2,3]) is 6: " + myFunctionTest(6, multiply([1, 2, 3])));


console.log("Expected output of sum([1,2,3]) is 6: " + myFunctionTest(6, sum([1, 2, 3])));
console.assert(sum([1, 2, 3]),6);

console.log("Expected output of reverse('rest')  is tser: " + myFunctionTest('tser', reverse('rest')));
console.assert(reverse('rest'), 'tser');

console.log("Expected output of findLongestWord(['a', 'ab', 'abc', 'abcdefgh', 'x']) is abcdefgh: " + myFunctionTest('abcdefgh', findLongestWord(['a', 'ab', 'abc', 'abcdefgh', 'x'])));
console.assert(findLongestWord(['a', 'ab', 'abc', 'abcdefgh', 'x']), 'abcdefgh');

var testArr = ['bbb', 'dddd', 'eeee', 'ffff'];
console.log("Expected output of filterLongWords(filterLongWords(['aa', 'bbb', 'dddd', 'eeee', 'ffff'], 2)) is abcdefgh: " + myFunctionTest(testArr, filterLongWords(['aa', 'bbb', 'dddd', 'eeee', 'ffff'], 2)));
console.assert(filterLongWords(['aa', 'bbb', 'dddd', 'eeee', 'ffff'], 2), testArr);
