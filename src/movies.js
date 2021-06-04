// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const { some } = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(movies) {   
let directorsArray= movies.map((movie)=>{
return movie.director;

})return directorsArray;  //IS THIS RETURN THING IN THE RIGHT PLACE?
}
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someArr) {
let stevenArray=someArr.filter((someMovie)=>{
return someMovie.director ==='Steven Spielberg' && someMovie.genre.includes('Drama');

}) return stevenArray.length;
} 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(someArr) {
 let scoreAv= someArr.reduce((sum, movie)=>{
return (sum+ movie.score) / someArr.length;

 }, 0)

 return scoreAv.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(someArr) {

let dramaMovies=someArr.filter((movie)=>{
return movie.genre.includes("Drama");

let dramaScoreAv= dramaMovies.reduce((sum, movie)=>{        //SCOPE??
return (sum + movie.score) / dramaMovies.length;



},0)

  }) return dramaScoreAv.toFixed(2);;    

}     

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

//SORT-METHOD first clone !! mutates the original array!!!!!!!

function orderByYear(someArr) {    

  let myStringArr = JSON.stringify(someArr);

  let myCloneArr = JSON.parse(myStringArr); 
  
  return myCloneArr;            //= return de-stringified clone-array??

  myCloneArr.sort(() =>{


  })
return ................

}     









// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(someArr) {

//reduce to title first??? //REDUCE to title property first?  with return keyword,  Then SORT

let orderedTitleArr = someArr.reduce((movie)=> {

  return movie.title.sort();  //sorts alphabetically !!!!!

let firstTwenty= orderedTitleArr.filter((movie) => {

return orderedTitleArr.indexOf(movie)<=20;

})




return firstTwenty;
 

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
