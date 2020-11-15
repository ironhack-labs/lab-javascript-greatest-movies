// Iteration 1: All directors? - Get the array of all directors.
// Bonus: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (movies) {
  return  movies.map(function (movie) {
      return movie.director
  }) 
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//Fat arrow version
// function howManyMovies(movies) {
//     return movies.filter(movies => {
//     return movies.genre.includes('Drama')  && movies.director === ("Steven Spielberg");
//     }).length;
// }

function howManyMovies(movies) {
  // trouver les dramas avec Spielberg en director
  return movies.filter(function (movie) {
      return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  }).length
  //compter le nombre de films
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  const sumRates = movies.reduce(function(acc, curr) {
    if (!curr.rate) {
      return acc
    }
    return acc + curr.rate
  }, 0)
  const average = sumRates / movies.length
  return Math.round(average*100)/100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(function(movie){
    return movie.genre.includes("Drama")
  })
  return ratesAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const copyMovies = [...movies]
  const yearOrder = copyMovies.sort(function (a,b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year
  });
  return yearOrder
  }
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const copyMovies = [...movies]
  const orderedMovies = copyMovies.sort(function(a,b) {
    return a.title.localeCompare(b.title)
  })

 const titlesAsString = orderedMovies.map(function(item) {
    console.log(item.title)
    return item.title
  })
  return titlesAsString.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// I spent time trying to make it work but Jasmine does not agree. So I'm still leaving it here

// function turnHoursToMinutes(movies) {
//   const copyMovies = [...movies]

//   const moviesTime = copyMovies.map(function (movie) {
//     // if (!movie.duration.includes('h')) {
//     //   return movie.duration.split('min')[0]
//     // } 
//     // console.log(movie.duration.split('min')[0])
    
//     const movieTime = movie.duration.split(' ')
//     const movieHoursArray = movieTime[0].split('h')
//     // console.log(movieHoursArray)
//     const movieHours = movieHoursArray[0]

//     const movieMinutesArray= movieTime[1]
//     const movieMinutes = movieMinutesArray ? movieMinutesArray.split('min') : 0
//     const movieInMinutes = Number(movieHours) * 60 + Number(movieMinutes)
//     return movieInMinutes
//   })
//   return moviesTime
// }

// function turnHoursToMinutes(movies) {

//   const moviesTime = movies.map(function (movie) {
    
//     const movieTime = movie.duration.split(' ')
//     const movieHoursArray = movieTime[0].split('h')
//     console.log(movieHoursArray)
//     // const movieHours = movieHoursArray[0]
//     const movieMinutesArray= movieTime[1].split('min')
//     // const movieMinutes = movieMinutesArray[0]
//     const movieInMinutes = Number(movieHoursArray) * 60 + Number(movieMinutesArray)
//     // return Number(movieHoursArray) * 60 + Number(movieMinutesArray)
//     // console.log(movieInMinutes)
//     // const movieMin = 
//   })
//   // return moviesTime
// }


// console.log(turnHoursToMinutes([
//   {
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Frank Darabont",
//     "duration": "2h 22min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9.3
//   },
//   {
//     "title": "The Godfather",
//     "year": 1972,
//     "director": "Francis Ford Coppola",
//     "duration": "1h 30min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9.2
//   }]))


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
