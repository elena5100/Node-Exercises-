/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) {
    for (let i = 0; i < textInput.length / 2; i++) {
        if (textInput[i] !== textInput[textInput.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

/* Note for reminder
!==: Compares if the two characters are not equal.
textInput[textInput.length - 1 - i]: Character at the mirrored position from the end. 
/2; i++     the loop runs only until half the length of the string.
*/


// Test for palindrome

let testString = "Shams"; 
let testString2 = "level"; 

// TODO: display the result of the test strings in the console
console.log(checkPalindrome(testString)); 
console.log(checkPalindrome(testString2)); 