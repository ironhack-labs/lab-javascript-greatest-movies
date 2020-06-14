// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map((element) => element.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function uniqueDirector(movies) {
  var directors = getAllDirectors(movies);
  directors = [...new Set(directors)];
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  /*var spielberg = movies.filter((element) => {
    if (
      element.director === "Steven Spielberg" &&
      element.genre.includes("Drama")
    ) {
      return true;
    }
      return false;
  });*/
  var spielberg = movies.filter(
    (movie) =>
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  console.log(spielberg);
  return spielberg.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) return 0;
  //la partie avec le map est copié par Aude
  //***************************** */
  allRates = [...movies]
  allRates = allRates.map(element => {
    if (element.rate === undefined) {
      element.rate = '';
    }
    return element;
  });
  //******************************* */

  var sum = movies.reduce((sum, element) => {
    sum += element.rate;
    return sum;
  }, 0);
  sum = sum / movies.length;
  sum = Math.round(sum * 100) / 100;

  return sum;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var drama = [...movies];
  drama = drama.filter((movie) => {
    if (movie.genre.includes("Drama")) return drama;
  });

  return ratesAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let arr = [...movies];
  arr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  })

  return arr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var moviesOrder = [...movies];
  order = moviesOrder.sort((a, b) => a.title.localeCompare(b.title));
  var res = []
  for (let movie of moviesOrder) {
    res.push(movie.title)
  }
  if (res.length < 20) {
    return res
  } else {
    res = res.slice(0, 20)
  }

  return res

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  var films = [...movies]

  for (let element of films) {

    element.duration = (element.duration.split(' '))
    let total = element.duration.length
    if (total === 2) {
      element.duration = (parseInt(element.duration[0]) * 60 + parseInt(element.duration[1]))
    } else if (total === 1 && element.duration[0].includes('h')) {
      element.duration = (parseInt(element.duration[0]) * 60)
    } else if (total === 1 && element.duration[0].includes('min')) {
      element.duration = (parseInt(element.duration[0]))
    }

  }
  return films
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies,year,rate){
  var bestYear =[]
if (movies.length === 0) return null




}