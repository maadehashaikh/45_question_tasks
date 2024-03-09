// Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time
function SandwichItems() {
    var Item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Item[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:-");
    for (var i = 0; i < Item.length; i++) {
        console.log("- " + Item[i]);
    }
}
var simple_sandwich = ["ketchup", "mayonies", "chicken", "capsicum", "blackpeper"];
SandwichItems.apply(void 0, simple_sandwich);
var Ban_kabab = ["Kabab", "Bread", "egg", "mayonies", "ketchup"];
SandwichItems.apply(void 0, Ban_kabab);
var pizzaSandwich = ["chicken slices", "capsicum", "oreganos", "ketchup", "cheese"];
SandwichItems.apply(void 0, pizzaSandwich);
