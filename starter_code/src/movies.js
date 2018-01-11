/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(inputArray){
    var returnArray = [];
     returnArray= inputArray.map(
        function (element){
            var object=element;
            var timeArray =element.duration.split(' ');
            var hours= timeArray[0];
            var min = timeArray[1];
            if (timeArray.length === 1){
                min = "0min";
            }
            object.duration = (Number(hours.charAt(0))*60+Number(min.slice(0,min.length-3)));
            return object;
        }
    );
    return  returnArray;
}


// Get the average of all rates with 2 decimals 
function ratesAverage(inputArray)
{ 
    var summary ={
        count:0,
        sum:0
      };
  
      var sumCount = (accumulator,item) =>{
        accumulator.count ++;
        accumulator.sum += Number(item.rate);
        return accumulator;
      };

  var object=  inputArray.reduce(sumCount,summary);    
  var average= object.sum/object.count;
  return Number(average.toFixed(2));
}


// Get the average of Drama Movies

function dramaMoviesRate (inputArray) {
    var isDrama = function (item) {
        return item.genre.find(type => type ==='Drama');// function (type){ return type ==='Drama'}
    };
    if (inputArray.filter(isDrama).length !==0 )
        {return ratesAverage(inputArray.filter(isDrama));}
        else {
            return undefined;
        }
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
