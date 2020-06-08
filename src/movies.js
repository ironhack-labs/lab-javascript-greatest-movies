// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const directors = movies.map(elm => elm.director);

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const dramaMovies = movies.filter(
    (elm) => elm.director === "Steven Spielberg" && elm.genre.includes("Drama")
  );

  const dramaMoviesNumber = dramaMovies.length;

  return dramaMoviesNumber;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const media = movies.reduce((acc, elm) => {
      if (elm.rate) {
        return acc + elm.rate;
      } else {
        return acc;
      }
    }, 0);

    const mediaPrime = media / movies.length;

    return Math.round((mediaPrime + Number.EPSILON) * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {



  let dramaMoviesPrime = movies.filter((elm) =>
    elm.genre.includes("Drama")
  );

  let dramaRate = dramaMoviesPrime.reduce((acc, elm) => {
    return acc + elm.rate;
  }, 0);

  const dramaRatePrime = dramaRate / dramaMoviesPrime.length;

  if (dramaMoviesPrime.length === 0) {
    return 0
  }
  else {
    return Math.round((dramaRatePrime + Number.EPSILON) * 100) / 100;
  }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies) {


  const moviesCloned = [...movies].sort((a, b) => {


    if (a.year === b.year) {

      if (a.title < b.tittle) {
      } return -1

    } else {
      return a.year - b.year
    }


  })


  return moviesCloned


}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {

  const alphaClone = [...movies].sort((a, b) => a.title.localeCompare(b.title));

  const alphaTitle = alphaClone.map((elm) => elm.title)

  if (movies.length > 20) {



    const ordered = alphaTitle.slice(0, 20)

    return ordered



  } else if (movies.length <= 20) {




    return alphaTitle


  }



}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes













// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
