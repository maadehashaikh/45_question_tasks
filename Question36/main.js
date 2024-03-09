// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    return ("The size cutomer has given to us is : ".concat(size, " and the message you wanna print is : ").concat(text));
}
console.log(make_shirt(35, "Be Awesome"));
