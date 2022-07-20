// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors
}

const copyMovies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
        title: 'Schindler"s List',
        year: 1993,
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        score: 8.9
      }]
      const test = console.log(getAllDirectors(copyMovies))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
 function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === 'StevenSpielberg').filter(movie => movie.genre.includes('Drama'))
    console.log(spielbergDramaMovies.length)
    return spielbergDramaMovies.length
}
// const numbers = [1, 2, 3, 4];
// const filteredNumbers = numbers.map((num, index) => {
//   if (index < 3) {
//     return num;
//   }
// });
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
// function filterByID(item) {
//     if (Number.isFinite(item.id) && item.id !== 0) {
//       return true
//     }
// const placesWithAPool = places.filter(place => place.pool === true).map(place => place.title);
// const studentsYoungerThanNineteen = students.filter(student => {
//     if(student.age > 19){
//         return student
//     }
// })


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scores = moviesArray.map(movie1 => movie1.score)
    return scores.reduce((acc, curr) => {
        let average = (acc + curr)/scores.length
        return average
      }) }
   // const total = numbers.reduce((accumulator, current) => accumulator * current);
 
   // console.log(total);
const test2 = console.log(scoresAverage(copyMovies))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}