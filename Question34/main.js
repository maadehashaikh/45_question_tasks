// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var favorite_pizza = ['BBQ Chicken pizza', 'Extra cheese pizza', 'White sauce pizza'];
for (var i = 0; i < favorite_pizza.length; i++) {
    console.log(favorite_pizza[i]);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
for (var i = 0; i < favorite_pizza.length; i++) {
    console.log("I really enjoy the ".concat(favorite_pizza[i], " with cold drink"));
}
console.log("I absolutely adore pizza! There's just something magical about that perfect combination of crispy crust, savory tomato sauce, and gooey cheese. I especially love tikka pizza, with its spicy and flavorful chicken tikka topping that adds a unique twist to the traditional pizza. Cheesy pizza is another favorite of mine; the indulgent, gooey cheese topping makes every bite a delight. And who can resist a classic white sauce pizza? The creamy white sauce, paired with toppings like chicken, mushrooms, and capsicum , creates a rich and satisfying flavor. Whether it's a white sauce pizza with its simplicity or a veggie-loaded delight, pizza always manages to put a smile on my face. I really love pizza!");
