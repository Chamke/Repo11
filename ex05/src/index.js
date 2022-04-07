// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array
// Create a function below this line
function myMonitorsFunction(){
     var monitorsList = [];
     var testArray = [];
     var test = "";

     for(let i = 0; i < monitorsListArray.length; ++i){
         test = monitorsListArray[i];
         testArray.push(test, i+1);
         monitorsList.push(testArray);
         testArray = [];
     }

     return monitorsList;
}

// End of creating a function

console.log(myMonitorsFunction());
module.exports = myMonitorsFunction;