/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = (arr) => {
    var sum = 0;
    for(let rating of arr){
        sum += parseInt(rating.rate); 
    }
    return Math.round(sum/arr.length * 100) / 100
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
    var totalRate = 0;
    var count = 0;

        arr.map(item => {
            if(item.genre.indexOf('Drama') !== -1 && item.rate === ''){ 
                item.rate = '0'
                count += 1
                return item
            }
            else if (item.genre.indexOf('Drama') !== -1){
                totalRate += parseInt(item.rate)
                count += 1
                return item
            }
        })

        if(count === 0) return 0
        return Math.round(totalRate/count * 100) / 100
    
      }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = (arr) => {
  var sortedArr = arr.sort(function(a, b) {
    var titleA = a.duration
    var titleB = b.duration
    if (titleA < titleB) {
        return -1;
    }
    if (titleA > titleB) {
        return 1;
    }
    if (titleA === titleB && a.title < b.title) {
        return -1;
    }
      });

      return sortedArr
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {
   let moviesArr = arr.filter(movie => {
       if (movie.genre.indexOf('Drama') !== -1) {
         return true;
       } 
     }).filter(movieDirector => {
       if (movieDirector.director === 'Steven Spielberg') {
         return true;
       } 
     })
     return moviesArr.length;;
   }

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
    var finalArr = []
    var sortedArr = arr.sort(function(a, b) {
        var titleA = a.title
        var titleB = b.title
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
          })

    for (let item of sortedArr){
        if(finalArr.length<20){
            finalArr.push(item.title)
        }
    }
        return finalArr
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
    let clonedArr = JSON.parse(JSON.stringify(arr))
      let final = clonedArr.map((item) => {
          if(item.duration.split(' ').length > 1){
              let hours = item.duration.split(' ')[0].slice(0, 1)
              let minutes = item.duration.split(' ')[1].slice(-5, -3)
              item.duration = parseInt(hours) * 60 + parseInt(minutes)
          }
          else if (item.duration.indexOf('min') !== -1){
              let minutes = item.duration.slice(-5, -3)
              item.duration = parseInt(minutes)
          }
          else {
            let hours = item.duration.slice(0, 1)
            item.duration = parseInt(hours) * 60
          }
          return item
      })
      return final
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = (arr) => {
    var finalYear = 0;
    var finalSum = 1;
    var finalCount = 1;
   
  if(arr.length === 0){return null}

  for (let movie of arr){
    var tempSum = 0;
    var tempCount = 0;

    arr.filter((specificMovie) => {
        if(specificMovie.year === movie.year){
            tempSum += parseFloat(specificMovie.rate)
            tempCount += 1
            return true
        }
    })

    if(tempSum/tempCount > finalSum/finalCount){
        finalSum = tempSum;
        finalCount = tempCount;
        finalYear = movie.year;
    }
    
    else if(tempSum/tempCount === finalSum/finalCount && parseInt(finalYear) > parseInt(movie.year)){
        finalSum = tempSum;
        finalCount = tempCount;
        finalYear = movie.year;
    }    
  }
  return `The best year was ${finalYear} with an average rate of ${Math.round(finalSum/finalCount * 100) / 100}`
  
  }