//function filterOutOdds() {
   // var nums = Array.prototype.slice.call(arguments);
   // return nums.filter(function(num) {
   //   return num % 2 === 0
   // });
//}

//console.log(filterOutOdds(10, 3, 5, 2)); 

const filterOutOdds = (...arguments) => {
return arguments.filter((nums) => nums % 2 === 0)
}
console.log(filterOutOdds(10, 3, 5, 2)); 

//shorter version

//const filterOutOdds = (...restOfArgs) => restOfArgs.filter(nums => nums % 2 === 0)


const findMin = (...num) =>{
    let minNum = num[0];
    for (let i = 1; i < num.length; i++){
        if (num[i] < minNum){
            minNum = num[i];
        }
    }
    return minNum;
}
console.log(findMin(1,4,12,-3), // -3
findMin(1,-1), // -1
findMin(3,1)); // 1


const mergeObjects = (object1, object2) => ({...object1, ...object2});

console.log(mergeObjects({a:1, b:2}, {c:3, d:4})) // {a:1, b:2, c:3, d:4}



const doubleAndReturnArgs = (arr, ...arguments) => [...arr, ...arguments.map(element => element * 2)]

console.log(doubleAndReturnArgs([1,2,3],4,4), // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4)); // [2, 20, 8]


const removeRandom = (items) => {
    let randomItems = Math.floor(Math.random() * items.length);
    return [...items.splice(0, randomItems), ...items.slice(randomItems + 1)];
}
console.log(removeRandom([1,3,5,7,8]));


const extend = (array1, array2) => ([...array1, ...array2]);


function addKeyVal(obj, key, val) {
let newObj = {...obj};
newObj [key] = val;
return newObj;
}


function removeKey(obj, key) {
let newObj = {...obj};
delete newObj[key];
return newObj;
}


const combine = (obj1, obj2) => ({...obj1, ...obj2});
console.log(combine({apples:3, bananas:2}, {cantelope:7, dasheen:1}));


const update = (obj, key, val) => {
let newObj = {...obj};
newObj[key] = val;
return newObj;
}


