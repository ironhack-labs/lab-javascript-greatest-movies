/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
  let avg = movies.reduce((ac, cu) => ac + (+cu.rate), 0) / movies.length
  return parseFloat(avg.toFixed(2))
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

  let dramaMovies = movies
    .filter(movie => movie.genre.includes(`Drama`))

  if (dramaMovies == 0) {
    return 0
  }

  return ratesAverage(dramaMovies)
}



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {

  let durationMovies = movies
    .filter(movie => movie.duration)

  let output = durationMovies
    .sort((a, b) => {
      if (a.duration > b.duration) {
        return -1;
      }

      if (a.duration < b.duration) {
        return 1;
      }

      return 0;

    }).reverse();

  return output;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  let dramaMovies = movies
    .filter(movie => movie.genre.includes(`Drama`) && movie.director === `Steven Spielberg`)

  return dramaMovies.length

}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

  let onlyString = movies.map(movie => movie.title).sort((a, b) =>
    a.localeCompare(b, "es", {
      sensitivity: "base"
    })
  )

  return onlyString.splice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

  return movies.map(movie => { 
    let calcSum

    if (movie.duration.split(' ').lenght > 1) {
      let hours = movie.duration.split(' ')[0].slice(0, 1);
      let minutes = movie.duration.split(' ')[1].slice(-5, -3);

      calcSum = +(hours) * 60 + +(minutes)

    } else if (movie.duration.indexOf('min') >= 0) {

      let minutes = movie.duration.slice(-5, -3);

      calcSum = +(minutes)

    } else {
      let hours = movie.duration.slice(0, 1);
      calcSum = +(hours) * 60
    }

    return {...movies, duration: calcSum}

  })
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average