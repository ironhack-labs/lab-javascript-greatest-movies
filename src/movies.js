// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const { sort } = require("./data");

function getAllDirectors(array) {
  const returnDirector = array.map( element=>
    director=element.director
  
    )
  return returnDirector
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  if(array.length ===0){
    return 0;
  }
  const filtredMovies = array.filter(element => (element.director==='Steven Spielberg' && element.genre.indexOf(`Drama`) !==-1) )
  return filtredMovies.length
  
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(array) {
  if(array.length===0){
    return 0
  }

  let countSumElem = 0
  const sumScore = array.reduce((acc , element)=>{
    if (typeof element.score ==="undefined"){
      countSumElem +=1;
      return acc + 0;
    }
    if (element.score==="" || element.score===" ")
    { countSumElem +=1;
      return acc + 0
    }else{
    countSumElem +=1; 
     return acc + element.score}} , 0)
  let avg = Number((sumScore/countSumElem).toFixed(2)) 
  return avg
}



// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(arrayDrama) {
  const arrayDramaMovies = arrayDrama.filter(element => element.genre.indexOf("Drama") !==-1)
  const avgMovies = scoresAverage(arrayDramaMovies)
  return avgMovies
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(arr){
  let sortArray = []
  arr.forEach(element => {
    sortArray.push(element)
  });
  sortArray.sort((a,b)=> a.title > b.title?1:a.title < b.title?-1:0)
  sortArray.sort((a,b) =>
    a.year-b.year)
  return sortArray;
}

// console.log(orderByYear(testeArray))



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let filterSortArray20 =[]
  let sortArray=[]
  arr.forEach(element => {
    sortArray.push(element.title)
  });
  const filterSortArray= sortArray.filter((element)=> typeof element == "string")
  filterSortArray.sort()
  if(filterSortArray.length < 20){
    return filterSortArray;
  }else{
    for(let i=0; i < 20 ; i += 1){
      filterSortArray20.push(filterSortArray[i])
    }
  }
return filterSortArray20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

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
