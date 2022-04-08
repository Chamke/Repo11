
// Only change code below this line
function myMutation(arr){

   var word = arr[0].toLowerCase().split("").sort();
   var word2 = arr[1].toLowerCase().split("").sort();
var counter = 0;
var count = 0;
 for (var i = 0; i < word2.length; i++){
    for( var j = 0; j < word.length; j++){
        if(word[j] === word2[i]){
            count++;
            counter++;
        }else if ( count > 1){
            count = 0;
            counter-- ;
        }
        
    }
}

  if(counter === word2.length){
     return true;
  }
  return false;


}






// Only change code above this line
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
 // Change this line
module.exports = myMutation;