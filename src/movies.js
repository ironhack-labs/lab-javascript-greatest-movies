// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
      const mapped = moviesArray.map(function(element) {
        return element.director});
      const mappedClean = mapped.filter(function (element, index, arr) {
        return arr.indexOf(element) === index;
      });
    return mappedClean; 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const totalMovies = moviesArray.filter(function (element) {
    if(element.director === 'Steven Spielberg' && element.genre.includes('Drama')) {
      return true;
    }
  });
  return totalMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray.length === 0){
    return 0;
  } 
  const averageScore = moviesArray.reduce(function(accum, currVal) {
    if( !currVal.score){
      return accum + 0;
    }
    return accum + currVal.score;
  },0);
  return  +(averageScore / moviesArray.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const totalDramaMovies = moviesArray.filter( element => element.genre.includes('Drama'));
  return scoresAverage(totalDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedByYear = [...moviesArray].sort(function(a,b) {
    if(a.year === b.year){
      if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1;
      }
      else if (a.title.toLowerCase() > b.title.toLowerCase()){
        return 1;
      } else {
        return 0;
      }
    } else {
      return a.year - b.year
    }
  });
  return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderedAlpha = [...moviesArray].sort(function(a,b) {   
      if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1;
      }
      else if (a.title.toLowerCase() > b.title.toLowerCase()){
        return 1;
      } else {
        return 0;
      }
  });
  const orderedAlphaLess20 = orderedAlpha.filter((el, index) => index < 20 );
    
  return orderedAlphaLess20.map(element => element.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const convertedDuration = moviesArray.map(function(element) {
    let tempArray ;
    let hours;
    let mins;
    if(element.duration.includes("min")) {
      tempArray = element.duration.split(" ");
      hours = tempArray[0].replace("h","");
      mins = tempArray[1].replace("min","");
      return {...element, duration: parseFloat(hours)* 60 + parseFloat(mins)};
    } else {
      return {...element, duration: parseFloat(element.duration.replace("h","")* 60)};
    }
  });
  return convertedDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if(moviesArray.length === 0){
    return null;
  }
  const bestYearSort = [...moviesArray].sort((accum, currVal) => accum.year - currVal.year);

  //Searching for most frequent year.
  let year = 0;
  let avg = 0;
  const bestYear = bestYearSort.filter(function(element, index, arr){
    const bestYearAvgArray = arr.filter(function(arrElement, arrIndex,arrArr) {
      
    });

  });
  console.log(`The best year was ${year} with an average score of ${avg}`);
}


console.log(getAllDirectors(movies));