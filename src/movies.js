// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorss = moviesArray.map( dirs => dirs.director);
    return directorss
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   if(moviesArray.length === 0) return 0;
    return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length 
   }


const numbers = [ 1, 2, 3, 4, 5, 6 ]


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if(moviesArray.length === 0) return 0

const validMovies = moviesArray.filter(movie => typeof movie.score === 'number')

if(validMovies === 0){
  return 0
}

const sumAllScores = validMovies.reduce((acc, score) => {
    return acc + score.score
},0)

const avg = sumAllScores / moviesArray.length

return Number(avg.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const moviesArray = [
    { title: 'The Shawshank Redemption', genre: 'Drama', score: 9.3 },
    { title: 'The Godfather', genre: 'Drama', score: 9.2 },
    { title: 'The Dark Knight', genre: 'Action', score: 9.0 },
    { title: '12 Angry Men', genre: 'Drama', score: 8.9 },
    { title: 'Schindler\'s List', genre: 'Drama', score: 'N/A' }
  ];
  function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) =>
      movie.genre.includes("Drama")
    )
  
    return scoresAverage(dramaMovies)
  }
dramaMoviesScore(moviesArray)


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const OrderByYearDC = JSON.parse(JSON.stringify(moviesArray))
    return OrderByYearDC.sort((a,b) => {
        if(a.year === b.year){
         if(a.title > b.title) return 1
         if(a.title < b.title) return -1
        }
        return a.year - b.year
    })

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayDC = JSON.parse(JSON.stringify(moviesArray))
    return moviesArrayDC
    .map(movie => movie.title)
    .sort((a,b) => a.localeCompare(b))
    .slice(0, 20)
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



