// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods
numbers.forEach((element, index, arr) => console.log(index + ": " + element + " of " + arr));

var min = Number.MAX_VALUE;
numbers.forEach((element, index, arr) => {min  = (min>element)?element: min});
console.log("Min: of"+ arr + " is " + min);

var max = Number.MIN_VALUE;
numbers.forEach((element, index, arr) => {max  = (min<element)?element: max});
console.log("Max: of"+ arr + " is " + max);

numbers.forEach(element => { (element%2)?  console.log(element + " is odd"):  console.log(element +" is even")});

var min = Number.MAX_VALUE;
var res = numbers.map(element=> { min = (element< min)?element:min; return min;});
console.log(res);

var max = Number.MIN_VALUE;
var res = numbers.map(element=> { max = (element> max)?element:max; return max;});
console.log(res);

var res = numbers.filter(element=> (element%2)?false:true);
console.log("Numbers divisible by 2 in " + numbers + are +": " + res);

numbers.sort((a,b)=>a-b);
console.log("Sorted arr: " + numbers);


// Find largest number in numbers
var res = numbers.reduce((acc, elem) => {
  if(acc<elem)
    acc = elem;
  return acc;
},Number.MIN_VALUE);
console.log(res);

// Find longest string in strings
strings.reduce((acc, elem) => {
  if(acc.length<elem.length)
    acc = elem;
  return acc;
},"");
console.log(res);

// Find all the even numbers
var res = numbers.reduce((acc, elem) => {
  if(elem%2 == 0)
    acc.push(elem);
    return acc;
},[]);
console.log(res);

// Find all the odd numbers
var res = numbers.filter(elem => {
  return (elem%2 != 0);
});
console.log(res);

// Find all the words that contain 'is' use string method 'includes'
var res = strings.filter(elem => {
  return elem.includes('is');
});
console.log(res);

// Find all the words that contain 'is' use string method 'indexOf'
var res = strings.filter(elem => {
  return elem.indexOf('is');
});
console.log(res);

// Check if all the numbers in numbers array are divisible by three use array method (every)

//foreach
numbers.forEach(elem => {   //Prints in console.log 
  if(elem%3 == 0) 
    console.log(elem +  " is divisible by three");
  else
    console.log(elem + " is not divisible by three");
});

//map
numbers.map(elem => {   //Array of strings corresponding to numbers
  if(elem%3 == 0) 
    return (elem +  " is divisible by three");
  else
    return (elem +  " is not divisible by three");
  
});

//filter
numbers.filter(elem => {     //array of numbers divisible by three
  if(elem%3 == 0) 
    return true;
  else
    return false;
});

//reduce
numbers.reduce((acc,elem) => {     //array of numbers divisible by three
  if(elem%3 == 0) 
    acc.push(elem);
  return acc;
},[]);

//  Sort Array from smallest to largest
numbers.sort((a,b) => a-b);

// Remove the last word in strings
strings.filter((elem, index, arr) => {return index == arr.length-1?false:true});

// Add a new word in the array
strings.push("javascript");

// Remove the first word in the array
strings.shift();

// Place a new word at the start of the array use (upshift)
strings.unshift("HTML");

// Make a subset of numbers array [18,9,7,11]
var res = numbers.reduce((acc, elem)=> {
  if(elem == 9 || elem ==18 || elem == 7 || elem == 11) {
    acc.push(elem);
  }
  return acc;
}, []);
console.log(res);

// Make a subset of strings array ['a','collection']
var res = strings.reduce((acc, elem)=> {
  if(elem == 'a' || elem =='collection') {
    acc.push(elem);
  }
  return acc;
}, []);
console.log(res);

// Replace 12 & 18 with 1221 and 1881
var res = numbers.reduce((acc, elem)=> {
  if(elem == 12) {
    acc.push(1221);
  }
  else if(elem == 18) {
    acc.push(1881);
  }
  else {
    acc.push(elem);
  }
  return acc;
}, []);
console.log(res);

// Replace words with string in strings array
var res = strings.reduce((acc, elem)=> {
  if(elem == 'words') {
    acc.push(string);
  }
  else {
    acc.push(elem);
  }
  return acc;
}, []);
console.log(res);

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];


// Find all customers whose firstname starts with 'J'
var res = customers.reduce((acc, elem) => {
  if(elem.firstname.startsWith('J'))
    acc.push(elem);
    return acc;
}, []);
console.log(res);

// Create new array with firstname and lastname
var newCustomers = [...customers];
console.log(newCustomers);

// Sort the array created above alphabetically
newCustomers.sort((a,b) =>{
  if(a.firstname.localeCompare(b.firstname) != 0)
    return a.firstname.localeCompare(b.firstname);
  return a.lastname.localeCompare(b.lastname);
});
console.log(newCustomers);

