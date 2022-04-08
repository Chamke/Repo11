// Only change code below this line
function splitArrayInGroups(arr, n){
  
    var arrayLength = arr.length;
    var tempArray = [];
    
    for (var i = 0; i < arrayLength; i += n) {
        var myChunk = arr.slice(i, i+n);
        tempArray.push(myChunk);
    }

    return tempArray;
}
// Only change code above this line
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2)); // Change this line
module.exports = splitArrayInGroups;