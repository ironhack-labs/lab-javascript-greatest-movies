// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
    return array.map(function (movie) {
      return movie.director;
    });
  }

  //console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let uniqueDirectors = getAllDirectors.filter((el, index) => getAllDirectors.indexOf(el) === index)

//console.log(uniqueDirectors);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    return movies.filter(function (movies) {
      return (
        movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
      );
    }).length;
  }
  console.log(howManyMovies(movies));
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function rateAverage (movies){
    let sum = movies.reduce(function(acc, curr){
    return acc+curr.rate
    },0);
    return (sum/movies.length).toFixed(2)
    }
    console.log(rateAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies){
    let dramaMovies = movies.filter(function(movies){
    return movies.genre.includes("Drama")
    });
    
  
    let sum = dramaMovies.reduce(function(acc, curr){
    return acc+curr.rate
    },0);
    return (sum/dramaMovies.length).toFixed(2)
  }
  console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies){
    movies.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
        return -1;
        } else {
        return 0;
        }}
    console.log (orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let moviesTitle = movies.map(function (obj) {
    return obj.title;
    });
    
    let moviesTitleSort = moviesTitle.sort();
    
    return moviesTitleSort.slice(0, 20);
    }
    
    console.log(orderAlphabetically(movies));

 


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average