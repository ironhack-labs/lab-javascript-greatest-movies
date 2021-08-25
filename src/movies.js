// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  //get all the directors
  const allDirs = array.map(dir => dir.director)
  //create a variable to avoid repetition
  let allUniqueDirs = [];
  //loop through allDirs, and if the director is not in the new list, add it.
  for (let i = 0; i < allDirs.length; i++) {
    if (!allUniqueDirs.includes(allDirs[i])) {
      allUniqueDirs.push(allDirs[i]);
    }
  }
  return allUniqueDirs;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama') ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  
   //MULTIPLE LINES
   //get all the scores in a new array.
  if (movies.length === 0) {
    return 0
  }
  let scores = movies.map(function (movie) {
    if (isNaN(movie.score)) {
      return 0
    } else {return movie.score}
  })

   //sum all scores and get the average
  let average = scores.reduce((acc, curr) => acc + curr) / scores.length

  //return the average with two decimals
  return parseFloat(average.toFixed(2))
  
}





  //one line                                                    
  // return parseFloat((movies.map(movie => movie.score).reduce((acc, curr) => acc + curr) / movies.length).toFixed(2))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  //filter drama movies
  const dramas = movies.filter(movie => movie.genre.includes("Drama"))
  if (dramas.length === 0) {
    return 0
  } 
  // //create a new array of drama scores
  // let scores = dramas.map(drama => drama.score)
  //sum all drama scores and get the average
  const totalScore = dramas.reduce((acc, curr) => {
    return acc + (curr.score || 0);
  }, 0)
  return parseFloat((totalScore / dramas.length).toFixed(2))
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


  //sort movies by year
  function orderByYear(movies) {
  const sorted = movies.sort(function (a, b) { 
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      } else {
    return a.year - b.year
  }
})

  return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  //create array of titles
  let onlyTitles = movies.map(movie => movie.title)
  //sort array of titles
  let sorted = onlyTitles.sort()
  
  if (sorted.length < 20) {
    return sorted;
  } else {
    return sorted.slice(0, 20)
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newMovies = movies.map(movie => {
    let newDuration = Object.assign({}, movie);
    let hour = movie.duration.slice(0, 1) * 60
    let minDec = Number(movie.duration.slice(3, 4))
    let min = Number(movie.duration.slice(4, 5))
    let total = 0;

    if (isNaN(minDec)) {
      total = hour
    } else if (isNaN(min)){
      total = hour + minDec     
    } else {
      total = hour + minDec * 10 + min
    }
 
    newDuration['duration'] = total
    return newDuration
  })
  return newMovies;
}



  



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  //array of years
  let years = movies.map(movie => movie.year)
  
  //clean array not to repeat years
  const uniqueYears = [];

  for (let i = 0; i < years.length; i++) {
    if (!uniqueYears.includes(years[i])) {
      uniqueYears.push(years[i])
    }
  }

  //find the best year
  let bestYear = 0;
  let bestRate = 0;
  let tempArr = []
  let tempRate = 0;

  for (let i = 0; i < uniqueYears.length; i++) {
    tempArr = movies.filter(movie => {
      if (movie.year === uniqueYears[i]) {
        return movie;
      }
    })
    tempRate = scoresAverage(tempArr)
    if (tempRate >= bestRate) {
      bestRate = tempRate;
      bestYear = uniqueYears[i];
    }
    tempArr = [];
    tempRate = 0;
  }
  if (bestYear === 0) {
    return null
  } else {
    return `The best year was ${bestYear} with an average score of ${bestRate}`
  }
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