//Question 1
const nums = [1,1,2,2,3,4];
const numSet = new Set(nums); // Set(4) {1, 2, 3, 4}
console.log(numSet);

//Question 2
const ref = ("referee"); 
const referee = [...new Set(ref)].join(""); // ref
console.log(referee); 

//Question 3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m); // {Array(3) => true, Array(3) => false}

//Question 4 - hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;
console.log(hasDuplicate([1,3,2,1])); // true
console.log(hasDuplicate([1,5,-1,4])); // false

//Question 5 - vowelCount
function vowelCount(str){
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const vowelMap = new Map();
    for (let char of str){
        if (vowels.has(char)){
            if (vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char) + 1);
            } else{
                vowelMap.set(char, 1);
            }
        }

    }
    return vowelMap;
} 
console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')); // Map { 'o' => 1 }


