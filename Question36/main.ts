// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:number,text:string){
  return(`The size cutomer has given to us is : ${size} and the message you wanna print is : ${text}`);
}
console.log(make_shirt(35,"Be Awesome"));