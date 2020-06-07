// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const directors = movies.map(function(movie) {
      return movie.director;
    })
    return directors;
  };
  
  getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const moviesOfSpielberg = movies.filter(function(SpielbergMovie) {
      return SpielbergMovie.director==="Steven Spielberg" && SpielbergMovie.genre.includes("Drama");;
    })
    return moviesOfSpielberg.length;
  };
  
  howManyMovies(movies);


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    const averageWithAllDecimals = movies.reduce(function(sum, val) {
      return sum+val.rate/movies.length;
    }, 0)
    let average=Math.round(averageWithAllDecimals * 1e2) / 1e2;
    return average;
  };
  
  ratesAverage(movies); 

// Iteration 4: Drama movies - Get the average of Drama Movies

// create new Array
const dramaMovies = movies.filter(function(drama) {
    return drama.genre.includes('Drama') && drama.genre.length==1}); 

// console.log(dramaMovies);

function dramaMoviesRate(dramaMovies) {
const averageDramaWithAllDecimals = dramaMovies.reduce(function(sum, val) {
return sum+val.rate/dramaMovies.length;
}, 0)
let averageDrama=Math.round(averageDramaWithAllDecimals * 1e2) / 1e2;
return averageDrama;
};

dramaMoviesRate(dramaMovies); 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const newSortedArray=movies.slice();
    const years= newSortedArray.sort(function(a,b) {
      return a.year-b.year;
    })
    return years;
  }
  orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const newArray=movies.slice();
const onlyTitles= newArray.map(function(title) {
  return title.title
})

function orderAlphabetically() {
  const letters=onlyTitles.sort(function(a,b) {
    return (b > a ? 1 : (b < a ? 1:0));
  }) 
return letters;   
}

orderAlphabetically(onlyTitles);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
