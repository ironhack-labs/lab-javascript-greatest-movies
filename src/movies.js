/* const movies = [
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
    title: 'Saving Private Ryan',
    year: 1998,
    director: 'Steven Spielberg',
    duration: '2h 49min',
    genre: ['Drama', 'War'],
    score: 8.6
    },
    {
    title: 'Raiders of the Lost Ark',
    year: 1981,
    director: 'Steven Spielberg',
    duration: '1h 55min',
    genre: ['Action', 'Adventure'],
    score: ""
    },
    {
    title: 'Il buono, il brutto, il cattivo',
    year: 1966,
    director: 'Sergio Leone',
    duration: '3h 2min',
    genre: ['Western']
  }] */


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((_value, index) => moviesArray[index].director);
    return allDirectors;
}

// Iteration 1.1
function getUniqueDirectors(moviesArray) {
    const allDirectors = getAllDirectors(moviesArray);
    const uniqueDirectors = allDirectors.filter((value, index) => allDirectors.indexOf(value) === index);
    return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredByDirector = moviesArray.filter((_value, index) => moviesArray[index].director === "Steven Spielberg" && moviesArray[index].genre.includes("Drama"))
    return filteredByDirector.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const averageRating = moviesArray.reduce((agg, currentMovie) => {
        if ("score" in currentMovie === false || currentMovie.score === "") {
            currentMovie.score = 0;
        }
        return agg + currentMovie.score}, 0) / moviesArray.length;
    return Math.round(averageRating * 100) / 100;           
}

console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filteredByDrama = moviesArray.filter((_value, index) => moviesArray[index].genre.includes("Drama"));
    return scoresAverage(filteredByDrama);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
