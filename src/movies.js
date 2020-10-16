// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(){
    const listOfDirectors = movies.map(movies => movies.director) 
    return listOfDirectors
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = listOfMovies => {
    let stevenMovies = listOfMovies.filter(list => list['director'] === 'Steven Spielberg');  
    let solution = stevenMovies.filter (dramas => dramas['genre'].includes('Drama')); 
    return solution.length;}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratingsOnly = [];
movies.forEach((r) => {
  ratingsOnly.push(r.rate);
});
function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let totalRate = arr.reduce((acc, currVal) => {
    if (currVal.rate) {
      return acc + currVal.rate;
    } else {
      return acc;
    }
  }, 0);
  return Number((totalRate / arr.length).toFixed(2));
}
ratesAverage(ratingsOnly);

// Please note that Jasmine still gives a red dot for not returning a new array
// even though I am.

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {

    let dramaMovies = array.filter(movie => movie.genre.includes("Drama"));

    if (dramaMovies.length === 0) {
        return 0;
    }

    let sumRatings = dramaMovies.map(rating => {return rating.rate})
    
    var total = 0;
     
    let grandTotal = sumRatings.forEach(function(number){
      total += number;
    })

    return Number ((avgRating = total / sumRatings.length).toFixed(2));
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = moviesArray => {
    let moviesCopy = moviesArray;  moviesCopy.sort((a, b) => {
        if (a['year'] > b['year']) return 1;    
        if (a['year'] < b['year']) return -1;    
        if (a['title'] > b['title']) return 1;    
        if (a['title'] < b['title']) return -1;}   );      
        return moviesCopy;  
    };
    orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let titlesList = arr.map(function (t) {
      return t.title;
    });
    titlesList.sort();
    if (titlesList.length < 20) {
      return titlesList;
    }
    return titlesList.slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
