// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
    return array.map(directors => directors.director)
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    return array.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if ( array.length === 0) {
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
  const newObject = [...array]
  const replaceLetters = newObject.map(movie => {
  movie.duration = movie.duration.replace('h', '').replace('min', '').split(' ')
  console.log(movie)
  return movie
  })
  const correctTime = replaceLetters.map((element) =>{
    if (!element.duration[0]) {
      return Number(element.duration[1])
      } else {
    element.duration = (element.duration[0] *60) + Number(element.duration[1])}
    return element
  })
  return correctTime
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
