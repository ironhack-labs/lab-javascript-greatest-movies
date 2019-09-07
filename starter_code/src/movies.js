/* {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  }*/

/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = movies => { 
    if (movies.length === 0) return 0

    const rates = movies.reduce((acc, movie)  => {
        return acc + Number(movie.rate)
    }, 0) 
   return Math.round((rates / movies.length)*100) / 100
}

// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
    const arrDramaMovies = []
    const dramaMovies = movies.filter(movie => {
        if (movie.genre.includes('Drama')) {
            arrDramaMovies.push(movie)
        }
    })

    //  Por si no hay del género Drama
    if (arrDramaMovies.length === 0) {
        return 0
    }

    return  ratesAverage(arrDramaMovies)
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => {
    const arrDuration = []
    movies.forEach(movie => {
        const duration = movie.duration.split("h ")
        const minutes = duration[1].split("min")[0]
        const durationMinutes = Number(duration[0]) * 60 + Number(minutes);
        arrDuration.push(`${movie.duration} - ${movie.title} - ${movie}`)
        arrDuration.push({duration :durationMinutes, title: movies.title })
    })
     arrDuration.sort()
     return result

     // pizarra (no está bien del todo, no ha dado tiempo a copiarlo)
     return movies.sort((a,b) => {
         if (a.duration > b.duration) {
                if (a.duration === b.duration) {
                    return a.title > b.title ? 1 : -1
                }
                return a.duration - b.duration
         }
     })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
sort / map / slice
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
haciendo un map, devolver el tiempo en minutos. Puede venir de una de esas 3 formas
'1h 33min'
'3h'
'45min'
// BONUS Iteration: Best yearly rate average - Best yearly rate average
