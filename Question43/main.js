// Unchanged Magicians: Start with your work from Exercise 41 and 42. Call the function make_great() 
//with a copy of the array of magicians’ names. Because the original array will be unchanged, return the 
//new array and store it in a separate array. Call show_magicians() with each array to show that you have 
//one array of the original names and one array with the Great added to each magician’s name.
var Magician_Names = ["Ali", "Jawaid", "Maleeha", "farhan"];
var copy_magician_array = Magician_Names;
function make_great() {
    for (var i = 0; i < copy_magician_array.length; i++) {
        copy_magician_array[i] = "The Great " + copy_magician_array[i];
    }
    return copy_magician_array;
}
function show_Magicians() {
    for (var i = 0; i < Magician_Names.length; i++) {
        console.log(Magician_Names[i]);
    }
}
// Array is same 
console.log(Magician_Names);
//Array is changed
console.log(make_great());
