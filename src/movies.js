// Iteration 1: All directors? - Get the array of all directors.




const testArr = [
    {
      title: 'Paths of Glory',
      year: 1957,
      director: 'Stanley Kubrick',
      duration: '1h 28min',
      genre: ['Drama', 'War'],
      rate: 8.4
    },
    {
      title: 'Django Unchained',
      year: 2012,
      director: 'Quentin Tarantino',
      duration: '2h 45min',
      genre: ['Drama', 'Western'],
      rate: 8.4
    }
 ]

function getAllDirectors (moviesArr) {
  const directors = moviesArr.map(function(movie){
   return movie.director
  })
  return directors
}

getAllDirectors(testArr);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filterd = movies.filter(function(movie)  {
      return movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
  })
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
  // filter out the drama movies
  const dramas = movies.filter(function (movie))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const sorted = movies.slice().sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;  
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const ordered = movies.map(function (movie) {
  return movie.title
}).sort(function (a, b) {
  return a.localeCompare(b);
}).slice

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
