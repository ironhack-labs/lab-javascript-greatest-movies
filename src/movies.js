// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let alldirector = movies.map((movies) => movies.director);
    return alldirector;
  }


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    let moviesd = movies.filter((movies) => movies.director === "Steven Spielberg" && movies.genre.includes("Drama"));
    let thedramamovies = moviesd.length;

    return thedramamovies;

    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

  if (movies.length === 0) {
    return 0;
  }
  let sumRates = movies.reduce(function(accumulator, film){
    if (!film.rate){
      return accumulator + 0 
    } 
      return accumulator + film.rate  
  }, 0) / movies.length;

  return Number((sumRates).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let moviesd = movies.filter((movies) => movies.genre.includes("Drama"));

  if (moviesd.length === 0) {
    return 0;
  }
  let sumRates = moviesd.reduce(function(accumulator, film){
    if (!film.rate){
      return accumulator + 0 
    } 
      return accumulator + film.rate  
  }, 0) / moviesd.length;

  return Number((sumRates).toFixed(2)); //we need 2 digits for get the float condition, so we need put 2 into the to.Fixed 
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let gettheyears = [...movies] //it is the same that using JSON
    return gettheyears.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } 
      else if (a.year < b.year) {
        return -1;
      } 
      else {
        let firstMovie = a.title;
        let secondMovie = b.title;
        if (firstMovie > secondMovie) {
          return 1;
        } 
        else if (firstMovie < secondMovie) {
          return -1;
        } 
        else {
          return 0;
        }
      }
    });
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let orderIt = [...movies] //it is the same that using JSON
  
   //orderIt.sort((a, b) => movies.includes("title"));{
  orderIt.sort((a, b) =>  {
    if (a.title > b.title) {
      return 1;
    } 
    else if (a.title < b.title) {
      return -1;
    } 
    else {
      return 0
    }
  })
    let moviestitles = orderIt.map(function(themovie){
      return themovie.title
  })

  return moviestitles.splice(0,20)

}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
