// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
  return +(movies.reduce((ac, cu) => ac + cu.rate, 0) / movies.length).toFixed(2);
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
 
  let dramaMovies = movies.filter(m => m.genre.includes('Drama'))
    return +(dramaMovies.reduce((total, movie) => total += (movie.rate || 0), 0) / dramaMovies.length).toFixed(2) || 0
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {
  return movies.sort( (a,b) => {
    if (a.duration !== b.duration) {
      return a.duration - b.duration
    }
    return a.title.localeCompare(b.title);
  })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  let stevenDrama = movies.filter(m => m.director === 'Steven Spielberg' && m.genre.includes('Drama'))
  return (stevenDrama.length > 0) ? stevenDrama.length : 0
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let movieTitle = movies.map(a => a.title);
  let twentyMovies = movieTitle.sort( (a,b) => a.localeCompare(b))
  return twentyMovies.slice(0, 20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function conversionToMinutes(duration) {
  let totalTime = 0;
  let hours = 0; 
  let minutes = 0;
  
  let durationSplit = duration.split(" ");
  if (durationSplit.length >= 2) {
      hours = parseInt(durationSplit[0]);
      minutes = parseInt(durationSplit[1])
  } else {
      if (durationSplit[0].indexOf("m") !== -1) {
          minutes = parseInt(durationSplit[0])
      } else if (durationSplit[0].indexOf("h") !== -1) {
          hours = parseInt(durationSplit[0]);
      }
  }
  
  totalTime = hours * 60 + minutes;
  return totalTime;
}

function turnHoursToMinutes(movies) {
  let moviesInMinutes = movies.map(movie => {
    let newMovie = { ...movie };
    
    newMovie.duration = conversionToMinutes(movie.duration);
    return newMovie;
});
return moviesInMinutes;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length === 0) return null

 
  

}



