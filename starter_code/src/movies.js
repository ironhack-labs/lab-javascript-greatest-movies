/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (movies) {
  return movies.map(original => {
      let movie = {...original}
    if (!movie.duration) movie.duration = ""
    let mins = 0
    movie.duration.split(" ").forEach(el => {
      if(el.includes("h")) mins += parseInt(el) * 60
      if(el.includes("min")) mins += parseInt(el)
    })
    movie.duration = mins 
    return movie 
})
}
console.log(turnHoursToMinutes(movies)) 

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
   let arrRates = movies.map((el) => {
     return el.rate
   })
  let total = arrRates.reduce((acc, current) => {
    return acc + Number(current); 
 }, 0) 
 return  total / movies.length
 }

 ratesAverage(movies)

// // Get the average of Drama Movies
const dramaMoviesRate = movies => {
   let dramaOnes = movies.filter(isDrama => isDrama.genre.includes("Drama"));
   if (dramaOnes.length === 0) return undefined
   let ratesDrama = dramaOnes.map((el) => {
     return el.rate
   })
   let total = ratesDrama.reduce((acc, current) => {
     return acc + Number(current)
   }, 0)
   let avgTotal = total / dramaOnes.length
   return Number(avgTotal.toFixed(2))
  }


// Order by time duration, in growing order
const orderByDuration = array => {
 array.sort((a,b) => {
   if (a.duration !== b.duration) return a.duration - b.duration
   else return a.title.localeCompare(b.title)
 })
 return array
}

// // How many movies did STEVEN SPIELBERG
const howManyMovies = arr => {
 if (arr.length === 0) return undefined
 let filtered = arr.filter( el => el.genre.includes("Drama") && el.director === "Steven Spielberg")
 return `Steven Spielberg directed ${filtered.length} drama movies!`
}

// // Order by title and print the first 20 titles
const orderAlphabetically = arr => arr.map( el => el.title).sort().slice(0, 20)

// // Best yearly rate average
const bestYearAvg = arr => {
 if(arr.length === 0) return undefined
 const years = {}
 arr.forEach(el =>{
   if (!years[el.year]) years[el.year] = [el]
   else years[el.year].push(el)
 })
 let highestAvg = 0
 let bestYear 
 for (let key in years){
   let scoreSum = years[key].reduce ((total, movie) => total + Number(movie.rate), 0)
   let avg = scoreSum / years[key].length
   if(avg > highestAvg || avg === highestAvg && key < bestYear) {
     bestYear = key
     highestAvg = avg
   }
 }
 return `The best year was ${bestYear} with an average rate of ${highestAvg}`
}

bestYearAvg(movies)