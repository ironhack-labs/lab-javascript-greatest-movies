// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (array){
  return array.map(function(movies){
      return movies.director
  });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getDirectors (array){
  let directors = [];
  array.forEach(function(movie){
    !directors.includes(movie.director) ? directors.push(movie.director) : false
  })
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
  let moviesBySteven = movies.filter(function(movies){
    if (movies.director === "Steven Spielberg" && movies.genre.includes('Drama')) {
    return true
    }
  })
return moviesBySteven.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let calculateAverage = function (arr){
  if (arr.length === 0){
    return 0
  }
  let averageSum = arr.reduce(function(acc, curr){
    return acc + curr
  }, 0)
  return Number((averageSum/arr.length).toFixed(2))
}

let ratesAverage = function (movies) {
  if (movies.length === 0){
    return 0
  }
  let ratesMap = movies.map(function(movies){
    if ( typeof movies.rate === "number" ){
      return movies.rate
    } else {
      return 0
    }
  })
  return calculateAverage(ratesMap)
}

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = function (movies) {
  if (movies.length === 0){
    return 0
  }
  let dramaFilter = movies.filter(function(movies){
    return movies.genre.includes('Drama') ? true : false
  })
  let newArray = dramaFilter.map(function(movies){
    return movies.rate
  })
  return calculateAverage(newArray)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = function (movies){
  if (movies.length === 0){
    return 0
  }
  let newArr = movies.sort((a, b) => {
      if ( b.year > a.year ){
        return -1
      } else if (b.year < a.year){
        return 1
      } else if (b.year === a.year){
        if (b.title > a.title){
          return -1
        } else {
          return 1
        }
      } else {
        return 0
      }
  });
  return newArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = function (movies){
  let namesArr = movies.map(function(movies){
    return movies.title
  })
  return namesArr.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let turnHoursToMinutes = function (movies){
  let moviesCopy = movies.map(function(movie){
    minutes = movie.duration.replace(/\D/g,' ').split(' ');
    if (minutes[2] === '' || minutes[2] === undefined ){ minutes[2] = 0 }

    if (minutes[0].length >= 2){
      minutes = Number(minutes[0])
    } else {
      minutes = Number(minutes[0]*60) + Number(minutes[2])
    }

    return {
      "title": movie.title,
      "year": movie.year,
      "director": movie.director,
      "duration": minutes,
      "genre": movie.genre,
      "rate": movie.rate
    }
  })
  return moviesCopy
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
let bestYearAvg = function(movies){

  if (movies.length === 0){
    return null;
  }

  let allYears = movies.map(function(movie){
    return movie.year
  })

  let years = []
  allYears.forEach(function(year){
    if ( !years.includes(year) ){
      years.push(year)
    }
  })

 return years
}