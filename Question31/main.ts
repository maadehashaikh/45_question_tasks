// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let Admin:string[] = ["ali","kashif","ahmed","admin"];
if(Admin.length==0){
  console.log("We need to find some users!");
}
else{
  for (let i=0;i<Admin.length;i++){
    if(Admin[i]==="admin"){
      console.log(`Hello admin, would you like to see a status report?`)
    }
    else{
      console.log(`Hello ${Admin[i]} thank you for logging in again.`)
    }
  }
}

