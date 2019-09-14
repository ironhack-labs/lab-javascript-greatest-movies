/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = arr => {
  return arr.reduce((acc, arrActual) => {
    let rate;
    if (arrActual.rate) {
      rate = parseFloat(arrActual.rate)
    } else {
      rate = 0
    } 

    // const rate = arrActual.rate ? parseFloat(arrActual.rate) : 0

    let result = acc + rate / arr.length
    return Number(result.toFixed(2))
  }, 0)
} 
 
// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arr => ratesAverage(arr.filter(el => el.genre.includes('Drama')))

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = arr => {
  return arr.sort((f1,f2) => {
    if (f1.duration < f2.duration) {
      return -1;
    }
    if (f1.duration === f2.duration && f1.title < f2.title ) {
      return -1;
    }
    return 1;
  })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = arr => {
  let allFilms = arr.filter(el => el.director === 'Steven Spielberg')
  return allFilms.filter(el => el.genre.includes('Drama')).length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => {
  const allTitles = arr.map(el => el.title);
  if (allTitles.length < 20) {
    return allTitles.sort()
  } else {
    return allTitles.sort().slice(0, 20);
  }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function convertHtoMin(hString) {
  return Number(hString.replace(/h/, '')) * 60
}
function convertMin(minString) {
  return Number(minString.replace(/min/, ''))
}

const convert = (time) => {
  const durationArr = time.split(' ');
  if(durationArr.length === 2) {
    return convertHtoMin(durationArr[0]) + convertMin(durationArr[1])
  }
  if (durationArr[0].includes('h')) {
    console.log('entra')
    return convertHtoMin(durationArr[0])
  }
  return convertMin(durationArr[0])
}

const turnHoursToMinutes = arr => {
  return arr.map(obj => {
    var rObj = {};
    rObj.duration = convert(obj.duration);
    return rObj;
    
  })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = arr => {
  if (arr.length === 0) return null;

  const years = arr.map(film => film.year);
  
  let best = 0;
  let bestYear = 0;

  years.forEach(element => {
      const avg = ratesAverage(arr.filter(e => e.year == element));
      if(avg >= best){
          best = avg;
          bestYear = element;
      }
  });

  return "The best year was " + bestYear + " with an average rate of " + best;
}