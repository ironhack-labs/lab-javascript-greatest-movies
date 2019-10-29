/* eslint no-restricted-globals: 'off' */
// Iteration 1: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = arr => {
  const sum = arr.reduce((acc, num) => acc + Number(num.rate), 0)
  const average = sum / arr.length
  return average
 }
// Iteration 2: Drama movies - Get the average of Drama Movies
 let dramaMoviesRate = arr => {
   const dramaOnly = arr.filter(any =>{
     return any.genre.includes(`Drama`)
   })
   if (dramaOnly.length > 0){
     const average = ratesAverage(dramaOnly)
     return Number(average.toFixed(2))
   }else{
     return 0
   }
 }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


function orderByYear(arr){
  var filterValue = 'year' // using a dummy one for now
  arr.sort(function(a, b){
      if (a[filterValue] > b[filterValue]) return 1;
      if (a[filterValue] < b[filterValue]) return -1;
      //check your filters
      if (a.title < b.title ) return -1;
      if (a.title > b.title ) return 1;
      //then check their last names
      return 0;
  });
  return arr;
  
 }

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
let howManyMovies = arr => {
  const dramaOnly = arr.filter(element => {
    return element.genre.includes(`Drama`)
  })
  const spielbergOnly = dramaOnly.filter(element => {
    return element.director.includes(`Steven Spielberg`)
  })
  return spielbergOnly.length
 }
 
 // Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
 const orderAlphabetically = arr => {
  const ordered = arr.sort(function(a, b) {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  })
  const titles = []
  for (let i = 0; i < ordered.length; i++) {
    titles.push(ordered[i].title)
  }
  return titles.slice(0, 20)
 }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arr => {
  const getHoursInMin = movie => {
    if (movie.duration.charAt(1) === `h`) {
      const hr = Number(movie.duration.charAt(0))
      const hrInMin = hr * 60
      return hrInMin
    } else {
      return 0
    }
  }
  const getMinutes = movie => {
    let min = 0
    if (movie.duration.length >= 5 && movie.duration.charAt(1) === `h`) {
      min = Number(movie.duration.substring(3, movie.duration.length - 3))
    } else {
      min = Number(movie.duration.substring(0, movie.duration.length - 3))
    }
    return min
  }
  let newArrWithMin = []
  arr.forEach(movie => {
    let singleMovie = { ...movie, duration: getHoursInMin(movie) + getMinutes(movie) }
    newArrWithMin.push(singleMovie)
  })
  return newArrWithMin
 }
 var movieTry = [{ duration: `2h` }]
 console.log(turnHoursToMinutes(movieTry)[0].duration)
// BONUS Iteration: Best yearly rate average - Best yearly rate average