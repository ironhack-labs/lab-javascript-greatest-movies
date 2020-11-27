// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = arr => {
  return arr.map(movies => movies.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Opción 1 con forEach y push
const getDirectors = arr => {
  let directors = [];
  arr.forEach(movie => !directors.includes(movie.director) ? directors.push(movie.director) : false)
  return directors;
}

// Opción 2 con filter y getAllDirectors()
const getAllDirectorsUniq = movies => {
  let allDirectors = getAllDirectors (movies);
  let allDirectorsUniq = allDirectors.filter((director, idx) => {
    return allDirectors.indexOf(director) == idx; // En un elemento repetido solo retornará el primero puesto que las repeticiones no cumplirán la condición al ser su índice diferente al del primero.
  });
  return allDirectorsUniq;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = movies => {
  let dramaSteven = movies.filter(movie => {
    return movie.director === "Steven Spielberg" && movie.genre.includes('Drama');
  })
return dramaSteven.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const calculateAverage = arr => {
  if (arr.length === 0){ return 0 }
  let averageSum = arr.reduce((acc, curr) => {
    return acc + curr
  }, 0)
  return Number((averageSum/arr.length).toFixed(2))
}

const ratesAverage = movies => {
  let ratesMap = movies.map(movies => {
    if ( typeof movies.rate === "number" ){
      return movies.rate
    } else {
      return 0
    }
  })
  return calculateAverage(ratesMap)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
  let dramaFilter = movies.filter(movies => {
    return movies.genre.includes('Drama') ? true : false
  })
  let newArray = dramaFilter.map(movies => {
    return movies.rate
  })
  return calculateAverage(newArray)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {
  if (movies.length === 0){ return 0 }
  let newArr = movies.sort((a, b) => {
      if ( b.year !== a.year ){
        return a.year - b.year
      } else {
        if ( a.title > b.title ){
					return 1
				} else {
					return -1
				}
      }
  });
  return newArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {
  return movies.map(movie => movie.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
  let moviesCopy = movies.map(movie => {
    minutes = movie.duration.replace(/\D/g,' ').split(' ');
    if (minutes[2] === '' || minutes[2] === undefined ){ minutes[2] = 0 }

    if (minutes[0].length >= 2){
      minutes = Number(minutes[0])
    } else {
      minutes = Number(minutes[0]*60) + Number(minutes[2])
    }

    return {
      "title": movie.title,
      "year": movie.year,
      "director": movie.director,
      "duration": minutes,
      "genre": movie.genre,
      "rate": movie.rate
    }
  })
  return moviesCopy
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = movies => {

  if (movies.length === 0){
    return null;
  }

  let allYears = movies.map(movie => {
    return movie.year
  })

  let years = []
  allYears.forEach(year => {
    if ( !years.includes(year) ){
      years.push(year)
    }
  })

 return years
}