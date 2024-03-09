// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
const friends_names: string[] = ["misbah","laiba","radia","maham","Aina"];
for (let i=0;i<friends_names.length;i++){
  console.log(`Do you like to learn programming ${friends_names[i]}`);
}