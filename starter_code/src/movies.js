/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function stringNum (str) {
  let numMin = 0
  let numHora = 0
 if (str.indexOf('h') != -1){ 
  let hora = str.substring(0, str.indexOf('h') ) .trim(" ") 
//  console.log(hora)
  numHora = parseInt(hora) 
 } 
 if (str.indexOf("min") != -1){
  let min = str.substring(str.indexOf('h') + 1, str.indexOf('min') ) .trim(" ") 
//  console.log(min)
  numMin = parseInt(min) 
}
 let minHoras = numHora * 60
 let totalMin = minHoras + numMin
 
 return totalMin
}

const turnHoursToMinutes = (movies) => {
 return movies.map(e => {
   let newElement = e
   newElement.duration=stringNum(e.duration)
   return newElement
 });
}
// Get the average of all rates with 2 decimals 
const ratesAverage = (movies)=> {
  return parseFloat( (movies.reduce((a, b) => {
    let num = parseFloat(b.rate)
 return a + num
  }, 0) /movies.length).toFixed(2) )
}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
