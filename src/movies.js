// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map((movie)=> {
        return movie.director

    })
    return directorsArray

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const spielbergDramaMovies = moviesArray.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });

    return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
     const totalScore = moviesArray.reduce(function (accumulator, curr) {
        return accumulator + (curr.score || 0);
    }, 0);
    const averageScore = totalScore / moviesArray.length;
    const round = Math.round(averageScore * 100)/100
    return round
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) {
        return 0;
    }
    const totalScore = dramaMovies.reduce((pre, curr) => {
        return pre + (curr.score || 0);
    }, 0);
    const averageScore = totalScore / dramaMovies.length;
    return averageScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if (moviesArray.length === 0) {
        return [];
    }
    const ascOrder = moviesArray.slice().sort(function(a, b) {
        if(a.year !== b.year) {
            return a.year - b.year
        }
        else {
            return a.title.localeCompare(b.title)
        }
   })
    return ascOrder
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    if (moviesArray.length === 0) {
        return [];
    }
    const alphaOrder = moviesArray.sort(function(a, b) {
        if(a.year !== b.year) {
            return a.year - b.year
        }
        else {
            return a.title.localeCompare(b.title)
        }
   })
   const first20Title = alphaOrder.slice(0, 20).map(movie => movie.title)
   return first20Title
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((object) => {
    const objCopy = {...object}
  
      let time = object.duration
      let hour = 0
      let min = 0
      if(time.indexOf("h") === -1){
       hour = 0
       min = Number(time.slice(0, time.indexOf("min")))
     }
     else if(time.indexOf("h") > 0) {
       hour = Number(time.slice(0, time.indexOf("h"))) * 60
       min = Number(time.slice(time.indexOf(" "), time.indexOf("min")))
     }
     else {
       console.log("Wrong date format")
     }
      time = hour + min
      objCopy.duration = parseInt(time)
  
     return objCopy
   })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    const yearDate = {};
}
