// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  moviesArray = moviesArray.map((element) => element.director);

  const uniqueMovArr = [];

  for (let i = 0; i < moviesArray.length; i++) {
    if (uniqueMovArr.indexOf(moviesArray[i]) === -1) {
      uniqueMovArr.push(moviesArray[i]);
    }
  }
  return uniqueMovArr
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {return 0;}

  return moviesArray.filter( (element) => element.director === 'Steven Spielberg')
                    .filter( (element) => element.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {return 0;}

  // return moviesArray.reduce((a,b) =>{a+b.score;}, 0)
    const averageScore = moviesArray.reduce((a, b) => {
      // using || to add zero if there is no .score entry
      //'a' contains the last [index].score,...
      return a + (b.score || 0)
    },0)
      //to get a 'Number', -->*100/100 to fix on 2 after "0."
    return Math.round((averageScore / moviesArray.length) * 100) / 100
      //have to convert into "Number" by calling math. ,using (value*100)/100 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {return 0;}
  //use a helping var --> too much for one-line (not readable)
  let dramaMovies = 
  moviesArray.filter((element) => element.genre.includes('Drama'));
  //case no Drama movies --if drama[0] doesnt exist
  if (!dramaMovies[0]) {return 0;}

  return Number((dramaMovies.reduce((a, b) => a + b.score, 0) /
                 dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrCopy = [...moviesArray];

  const yearArr = moviesArrCopy.sort(function (a, b) {
    return (a.year - b.year) || a.title.localeCompare(b.title);
  });

  return yearArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
 
  return moviesArray.map((element) => element.title).sort()
        //kick out all elements --> index<[20] --means keep 20 elements
        .filter((element, index) => index < 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
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
