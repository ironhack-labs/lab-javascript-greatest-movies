/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function returnMinutes(timeUnit){
  units = parseInt(timeUnit.substr(0, timeUnit.length - 1))
 
      if(timeUnit.substr(-1) === "h"){
          units = units * 60   
      }
    return units
}

function totalMinutes(movie){
  if(typeof movie.duration != "string"){
    return movie.duration
  }

  var timeArr = movie.duration.split(" ")

  totalMin = timeArr.reduce(function(total, timeUnit){
      return total + returnMinutes(timeUnit)
  }, 0)

  return totalMin
}

function returnDramas(movies){
  return movies.filter(function(movie){
    isDrama = false
    movie.genre.forEach(function(genre) {
      if(genre === "Drama"){
        isDrama = true
      }
    });
    
    return isDrama
  })
}

function turnHoursToMinutes(movies){

  return movies.map(function(movie){    
   return Object.assign({},movie,{duration: totalMinutes(movie)})
  })
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  avg =  movies.reduce(function(count, movie){
    if(movie.rate === ''){
      return count
    }
    return count + parseFloat(movie.rate)
  }, 0) / movies.length

  return Math.round(avg * 100) / 100
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
  dramas = returnDramas(movies)
  if(dramas.length === 0){
    return undefined
  }
  return ratesAverage(dramas)
}

// Order by time duration, in growing order
function orderByDuration(movies){
  sortedMovies = movies.sort(function(a,b){
    if(totalMinutes(a) > totalMinutes(b)){
      return 1
    }
    if(totalMinutes(a) < totalMinutes(b)){
      return -1
    }
    
    if(a.title > b.title){
      return 1
    }

    if(a.title < b.title){
      return -1
    }

    return 0

  })

  return sortedMovies;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){
  if (movies.length === 0){
    return undefined
  }
  dramas = returnDramas(movies)
  var DirectedBySteve =  dramas.filter(function(movie){
    return movie.director === "Steven Spielberg"
  })
  return "Steven Spielberg directed "+ DirectedBySteve.length + " drama movies!"
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  movieTitles = movies.map(function(movie){
    return movie.title
  })

  movieTitles.sort()

  return movieTitles.splice(0, 20)
}


// Best yearly rate average

function bestYearAvg(movies){

  if(movies.length === 0){
    return undefined
  }

  years = {}

  movies.forEach(function(movie){
      if(movie.year in years){
        years[movie.year].push(movie.rate)
      } else{
        years[movie.year] = [movie.rate]
      }
  })

  var maxAvg = 0
  var maxYear = ""

  Object.keys(years).forEach(function(year){

     var avg = years[year].reduce(function(total, rate){
      return total += parseFloat(rate)
    },0) / years[year].length

    if(avg > maxAvg){
      maxAvg = avg
      maxYear = year
    }

  })

  return "The best year was " + maxYear + " with an average rate of " + maxAvg

}
