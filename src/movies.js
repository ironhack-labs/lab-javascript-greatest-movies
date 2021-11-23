// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr?arr.map(director => director.director):null;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies?(movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") !== -1?true:false).length):0;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  result = movies.reduce((sum,score) => {
    score.score === undefined?score.score = 0:null;
    return parseFloat((sum + score.score/movies.length).toFixed(2))
  },0);
  return result;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr){
  result = arr.reduce((sum,score) => score.genre.indexOf("Drama") !== -1?sum + score.score:sum,0);
  divisor = arr.filter(movie => movie.genre.indexOf("Drama") !== -1?true:false).length;
  return result?Number((result/divisor).toFixed(2)):0;
  //return arr.reduce((sum,score) => score.genre.indexOf("Drama") !== -1?sum + score.score:sum,0)?parseFloat((arr.reduce((sum,score) => score.genre.indexOf("Drama") !== -1?sum + score.score:sum,0)/arr.filter(movie => movie.genre.indexOf("Drama") !== -1?true:false).length).toFixed(2)):0;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const sortedArr = arr.slice(0);
  sortedArr.sort((b,a)=> a.year!==b.year?b.year-a.year:b.title.localeCompare(a.title));
    return sortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let sortedArr = [];
  arr.forEach(movie => sortedArr.push(movie.title));
  sortedArr.sort();
  sortedArr = sortedArr.slice(0,20);
  return sortedArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let alteredArr = [];
  let timeArr = [];
  arr.forEach(movie => {
    alteredArr.push({title:movie.title,year:movie.year,director:movie.director,duration:0,genre:movie.genre,score:movie.score});
    timeArr.push(movie.duration);
  });
  for(let i = 0; i<timeArr.length;i++){
    let time = timeArr[i].split('h');
    hour = parseInt(time[0],10);
    minutes = parseInt(time[1],10);
    timeArr[i] = 0;
    if(hour === hour){
      timeArr[i] += hour*60;
    }
    if(minutes === minutes){
      timeArr[i] += minutes;
    }
  }
  alteredArr.forEach((movie,index)=>movie.duration += timeArr[index]);
  return alteredArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  let arrYears = [];
  let sum = 0;
  let divisor = 0;
  let maxScore= 0;
  let year = 0;

  arr.sort((b,a)=> b.year - a.year);
  arr.forEach(element=> arrYears.push(element.year));
  arrYears = arrYears.filter((year, idx) => arrYears.indexOf(year) === idx);
  arrYears.forEach(currentYear => {
    sum = 0;
    divisor = 0;
    arr.forEach(movie => {
      if(movie.score === undefined){
        movie.score = 0;
      } 
      if(currentYear === movie.year){
        sum += movie.score;
        divisor++;
      }
    });
    if(sum/divisor > maxScore){
      year = currentYear;
      maxScore = sum/divisor;
    }
  });
  return arr.length===0?null:`The best year was ${year} with an average score of ${maxScore}`;
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
