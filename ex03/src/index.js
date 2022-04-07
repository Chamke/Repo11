// Create a myPetsArray array here
myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array

// Create a function below this line
function myArrayFunction(myPets){
    var myPets;
    myPets.push("Bird", "Fish");
    var firstPet = myPets.shift();
    var lastPet = myPets.pop();
    myPets.unshift("Lion");

    return myPets;

}
console.log(myArrayFunction(myPetsArray));

// End of creating a function
module.exports = myArrayFunction;