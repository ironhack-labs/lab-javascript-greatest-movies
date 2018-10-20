/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
    var num,numbers,hours,mins,hourToMinutes,totalMins,newArr;
  
    num = /\d+/g;
  
    newArr = [];
  
    for(let i = 0; i < arr.length; i++){
      newArr.push(Object.assign({},arr[i]));
    }
  
    newArr.map(movie => {
      numbers = movie.duration.match(num).map(Number);
   // numbers = [2,22]
      hours = numbers[0];
      mins = numbers[1];
      hourToMinutes = hours * 60;
  
      totalMins = hourToMinutes + mins;
  
      movie.duration = totalMins;
    })
    return newArr;
  }

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
