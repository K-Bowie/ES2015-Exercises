//Object Destructuring 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


//Object Destructuring 2
let planetFacts = {
    numOfPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};
  
let {numOfPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


//Object Destructuring 3
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
};

console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"})); // Your name is Alejandro and you like purple
console.log(getUserData({firstName: "Melissa"})); // Your name is Melissa and you like green
console.log(getUserData({})); // Your name is undefined and you like green


//Array Destructuring 1
let [one, two, three] = ["Maya", "Marisa", "Chi"];

console.log(one); // Maya
console.log(two); // Marisa
console.log(three); // Chi


//Array Destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]
  
console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']


//Array Destructuring 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers); // [30, 20]??


//ES5 Assigning Variables to Object Properties
//var obj = {
//    numbers: {
//     a: 1,
//     b: 2
//    }
//};

//var a = obj.numbers.a;
//var b = obj.numbers.b;

//ES2015 Object Destructuring
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
};
  
const {a,b} = obj.numbers


//ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults()
const raceResults = (['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

const [first, second, third, ...rest] = raceResults
console.log(first);
console.log(second);
console.log(third);
console.log(rest);

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

//const raceResults = ([first, second, third, ...rest]) => {first, second, third, rest};


