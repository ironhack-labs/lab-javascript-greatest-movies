// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (arr) => arr.map(element => element.director);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => 
  arr.filter(object => (object.director === 'Steven Spielberg' && object.genre.includes('Drama'))).length;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0){
    return 0;
  }
  let totalScore = arr.reduce((accumulator, element) => accumulator += element.score || 0, 0);
  let averageScore = totalScore / arr.length;
  return parseFloat((averageScore).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (arr) => scoresAverage(dramaScore = arr.filter(object => object.genre.includes('Drama')));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  return arr.slice(0).sort(function (a, b) {
    if (a.year < b.year){
      return -1;
    } else if (b.year < a.year){
      return 1;
    } else {
      if (a.title < b.title){
        return -1;
      } else if (b.title < a.title){
        return 1;
      }
      return 0
    }
  });
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let alphabeticallyOrderedArr = [];

  for(let i = 0; i < arr.length; i++){
    alphabeticallyOrderedArr.push(arr[i].title);
  };

  return alphabeticallyOrderedArr.sort().filter((element,index) => index < 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let newArr = JSON.parse(JSON.stringify(arr)).map(function(element) {

    if(typeof element.duration === 'string'){
      let durationArray = element.duration.split('');
    
      let hours = durationArray[0]*60;
  
      let mins = [];
      for (let i = 2; i < durationArray.length; i++){
        durationArray[i] = parseInt(durationArray[i]);
        if (durationArray[i] > 0){
          mins.push(durationArray[i]);
        }
      }
  
      mins = Math.floor(mins.join(''));
  
      let totalDuration = hours + mins;
  
      element.duration = totalDuration;
    } else {
      element.duration = 0;
    }

    return element;
  });
  
  return newArr;
}

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
