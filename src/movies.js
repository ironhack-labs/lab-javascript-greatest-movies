// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const arrayDirectors = movies.map(elm => elm.director)
    return arrayDirectors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectorsNoRepeat(movies) {
  const directors = movies.map(elm => elm.director)
  let uniqueDirectors= directors.filter((item, index) => {
    return directors.indexOf(item) != index //al verrés: los que pasan por false entran al array
  } )
  console.log(uniqueDirectors)
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
  let num = 0
  let spielbergMovies = movies.filter(elm => elm["director"] === "Steven Spielberg").filter(elm => elm.genre.includes("Drama")).length
  console.log("Numero de pelis", spielbergMovies)
  return spielbergMovies
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
  let result = 0
 
  let average = movies.reduce((acc, elm ) => {
    if (elm.rate){ //para que los sume
      return acc + elm.rate
    } else { //si no hay rate, que devuelva el acumulador aunque no le sume nada
      return acc }
  }, 0) // cierre función seguido de parámetro para que no coja el 1er objeto
    if (movies.length === 0){ //si está vacío
    return 0 
  } 
  result = Math.round(average/movies.length *100) /100
  return result
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  let result = 0
  if (movies.length === 1){
    return movies[0].rate
  }
  let dramaMovies = movies.filter(elm => elm["genre"].includes("Drama")).filter(elm => elm["rate"])
  if(dramaMovies.length === 0){
    return 0
  }
  let averageDrama = dramaMovies.reduce((acc,  elm ) => acc + elm["rate"] , 0)/dramaMovies.length 
  console.log (Math.round(averageDrama*100)/100)
  return Math.round(averageDrama*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
  let moviesCopy = [...movies]
  moviesCopy.sort(function (a,b) {
    if (a.year === b.year){
      return (a.title).localeCompare(b.title)
    }
    return a.year - b.year
  })
  return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (movies) {
   let moviesCopy = movies.map (elm => elm.title)
    moviesCopy.sort((a, b) => a.localeCompare(b));
    if(moviesCopy.length > 20){
      return moviesCopy.slice(0,20)
    }
  return moviesCopy.sort((a, b) => a.localeCompare(b));
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
  let moviesMinutes = [...movies]
  moviesMinutes.forEach(elm => elm.duration = totalMinutes(elm.duration))

    function totalMinutes(string){
    let hour, minutes
    let hourPosition = string.indexOf("h")
    if (hourPosition != -1) {
       hour = parseInt((string.slice(0, hourPosition))*60)
    }else{ hour = 0}

    let minutesPosition = string.indexOf(" ")
    if(minutesPosition != -1){
       minutes = parseInt(string.slice(minutesPosition, -3))
    }else{
      minutes = 0
    }
   let total = minutes + hour
   return  total
  }
  return moviesMinutes
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies){

if (movies.length == 0 ){
  return null
} 

let fechas = movies.map((movies) => {
  return {
    year : movies.year,
    rate: movies.rate
  } 
})
console.log("FECHASSS", fechas.sort(function(a, b) {
  return a.year - b.year
})
)
/*
let avg = movies.reduce((acc, elm) => {
  acc[elm.year] = (acc[elm.year] || 0) + elm.rate
  console.log(acc[elm.year], elm.rate)
  return acc;
}, {});*/

  var sameMetrics = [];
  for (var i = 0; i < fechas.length - 1; i++) {
    if (fechas[i][0] === fechas[i + 1][0] && sameMetrics.indexOf(fechas[i][0]) < 0) {
      sameMetrics.push(fechas[i][0]);
    }
  }
  sameMetrics = sameMetrics.map(a => [a, 0]);
  for (i = 0; i < fechas.length; i++) {
    for (var j = 0; j < sameMetrics.length; j++) {
      if (fechas[i][0] === sameMetrics[j][0]) {
        sameMetrics[j][1] += fechas[i][1];
      }
    }
  }
  //return sameMetrics;


console.log(sameMetrics);

  return //(`The best year was·${year} with an average rato of ${rate}`)
}



bestYearAvg(movies)



