/* eslint no-restricted-globals: 'off' */

 //Iteration 1: Ordering by year - Order by year, ascending (in growing order)
 function orderByYear(arr){
    arr.sort(function (movie1, movie2) {
        if (movie1.year > movie2.year) return 1
        if (movie1.year < movie2.year) return -1
        if (movie1.year === movie2.year) {
            // console.log(`mismo año`);
            a = movie1.title.localeCompare(movie2.title);
            // console.log(`a = ` + a);
            return a;
        }
    })
    let arr2 = [...arr];
    return arr2;
}
console.log(movies);
 

//Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

 function howManyMovies(movies){
    let moviesGenre = movies.filter((movie) => {
     if(movie.genre.includes("Drama") && movie.director === "Steven Spielberg") return true
      
 }) 
    return moviesGenre.length
 }
 
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let allMovies = [...movies]
    return allMovies.sort(function(movie1, movie2) {
      if(movie1.title < movie2.title) return -1;
      if(movie1.title > movie2.title) return 1;
      return 0;
    }).map(function(movie) {
      return movie.title;
    }).splice(0,20);
  }
  // Iteration 4: All rates average - Get the average of all rates with 2decimals

  
  
// Iteration 5: Drama allMovies - Get the average of Drama allMovies
function getMoviesByGenre(movies, genre) {
  return movies.filter(function(movie) {
    return movie.genre.includes(genre); 
  });
}

function dramaMoviesRate(movies) {
  if (movies.length === 0) return;

  return ratesAverage(getMoviesByGenre(movies, "Drama"));
}
// Iteration 6: Time Format - Turn duration of the allMovies from hours to minutes
  
// BONUS Iteration: Best yearly rate average - Best yearly rate average
