// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesData){
    let directors = [];
    directors = moviesData.map(function (movie){
        return movie.director;
    });
return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesData) {
    let SpielbergDramas = [];
    SpielbergDramas = moviesData.filter( movie => ( 
        movie.genre.includes("Drama") && movie.director == "Steven Spielberg") );
    return SpielbergDramas.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesData){
    if(moviesData.length === 0){
        return 0;
    }
    total = 0;  
    let ratingScores = []
    
   ratingScores =  moviesData.map(function(movie){
        if (!movie.rate){
                return movie.rate = 0;
                }
        return movie.rate;
      });
      const summedScores = ratingScores.reduce((max, currVal) => {
      return max + currVal
    }); 
      total = (summedScores / moviesData.length).toFixed(2)
      return Number.parseFloat(total)
      
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesData) {

        const dramaMovies = moviesData.filter(function(movie) {
            return movie.genre.includes("Drama");
          })
          //console.log(dramaMovies)
          return ratesAverage(dramaMovies)
    }

      
    
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesData) {
    let sortedMovies = [...moviesData];
    sortedMovies.sort(function (a, b) {
      if (a.year === b.year){
        return a.title.localeCompare(b.title); //[a.title,b.title].sort()
      }
  return a.year - b.year;
});
console.log(sortedMovies)
  return sortedMovies;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesData) {
    let moviesNames = [];
moviesData.map(function(movie){
    moviesNames.push(movie.title)
})

  if (moviesNames.length > 20) {
    moviesNames = moviesNames.sort().slice(0,20);
    return moviesNames
    }
  return moviesNames.sort()
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesData) {
    let HoursTurnedIntoMinutes = [];
   HoursTurnedIntoMinutes = moviesData.map(function (movie){
      //console.log(movie.duration)
  //HoursTurnedIntoMinutes.push(movie);
      let hour = parseInt(movie.duration.split("h ")[0])
      //console.log("horas: ",hour)
      let minutes = parseInt(movie.duration.split("h ")[1]);
      if(!minutes){
        minutes = 0; 
      }
     //console.log("minutos: ",minutes)
     movie.duration = (hour * 60) + minutes;
      //console.log(movie.duration)
     return movie
    })  
    //console.log(HoursTurnedIntoMinutes);
   return HoursTurnedIntoMinutes
  }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average



// const numbers = [9,8,7,66,5,4,33,2,11,0];
// function compare(a,b){
//     if ( a > b ){
//         return 1;
//     }
//     if ( a === b ){
//         return 0;
//     }
//     if ( a < b ){
//         return -1;
//     }
// }

// const sorted = numbers.sort(function(a,b){
//     return b - a;
// })

// HoursTurnedIntoMinutes.map(function(movie){
//     console.log(movie)
//     console.log("before update",movie.duration)
//     m
//     console.log("on update: ",movie.duration)
//     return HoursTurnedIntoMinutes
//   })

