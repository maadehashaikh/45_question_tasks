// Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time

function SandwichItems (...Item:string[]){
  console.log("Sandwich Summary:-");
  for (let i=0 ;i<Item.length ;i++) {
    console.log("- " + Item[i]);
}
}
let simple_sandwich = ["ketchup","mayonies","chicken","capsicum","blackpeper"];
SandwichItems(...simple_sandwich);

let Ban_kabab = ["Kabab","Bread","egg","mayonies","ketchup"];
SandwichItems(...Ban_kabab);

let pizzaSandwich = ["chicken slices","capsicum","oreganos","ketchup","cheese"];
SandwichItems(...pizzaSandwich);

