
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
    var firstNum;
    var secondNum;
   return array.map(function(movies){
          var firstInt = movies.duration.split(' ');
          // console.log(firstInt)
          firstNum = parseInt(firstInt[0].slice(0, 1) * 60);
          // console.log(firstNum)
          secondNum = parseInt(firstInt[1].slice(0, 2));
                  console.log(secondNum)
        return Object.assign({}, movies, {duration: firstNum + secondNum})
          // movie.duration = firstNum + secondNum;
      })
  }
  // console.log(movie);
  
  console.log(turnHoursToMinutes(movies))
  

// Get the average of all rates with 2 decimals 

function ratesAverage (Array){
    var part = movies.reduce(function(sum, rate2){
        console.log(sum, rate2.rate);
        return sum + rate2.rate;
    } ,0)
}
console.log(ratesAverage(Array));

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
