// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(data){

    const getDirectors = data.map((data)=>{return (data.director)})
    return getDirectors
    }
  
  
 
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(data){
const getSS = data.filter((data)=>{return data.director === `Steven Spielberg`&& data.genre.includes(`Drama`)})
return(getSS.length)
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(data){
    if (data.length === 0){return(0)}
        else{const filmRates = data.map((data)=>{if (data.rate===``){return 0}
        else if (data.rate === undefined){return 0}
        else {return (data.rate)}})
    const totalRate = filmRates.reduce(function (sum, rates) {
    return sum + rates;
    }, 0)
    let noRound = totalRate/filmRates.length
    return(Math.round(noRound*100)/100)}console.log (data.rate)}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(data){
    const getDrama = data.filter((data)=>{return data.genre.includes(`Drama`)})
    if (getDrama.length === 0){return(0)}
        else{const filmRates = getDrama.map((data)=>{if (data.rate===``){return 0}
        else if (data.rate === undefined){return 0}
        else {return (data.rate)}})
    const totalRate = filmRates.reduce(function (sum, rates) {
    return sum + rates;
    }, 0)
    let noRound = totalRate/filmRates.length
    return(Math.round(noRound*100)/100)}console.log (data.rate)}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(film){
    const nameSort = film.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title <= b.title) return -1;})
    const yearSort = nameSort.sort((a, b) => a.year - b.year)
    const getYear = film.filter((film)=>{return film.year})
    return getYear}
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(film){
    const newArr = film.filter((film)=>{return film})
    if (film.length > 20){
      const nameSort = newArr.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title <= b.title) return -1;})
          const getTitle = newArr.map((film)=>{return film.title})
          return getTitle.slice(0,20)}
    else{
      const nameSort = newArr.sort((a, b) => {
              if (a.title > b.title) return 1;
              if (a.title <= b.title) return -1;})
              const getTitle = newArr.map((film)=>{return film.title})
              return getTitle}
    }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average




