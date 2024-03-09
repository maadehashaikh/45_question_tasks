// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
var describe_city = function (Cityname, country) {
    if (country === void 0) { country = "India"; }
    return (console.log("".concat(Cityname, " is in ").concat(country)));
};
describe_city("Delhi");
describe_city("Bangalore");
describe_city("Lahore", "Pakistan");
