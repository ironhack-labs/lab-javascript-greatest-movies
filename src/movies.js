/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    movies = movies.slice()
     return movies.sort((a, b)=>{
      if(a['title'] < b['title']){
        return -1;
      }
      if (a['title'] > b['title']){
        return 1;
      }
      if (a['title'] === b['title']){
        return 0;
      }
     }).sort((a, b)=> a['year'] - b['year'])
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
    return movies.filter(movie =>{
      return (movie['director'] === "Steven Spielberg" && movie['genre'].includes('Drama'))
    }).length
  }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    movies = movies.slice()
   let sortedMovies = movies.sort((a, b)=>{
     if (a['title'] < b['title']){
       return -1;
     }
        if (a['title'] > b['title']){
       return 1;
     }
        if (a['title'] === b['title']){
       return 0;
     }
   });
   sortedMovies = sortedMovies.slice(0, 20);
   return sortedMovies.map(movie => {
     return movie['title'];
   })
  
  }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    movies = movies.slice()
    let moviesWithRating = movies.filter(movie => movie.hasOwnProperty('rate'));
    let sumOfRating = moviesWithRating.reduce((rating, movie)=>{
      return rating + movie['rate']; 
    }, 0);
    return +((sumOfRating / movies.length).toFixed(2)) || 0;
  }

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    movies = movies.slice()
    let moviesWithRating = movies.filter(movie => movie['genre'].includes('Drama') && movie.hasOwnProperty('rate'));
    let sumOfRating = moviesWithRating.reduce((rating, movie)=>{
      return rating + movie['rate']; 
    }, 0);
    return +((sumOfRating / moviesWithRating.length).toFixed(2)) || 0;
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function convertToMinutes(duration){
if (!duration.includes('min')){
let convertedTime = duration.split('h ')
return parseInt(convertedTime[0]) * 60;
} else if (duration.includes('min') && duration.includes('h')){
let convertedTime = duration.split('h ')
return parseInt(convertedTime[0]) * 60 + parseInt(convertedTime[1]);
}
return parseInt(duration)
}
    
    
    function turnHoursToMinutes(movies){
        movies = JSON.parse((JSON.stringify(movies)))
       let modDuration = movies.map(movie=>{
         return movie['duration'] = convertToMinutes(movie['duration'])
       })
       return movies
     }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
