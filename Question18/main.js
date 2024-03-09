// Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in a array. Make sure the array is not in alphabetical order.
var favorite_places = ["Saudi Arabia", "Maldives", "Singapore", "Skardu", "Dubai", "Malam Jabba", "Turkey"];
// Print your array in its original order.
favorite_places.forEach(function (place) {
    console.log("I wanna visit ".concat(place));
});
//  Print your array in alphabetical order without modifying the actual list.
console.log("In alphabetical order");
var favorite_places_sortlist = __spreadArray([], favorite_places, true).sort();
favorite_places_sortlist.forEach(function (place) {
    console.log("I wanna visit ".concat(place));
});
// Show that your array is still in its original order by printing it.
console.log("showing that still orignal array is in same order");
favorite_places.forEach(function (place) {
    console.log("I wanna visit ".concat(place));
});
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("In Reverse alphabetical order");
favorite_places_sortlist.reverse();
console.log(favorite_places_sortlist);
//  Show that your array is still in its original order by printing it again.
console.log(favorite_places);
//  Reverse the order of your list. Print the array to show that its order has changed
var revered_favourite_place = favorite_places.reverse();
console.log(revered_favourite_place);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
var again_reversed_list = revered_favourite_place.reverse();
console.log(again_reversed_list);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
again_reversed_list.sort();
console.log(again_reversed_list);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
again_reversed_list.reverse();
console.log(again_reversed_list);
