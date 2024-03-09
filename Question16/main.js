// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var guest_list = ["aisha", "rashid", "ali", "kamran", "gulay", "shahid", "hassan"];
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Hurray guests i found a bigger dinner table !");
// Add one new guest to the beginning of your array.
guest_list.unshift("sana");
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
guest_list.splice(4, 0, "javeria");
guest_list.push("maria");
// Print a new set of invitation messages, one for each person in your list.
guest_list.forEach(function (person) {
    console.log("I would like to invite ".concat(person, " on ramadan Iftar Party"));
});
