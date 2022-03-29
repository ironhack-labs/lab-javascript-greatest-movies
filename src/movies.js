
// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// const newArray = movies.map(function getAllDirectors() {



// })

function getAllDirectors(movies) {

  const directoresArray = movies.map(movies => {
    return movies.director;

  })
  return directoresArray;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  const manyMovies = arr.filter(movie => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
  });
  return manyMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  if (arr.length === 0) {
    return 0;
  } else {

    const scoresAverage = arr.reduce((accumulator, currentValue) => {


      return accumulator + (currentValue.score || 0);

      // if (!currentValue.score) {

      //   currentValue.score = 0
      // }
      // return accumulator + currentValue.score;

    }, 0);

    return parseFloat((scoresAverage / arr.length).toFixed(2));
  }


}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {



  const dramaMovie = arr.filter(currentValue => {

    return currentValue.genre.includes("Drama");

  });

  if (dramaMovie.length === 0) {
    return 0;
  } else {

    const scoresAverage = dramaMovie.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.score || 0);
    }, 0);
    return parseFloat((scoresAverage / dramaMovie.length).toFixed(2));
  }

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  // const order = arr.filter(currentValue => {

  //   return currentValue;

  // });

  const order = [...arr];

  order.sort((a, b) => {

    if (a.year > b.year) {
      return 1;

    } else if (a.year < b.year) {
      return -1;

    } else if (a.year === b.year) {

      if (a.title > b.title) {
        return 1;

      } else if (a.title < b.title) {
        return -1;

      } else if (a.title === b.title) {
        return 0;

      }

    }

  });
  return order;




}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {


  const order = arr.map(currentValue => {

    return currentValue.title

  });



  // return manyMovies.length;



  order.sort((a, b) => {

    if (a > b) {
      return 1;

    } else if (a < b) {
      return -1;

    }
    return 0;

  });
  return order.slice(0, 20);

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(arr) {


//   const minutes = arr.filter(minutesHour => {

//     return parseInt(minutesHour.duration)
//   });

//   minutes.forEach(element => {

//     let hours= element[0]*60
//     let min=

//   });


function turnHoursToMinutes(movies) {


  const hoursToMinutes = movies.map(eachMovie => {

    if (eachMovie.duration.length == 7) {
      eachMovie.duration = parseInt(eachMovie.duration.charAt(0)) * 60 + parseInt(eachMovie.duration.charAt(3))
    } else if (eachMovie.duration.length == 8) {
      eachMovie.duration = parseInt(eachMovie.duration.charAt(0)) * 60 + parseInt(eachMovie.duration.charAt(3) + eachMovie.duration.charAt(4))
    } else if (eachMovie.duration.length == 2) {
      eachMovie.duration = parseInt(eachMovie.duration.charAt(0)) * 60
    }
    let m = eachMovie;
    return m
  });
  return hoursToMinutes
}





// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movie) {

  if (movie.length === 0) {
    return null;
  }

  // const order = [...arr];

  // order.sort((a, b) => {

  //   if (a.year > b.year) {
  //     return 1;

  //   } else if (a.year < b.year) {
  //     return -1;

  //   } else if (a.year === b.year) {
  //       return 0;

  //     }

  //   }

  // );
  // return order;

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
