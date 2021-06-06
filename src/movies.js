// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  let output = movies.map((elem) => {
    return elem.director
  }) 
  return output
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

let outputArr = movies.filter((elem) => {
    return elem.director === 'Steven Spielberg' && elem.genre.includes('Drama')
})

return outputArr.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if(movies.length === 0 ){
  return 0;
}

let OutputAverage = movies.reduce((sum, elem) => {
    if (elem.score) {
      return sum += elem.score
    } else {
      return sum
    }
  }, 0)

//var rounded = (OutputAverage / movies.length).rounded.toFixed(2);

  var rounded = OutputAverage / movies.length
  rounded = rounded.toFixed(2);

  return parseFloat(rounded)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  
  let outputDrama = movies.filter((elem) => {
  
    let dramaMovies = elem.genre.includes('Drama')
    
    if (dramaMovies.length === 0) {
      return 0
    }else{
      return dramaMovies
    }
  })
  
  let averageDrama = scoresAverage(outputDrama)

   return averageDrama 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  let cloneData = JSON.parse(JSON.stringify(movies))

  cloneData.sort((a , b) => {
    if (a.year > b.year) {
      return 1
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
    }else if (a.year < b.year) {
      return -1
     } 
  })

  return cloneData
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  let cloneData = JSON.parse(JSON.stringify(movies))

 cloneData.sort((a, b) => {
    if (a.year > b.year) {
      return 1
    }else if (a.year < b.year){
      return -1
    }else{
      if (a.title > b.title) {
      return 1
    }else if (a.title < b.title){
      return -1
    }else{
      return 0
    }
  }
  })

  let titles = cloneData.map((elem) => {
      return elem.title
    })

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

  if(movies.length === 0){
    return null
  }

    let convert = (time) => {
      let timeHours = 0;
      let TimeMinutes = 0;
      
      let timeArr = time.split('')
			
      timeHours = parseFloat(timeArr[0])
      TimeMinutes =  parseFloat(timeArr[3] + timeArr[4])
		
  
			let HoursToMinutes = timeHours * 60
			let totalMinutes = HoursToMinutes + TimeMinutes
			totalMinutes = totalMinutes.toFixed(0)

      if(TimeMinutes === NaN || TimeMinutes === undefined){
        return parseFloat(HoursToMinutes);
      }else{
        return parseFloat(totalMinutes)
      }
    }

    let hoursToMinutesArr = movies.map((eachMovie) => {

      let clone = JSON.parse(JSON.stringify(eachMovie))

       clone.duration = convert(clone.duration)
       return clone
       
    })
    
    return hoursToMinutesArr
}

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
