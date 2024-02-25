//function createInstructor(firstName, lastName){
//    return {
//      firstName: firstName,
//      lastName: lastName
//    }
//}

//Same keys and values ES2015
function createInstructor(firstName, lastName){
    return {
        firstName, lastName
    };
}

//var favoriteNumber = 42;

//var instructor = {
//  firstName: "Colt"
//}

//instructor[favoriteNumber] = "That is my favorite!"

//Computed Property Names ES2015
let favoriteNumber = 42;
let instructor = {
    firstName : "Colt"
    [favoriteNumber] = "That is my favorite!"
}


//var instructor = {
//  firstName: "Colt",
//  sayHi: function(){
//    return "Hi!";
//  },
//  sayBye: function(){
//    return this.firstName + " says bye!";
//  }
//}


//object Methods ES2015
let instructors = {
    firstName : "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}


const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
    return {
        species, [verb](){
            return noise;
        }
    }
}



