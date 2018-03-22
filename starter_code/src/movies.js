/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
    var returnArray = 
        array.map(function(oneMovie){

            var duration = oneMovie["duration"];
            var hour = 0;
            var minute = 0;
            duration = duration.split(" ");

            for(var i = 0; i < duration.length; i++){
              if(i == 0 && duration[i].indexOf('h') != -1){
                hour = parseInt(duration[0])*60;
              } else if(i == 0 && duration[i].indexOf('min') != -1) {
                minute = parseInt(duration[0]);
              } else if(i == 1 && duration[i].indexOf('min') != -1){
                minute = parseInt(duration[1]);
              }
            }
            duration = parseInt(hour + minute);

            var newMovie = {
                title: oneMovie.title,
                year: oneMovie.year,
                director: oneMovie.director,
                duration: duration,
                genre: oneMovie.genre,
                rate: oneMovie.rate
            };
            return newMovie;
        });
    return returnArray;
}

// Get the average of all rates with 2 decimals 

// Function to round to 2 decimals
function precisionRound(number) {
    var factor = Math.pow(10, 2);
    return Math.round(number * factor) / factor;
}

function ratesAverage(array){
    var ratesCount = 0;
    array.forEach(function(oneMovie){
      ratesCount += parseFloat(oneMovie.rate);
    });
    var avgRate = ratesCount/array.length;
    avgRate = precisionRound(avgRate);
    console.log(avgRate);
    return avgRate;
}


// Get the average of Drama Movies
function dramaMoviesRate(array){
    var dramaMovies =
      array.filter(function(oneMovie){
        var movieGenre = oneMovie.genre;
        // console.log(movieGenre);
        // console.log(movieGenre.includes('Drama'));
        if(oneMovie.rate == "" ){
            oneMovie.rate=0;
        }
        if (movieGenre.includes('Drama')===false){
            return undefined;
        }
        return movieGenre.includes('Drama');
      });
    if(dramaMovies.length < 1){
        return undefined;
    }
    var ratesCount = 0;
    dramaMovies.forEach(function(oneDrama){
      ratesCount += parseFloat(oneDrama.rate);
    });
    var avgRate = ratesCount/dramaMovies.length;
    avgRate = precisionRound(avgRate);
    // console.log(avgRate);
    return avgRate;
    
    // return dramaMovies;
      
  }

// Order by time duration, in growing order
function orderByDuration(array){
    var sortedArray =
    array.sort(function(a,b){
      //console.log(a.duration);
      if(parseInt(a.duration) < parseInt(b.duration)){
        return -1;
      } else if(parseInt(a.duration) > parseInt(b.duration)){
        return 1;
      } else {
        if(a.title.toLowerCase() < b.title.toLowerCase()){
          return -1;
        } else if(a.title.toLowerCase() > b.title.toLowerCase()){
          return 1;
        }
        // return 0;
      }
      
      // return a.duration - b.duration;
    });
    return sortedArray;
  }

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    var spielbergDrama =
    array.filter(function(oneMovie){
      return oneMovie.director == "Steven Spielberg" && oneMovie.genre.includes("Drama");
    });
    // if(spielbergDrama.length < 1){
    //    return "Steven Spielberg directed 0 drama movies!";
    // //    return undefined;
    // }
    return "Steven Spielberg directed " + spielbergDrama.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var sortedArray =
    array.sort(function(a,b){
      if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1;
      } else if(a.title.toLowerCase() > b.title.toLowerCase()){
        return 1;
      }
    });
    var byTitle20 = [];
    // for(var i = 0; i < 20; i++){
    //   byTitle20.push(sortedArray[i].title);
    // }
    var count = 0;
    sortedArray.forEach(function(oneMovie){
      if(count < 20){
        byTitle20.push(oneMovie.title);
        count++;
      } 
    });
    
    return byTitle20;
    
}

  orderAlphabetically(movies);
  
// Best yearly rate average

function bestYearAvg(array){
    array.forEach();
}