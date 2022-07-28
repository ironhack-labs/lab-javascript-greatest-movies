const moviesLol = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  },
  {
    title: '12 Angry Men',
    year: 1957,
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.9
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    director: 'Peter Jackson',
    duration: '3h 21min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.9
  },
]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will
// pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function strIsUnique(str, index, array){
  if (array.length === 0 || str.length === 0)
    return (false);
  if (array.indexOf(str) === array.lastIndexOf(str) || array.indexOf(str) === index)
    return (true);
  return (false)
}

function getAllDirectors(moviesArray){
  if (moviesArray.length === 0)
    return (false);
  let directorsArray = moviesArray.map(movie => movie.director)
  let uniqueDirectorsArray = directorsArray.filter((dir, id, arr) => strIsUnique(dir, id, arr))
  return (uniqueDirectorsArray)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray){
  if (moviesArray.length === 0)
    return (0)
  let spielbergsDramas = moviesArray.filter(
    movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return(spielbergsDramas.length)
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){
  if (moviesArray.length === 0)
    return (0)
  let moviesScores = moviesArray.filter(movie => movie.score !== undefined)
  let avg = moviesScores.reduce((prev, curr) => prev + curr.score, 0)
  return (Number((avg / moviesArray.length).toFixed(2)))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray){
  if (moviesArray.length === 0)
    return (0)
  let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
  return (scoresAverage(dramaMovies))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function sortMovies(a, b){
  if (a.year > b.year)
    return (1)
  else if (a.year < b.year)
    return (-1)
  else if (a.title.toUpperCase() > b.title.toUpperCase())
    return (1)
  return (0)
}

// somehow this doesn't pass the 'return a new array' test
function orderByYear(moviesArray){
  if (moviesArray.length === 0)
    return (null)
  let orderedMovies = [...moviesArray].sort(sortMovies)
  return (orderedMovies)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray){
  if (moviesArray.length === 0)
    return (null);
  let moviesTitles = [... moviesArray].map(movie => movie.title)
  let orderedMovies = moviesTitles.sort((a, b) => a.toUpperCase() > b.toUpperCase())
  return(orderedMovies.slice(0, 20))
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
