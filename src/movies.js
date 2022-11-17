// Iteration 1: All directors? - Get the array of all directors.
console.log("Working");

function getAllDirectors(moviesArray) {
  const directorsArr = moviesArray.map(function (movie) {
    return movie.director;
  });
  return directorsArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const SpielbergAndDrama = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return SpielbergAndDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const scores = moviesArray.reduce((acumulator, currentElement) => {
    if (currentElement.score === undefined) {
      return acumulator;
    }
    return acumulator + currentElement.score;
  }, 0);

  return Number((scores / moviesArray.length).toFixed(2));
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 1) {
    return moviesArray[0].score;
  }

  const dramaFilter = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if (dramaFilter.length === 0) {
    return 0;
  }

  const dramaAverage = dramaFilter.reduce((acumulator, currentElement) => {
    return acumulator + currentElement.score;
  }, 0);

  return Number((dramaAverage / dramaFilter.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newMoviesArray = [...moviesArray];

  newMoviesArray = newMoviesArray.sort((element1, element2) => {
    if (element1.year > element2.year) {
      return 1;
    } else if (element1.year < element2.year) {
        return -1;
    } else {
        if (element1.title > element2.title){
            return 1;
        } else if (element1.title < element2.title) {
            return -1;
        } else {
            return 0;
        }
    }
  });
  return newMoviesArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newMoviesArray = [...moviesArray];

    newMoviesArray = newMoviesArray.sort((element1, element2) => {
        if (element1.title > element2.title){
            return 1;
        } else if (element1.title < element2.title){
            return -1;
        } else {
            return 0;
        }
    }).splice(0,20).map((movie) => {
        return movie.title;
    })    

    return newMoviesArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  
  let newMoviesArray = [...moviesArray];



  newMoviesArray = newMoviesArray.map((movie) => {
    let duration = movie.duration;
    let positionHour = duration.split("h")
    let positionMinute = positionHour[1].split("m")
    let hoursMovieInMinutes = 0;
    let minutesMovie = "";    

    if (positionHour[0] !== undefined){
      hoursMovieInMinutes = Number(positionHour[0]) * 60;
    } 

    if (positionMinute[0] !== undefined){
      minutesMovie = Number(positionMinute[0]);
    }

    let totalMinutes = hoursMovieInMinutes + Number(minutesMovie);

    console.log(`1 this is movie.duration: ${movie.duration}`)
    console.log(`2 this is positionHour: ${positionHour[0]}`)
    console.log(`3 this is positionMinute: ${positionMinute[0]}`)
    console.log(`4 this is hoursMovieInMinutes: ${hoursMovieInMinutes}`)
    console.log(`5 this is minutesMovie: ${minutesMovie}`)
    console.log(`6 this is totalMinutes: ${totalMinutes}`)

    return {
      movie: movie.title,
      year: movie.year,
      director: movie.director,
      duration: totalMinutes,
      genre: movie.genre,
      score: movie.score 
    }    
    
  })

  
  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
