// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var person_name = "\t Fatima \n Mehtab \t ali";
console.log("Before triming ".concat(person_name));
// cutting or removing white or extra spaces using trim 
var triming = person_name.trim().replace(/\s+/g, ' ');
console.log("After triming we have : ".concat(triming));
