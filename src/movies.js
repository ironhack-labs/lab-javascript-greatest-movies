// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const result = movies.map(movie => movie.director)
    console.log(result)
    return result
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    if (movies.length == 0) return 0 
    const result = movies.filter (movie => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama') == true)
    console.log(result.length)
    return(result.length)
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {
    if(movies.length == 0) return 0
        const reducer = (acc, currentValue) => currentValue.rate !== undefined ? acc + currentValue.rate : acc;

         sum = (movies.reduce(reducer, 0));
         avg = sum / movies.length;
         avgdecimals2 = avg.toFixed(2) 

  console.log(Number(avgdecimals2));
  return Number(avgdecimals2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies) {
    if (movies.length === 0) return 0 
    const result = movies.filter (movie => movie.genre.includes('Drama'))
    return ratesAverage(result)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
    if (movies.length === 0) return 0;
    const copy=[...movies];
    copy.sort(function(a, b) {
            return a.year - b.year || a.title.localeCompare(b.title);
    });
    return copy
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const copy = [...movies];
    const sortCopy = copy.sort(function (a, b) {
      return a.title.localeCompare(b.title)
    });
    const firstTwenty = sortCopy.slice(0, 20);
    let array = [];
    firstTwenty.forEach((movie) => array.push(movie.title));
    return array;
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
