// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directors = arr.map((item)=>{
    return item.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const movies = arr.filter((item)=>{
    return (item.director === 'Steven Spielberg') && (item.genre.includes('Drama'))
  })
  return movies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(arr.length === 0) return 0 //returns 0 if array is empty
  arr.forEach((item)=>{ //Add a 0 to compute the avg to movies that don't have a score
    if(item.score === null || item.score === undefined) item.score = 0 
  })
  const scores = arr.map((item)=>{ //extracts the scores into an array with map
    return item.score
  })
  const average = scores.reduce((a, b)=>{ //Reduces to get the sum
    return (a + b)
  }, 0)
  return Math.round((average / scores.length) * 100) / 100 //Calcs avg rounded to two decimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter((item)=>{ //Filters movies by drama movies
    return item.genre.includes('Drama')
  })
  if(dramaMovies.length === 0) return 0 //returns 0 if there's no drama movies
  const dramaScores = dramaMovies.map((item)=>{ //Extract the score of drama movies
    return item.score
  })
  const dramaAverage = dramaScores.reduce((a, b)=>{ //Reduces to get the sum
    return (a + b) 
  }, 0)
  return Math.round((dramaAverage / dramaScores.length) * 100) / 100 //calcs avg rounded to two decimals
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const arrayCopy = JSON.parse(JSON.stringify(arr)) //Deep copy the array
  const ordered = arrayCopy.sort((a, b)=>{ //Sort by year
    if(a.year < b.year) return -1
    else if(a.year > b.year) return 1
    else if(a.year === b.year){ //Order movies alphabetically if they were made on the same year following the same logic
      if(a.title < b.title) return -1
      else if(a.tile > b.title) return 1
      else return 0
    }
  })
  return ordered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const arrayCopy = JSON.parse(JSON.stringify(arr))
  const titles = arrayCopy.map((item)=>{ //Extract movie titles only
    return item.title
  })
  const titlesOrdered = titles.sort()
  if(titlesOrdered.length > 20) titlesOrdered.splice(20) //Return only the 20 first movies by removing the rest from the array
  return titlesOrdered

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const newArray = JSON.parse(JSON.stringify(arr))
  newArray.forEach((item)=>{
    let time = 0 //This variable will be the value in minutes (Numbers only) the duration key in each object gets at the end of the function
    if(item.duration.includes(' ')){ //Check whether the duration is written in hs only or hs + minutes
      const splitted = item.duration.split(' ') //Remove the space
      const hours = splitted[0].split('h')[0] //Extract the number of hours after splitting h inside the already split array
      const minutes = splitted[1].split('min')[0] //Extract the number of minutes after splitting min inside the already split array
      time = Number(hours) * 60 + Number(minutes) //Sum the total time
    }
    else{
      const splitted = item.duration.split('h') //Same process for just hours
      const hours = splitted[0]
      time = Number(hours) * 60
    }
    item.duration = time //Change the duration of each object to the converted time
  })
  return newArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if(arr.length === 0) return null //Return null if array is empty
  const years = arr.map((item)=>{ //Extract the years into a list
    return item.year
  })
  const unqYears = []
  for(let i = 0; i < years.length; i++){
    if(unqYears.indexOf(years[i]) === -1){ //Checks whether the year from the year only array has been added to the unique one 
      unqYears.push(years[i])              //and only adds it if it hasn't been, that way the new array has each year just once
    }
  }

  //Calc avg score per year
  for(let i = 0; i < unqYears.length; i++){
    //Filter by the year of the iteration
    //Map the scores after filtering
    //Avg scores of the year then save it in the array
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
