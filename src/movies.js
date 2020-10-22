// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
  let output = [];
  let allDirs = arr.forEach((movies) => {
    output.push(movies.director);
  });
  return output;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const dramaMovies = movies.filter((movie) => {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  })
  return dramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
if (!movie.length) {
    return 0
}
let newArr = movies.reduce(function(total, rate ){
    return total + rate;
})
}
    


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies) {
    const dramaRates = movies.filter((element) => {
        if(element.genre.includes('Drama')){
            return element
        }
    })
    let dramaAverage = ratesAverage(dramaRates)
    return dramaAverage
}






// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieYears){

  movieYears = movieYears.map((element) => element.year)
  return movieYears

}

orderByYear(movies).sort(function (a, b){

  if (a < b){
    return -1;
  }
  else if (a > b){
    return 1;
  }
  else {
    return 0;
  }
});

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrayOfMovies) {
  let titles = arrayOfMovies.map(function (movies) {
    return movies.title;
  });
  let alphaSort = titles.sort();
  return alphaSort.slice(0, 20);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
