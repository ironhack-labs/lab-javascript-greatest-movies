// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(movies) {
  
  return movies.map(movie => {
    let minsDuration = 0
    movie.duration.split(' ').forEach((el) => {
      if(el.includes('h')) minsDuration += parseInt(el) * 60
      if(el.includes('min')) minsDuration += parseInt(el)
    })

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: minsDuration,
      genre: movie.genre,
      rate: movie.rate
    }
  })
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {

  //return (movies.reduce((sum, movie) => sum + parseFloat(movie.rate), 0).toFixed(2) / movies.lenght)

  let x = movies.reduce((suma, movie) => {
    return suma + parseFloat(movie.rate)
  }, 0)
  return parseFloat((x / movies.length).toFixed(2));

    /*let y = 0;
    let x = movies.reduce((suma, movie) => {
      if(!movie.rate) {
        y++
      } else {
        return suma + parseFloat(movie.rate)
      }
    }, 0)
    return (x.toFixed(2) / movies.length - y);*/
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  /*console.log(ratesAverage(movies.filter(movie => movie.genre.indexOf('Drama') !== -1)))*/
  //return ratesAverage(movies.filter(movie => movie.genre.indexOf('Drama') !== -1))

  const drama = movies.filter(movie => movie.genre.indexOf('Drama') !== -1)
  if(drama.length === 0) return undefined
  return parseFloat(ratesAverage(drama));

}

function orderByDuration(movies) {
  test1 = turnHoursToMinutes(movies);
  test1.sort((a, b) => {
    if (a.duration < b.duration){
        return -1;
    }
    if (a.duration > b.duration){
        return 1;
    }
    return 0;
})
const titleMovie = test1.map(movie => {
    return movie.duration
  })
return test1
}

function howManyMovies(movies){ //Should return undefined if the array is empty
  const dramaMovies = movies.filter(movie => 
    (movie.genre.indexOf('Drama') !== -1) && (movie.director.indexOf('Steven Spielberg') !== -1) )

    const titleMovie = dramaMovies.map(movie => {
    return movie.duration
  })

  if(movies.length == 0) {
    return undefined
  } 
  else{
    return (`Steven Spielberg directed ${dramaMovies.length} drama movies!`)
  }
}

function orderAlphabetically(movies){
    arrayOrdered = [...movies]
  arrayOrdered.sort((a, b) => {
    if (a.title > b.title){
        return 1;
    }
    if (a.title < b.title){
        return -1;
    }
    return 0;
})
  const titleMovie = arrayOrdered.map(movie => {
    return movie.title
  })
  if(titleMovie.length > 20){
    return titleMovie.slice(0,20)
  }else{
    return titleMovie
  }
}


