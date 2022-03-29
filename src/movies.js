// The `movies` array from the file `src/data.js`.

// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(eachMovie =>  eachMovie.director)
  return allDirectors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenSpielbergDramas = movies.filter(eachMovie => {
    const stevenSpielberg=eachMovie.director=='Steven Spielberg'
    const drama = eachMovie.genre.includes('Drama')
    return stevenSpielberg && drama
  });
  let cnt=0
  const contador = stevenSpielbergDramas.forEach(eachSSD => {
    cnt+=1
  });
  return cnt
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  // const scores = movies.forEach(eachMovie => eachMovie.score)
  // let sum=0
  // scores.forEach(eachScore => sum+=eachScore)
  // return (sum/(movies.length)).toFixed(2)
     const scoresSum = movies.reduce((acc, eachMovie) => {
       if(eachMovie.score){
        return acc + eachMovie.score
       }else{
        return acc
       }
     }, 0) // <-- ojo!
     let avg = scoresSum/ movies.length
     let avgRounded = parseFloat(avg.toFixed(2))
     if (movies.length==0){
       return 0
     }else {
       return avgRounded
     }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const drama = movies.filter(eachMovie => {
    const drama = eachMovie.genre.includes('Drama')
    return drama
  });

  const scoresSum = drama.reduce((acc, eachDrama) => {
    
    return acc + eachDrama.score
  }, 0) // <-- ojo!
  let avg = scoresSum/ drama.length
  let avgRounded = parseFloat(avg.toFixed(2))
  if (drama.length=0){
    return 0
  } else {
    return avgRounded
  }
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderedByYear = [...movies];
  orderedByYear.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else if (a.title === b.title) {
        return 0;
      }
    }
  });
  return orderedByYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.map(eachMovie => eachMovie.title)
  titles.sort(function(a, b){
    if(a< b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})
const twentyTitles = titles.slice(0,20)
return twentyTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const hoursToMinutes = movies.map(eachMovie => {
    if(eachMovie.duration.length==7){
      eachMovie.duration=parseInt(eachMovie.duration.charAt(0))*60+parseInt(eachMovie.duration.charAt(3))
    } else if(eachMovie.duration.length==8){
      eachMovie.duration=parseInt(eachMovie.duration.charAt(0))*60+parseInt(eachMovie.duration.charAt(3)+eachMovie.duration.charAt(4))
    } else if(eachMovie.duration.length==2){
      eachMovie.duration=parseInt(eachMovie.duration.charAt(0))*60
    }
    return eachMovie
  })
  return hoursToMinutes
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
