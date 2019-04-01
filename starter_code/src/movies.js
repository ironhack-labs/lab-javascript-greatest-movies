/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

const turnHoursToMinutes = movies=> movies.map(original =>  {
    const peliculas = {...original}
    peliculas.duration = peliculas.duration.split(' ');
    var total = parseInt(peliculas.duration[0]) * 60 + parseInt(peliculas.duration[1]);
    console.log(total);
      peliculas.duration = total
      return peliculas
    })

// Get the average of all rates with 2 decimals 
const ratesAverage = movies => movies.map(number => {
    const rateMovie = number.rate;
    var total = parseFloat (rateMovie);
     return {
       ...number,
       rate: total
    }
    })
    
    const rate = movies.reduce((sum, number) => sum + parseFloat(number.rate), 0)
    console.log(rate / movies.length)

// Get the average of Drama Movies
    const dramaMoviesRate = movies=> movies.filter(promDrama => promDrama.genre.includes('Drama'))

    console.log(dramaMoviesRate);


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
    const howManyMovies = movies=> movies.filter(movie => (movie.director.includes('Steven Spielberg')) && movie.genre.includes('Drama'))

    console.log(howManyMovies)


// Order by title and print the first 20 titles


// Best yearly rate average
