// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var PersonName:string = "maadeha rashid shaikh ";
console.log(PersonName.toLowerCase());

console.log(PersonName.toUpperCase());

function toTitleCase(str: string): string {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}
let titleCaseString = toTitleCase(PersonName);
console.log(titleCaseString);

