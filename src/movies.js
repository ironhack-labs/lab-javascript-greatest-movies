// Iteration 1: All directors? - Get the array of all directors.


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stephenMovies = moviesArray.filter(function(movie){
        return  movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')})
    return stephenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const ourMovies = [
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
      genre: ['Crime', 'Drama']
    }]


function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const totalScore = moviesArray.reduce(function (accumulator, currentValue) {
    if (!currentValue.score) {
      return accumulator;
    }
    return accumulator + currentValue.score;
  }, 0);
  const total = totalScore / moviesArray.length;
  return Number(total.toFixed(2));
}

let result = scoresAverage(ourMovies);
console.log(result);

   

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function(movie){
        if(!movie.genre.includes('Drama')) {return 0};
       return movie.genre.includes('Drama');
    
    })
    const dramaScore = scoresAverage(dramaMovies)
    return dramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyArray = [...moviesArray];
    const orderingArr = copyArray.sort(function(a, b){  
    return (a.year - b.year)

    })
    return orderingArr
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyArr = [...moviesArray];
    const titles = copyArr.map(function (title){
    return title.title})
    const top20 = titles.sort();
    if (top20.length > 20){
        top20.splice(20)
    }
    return top20
}
console.log(orderAlphabetically(ourMovies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
