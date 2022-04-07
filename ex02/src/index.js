// Only change code below this code
var myStr = "Paragon is the best!";

function useMethods(str){
    var myReverse = str.split("");
    myReverse = myReverse.reverse();
    myReverse = myReverse.join('');

    var countCharacters = str.split("");

    return countCharacters; 
        
    
}
// Only change code above this code

console.log(useMethods(myStr))
module.exports = useMethods;