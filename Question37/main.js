// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
function make_shirts(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I Love Typescript"; }
    return ("The size cutomer has given to us is  ".concat(size, " and the message you wanna print is ").concat(text));
}
console.log(make_shirts()); // for  by default large size 
console.log(make_shirts("medium")); // for medium shirts
console.log(make_shirts("small", "Kids wear very cute T-shirts"));
