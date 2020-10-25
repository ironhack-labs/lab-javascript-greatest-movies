// Iteration 1: All directors? - Get the array of all directors.



function getAllDirectors(movies) {
 let moviesArray = movies.map(function(movie) {
    return movie.director;
    });
return moviesArray;
}





// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let moviesArray = movies.filter(function(movie) {
      if (movie.director == "Steven Spielberg" && movie.genre.includes ('Drama')) {
        return movie.director}
       });
   return moviesArray.length;
   }
   
// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies) {
        let totalRating = 0
        let moviesArray = movies.map(function(movie) {
            totalRating = totalRating + movie.rate
       return totalRating;
       });
      if (moviesArray.length == 0) {
          return 0 };
  return  Math.round(((totalRating/moviesArray.length) + Number.EPSILON) * 100) / 100

   }
   
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let totalRating = 0
    let moviesArray = movies.map(function(movie) {
    if (movie.genre.includes ('Drama')) {        
        totalRating = totalRating + movie.rate
        return totalRating;}
    });
  if (moviesArray.length == 0) {
      return 0 };
return  Math.round(((totalRating/moviesArray.length) + Number.EPSILON) * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)



function compare( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
  }

  
 function orderByYear(movies) {
    // console.log(movies.compare) ;
    return movies.compare;

 }






// function orderByYear(movies) {
//     let moviesArray = movies.sort(function(movie.year) {
//        return movie;
//        });
//    return moviesArray;
//    }
   
   

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function compare2( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }

  
 function orderAlphabetically(movies) {
    // console.log(movies.compare) ;
    return movies.compare2;

 }




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// function turnHoursToMinutes (movies) {
//     let timeArray = movies.map(function(movie) {
//         let hours = 1;//  movie.duration.slice(0 , 1)*60 ;
//         //let minutez = movie.duration.slice(3 , 5);
//         //let minutes = minutez.txt.replace(/[^0-9]/g,'');
//         console.log(hours);
//         return (hours + minutes);
//     });
//     console.log(timeArray);
//     return timeArray;
//    }
   
  


   function turnHoursToMinutes(movies) {
    let moviesArray = movies.map(function(movie) {
        let hourz =  movie.duration.slice(0 , 1) ; 
        let hours = (parseInt(hourz, 10)*60);
        let minutez = movie.duration.slice(3 , 5);
        let minutes = parseInt(minutez, 10);
        if ((isNaN(minutes)) && (!isNaN(hours))) {
            // console.log (movie.hours);
            return movie.hours
        }


        // console.log(movie.title);
        // console.log('minutes ' + minutes);
        // console.log('hours ' + hours);
        forceToMinutes = parseInt(minutes + hours, 10);
        // console.log(forceToMinutes);
        return forceToMinutes;
       });
       //console.log(moviesArray);
   return moviesArray;
   }
   
   
   


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
