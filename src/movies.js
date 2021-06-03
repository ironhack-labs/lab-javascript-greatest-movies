// Iteration 1: All directors? - Get the array of all directors.

const movies = require("./data")

function getAllDirectors(data){ //data é elemento pra passar na função toda
  const directors = data.map ( // criamos a array sendo directors que traz o map de data (que pelo teste usa o data.js que ta na pasta) 
  movie => {  //  criamos uma nova funcao chamada movie, que é a callback function do map, movie é o argumento
    return movie.director
  })
  return directors 
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const filteredArr = movies.Arr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return filteredArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  const sumScores = moviesArr.reduce((acc, movie) => {acc + movie.score, 0);
  return Math.floor((sumScores / moviesArr.length) * 100) / 100;
}

// ou

function scoresAverage(moviesArr) {
  if(!moviesArr.length) return 0;
  const sumScores = moviesArr.reduce((acc, movie) => {
    if (typeof movie.score === 'number') return acc + movie.score;
    return acc;
  }, 0);
  return Math.round((sumScores / moviesArr.length) * 100) / 100;
  })
}

// ou 

function scoresAverage(arr) {
  if (arr.length === 0) return 0;
  const avg =
     arr
      .filter((item) => item.score)
      .reduce((acc, currentMovie) => acc + currentMovie.score, 0) / arr.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMovies = moviesArr.filter(movie => movie.genre.includes('Drama'))
  return scoresAverage(dramaMovies)
}

// ou

function dramaMoviesScore(moviesArr) {
  if (!moviesArr.length) return 0;
  const dramaMovies = moviesArr.filter((movie) => 
    movie.genre.includes('Drama')
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  const newArray = moviesArr.slice(0); // 0 é a posição inicial, se quiser dar a posição final 20 por ex seria (0,20)
  newArray.sort((a,b) => {
    if (a.year === b.year) { // ano igual, porque dai ta ordenando pelo titulo, não pelo ano
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    }
  })
  return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr) {
  const moviesTitle = moviesArr.map(movie => movie.title)
  moviesTitle.sort()
  return moviesTitle.slice(0,20)
}

// ou

function orderAlphabetically(moviesArr) {
  const moviesTitle = moviesArr.map(movie => movie.title)
  return moviesTitle.sort((a,b) => a.localeCompare(b))
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArr) {
  const newDurationFormat = moviesArr.map(movie => {
    const newFormartMovie = {
      title: movie.title,
      year: movie.year,
      director: movie.genre,
      score: movie.score,
      duration: stringTominutes(movie.duration) // vai trazer a info da funcao de baixo

    };
    return newFormatMovie
  })
  return newDurationFormat
}

// '2h 22min' -> str.split separa pelo espaço ' ', depois os outros split tiram o 'h' e o 'min'

function stringTominutes(str) {
  const durationArr = str.split(' ');
  const minutes = durationArr.reduce((acc, item) => {
    if(item.includes('h')) {
      let h = item.split('h')[0];
      return acc + Number(h) * 60;
    }
    let min = item.split('min')[0]
    reutn acc + Number(min)
  }, 0);
  return minutes
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArr) {

  if (moviesArrr.length === 0) return null

  // ou if (!moviesArrr.length) return null

  let beatYear = 0
  let bestAvg = 0

  let yearlyScore = {}
  
  // criando as chaves no objeto yearlyScore
  moviesArr.forEach(movie => yearlyScore[movie.year] = [])

  // populando arrays dos anos do objeto yearlyScore
  movies.Arr.forEach(movie => yearlyScore[movie.year].push(movie.score)

// calcular a média de cada chave do objeto

  for (let key in yearlyScore){
    let avg = yearlyScore[key].reduce((acc, cv) => acc + cv , 0) / yearlyScore[value].length
    if (avg > bestAvg){
      bestAvg = avg
      bestYear = key
    }
  }

  return `The best year war ${bestYear} with an average score of ${bestAvg}`

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
