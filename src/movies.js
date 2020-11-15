
// Iteration 1: All directors? - Get the array of all directors.

//var { movies } = require('./data.js');


//map()

const getAllDirectors = function(movies) {
     return movies.map(function(movie) {
       return movie.director;
 });
}

console.log(getAllDirectors(movies));


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = function(movies) {
    const filterArr = movies.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") !== -1;
    });
    return filterArr.length; 
}

console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length <= 0) {
      return 0;
    }
    const total = movies.reduce(function (totalRates, currentMovie) {
      if (typeof currentMovie.rate !== "number") {
        return totalRates;
      }
      return (totalRates += currentMovie.rate);
    }, 0);
    return Math.round((total / movies.length) * 100) / 100;
  }
  console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

// const getDramaMovies = function(movies) {
//     const filterArr = movies.filter(function(movie) {
//         return movie.genre.indexOf("Drama") !== -1;
//     });
//     return filterArr;
// }


const GetDramaMovies = function(movies){
    const NewArr = movies.filter(function(movie){
        return movie.genre.includes("Drama");
    })
    return NewArr; 
}


const dramaMoviesRate = function(movies) {
if (movies.length === 1) {
    return movies[0].rate;
}


    const dramaMovies = GetDramaMovies(movies)
    if (dramaMovies.length === 0) {
        return 0;
    }
//total drama
const SumRateDramaMovies = dramaMovies.reduce(function(total, movie) {
    return total + movie.rate;
  },0);

    return parseFloat((SumRateDramaMovies/dramaMovies.length).toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = function(movies) {
    const cloneMovies = movies.slice(); 
    const NewArr = cloneMovies.sort(function(a,b) {
        if (a.year === b.year){
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    }); 
    return NewArr; 
}

console.log(orderByYear(movies)); 


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = function(movies) {
    const cloneMovies = movies.slice(); 
    const NewArr = cloneMovies.sort(function(a,b){
        return a.title.localeCompare(b.title);
    });
const newarrMovies = NewArr.map(function(movie){
 return movie.title; 
}); 
    if (newarrMovies.length >= 20)  {
        newarrMovies.length = 20;
    }
    return newarrMovies; 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
