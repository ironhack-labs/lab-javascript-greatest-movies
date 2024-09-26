
// Iteration 1
function getAllDirectors(moviesArray) {
  const directors =  [...new Set(moviesArray.map(movie => movie.director))] // BONUS 1: use Set to remove all duplicates
  return directors
}

// Iteration 2
function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter(movie => (
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ))
  return stevenMovies.length
}

// Iteration 3
function scoresAverage(moviesArray) {
  if(moviesArray.length === 0) return 0

  const sum = moviesArray.reduce((acc, cur) => {
    return cur.score // check if score is not undefined
      ? acc + cur.score
      : acc
  }, 0)

  const average = sum / moviesArray.length

  return +average.toFixed(2) // implicit conversion
}

// Iteration 4
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama')) 
  
  if(dramaMovies.length === 0) return 0 // check if dramaMovies are more than 0

  const sum = dramaMovies.reduce((acc, cur) => {
    return cur.score // check if score is not undefined
      ? acc + cur.score
      : acc
  }, 0)

  const average = sum / dramaMovies.length

  return Number(average.toFixed(2)) // implicit conversion also works +average.toFixed(2)
}

// Iteration 5
function orderByYear(moviesArray) {
  const orderedMovies = [...moviesArray] // copy movies array for the mutation

  const sortElements = (a, b) => { // semi-recursive function
    if ( a.year || b.year ){
      if( a.year > b.year ) return 1
      else if( a.year < b.year ) return -1
      else return sortElements(a.title, b.title)
    } else {
      if( a > b ) return 1
      else if( a < b ) return -1
      else return 0
    }
  }

  orderedMovies.sort((a, b) =>  sortElements(a, b))

  return orderedMovies
}

// Iteration 6
function orderAlphabetically(moviesArray) {
  const movies = [...moviesArray] // copy movies array for the mutation
  const titles = []


  // jasmine expects this, but it makes no sense. It's better to order only needed elements
  // and not all elements and then slice the array.
  movies.sort((a, b) => {
    if( a.title > b.title ) return 1
    else if( a.title < b.title ) return -1
    else return 0
  })

  movies
    .splice(0, 20)
    .map(movie => titles.push(movie.title))

  console.log(titles)

  return titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const movies = []

  const convertsToMinutes = (string) => {
    const time = string.split('h')
    
    const hours = +time[0]
    const minutes = +time[1].split('min')[0]
    
    return (hours*60) + minutes
  }

  moviesArray.map(movie => {
    const minutes = convertsToMinutes(movie.duration)
    movies.push({...movie, duration: minutes})
  })

  return movies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if(moviesArray.length === 0 ) return null

  const history = []
  const years = [] // [[year, rate], [year, rate]]

  // first array ordering to use history array to store by year
  moviesArray.sort((a, b) => {
    if( a.year > b.year ) return 1
    else if( a.year < b.year ) return -1
    else return 0
  })

  // if the movie.year same value of actualYear, push to history[x].movies[...]
  let actualYear = 0
  moviesArray.map(movie => {
    if( movie.year === actualYear ){
      for(let year of history){
        if(year.date === movie.year){
          year.movies.push(movie)
        }
      }
    
    // otherwise create a new History element inside de Array
    } else {
      actualYear = movie.year
      history.push({ 
        date: movie.year, 
        movies: [movie]
      })
    }
  })

  // calc every year average of history[x].movies[...]
  history.map((year) => {
    const sum = year.movies.reduce((acc, cur) => acc + cur.score, 0)
    const yearAverage = sum / year.movies.length
    years.push([year.date, yearAverage])
  }) 
  
  // get the best years by score average
  let bestYear = [0, 0]
  years.map(year => {
    if( year[1] > bestYear[1]){
      bestYear = year
    }
  })
  
  return `The best year was ${bestYear[0]} with an average score of ${bestYear[1]}`
}
