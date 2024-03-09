// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friends_names = ["misbah", "laiba", "radia", "maham", "Aina"];
for (var i = 0; i < friends_names.length; i++) {
    console.log("Do you like to learn programming ".concat(friends_names[i]));
}
