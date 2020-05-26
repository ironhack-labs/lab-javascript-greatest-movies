// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
    return array.map(directors => directors.director)
  }

// Bonus - Iteration 1.1: Clean the array of directors

function getAllDirectorsRemoveDupicates(array) {
  const listDirectors = getAllDirectors(array)
  return listDirectors.filter((elem, index) => listDirectors.indexOf(elem) === index)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    return array.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (!array.length) {
    return 0
  } else {
  let avg = array.reduce((acc, currentV) =>  {
    if (!currentV.rate) { return acc + 0}
    return (acc + currentV.rate)}, 0)
    return Number((avg / array.length).toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let filteredArr = array.filter(movies => movies.genre.includes("Drama"))
  let acum = filteredArr.reduce((acc, curr) => acc + curr.rate, 0) 
  if (filteredArr.length === 0) {
    return 0
  } else {
  return Number((acum / filteredArr.length).toFixed(2))
  }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const orderedYear = array.slice().sort(function (a, b) {
   if (a.year > b.year) {
     return 1;
   }
   if (a.year < b.year) {
     return -1;
   } 
   if (a.year === a.year) {
     if ( a.title > b.title) {
       return 1;
     }
     if (a.title < b.title) {
       return -1;
     }
   }
 });
 return orderedYear
 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let sortByTitle = array.map(movie => {
    return movie.title
    }).sort()

  if ( sortByTitle.length > 20 ) {
      let onlyTwenty = []
      for (let i = 0; i < 20; i++){
       onlyTwenty.push(sortByTitle[i])
      }
    return onlyTwenty
  } else {
    return sortByTitle
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {

  const newTimeInMinutes = array.map( movie => {
      const mappedMovie = {
          title: movie.title,
          year: movie.year,
          director: movie.director,
          duration: movie.duration,
          genre: movie.genre,
          rate: movie.rate
      }
     
      if (mappedMovie.duration.includes("h") && mappedMovie.duration.includes("min")) {
          mappedMovie.duration = mappedMovie.duration.slice(0, -3).split("h");
          mappedMovie.duration = 
          (mappedMovie.duration[0])*60 + Number(mappedMovie.duration[1])
      } else if (mappedMovie.duration.includes("h") && (mappedMovie.duration.includes("min") === false)) {
          mappedMovie.duration = Number(mappedMovie.duration.slice(0, -1))*60
      } else if (mappedMovie.duration.includes("h")=== false && (mappedMovie.duration.includes("min") === true)){
          mappedMovie.duration = Number(mappedMovie.duration.slice(0, -3))
      }
      return mappedMovie
  })
  return newTimeInMinutes;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

<<<<<<< HEAD
function bestYearAvg(array) {
  if (!array.length) {
    return null
  } else {
    let flimsByYear = array.reduce((acc, el) => {
=======

function bestYearAvg(array) {
  if (array. length === 0) {
    return null
  } else {
    let flimsByYear = array.reduce((acc, el) =>{
>>>>>>> 06f8af765f5b6796edf08e339287dcacf61d480c
      acc[el.year] = (acc[el.year] || [])
      acc[el.year].push(el)
      return acc
    }, {})
    
    let yearRate = Object.keys(flimsByYear).reduce((acc, el) => {
      acc[el] = flimsByYear[el].reduce((acc, el) => acc += el.rate, 0) / flimsByYear[el].length
        return acc
    }, {})
<<<<<<< HEAD
    
  
    let sortedByRate = Object.keys(flimsByYear).sort((a, b) => yearRate[b] - yearRate[a])
    console.log(sortedByRate)
    
    return `The best year was ${sortedByRate[0]} with an average rate of ${yearRate[sortedByRate[0]]}`
  }
  
=======
    let sortedByRate = Object.keys(flimsByYear).sort((a, b) => yearRate[b] - yearRate[a])
    
    return `The best year was ${sortedByRate[0]} with an average rate of ${yearRate[sortedByRate[0]]}`
  }
>>>>>>> 06f8af765f5b6796edf08e339287dcacf61d480c
}