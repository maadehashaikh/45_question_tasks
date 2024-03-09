// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var PersonName = "maadeha rashid shaikh ";
console.log(PersonName.toLowerCase());
console.log(PersonName.toUpperCase());
function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
var titleCaseString = toTitleCase(PersonName);
console.log(titleCaseString);
