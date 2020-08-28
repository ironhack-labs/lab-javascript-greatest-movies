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
    let newmovies = []
    if(movies.length == 0) return 0
    for (let i=0; i < movies.length; i++) {
        if (typeof movies[i].rate !== 'undefined') {
          newmovies.push(movies[i])
        }
        else {newmovies.push({rate : ""})}
      }
        const reducer = (acc, currentValue) => acc + currentValue.rate;

         sum = (newmovies.reduce(reducer, 0));
         avg = sum / newmovies.length;
         avgdecimals2 = avg.toFixed(2) 

  console.log(Number(avgdecimals2));
  return Number(avgdecimals2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
