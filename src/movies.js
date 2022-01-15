// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const newArr = arr.map(function (ele) {
    return ele.director
  })
  return newArr
}


function cleanDirectors(arr) {
  const cleanArr = arr.filter(function (ele, index) {
    return arr.indexOf(ele) === index
  })
  return cleanArr
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  if (arr.length === 0) {
    return 0
  }
  const stevenMovies = arr.filter(function (movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
  //return stevenMovies 
  return stevenMovies.length 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  if (arr.length === 0) {
    return 0
  }
  
  const allScores = arr.map(function(el) {
    return el.score || 0; //<- if (movie.score === '' || movie.score === undefined){movie.score === 0}
  })
  
  let averageScore = allScores.reduce(function(sum, el) {
    return sum + el
  }, 0)
  
  
  let result = (averageScore / allScores.length).toFixed(2)
  return Number(result)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (arr.length === 0) {
    return 0
  }

  const allDramaMovies = arr.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return movie
    }
  })

  const dramaMoviesAverage = allDramaMovies.reduce(function (sum, el) {
    return sum + el.score
  }, 0)

  
  if (allDramaMovies.length === 0) {
    return 0
  }
  
  let result = (dramaMoviesAverage / allDramaMovies.length).toFixed(2)
  return Number(result)  
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  
  const clonedArr = [...arr]
  
  const moviesOrdered = clonedArr.sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
    
    return a.year - b.year

  })
  return moviesOrdered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  // Create an array with only the titles
  const titlesOnly = arr.map(function (movie) {
    return movie.title
  })
  // order the titles alphabetically
  if (titlesOnly.length < 20) {
    const titlesOrdered = titlesOnly.sort()
    return titlesOrdered
  }
  // create an array with the first 20 titles or all titles if array has less then 20
  const titlesOrdered = titlesOnly.sort().slice(0,20)
  
  
  return titlesOrdered
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const adustedTimeFormat = arr.map(function (movie) {
    
    if (movie.duration[5] === 'm') {
      return {...movie, duration: (movie.duration[0] *60) + Number(movie.duration[3] + movie.duration[4])}      
    } 
    
    if (movie.duration[3] === 'm') {
      return {...movie, duration: Number(movie.duration[0] + movie.duration[1])}
     }
    
    if (movie.duration[2] === undefined) {
      return {...movie, duration: (movie.duration[0] *60)}
     }
    
    if (movie.duration[4] === 'm') {
      return {...movie, duration: (movie.duration[0] *60) + Number(movie.duration[3])
    }      
       
  }     
    
  })
  return adustedTimeFormat
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  // Filter array for same year groups => store in variable
  // Reduce and get average score of group
  // Compare to highest average score
  // return highest average score
  if (arr.length === 0) {
    return null
  }

  let yearGroup = []
  let highestAverageScore = 0
  
  for (let i = 0; i < arr.length; i++) {
    yearGroup.push(arr[i])
    //console.log(yearGroup)
    //console.log(arr.length)
    //console.log(arr[i])    
    const filteredYearGroup = arr.filter(function (movie) {
      if (yearGroup[i].year === movie.year) {
        return movie
      }      
    })
    const filteredYearGroupAverage = filteredYearGroup.reduce(function (sum, movie) {
      return (sum + movie.score) / filteredYearGroup.length
    }, 0)
    return filteredYearGroupAverage
  }
  if (filteredYearGroupAverage > highestAverageScore) {
    highestAverageScore = filteredYearGroupAverage
  }
  return highestAverageScore 
  
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
