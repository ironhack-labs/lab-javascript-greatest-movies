/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
  var ultimateArray = []
  var duration = array.map((time)=>{

    if(typeof time.duration === 'number'){
      return array;
    }else{
      var timeSplit = time.duration.split(' ')
      if(timeSplit[0][1] !== 'h'){
          var parsedTime = parseInt(timeSplit[0], 10)
      } else if(timeSplit[1] === undefined){
        var parsedTime = parseInt(timeSplit[0], 10) * 60
      }else {
        var parsedTime = parseInt(timeSplit[0], 10) * 60 + parseInt(timeSplit[1],10)
      }
      // time.duration = parsedTime;
      var newObj = {
        title: time.title,
        year: time.year,
        director: time.director,
        duration: parsedTime,
        genre: time.genre,
        rate: time.rate
      }
      console.log(newObj)
      // console.log(time)

  return newObj;
    }
  
})

return duration

}

// Get the average of all rates with 2 decimals 

function ratesAverage(array){

  var allScores = array.reduce(function (acc, curr){
    acc.push(parseFloat(curr.rate))
    return acc
    // return sum + parseFloat(person.score);
  }, [])
  
  console.log(allScores)
  
  //var numbers = [2, 4, 6, 8];
  
  var total = allScores.reduce(function(acc, curr){
  //  console.log(acc, curr);
    return acc + curr;
  }, 0);
  
  var avg = total/allScores.length;
  
  return parseFloat(avg.toFixed(2));
  
  }
  
ratesAverage(movies);


// Get the average of Drama Movies


// Very similar to avg rates function, just have to add conditionals for if
//it's a drama movie, and to substitute a non-numerical rating with 0

function dramaMoviesRate(array){

// if (movies.genre.indexOf("drama") >= 0){ 
                                              // work in progress
// }
  var allScores = array.reduce(function (acc, curr){
    acc.push(parseFloat(curr.rate))
    return acc
    // return sum + parseFloat(person.score);
  }, [])
  
  console.log(allScores)
  
  //var numbers = [2, 4, 6, 8];
  
  var total = allScores.reduce(function(acc, curr){
  //  console.log(acc, curr);
    return acc + curr;
  }, 0);
  
  var avg = total/allScores.length;
  
  return parseFloat(avg.toFixed(2));
  
  }

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
