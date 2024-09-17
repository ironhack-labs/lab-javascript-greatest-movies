// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
        

}

//Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someMovies) {
    return someMovies.filter(movie => {
            return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {

  if(array.length === 0) return 0

  let soma = array.reduce((acc, movie)=>{
    if(!movie.score) {
    return acc  
    }
    else return acc + movie.score
  },0)
  let avg = soma/array.length
  console.log(avg)
  let avg2 = avg.toFixed(2)
  return +avg2

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let newArr = [];
  newArr = moviesArray.filter( obj => obj.genre == 'Drama')
  if(newArr.length > 0 ){
      let soma = newArr.map(obj => parseFloat(obj.score)).reduce((ac, va) => ac + va);
      let avg = (soma/newArr.length)
      return parseFloat(avg.toFixed(2));
  }else{
      return 0;
  }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArr = [];
  if(!moviesArray.length == 0){
      newArr = moviesArray.sort((a,b) => {
          if( a.year < b.year ){
              return -1
          }else if( a.year > b.year ){
              return 1
          }else{
              return a.title.localeCompare(b.title)
          }
      })
  }
return newArr;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArr = [];
  let diferentArr = moviesArray;
    let newArray2 = [];
    if(!diferentArr.length == 0){
        newArr = diferentArr.sort((a,b) => a.title.localeCompare(b.title))
        newArr.forEach((element, index) => {
            if(index < 20){
                newArray2[index] = element.title;
            }else{
                return newArray2;
            }
        });
    }
    return newArray2;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
