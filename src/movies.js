// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let result = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.indexOf("Drama") > -1).length
    return result
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if(moviesArray.length===0) {
    return 0
   }

   let sumOfScores = moviesArray.reduce((acc, movie) => {
    if (movie.score === '' || movie.score === undefined) {
        return acc
    }  return acc + movie.score
   } ,0)

   let finalScore = Number((sumOfScores / moviesArray.length).toFixed(2));

   return finalScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMoviesArr = moviesArray.filter( 
    movie => movie.genre.indexOf('Drama') > -1
    )
    
    if(dramaMoviesArr.length === 0) {
        return 0
    }

    let sumOfScores = dramaMoviesArr.reduce((acc, movie) => {
        if (movie.score === '' || movie.score === undefined) {
            return acc
        }  return acc + movie.score
       } ,0)

    let average = Number((sumOfScores / dramaMoviesArr.length).toFixed(2));

    return average
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
      let newArr = moviesArray.map(movie => {
      return {...movie}
     })
  
    //let newArr = JSON.parse(JSON.stringify(moviesArray))
  
    let sortedByYear = newArr.sort((a, b) => a.year - b.year)
  
    let sortedByTitle = sortedByYear.sort((a, b) => {
      if (a.year === b.year && a.title < b.title) {
        return -1;
      }
      if (a.year == b.year && a.title < b.title) {
        return 1
      }
      return 0;
    })

    return sortedByTitle
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArr = moviesArray.map(movie => {
          return {...movie}
         })
    // let newArr = JSON.parse(JSON.stringify(moviesArray));
  
    sortedArray = newArr.sort((a, b) => {    
        if (a.title < b.title) {
            return -1;
          }
          if (a.title < b.title) {
            return 1
          }
          return 0;
    })

    sortedArray.length = 20

    let finalArr = [];
    sortedArray.map(movie => finalArr.push(movie.title))
    return finalArr
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArr = moviesArray.map(movie => {
      return { ...movie }
    })
    // let newArr = JSON.parse(JSON.stringify(moviesArray));
    
     newArr.map(movie => {
    
     let hoursToMinutesValue = Number(movie.duration.split(" ")[0][0]) * 60;
     let minutesValue = 0
     let firstMinuteChar = "" 
     let secondMinuteChar = "" 

     //Bienvenida al infierno :3
     //movie.duration.split(" ")[1][0] método para encontrar cada caractér
     //movie.duration.split(" ")[1][1] método para encontrar cada caractér 
      if(!movie.duration.split(" ")[1]) {
       secondMinuteChar = secondMinuteChar
      } else if (movie.duration.split(" ")[1][1] === "m"){
        firstMinuteChar += movie.duration.split(" ")[1][0]
      } else {
        firstMinuteChar += movie.duration.split(" ")[1][0] 
        secondMinuteChar += movie.duration.split(" ")[1][1]
      }
      minutesValue = Number(firstMinuteChar + secondMinuteChar);
      let totalMinutes = hoursToMinutesValue + minutesValue;
      movie.duration = totalMinutes   
    })
  return newArr
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
