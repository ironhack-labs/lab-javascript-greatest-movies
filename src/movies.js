

//Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movieList) {
  return directors = movieList.map(function (movie) {
    return movie.director
  })
}

//console.log(getAllDirectors(movies));


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesList) {

  let SpielbergDramaMov = moviesList.filter(movie => {
    movie.genre.includes("Drama") && movie.director == "Steven Spielberg"
  });

  return SpielbergDramaMov.length;
};

//console.log(howManyMovies(movies))


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movieList) {

  const sumRate = movieList.reduce(function (total, movie) {

    let rate = movie.rate;
    if (typeof rate !== "number") {
      return total
    } else {
      //console.log(rate);
      return total + rate
    }

  }, 0)

  const averageRate = (sumRate / movieList.length).toFixed(2);
  return averageRate
}

//console.log(ratesAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movieList) {
  const dramaMovies = movieList.filter(function (movie) {
    return movie.genre.indexOf("Drama") !== -1;
  })

  return ratesAverage(dramaMovies)
}


//console.log(dramaMoviesRate(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieList) {
  const movieListCopy = [...movieList];
  movieListCopy.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return movieListCopy
}

//console.log(orderByYear(movies));



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(movieList) {
//   const titleList = movieList.map(function (movie) {
//     return movie.title
//   })
//   titleList.sort();
//   let top20 = titleList.slice(0, 20);
//   return top20
// }

const orderAlphabetically = function (array) {
  const titles = array.map(function (movie) {
    return movie.title;
  });
  const sortedArray = titles.sort().splice(0, 20);
  return sortedArray;
};
console.log(orderAlphabetically(movies));

//console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
