// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (movies) {
    const allDirectors = movies.map(function (movie) {
        return movie.director;
      })
    return allDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    if (movies.length === 0) {
        return 0;
    }
    let counter = 0;
    const directorSpielberg = movies.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
            return counter++;
        }
    })
    return counter
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {
    if (movies.length === 0) {
        return 0;
    }

    const averageRating = movies.reduce(function (acc, val){
        if (!val.rate){
             return acc;
             } 
        return acc + val.rate;
    }, 0);
    let roundedAverage =  averageRating / movies.length;
    return parseFloat(roundedAverage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies) {
    const filterDramaMovies = movies.filter(function (movie) {
        if (movie.genre.includes('Drama')){
            return true;
        } else {
            return false
        }
    })

    const averageDramaRating = filterDramaMovies.reduce(function (acc, val) {
        return acc + val.rate;
    }, 0);
    let roundedAverage = averageDramaRating / filterDramaMovies.length;
    return parseFloat(roundedAverage.toFixed(2)) || 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
    //new array
    const newArray = JSON.parse(JSON.stringify(movies));
    //sorted year
    const sortedYear = newArray.sort(function (a,b) {
      if (a.year < b.year) {
        return -1
      } else if (a.year > b.year) {
        return 1
      } else if (a.year === b.year){
        if (a.title < b.title){
          return -1
        } else if (a.title > b.title) {
          return 1
        }
      }
  });
    return sortedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically (movies) {
    // new array
    const newArray = JSON.parse(JSON.stringify(movies));
    
    // Titles only
    let movieTitlesOnly = [];
    const onlyTitles = newArray.map(function (movie) {
          movieTitlesOnly.push(movie.title);
        })
 
    // Sorted alphabetically  
      const alphabeticalTitles = movieTitlesOnly.sort(function (a,b) {
          if (a < b) {
            return -1
          } else if (a > b) {
            return 1
          }
      })

    return alphabeticalTitles.slice(0,20);
  }




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
