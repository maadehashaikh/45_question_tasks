// Cars: Write a function that stores information about a car in an Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// interface car{
//   model:string,
//   price:number,
//   color:string,
//   type:string,
//   manufacturer:string
// }
// function CarInfo(manufacturer,model){
  
// }
function createCar(manufacturer: string, modelName: string, ...otherInfo: { [key: string]: any }[]) {
  let car = {
      manufacturer: manufacturer,
      modelName: modelName,
      ...otherInfo.reduce((acc, cur) => ({ ...acc, ...cur }), {})
  };
  return car;
}
let carInfo = createCar("Toyota", "Camry", { color: "red" }, { year: 2022 });
console.log(carInfo);
