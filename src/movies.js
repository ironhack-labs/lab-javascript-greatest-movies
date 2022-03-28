
// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

  const directorsArray = moviesArray.map(eachMovies => { 

      const directors = eachMovies.director

      //console.log(directors)
     return directors
     
  })

return directorsArray

}

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  const spielbergMovies = moviesArray.filter(eachMovies => {

    
        if (eachMovies.director === 'Steven Spielberg' &&  eachMovies.genre.includes('Drama')) {
      
          return eachMovies


       }
    
  
  })

return spielbergMovies.length
}

//console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {


  if (moviesArray.length === 0) {
    return 0
  } else {
    const scoreMovies = moviesArray.map(eachMovies => { 
      
    if (eachMovies.score === undefined) {
      return 0
    } else {
      return eachMovies.score }
    
  })

//console.log(scoreMovies)
  
  const sumScores = scoreMovies.reduce((acc, eachScore) => {
      return acc + eachScore
  })


  //console.log(sumScores)

  let average = sumScores / moviesArray.length
  
  //console.log(parseFloat(average.toFixed(2)))

return parseFloat(average.toFixed(2)) }

  
}

console.log(scoresAverage(movies))




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {


  

  const dramaMovies = moviesArray.filter(eachMovies => { 
    
    return eachMovies.genre.includes('Drama')
    
  })

  if (dramaMovies.length === 0) { return 0 }
  else {

    const scoreMovies = dramaMovies.map(eachMovies => { 

      const score = eachMovies.score

      return score
  })
 
const sumScores = scoreMovies.reduce((acc, eachScore) => {

      return acc + eachScore
  })

return parseFloat((sumScores/scoreMovies.length).toFixed(2))

   }

 
}

//console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

const orderArray = moviesArray.map(eachMovies => eachMovies )

  orderArray.sort((a, b) => {

    if (a.year > b.year) {

      return 1;
     }
    if (a.year < b.year) {

      return -1;
    }
    else { 


      if (a.title[0] > b.title[0]) { return 1 }
      else if (a.title[0] < b.title[0]) { return -1}

      
    }


   })

return orderArray

}

//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  const numMovies = moviesArray.filter(eachMovies => {
    const check = eachMovies.title[0]
     return parseInt(check)
  })
  numMovies.sort((a, b) => {
    console.log(parseInt(a.title) ,parseInt(b.title))
    if (parseInt(a.title) > parseInt(b.title)) {
      return 1;
     }
    if (parseInt(a.title) < parseInt(b.title)) {
      return -1;
    }
    else { 
      if (a.title[1] > b.title[1]) { return 1 }
      else if (a.title[1] < b.title[1]) { return -1}  
    }
   })
  const textMovies = moviesArray.filter(eachMovies => {
    const check = eachMovies.title[0]
     return !parseInt(check)
  })
  textMovies.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
     }
    if (a.title < b.title) {
      return -1;
    }
    else { 
      if (a.title[0] > b.title[0]) { return 1 }
      else if (a.title[0] < b.title[0]) { return -1}  
    }
  })


  const finalArray = numMovies.concat(textMovies)

  const titlesArray = finalArray.map(eachMovies => eachMovies.title)

  if (moviesArray.length > 20) { 

   
    tittlesArraySlice = titlesArray.slice(0, 20)
    return tittlesArraySlice
  } else { 

  

    return titlesArray
  }
  


}

//console.log('twentyMovies= ',orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {



  const moviesArrayNewDuration = moviesArray.map(eachMovies => {
    const dutatioToText = eachMovies.duration.split(" ");

    let hours = parseInt(dutatioToText[0])*60 + parseInt(dutatioToText[1])
    
   const newDuration = {
                ...eachMovies,       
                duration: hours
   }
    
    //console.log(newDuration)
  return newDuration
  })
  
return moviesArrayNewDuration
}

//console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
