var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

function calcAge(arr){
  return arr.reduce((acc, elem) => {
    if(elem.type == "dog")
      acc += elem.age*7;
    return acc;  
  },0);
}
console.log(calcAge(data));
// your code goes here

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
function calcAgeNew(arr){
  var resF = arr.filter(elem => (elem.type =="dog")?true:false);
  var resM = resF.map(elem=> {elem.age= elem.age*7; return elem;});
  var resR = resM.reduce((acc, elem) => {acc += elem.age; return acc;},0)
  return resR;
}
console.log(calcAgeNew(data));
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.

// Solution 105
