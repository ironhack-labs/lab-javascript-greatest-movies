/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage(movies) {
  if (movies.length === 0) return 0

  const resultAverage = movies.reduce(function(acc, value) {
    return (acc + Number(value.rate))
  }, 0) / movies.length

  return Number(resultAverage.toFixed(2))
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const resutlDrama = movies.filter(function(movie) {
    let result = false
    for (let i = 0; i < movie.genre.length; i++) {  
      if (movie.genre[i] === 'Drama') {
        return true
      } else continue  
    }
    return result
  })
  if (resutlDrama.length <= 0) {
    return 0;
  } else {
    return ratesAverage(resutlDrama);
  }
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function strToMin(duration) {
  // receives str "2h 40min" and returns 120 + 40 

  let durationTime = duration

  if (durationTime.indexOf("h") === -1) {
    durationTime = durationTime.replace("min", "")

    return Number(durationTime)
  }

  else if (durationTime.indexOf("min") === -1) {
    durationTime = durationTime.replace("h", "")

    return Number(durationTime*60)
  }

  else {
    durationTime = durationTime.replace("h", "")
    durationTime = durationTime.replace("min", "")
    
    durationTime = durationTime.split(" ")
    
    let hours = Number(durationTime[0])
    let minutes = Number(durationTime[1])
    
    return Number((hours*60)+minutes)
  }
  
}

function sortMovies(moviea, movieb){
  if (strToMin(moviea.duration) === strToMin(movieb.duration)) {
    return moviea.title > movieb.title ? 1 : -1
  }
 return strToMin(moviea.duration) - strToMin(movieb.duration)
}


function orderByDuration(movies) {
  const movies2 = [...movies];

  return movies2.sort(sortMovies)
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies() {
  const resutlDrama = movies.filter(function(movie) {
    for (let i = 0; i < movie.genre.length; i++) {  
      if (movie.genre[i] === 'Drama' && movie.director === 'Steven Spielberg') {
       return true
      } else continue  
    }
    return false
  })
  return resutlDrama.length
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movie) {
  let movieTitle = []
  for (let i = 0; i < movie.length; i++) {
    movieTitle.push(movie[i].title)
  }
  return movieTitle.sort().slice(0,20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes (haciendo un map, primero le quitas la h y lo pasas a min, luego le quitas el min con la función replace, y ya puedes sumar los minutos, tengo que ver si tiene horas o minutos o ambas)

function turnHoursToMinutes(movies) {
  let newDuration = []
  for (let i = 0; i < movies.length; i++) {
    let actualMovie = movies[i]

    let durationTime = actualMovie.duration

    durationTime = durationTime.replace("h", "")
    durationTime = durationTime.replace("min", "")
  
    durationTime = durationTime.split(" ")
  
    let hours = Number(durationTime[0])
    let minutes = Number(durationTime[1])
  
    actualMovie.duration = Number((hours*60)+minutes)
    newDuration.push(actualMovie)
  }

  return newDuration
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
