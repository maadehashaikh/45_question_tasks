// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest_list = ["aisha", "rashid", "ali", "mubben", "gulay", "shahid", "hassan"];
guest_list.forEach(function (person) {
    console.log("I would like to invite ".concat(person, " at ramadan Iftar Party "));
});
