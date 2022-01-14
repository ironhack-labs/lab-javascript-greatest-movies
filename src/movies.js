// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movArr) {
  const directors = movArr.map(function (movie){
    return movie.director
  })
  //bonus
  
  const directorsUnique=[...new Set(directors)];   
 
  return directorsUnique
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movArr) {
  const dramaBySpielberg = movArr.filter(function (movie){
    return  movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
 
  return dramaBySpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movArr) {
if(movArr.length==0){
  return 0
}
//to get rid of empty .score values or not exisiting keys we could maybe filter
   const moviesWithScore=movArr.filter(function (movie){
     return movie.score
   })
   
   //the calculation via reduce
   const avgScore = moviesWithScore.reduce(function(sum, value){
       return sum + value.score
    }, 0)
return Math.round(avgScore/movArr.length*100)/100

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movArr) {

if(movArr.length==0){
  return 0
}



const dramaMovies=movArr.filter(function (movie){
     return movie.genre.includes('Drama')
   })
if (dramaMovies.length==0){
  return 0
}

const dramaWithScore=dramaMovies.filter(function (movie){
    return movie.score
  })
const avgScore = dramaWithScore.reduce(function(sum, value){
    return sum + value.score
 }, 0)

return Math.round(avgScore/dramaMovies.length*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movArr) {
  //map to clone the arr to avoic mutating it
  const clone=movArr.map(function (item){
    return item
  })
//localeCompare was a hint by Jan
  const sortedByYear=clone.sort(function (a,b){
    if (a.year === b.year && a.title.localeCompare(b.title)===1){
      return 1
    }
    if (a.year === b.year && a.title.localeCompare(b.title)===-1){
      return -1
    }
    return a.year - b.year
    }
  )
return sortedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movArr){
    const clone= [...movArr]
    
    const onlyTitles = clone.map(function (movie){
      return movie.title
    })
    const sortedClone = onlyTitles.sort()
    return sortedClone.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movArr) {
//is altering the array so map has to be used
// the time is a string so we need some logic that iterates over it and creates number equvalents
// movies are usually between 1-3 hours, so only one digit hours und two digits minutes
  const testClone = movArr.map(a => Object.assign({},a));  //i googled this because i went crazy
  // map will clone the array but it seems like it will referece to the same objects inside the array

  const clone=testClone.map(function(movie){
  // tried different cloning methods because the test 
    let hours=Number(movie.duration.substring(movie.duration.indexOf('h')-1,movie.duration.indexOf('h')))
    let minutes=Number(movie.duration.substring(movie.duration.indexOf('m')-2,movie.duration.indexOf('m')))
    //substring looks for h or m and creates a substring that will be converted into a number
  
  if(movie.duration.indexOf('m')>0){
    
    movie.duration= minutes + hours*60
  } else {
  //while we iterate through every movie replace the duation
  movie.duration= hours*60
  }
  return movie
})
return clone
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movArr) {
  if (movArr.length===0){
    return null
  }
  //maybe first i should create an arraw that i will with year: x and score:y
  
  const yearAndScoreArray = movArr.map(function (movie){
    let obj={}
    obj.year=movie.year
    obj.score=movie.score
    return obj
    //function that copies the values and returns them as object in new array
  }) 
  //sorting after year
  let sortedByYear=yearAndScoreArray.sort(function (a,b){
    return a.year-b.year
  })
  //next step could to iterate through the years and do the average score for every year
   for(let i =sortedByYear.length -1 ; i>0; i--){
      if(sortedByYear[i].year===sortedByYear[i-1].year){
        const avgScore = (sortedByYear[i].score + sortedByYear[i-1].score)/2
        sortedByYear[i-1].score = avgScore
        delete sortedByYear[i]
        //this will calc the average in same years and then put the value in the very first property and delete the remaing
        //sadly this will result in undefined propertys but this should work anyway, now we just have 
        // {uniqueyear: avgScore} pairs
      }
   }
   //find index for maximum score: sort again for avgscore  
   let sortedByScore=sortedByYear.sort(function (a,b){
    return b.score - a.score //descending so maximum will be at index [0]
   })
  

return `The best year was ${sortedByScore[0].year} with an average score of ${sortedByScore[0].score}`
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
