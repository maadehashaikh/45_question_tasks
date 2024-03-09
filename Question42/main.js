// Great Magicians: Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians by adding 
//the phrase the Great to each magician’s name. Call show_magicians() to see that the 
//list has actually been modified.
var magician_names2 = ["Ali", "Jawaid", "Maleeha", "farhan"];
function show_magicians2() {
    for (var i = 0; i < magician_names2.length; i++) {
        console.log(magician_names2[i]);
    }
}
function Make_great() {
    for (var i = 0; i < magician_names2.length; i++) {
        magician_names2[i] = " The Great " + magician_names2[i];
    }
    return magician_names2;
}
Make_great();
show_magicians2();
