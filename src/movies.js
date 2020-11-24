
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    return arr.map(function (movie) {return movie.director})
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const allDirectors = getAllDirectors(movies)
const noRepeatedDirectors = allDirectors.filter(function(director,i) {
  const firstIndex = allDirectors.indexOf(director)
  if(firstIndex === i) {
    return true
  }
  else {
    return false
  }
})

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
  const stevenDrama = arr.filter(function(movie){
    if(movie.director === "Steven Spielberg" && movie.genre.includes('Drama')) {
      return true
    }
    return false
  })
  return stevenDrama.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let myresult = 0;
function ratesAverage(arr) {
    if (arr.length === 0) {
      return 0
      } 
    else {
      myresult = arr.reduce(function (acc,v) {
        if(!v.rate) { 
          v.rate=0}
          return acc + v.rate
      },0)/arr.length
  return parseFloat((myresult.toFixed(2)));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  const dramaMovies = arr.filter(function(movie) {
    if(movie.genre.includes('Drama')) {
      return true
    }
    return false
  })
  if(dramaMovies.length === 0) {
    return 0
  }
  const sumDramaMovies = dramaMovies.reduce(function(acc,element) {
    return acc + element.rate
  },0)
  return parseFloat((sumDramaMovies/dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

/*function orderByYear(arr){
  const newArray= [...arr]
  const moviesByYear = newArray.sort(function (y1,y2){
    if(y1.year<y2.year){
      return -1
    }
    if(y1.year>y2.year){
      return 1
    }
    return 0
  })
  return moviesByYear
}
*/

function orderByYear(arr){
  const newArray= [...arr]
  const moviesByYear = newArray.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 )
  return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let orderedTitles=[]
  arr.forEach(element => {
    orderedTitles.push(element.title)
    });
  orderedTitles.sort()
  if (orderedTitles.length<20) {
    return orderedTitles
  }
  else {
    return orderedTitles.slice(0,20)
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

/*function turnHoursToMinutes(arr) {
    let moviesWithMinutes = JSON.parse(JSON.stringify(arr))

    moviesWithMinutes = arr.map(function(element) {
    let hours= 0
    let minutes= 0

    if (element.duration.length === 7 || element.duration.length === 8) {
     hours = parseInt(element.duration.slice(0,1))
     minutes = parseInt(element.duration.slice(3,element.duration.length-3))
    } else if (element.duration.length===2) {
      hours = parseInt(element.duration.slice(0,1))
    } else {
      minutes = parseInt(element.duration.slice(0,element.duration.length-3))
    }
    
    let totalMinutes = hours*60 + minutes
    element.duration = totalMinutes
    return element
  })
return moviesWithMinutes
}*/

function turnHoursToMinutes(arr) {
  const newMovies = JSON.parse(JSON.stringify(arr));
  newMovies.map(function (movie) {
    if (movie.duration.indexOf('h') == -1) {
      return movie.duration = parseInt(movie.duration.slice(0,movie.duration.indexOf('min')))
    } else if (movie.duration.indexOf('min') == -1) {
      return movie.duration = movie.duration.slice(0,movie.duration.indexOf('h'))*60
    }
  return movie.duration = parseInt(movie.duration.slice(movie.duration.indexOf(' '),movie.duration.indexOf('min')))+movie.duration.slice(0,movie.duration.indexOf('h'))*60
})
return newMovies
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

