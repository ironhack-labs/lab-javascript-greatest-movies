/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
////****juniors */
function turnHoursToMinutes(moviesArray) {
    var moviesWithCorrectTimeFormat = [];
    var eachMovieHours, eachMovieMinutes, totalMinutes, singleMovieWithCorrectTimeFormat;
    moviesArray.map(function(eachMovie) {
      eachMovieHours = 0;
      eachMovieMinutes = 0;
      totalMinutes = 0;
      if(eachMovie.duration.indexOf("h")!==-1){
             eachMovieHours = eachMovie.duration.slice(0, eachMovie.duration.indexOf("h"));
      }
    else{
        eachMovieHours=0;
    }
      eachMovieMinutes = eachMovie.duration.slice(eachMovie.duration.indexOf("h") + 1, eachMovie.duration.indexOf("m"));
      totalMinutes = (60 *eachMovieHours) + (1* eachMovieMinutes);
      singleMovieWithCorrectTimeFormat = Object.assign({},eachMovie);
      singleMovieWithCorrectTimeFormat.duration = totalMinutes;
      moviesWithCorrectTimeFormat.push(singleMovieWithCorrectTimeFormat);
    });

    let moviesFormatted = moviesWithCorrectTimeFormat;
    return moviesFormatted;
   }
  
turnHoursToMinutes(movies);

function ratesAverage(array){
        var ratesArray = array.map(function(eachMovie){
            return eachMovie.rate;
        })
        var ratesArrayFloat = ratesArray.map(function(eachRate){
        return parseFloat(eachRate);
        })
        var ratesSum = ratesArrayFloat.reduce(function(sum, eachRate){
            // console.log(divisor);
        return sum + eachRate;
            // console.log(totalRate);
        },0);
        var ratesAvg = ratesSum/ratesArrayFloat.length;
        var ratesAvgRounded = Math.round(ratesAvg*100)/100;
        return ratesAvgRounded;
}


function dramaMoviesRate(array){
        var dramaMovies =   array.filter(function(movie){
            if (movie.rate.length < 1 ) {movie.rate = 0.0};
        return movie.genre.includes('Drama');
            })
            if (dramaMovies.length < 1) {return undefined;}
            return ratesAverage(dramaMovies);
        }
       

function orderByDuration (movies) {

    movies.sort(function(a,b){
        if(a.duration > b.duration){
          return 1;
        }else if (b.duration > a.duration){
          return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (b.title > a.title) {
                return -1;
            
            }
        }
    
      });
      return movies;
    


}






function howManyMovies(theArray) {
   
    if (theArray.length < 1) {
        return undefined;
    }

//Set Drama only here to get the numbersaligned.
    var dramaMovies =   theArray.filter(function(movie){
    return movie.genre.includes('Drama');
    });





    
     //step 1 loop through normal array to check.
   let spielbergInclusion =  dramaMovies.map(function(dramaMovies){
     return dramaMovies.director.includes('Steven Spielberg');
    });
   

   let spielbergInclusionTrue = dramaMovies.filter(function(dramaMovies){
        return dramaMovies.director.includes('Steven Spielberg');
    });

let spielbergInclusionCount = spielbergInclusionTrue.length;

// //two ways to determine how many times spielberg included
//    // create a counter variable || array.filter and count the length of filtered arrays. I prefer to filter.


    return `Steven Spielberg directed ${spielbergInclusionCount} drama movies!`

//     //step 2 use a filter function to filter out all non steven spielberg movies and get the length.


//     //step 3 return all the info you need to return.
}
  
howManyMovies(movies);


function orderAlphabetically(theArray){
let top20 = null;

    let moviesMappedForTitle = theArray.map(function(eachMovie){
        return eachMovie.title;
    });

   let sortedMovies = moviesMappedForTitle.sort();
   

    if (sortedMovies.length > 20) {sortedMovies.splice(20);}
    
        return sortedMovies;  
}

orderAlphabetically(movies);



function bestYearAvg(theArray) {
    if (theArray.length <1) {return undefined};

//find the year with the best rate.
//get an array with the amount of years.

//I need the rating averages of each year.
// So create an object with each year's averages??? Ask ta.

    let bestYear = [];


    let bestYearRate = [];





    return `The best year was ${bestYear} with an average rate of ${bestYearRate}`
}





// Best yearly rate average