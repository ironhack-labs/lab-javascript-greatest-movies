// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map(movies => movies.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {

  let movies = moviesArray.filter(movies => movies.director == 'Steven Spielberg' && movies.genre.find(genero => genero == 'Drama') == 'Drama');
  let countMovies = movies.length;
  return countMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0
  let totalScore = moviesArray.reduce((acc, movies) => typeof movies.score == 'number' ? acc += movies.score : acc += 0, 0)
  let scoreAvg = totalScore / moviesArray.length;
  let decimais = scoreAvg.toFixed(2);
  return Number(decimais);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  let moviesDrama = moviesArray.filter(movies => movies.genre.find(genero => genero == 'Drama') == 'Drama');
  if (!moviesDrama.length) return 0;
  let totalScoreDrama = moviesDrama.reduce((acc, movies) => typeof movies.score == 'number' ? acc += movies.score : acc += 0, 0)
  let scoreAvgDrama = totalScoreDrama / moviesDrama.length;
  let decimais = scoreAvgDrama.toFixed(2);

  return Number(decimais);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(moviesArray) {
  if (!moviesArray.length) return [];
  let arr = moviesArray.sort((a, b) => {
    if (a.year === b.year) return -1
    else {
      return a.year - b.year;
    }
  });
  return arr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(moviesArray) {

  if (!moviesArray.length) return new Array()
  const newArray = [...moviesArray];
  let ascendingMoviesArray = newArray.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  let arrayMovies = [];
  ascendingMoviesArray.map((film, index) => { return index <= 19 && arrayMovies.push(film.title) })

  return arrayMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    const duration = movie.duration.split(" ");
    let mins = 0;
    for (let time of duration) {
      if (time.includes("h")) {
        mins += parseInt(time) * 60;
      } else {
        mins += parseInt(time);
      }
    }
    return { ...movie, duration: mins };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(arr) {
  if (!arr.length) {
    return null;
  }
  if (arr.length === 1)
    return `The best year was ${arr[0].year} with an average score of ${arr[0].score}`;

  let years = arr.map(m => m.year);
  let distinctYears = [...new Set(years)];

  let avgsYearsMax = [];
  for (let distinctYear of distinctYears) {

    let avgScore = scoresAverage(arr.filter(film => film.year == distinctYear))
    avgsYearsMax.push({ year: distinctYear, avgScore })
  }

  let maxScore = avgsYearsMax.reduce((acc, avgYearsMax) => acc.avgScore <= avgYearsMax.avgScore ? acc = avgYearsMax : acc = acc, { avgScore: 0, year: 0 })


  return `The best year was ${maxScore.year} with an average score of ${maxScore.avgScore}`

}
