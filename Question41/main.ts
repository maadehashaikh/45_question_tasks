// Magicians: Make an array of magician’s names. Pass the array to a function called
// show_magicians(), which prints the name of each magician in the array.
let magician_names:string[] =["Ali","Jawaid","Maleeha","farhan"];
function show_magicians(){
  for (let i=0;i<magician_names.length;i++){
    console.log(magician_names[i]);
  }
}
show_magicians();
