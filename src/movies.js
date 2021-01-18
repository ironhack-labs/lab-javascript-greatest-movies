// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = arrayOfMovies => arrayOfMovies.map(elm => elm.director)



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (StevenS) {
 const movies = StevenS.filter(elm=> elm.director === "Steven Spielberg" && elm.genre.includes ("Drama")) 
  return movies.length
 
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (challenge) => {
 return Number((challenge.reduce((acc, elm) => acc + Number(elm.rate), 0)/challenge.length).toFixed(2)) || 0
}


// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (totalMovies) => {
let dramaArray = totalMovies.filter((eachMovie) => {
  return eachMovie.genre.indexOf("Drama") >= 0
})
  return ratesAverage(dramaArray)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(correctOrder) {
  const sortedCorrectOrder = [...correctOrder] 
  return sortedCorrectOrder.sort((a, b) => {
     if (a.year === b.year){
       if (a.title > b.title) {
         return 1;
       }
       if (a.title < b.title) {
         return -1;
       }

        //a must be equal to b
       0;
    } else
      return a.year - b.year
   })
}



// MONCH - 2DA OPCIÓN UTILIZANDO OPERADORES CONDICIONALES (ternario)
// function orderByYear(correctOrder) {
//   const sortedCorrectOrder = [...correctOrder] 
//   return sortedCorrectOrder.sort((a, b) => {
//    a.year !== b.year ? a.year - b.year : a.title > b.title ? '1': a.title < b.title ? '-1' :'0'})
// }






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(alpha) {
   const copyIt = [...alpha]

   copyIt.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
     return -1;
    }
    // a must be equal to b
     0;
   })

      

  let firstTwenties = copyIt.slice(0, 20)

  let firstTwentiesTitles = firstTwenties.map((movie) => {
   return movie.title
  })
  return firstTwentiesTitles
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(durationArray) {
  // let copyIt = [...durationArray]
  // let durhora = parseInt(copyIt.duration.split('h')[0])
  // let durmin = parseInt(copyIt.duration.split('h')[1])
  // let duration = durhora * 60 + durmin
  // return copyIt.splice(4,1,duration)
}



// ****PENDIENTE DE HACER (¿?strings)


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
