// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
// includes its Checks if a value exists in an array.
// push Adds a value to the end of an array


// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; 

// TODO: display the array with duplicates removed in the console
console.log(removeDuplicates(testArray3));

