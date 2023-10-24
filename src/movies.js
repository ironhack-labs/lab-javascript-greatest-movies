// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director)
}

const fakeObj = [
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
      director: 'Frank Darabont',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    }]


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenSpielbergMovies =  moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
 return stevenSpielbergMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length) {
        return 0
    }

    const sumOfAllScores = moviesArray.filter((e) => e.score).reduce((acc, movie) => {
        return acc + movie.score
    }, 0)
    const averageScore = Number((sumOfAllScores / moviesArray.length).toFixed(2))
    return averageScore;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let doesDramaExist = new Set()
    moviesArray.map(element => {
        doesDramaExist = element.genre
        
    });

    if(!doesDramaExist.includes("Drama")) {
    return 0;
}
  
    const dramaMovies =  moviesArray.filter((movie) => movie.genre.includes("Drama"))
    console.log(dramaMovies)
    const sumOfAllDramas = dramaMovies.reduce((acc, movie) =>
     acc + movie.score, 0)

    console.log(sumOfAllDramas)
    return Number((sumOfAllDramas / dramaMovies.length).toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arrayByYearAndTitle = moviesArray
      .slice()
      .sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    return arrayByYearAndTitle;
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArr = moviesArray
      .map((el) => el.title)
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 20);
    return newArr;
}

