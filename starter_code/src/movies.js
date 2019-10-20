/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  const average =
    array.reduce(function(accumulator, value) {
      return accumulator + parseFloat(value.rate);
    }, 0) / array.length;
  return average;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

// should I change this to some if, return null thing

// average
function dramaMoviesRate(array) {
  let dramAve = [];
  for (var index = 0; index < array.length; index++) {
    if (array[index].genre.includes("Drama")) {
      dramAve.push(array[index]);
    }
  }
  const sum = dramAve.reduce((total, value) => total + value.rate, 0);
  if (dramAve.length === 0) {
    return 0;
  }
  return Number((sum / dramAve.length).toFixed(2));
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(array) {
  let moviesArr = array.sort(function(a, b) {
    if (a.year < b.year) {
      return -1;
    } else {
      return 1;
    }
  });
  return moviesArr;
}



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
//reduce if === Spiel?

function howManyMovies(array) {
  const spiel = array.filter(function(movie) {
    if (movie.genre.includes("Drama")) {
      return movie.director === "Steven Spielberg";
    }
  });
  return spiel.length;
}

/*let sum = 0;
    digits.reduce(function(accumulator, currentValue) {
        return accumulator;
    });
} */

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
    const alphabeticMovies = movies.sort((a, b) => {
        return (a.title).localeCompare(b.title)
    }).map((film) => film.title);
    return alphabeticMovies.splice(0, 20)
}




// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// I figured the parseFloat was important, also wondering if I need to split somewhere? I didn't do this one completely by myself and also ran out of energy in terms of trying more methods
function turnHoursToMinutes(array) {
    let formatted = array.map(function (elem) {
        return {
            title: elem.title,
            year: elem.year,
            director: elem.director,
            duration: parseFloat((elem.duration.substring(0, elem.duration.indexOf("h")) * 60) + parseFloat(elem.duration.substring(elem.duration.indexOf(" "), elem.duration.indexOf("m")))),
            genre: elem.genre,
            rate: elem.rate
        }
    })
    return formatted;
}
turnHoursToMinutes(movies);


// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(){}