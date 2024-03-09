// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const mountains: { name: string[]} = {
  name: ["K2","Himaliya","karakoram"]
};
const rivers : {name:string[]} ={
 name:["River Indus","River chanab"]
};
const countries :{name:string[]} ={
  name:["India","Palestine","Indonasia"]
}
const languages :{name:string[]} ={
  name:["urdu","english","arabi"]
}
const Food :{name:string[]} ={
  name:["choclates","MalaiTikka","Golgappay"]
}
console.log(Food.name);
console.log(languages.name[2]);
