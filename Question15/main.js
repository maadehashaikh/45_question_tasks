// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var guest_list = ["aisha", "rashid", "ali", "mubben", "gulay", "shahid", "hassan"];
guest_list.forEach(function (person) {
    console.log("I would like to invite ", person, " on ramadan Iftar Party ");
});
console.log("All of my guests are coming except ".concat(guest_list[3], " because he has some health issues"));
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guest_list.splice(3, 1, "kamran");
// Print a second set of invitation messages, one for each person who is still in your list.
guest_list.forEach(function (person) {
    console.log("Now I would like to invite ".concat(person, " on ramadan Iftar Party"));
});
