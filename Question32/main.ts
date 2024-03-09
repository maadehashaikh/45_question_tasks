// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ['maryam','liba','FATIMA','javaid','hashir','TAHIR'];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ['tahir','javaid','kainat','fatima'];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
new_users.forEach(function(user){
  var isavail = false;
  let lowercase_user = user.toLowerCase();
  for (let i=0;i<current_users.length;i++){
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
    if(lowercase_user === current_users[i].toLowerCase()){
      isavail = true;
      break;
    }
  }
if(isavail){
 console.log(`${user} username has already been used , you need to enter a new username`);
}
else{
  console.log(`${user} username is available`);
} 
})
