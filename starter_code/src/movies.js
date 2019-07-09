/* eslint no-restricted-globals: 'off' */


// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
    let movies_copy = [...movies]
    let modified_movies_copy
    let hours_copy = 0
    let minutes_copy = 0
    let modified_time = 0

    modified_movies_copy = movies_copy.map(element => {
      //console.log(element.duration)
      //console.log(parseInt(element.duration))
      const movie = {...element}
      
      modified_time = movie.duration.split(" ")
      
      hours_copy = modified_time[0]
      minutes_copy = modified_time[1]

      if(movie.duration.length == 2) {
        hours_copy = parseInt(hours_copy)
        minutes_copy = 0
      }

      else if(hours_copy.includes('min')){
        minutes_copy = parseInt(hours_copy)
        hours_copy = 0
     
      }
      else {
        minutes_copy = parseInt(minutes_copy)
        hours_copy = parseInt(hours_copy)
      }

      hours_copy *=60
      modified_time = hours_copy + minutes_copy
      movie.duration = modified_time

      return movie
    })

    return modified_movies_copy
    
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){

  const all_rates = movies.reduce((acc, elm) => acc + parseFloat(elm.rate), 0) 

  console.log(all_rates)
  let rates_average = parseFloat((all_rates/movies.length).toFixed(2))

  return rates_average
}

// Get the average of Drama Movies

function dramaMoviesRate(movies){
  let drama_movies = []
  let drama_average = 0
  let drama_sort = 0
  drama_movies = movies.filter(elem => elem.genre.includes('Drama'))
  //console.log(drama_movies)

  if (drama_movies.length === 0) {return undefined}
  else {
    drama_average = ratesAverage(drama_movies)
    return drama_average
    //console.log(drama_average)
  }

}


// Order by time duration, in growing order

function orderByDuration(movies){
  let sorted_movies = [...movies]

  
    sorted_movies.sort((a, b) => {
    
      if(a.duration === b.duration){
        return a.title.localeCompare(b.title); 
      }
      return a.duration - b.duration
    
    })
    return sorted_movies
  }


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
 
  if (movies.length === 0) return undefined
  let ss_movies = movies.filter(elem => elem.genre.includes('Drama')).filter(elem => elem.director ==='Steven Spielberg')
  return `Steven Spielberg directed ${ss_movies.length} drama movies!`
  
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){

  let sorted_movies = [...movies]

  sorted_movies.sort((a, b) => a.title.localeCompare(b.title))

    let best_twenty = sorted_movies.slice(0,20)
    let best_twenty_titles = best_twenty.map(element => element.title) 
    return best_twenty_titles
  }


// Best yearly rate average
function bestYearAvg(movies){

  if (movies.length === 0) return undefined

  let sorted_movies = [...movies]

  
  sorted_movies.sort((a, b) => parseInt(a.year) - parseInt(b.year))
}


