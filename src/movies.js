// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {

  const director = movies.map(eachMovie => {

    const directorName = eachMovie.director


    return directorName
  })

  // console.log("hola")
  return director
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0
  }


  const howMany = movies.filter(eachDrama => {
    //console.log(eachDrama.Director)
    if (eachDrama.director === 'Steven Spielberg' && eachDrama.genre.includes("Drama")) {


      return true
    }
  })

  if (howMany.length === 0) {
    return 0
  }
  if (howMany.length === 2) {
    return 2
  }
  // console.log(howMany.length)
  return howMany.length


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
let scrAvg2 = 0
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  const scrAvg = movies.reduce((acc, eachMovie) => {


    if (eachMovie.score === undefined || eachMovie.score === "") {
      eachMovie.score = 0
    }
    return acc + eachMovie.score
  }, 0)

  scrAvg2 = scrAvg / movies.length
  scrAvg2 = parseFloat(scrAvg2.toFixed(2))
  //console.log(scrAvg2)

  return scrAvg2
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {



  const dramas = movies.filter(eachDrama => {
    if (eachDrama.genre.includes("Drama")) {
      return true
    }
  })



  const scrAvg = dramas.reduce((acc, eachMovie) => {

    if (eachMovie.score === null || eachMovie.score === undefined) {

    }
    return acc + eachMovie.score
  }, 0)

  if (scrAvg === 0) {
    return 0
  }


  scrAvg2 = scrAvg / movies.length
  scrAvg2 = parseFloat(scrAvg2.toFixed(2))
  return scrAvg2


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const movieCopy = JSON.parse(JSON.stringify(movies));
  return movieCopy.sort(function (a, b) {

    if (a.year != b.year) {
      return a.year - b.year;

    }

    return a.title.localeCompare(b.title)




    // Que pasa si la diferencia es 0?
    // tenemos que devolver localCompare para los titulos


  });


  return movieCopy
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const title = movies.map(eachTitle => {
    const titleName = eachTitle.title
    return titleName
  })

  title.sort(function (a, b) {

    return a.localeCompare(b)


  });


  if (title.length > 20) {
    return title.slice(0, 20)
  }


  //console.log(title)

  return title

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
