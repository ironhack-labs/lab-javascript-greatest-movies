/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

//
const emptyArr = (arr) => {
    if(arr.length === 0){
        return undefined
    }
}

const turnHoursToMinutes = arr => {
  const nwArr = arr.map(ele => {
    const duration = ele.duration;
    let minutes = 0;

    if (duration.includes(' ')) {
      duration.split(' ').forEach(time => {
        if (time.includes('h')) minutes += parseInt(time, 10) * 60;
        if (time.includes('m')) minutes += parseInt(time, 10);
      });
    } else {
      if (duration.includes('h')) minutes += parseInt(duration, 10) * 60;
      if (duration.includes('m')) minutes += parseInt(duration, 10);
    }
    return {
      ...ele,
      duration: minutes
    };
  });
  return nwArr;
};


// Get the average of all rates with 2 decimals
function ratesAverage(arr){
  const avgRate = arr.reduce(function(sum,movie){
    return sum += parseFloat(movie.rate)
  }, 0)
  return avgRate/arr.length
}

// Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
  let avgDrama = arr.filter( element => element.genre.includes('Drama'))
  if(avgDrama.length === 0) return undefined
  let sumRate = avgDrama.reduce((acum, ele) => acum + Number(ele.rate), 0)
  let avgRate = sumRate / avgDrama.length
  return Number(avgRate.toFixed(2))
}

// Order by time duration, in growing order
const orderByDuration = (arr) => {
    arr.sort((a,b) => {
        if(a.duration !== b.duration) {
            return a.duration - b.duration
        }else {
            return a.title.localeCompare(b.title)
        }
    })
    return arr
}

// How many movies did STEVEN SPIELBERG
const howManyMovies = (arr) => {
    if (arr.length === 0) { return undefined }
    let movies = arr.filter( element => element.genre.includes("Drama") && element.director === 'Steven Spielberg')
    return `Steven Spielberg directed ${movies.length} drama movies!`
}

// Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
    return arr.map( el => el.title).sort().slice(0,20)
}
// No entendi por que no funciona de esta manera
// const orderAlphabetically = (arr) => {
//     return arr.map((element) => {
//         element.title
//     }).sort().slice(0,20)
//
// }

// Best yearly rate average
const bestYearAvg = (arr) => {
}
const drinkingGame = (player) => { (player) ? console.log(`${player} drink a shot of tequila `) : console.log("Drink a shot of tequila")}
