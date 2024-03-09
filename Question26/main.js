// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var aliens_color = "red";
if (aliens_color === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else if (aliens_color === "red") {
    console.log("player just earned 10 points.");
}
else if (aliens_color === "yellow") {
    console.log("player just earned 10 points.");
}
else {
    console.log("player has another color ");
}
