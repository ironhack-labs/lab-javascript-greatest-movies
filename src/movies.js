// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data.js")
function getAllDirectors(arr) {
  let directors = []
  arr.map((a)=>{
        if(directors.indexOf(a.director)===-1) directors.push(a.director)   
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenDrama = arr.filter((a)=>a.director === "Steven Spielberg" && a.genre.indexOf("Drama")!==-1)
  return stevenDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(arr.length > 0){
    const avgTotal = arr.reduce((acc, elem)=> {
      if(!elem.score){
          return acc
      }
      return acc+elem.score
    },0)
    return Number((avgTotal/arr.length).toFixed(2))
  }else{
    return 0
  }
 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const result = [] 

  arr.map((a)=>a.genre.indexOf("Drama")!==-1 ? result.push(a.score):a)
  
  if(result.length === 0){return 0;}

  const result2 = result.reduce((acc, actual) => acc + actual, 0)
  return Number((result2/result.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let arr2 = arr.slice()
  
  arr2 = arr2.sort((a,b) => {
    if(a.year > b.year) {
      return 1;
    }
    if(a.year < b.year) {
      return -1;
    }else{
      return a.title.localeCompare(b.title)
    }
  }) 
  return arr2
}
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let arr2 = arr.slice()
  arr2 = arr2.sort(( a, b )=> {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  })  
  return arr2.map((a)=>a.title).splice(0,20)
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let arr2 = arr.slice()
  let time = arr2.map((a)=>a.duration.split(" "))
  let result = []
  time.map((a)=>{
    let hours = 0
    let minutes = 0
    
    for(let elem of a){
      
      if(elem.indexOf("h")!==-1){
        hours = Number(elem.replace("h","")*60)  
      }
      if(elem.indexOf("m")!==-1){
        minutes = Number(elem.replace("min",""))
        
      }
    }
    return result.push(hours+minutes)
      
  })
    for(let i=0; i< arr.length; i++){
      arr2[i].duration = result[i]
      
    }
    console.log(typeof arr2)
    return arr2
  }
  
  

turnHoursToMinutes(movies)
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
