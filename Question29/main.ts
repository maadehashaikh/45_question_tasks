// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
// is in your array, the if block should print a statement, such as You really like bananas!
// Function to check if an array contains a specific element
const favourite_fruits:string[] =["bananas","pineapple","mangos"]; 
function containsElement(favourite_fruits:string[] , element:string):Boolean {
  for (let i = 0; i < favourite_fruits.length; i++) {
      if (favourite_fruits[i] === element) {
          return true;
      }
    }  
  return false;
}
const hasElement = containsElement(favourite_fruits, 'kivi');
console.log(hasElement ? "Element Found ! ": "Element not Found");
