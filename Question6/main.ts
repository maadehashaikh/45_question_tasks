// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let person_name:string = "\t Fatima \n Mehtab \t ali";
console.log(`Before triming ${person_name}`);
// cutting or removing white or extra spaces using trim 
let triming = person_name.trim().replace(/\s+/g, ' ');
console.log(`After triming we have : ${triming}`);