// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesDatabase) {
  let mappedArr = [];
  moviesDatabase.map(currentMovie => {
    mappedArr.push(currentMovie["director"])
  })
  return mappedArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesDatabase) {
  const filterMovies = moviesDatabase.filter (currentMovie => {
    if( currentMovie["genre"].includes("Drama")){
      return currentMovie["director"] === "Steven Spielberg" 
    }
   })
   return filterMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesDatabase) {
  if (moviesDatabase.length === 0) {
    return 0;
  }
  const total = moviesDatabase.reduce((accumulator, currentMovie) => {
    if(currentMovie["score"]) {
      return accumulator + currentMovie["score"];
    }
    return accumulator;
  }, 0);
  return parseFloat((total /moviesDatabase.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesDatabase) {
  const filterDrama = moviesDatabase.filter (currentMovie => {
     return currentMovie["genre"].includes("Drama")
   })

   const sumDrama = filterDrama.reduce((accumulator, currentMovie) => {
    accumulator += currentMovie["score"]/filterDrama.length
    return accumulator
  },0)
  return  parseFloat(sumDrama.toFixed(2))
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesDatabase) {
  let sortMovies = JSON.parse(JSON.stringify(moviesDatabase))
  const sortYear = sortMovies.sort ((a , b)  => {
    return a["year"] - b["year"]
  })
  const sortTitle = sortYear.sort ((a , b)  => {
    if( a["year"] === b["year"]){
     return a["title"].localeCompare(b["title"])
    }
  })
  return sortTitle
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesDatabase) {
  const sortAlphabet = [...moviesDatabase].sort ((a , b)  => {
    return a["title"].localeCompare(b["title"])
  })
  const finalSort = sortAlphabet.filter(( currentMovie, index) => {
    return index < 20 
  })
  const titleArr = finalSort.map(currentMovie => {
   return currentMovie["title"]
 })
 return titleArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesDatabase) {
  let newArr = JSON.parse(JSON.stringify(moviesDatabase))
  
  newArr.map(currentElement => {
    currentElement["duration"] = currentElement["duration"].replace(" ","")
    currentElement["duration"] = currentElement["duration"].split("h")
  
    if (currentElement["duration"][1] === ""){
       let hours = parseFloat(currentElement["duration"][0]) *60
       currentElement["duration"] =  hours
     }
     else {
       let hours2 = parseFloat(currentElement["duration"][0]) *60 + parseFloat(currentElement["duration"][1])
       currentElement["duration"] = hours2
     }
  
  })
    return newArr
}
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesDatabase) {

  if (moviesDatabase.length === 0) {
   return null;
 }
 let sortMovies = JSON.parse(JSON.stringify(moviesDatabase))
 let  orderYear = sortMovies.sort ((a , b)  => {
  return a["year"] - b["year"]
})


 let indexWithDiffYear = [0];
 
 for (let i = 0 ; i <orderYear.length -1; i++){
  if (orderYear[i]["year"] !== orderYear[i+1]["year"]){
     indexWithDiffYear.push(i+1)
   }
 }

 let arraysWithSameYear = [];
 for (let i = 0; i< indexWithDiffYear.length; i++){
   arraysWithSameYear.push(orderYear.slice(indexWithDiffYear[i],indexWithDiffYear[i+1]))
 }

 let averagesArr = arraysWithSameYear.map (currentArray => {
   return scoresAverage(currentArray)
 })

 let maxAverage = 0;
 let maxIndex = 0;
  
 averagesArr.map((currentAverage, currentIndex) => {
   if (currentAverage > maxAverage) {
     maxAverage = currentAverage;
     maxIndex = currentIndex;
   }
 })

 return `The best year was ${arraysWithSameYear[maxIndex][0]["year"]} with an average score of ${maxAverage}`
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
