// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
var num = 34;
var isPass = num >= 35 ? "pass" : "fail";
console.log(isPass);
// Tests for equality and inequality with strings
var student_name = "ali";
var Is_name_Correct = student_name == "Ali" ? "yes Its Ali " : "Its not Ali";
console.log(Is_name_Correct);
// Tests using the lower case function
var food_item = "GOLGAPPA";
var isLowercase = food_item === food_item.toLowerCase() ? "Its in Lower case" : "Its not in uppercase";
console.log(isLowercase);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number1 = 50;
var number2 = 60;
if (number1 == 20) {
    console.log("number is <= 20");
}
else if (number1 !== number2) {
    console.log("Both Numbers are not equal ");
}
else if (number1 > number2) {
    console.log("Number1 is greater than number2");
}
else if (number1 < number2) {
    console.log("Number1 is less than number2");
}
else if (number1 >= number2) {
    console.log("Number1 is greater than and equal to number2");
}
else if (number1 <= number2) {
    console.log("Number1 is less than and equal to number2");
}
else {
    console.log("No condition is matching !");
}
// Tests using "and" and "or" operators
var result = (number1 >= 60) && (number2 <= 80) ? "both numbers are less than 100 " : "Now both numbers are not less than 100";
console.log(result);
// Test whether an item is in a array
//  Test whether an item is not in a array
var fruit_basket = ["oranges", "bananas", "apples", "peaches", "kewies"];
var searchitem = "watermelon";
var isexist = 0;
fruit_basket.forEach(function (item) {
    if (item === searchitem) {
        isexist += 1;
        console.log("it exits");
    }
    else {
        return;
    }
});
if (isexist == 0) {
    console.log("It does not exist");
}
