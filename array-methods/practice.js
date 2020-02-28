// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splice
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

pizzas.forEach((elem,index) => {console.log(index +": " + elem)});
pizzas.forEach((elem,index) => {console.log(index +": " + elem.toLocaleUpperCase())});
pizzas.forEach((elem,index) => {console.log(index +": " + elem.toLocaleLowerCase())});
pizzas.forEach((elem,index) => {console.log(index +": " + elem.replace(' ', '-'))});
pizzas.forEach((elem,index) => {console.log(index +": " + elem.slice(0, 6))});

console.log(pizzas.map((elem, index) => { return index + ": " + elem;}));
console.log(pizzas.map((elem, index) => { return elem.padEnd(20, "*");}));
console.log(pizzas.map((elem, index) => { return elem.split(' ');}));
console.log(pizzas.map((elem, index) => { return elem.charCodeAt(0);}));
console.log(pizzas.map((elem, index) => { return elem.codePointAt(0);}));

console.log(pizzas.filter((elem, index) => {return elem.split(' ').length == 1? true:false;}));
console.log(pizzas.filter((elem, index) => {return elem.length <= 8? true:false}));
console.log(pizzas.filter((elem, index) => {return elem.endsWith('a')? true:false;}));
console.log(pizzas.filter((elem, index) => {return elem.startsWith('M')? true:false;}));
console.log(pizzas.filter((elem, index) => {return elem.indexOf('a')!= -1? true:false;}));



var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];
//String.fromCharCode

