const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(MovieList) {
  let Directors = []
  MovieList.forEach(element => {
    Directors.push(element.director)
  });
  return Directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(MovieList) {
  if (MovieList.length == 0)
    return 0;
  let counter = 0;
  MovieList.forEach(element => {
    if ((element.director == 'Steven Spielberg') && (element.genre.indexOf("Drama") > -1))
    {
      counter++;
    }
  });
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieList) {
  if (movieList.length == 0) 
  {
    return 0;
  } 

  let Average = 0;
  movieList.forEach(element => {
      Average += (typeof(element.score) == "number")?element.score:0;
  });
  return roundToTwo(Average / movieList.length);
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(MovieList) {
  let Average = 0;
  let Counter = 0;
  MovieList.forEach((element) => {
      if (element.genre.indexOf("Drama") > -1)
      {
        Average += element.score;
        Counter++;
      }
  });

  return roundToTwo((Counter) ? (Average / Counter):0);
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(MoviesList) {
  return MoviesList.sort(function(a,b){

    if (a.year == b.year)
    {
      return a.title.localeCompare(b.title)
    }
    else
    {
      return (a.year - b.year);
    }
  }).map((x) => x);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(MoviesList) {

  let temp = MoviesList.map((x) => x)
  let list = temp.sort((a,b) => ((a.title < b.title) ? -1 : 1));

  let rValue = []
  for (let i = 0; i < ((list.length > 20)?20:list.length); i++)
  {
    rValue.push(list[i]);
  }
  console.log(rValue.length)
  return rValue.map((x) => x.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(MoviesList) {
  let output = [];
  let hours = 0;
  let minutes = 0;

  MoviesList.forEach((element) => {
    if ((typeof element.duration) === 'string')
    {
      [hours, minutes] = parseMinutesHours(element.duration);

      element.duration = minutes + hours * 60;
      if (typeof element.duration != 'number')
        {
          element.duration = parseFloat(element.duration);
        }
    }
    else
    {
      element.duration = 0;
    }
      output.push({duration: element.duration});
  });
  return output;
}

function parseMinutesHours(duration)
{
  let minutesRegx= /([0-9]?[0-9]?)min/g;
  let hoursRegx = /([0-9]?[0-9]?)h/g;

  let minutes = minutesRegx.exec(duration);
  let hours = hoursRegx.exec(duration);

  minutes = ((minutes == null) || (minutes.length != 2)) ? 0 : parseFloat(minutes[1]);
  hours = ((minutes == null) ||(hours.length != 2)) ? 0 : parseFloat(hours[1]);

  return [hours, minutes]
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(MovieList) {
  if (MovieList.length == 0) {
    return null;
  }
  if (MovieList.length == 1) {
    return BestMovieString(MovieList[0].year, MovieList[0].score);
  }

  MovieList.filter(bestMovies);

}

function sameYear(value, index, arrayObject)
{

}

function BestMovieString(year, score)
{
  return "The best year was " + year + " with an average score of " + score;
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
