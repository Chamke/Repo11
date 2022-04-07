var temps = [

[31, 32, 19, 37],
[29, 27, 55, 36],
[17, 27, 42, 46],
[29, 52, 21, 64],
[91, 27, 31, 61]

];

function myArrayFunction(){
    var total = 0; 
    var average = 0;
    var averageDayTemp = [];
    for (var i = 0; i < temps.length; ++i) { 
        for (var j= 0; j < temps[i].length; ++j) { 
            total += temps[i][j]; 
        } 
        average = total / temps[i].length; 
        averageDayTemp.push(average);
        total = 0;
        average = 0;
    
       
    } 
    
    return averageDayTemp;
}

console.log(myArrayFunction());


module.exports = myArrayFunction;
