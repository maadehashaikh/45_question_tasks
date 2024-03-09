// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
var ordinal_array = ['bike', 'car', 'jeep', 'airplane', 'tractor', 'train', 'loaders', 'rikshaw', 'bus'];
// • Loop through the array.
for (var i = 0; i < ordinal_array.length; i++) {
    if (i == 0) {
        console.log("".concat(ordinal_array[i], " is at the ").concat(i + 1, "st position in the array"));
    }
    else if (i == 1) {
        console.log("".concat(ordinal_array[i], " is at the ").concat(i + 1, "nd position in the array"));
    }
    else if (i == 2) {
        console.log("".concat(ordinal_array[i], " is at the ").concat(i + 1, "rd position in the array"));
    }
    else {
        console.log("".concat(ordinal_array[i], " is at the ").concat(i + 1, "th position in the array"));
    }
}
// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
