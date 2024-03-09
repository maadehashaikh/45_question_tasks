// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
var guest_list = ["sana", "aisha", "rashid", "ali", "javeria", "kamran", "gulay", "shahid", "hassan", "maria"];
console.log("At the last moment my dinner table didn't come on time so I can't invite more than 2 people");
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guest_list.length > 2) {
    var univited_guest = guest_list.pop();
    console.log("I am sorry I can't invite you ".concat(univited_guest));
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
guest_list.forEach(function (person) {
    console.log("I would like to invite ".concat(person, " at my iftar party"));
});
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guest_list.pop();
guest_list.pop();
console.log(guest_list);
