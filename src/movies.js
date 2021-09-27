// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies 
// so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  // Map & Filter
  const directors =  movies.map(movie => movie.director);
  // indexOf returns the first index where the item is found.
  // if the indexOf is equal === index of the item --> is unique or not repeated
  // if the indexOf different of the index of the item--> it's repeated
  const uniqueDirectors = directors.filter((director, index) => directors.indexOf(director) === index);
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  // Filter
  // 1 - check Director: movie.director AND
  // 2 - includes --> check for a value inside an array 
function howManyMovies(movies) {
   // check the array is empty
  if(!movies.length) return 0;
  const drama = movies.filter(movie => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return drama.length; // returns the number of drama movies
}

// Iteration 3: All scores average - Get the average of all scores 
// with 2 decimals
function scoresAverage(movies) {
  // check the array is empty
  if(!movies.length) return 0;
  // Map --> create an array with only scores
  const scoreArr = movies.map(movie => movie.score);
  // Reduce
  // initial value = 0, acc --> 0, and curr at index 0
  const scoresSum = scoreArr.reduce((acc, curr) => {
    if(!curr) { // if there is no score in the current item, 
      return acc + 0; // set the value to 0
    } else {
      return acc + curr;
    }
  }, 0); //initial value of 0
     // with 2 decimals, and convert into a number 
    return Number((scoresSum/scoreArr.length).toFixed(2));
}
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  // Filter -> includes --> check for a value inside an array 
  // Reduce -> average
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  // reuse the function --> scoresAverage(array)
  const dramaScore = scoresAverage(dramaMovies);
  return dramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  //create a new array to use sort
  const moviesToOrder = movies.map(movie => movie);
  // order by year - Ascending
  const orderByYear = moviesToOrder.sort((a, b) => a.year - b.year);
  // order by title if year is equal - Ascending
  const orderByYearbyTitle = orderByYear.sort((a,b) => {
    if (a.year === b.year) { // order by the title
      if(a.title < b.title) return -1; // a before  b
      if(a.title > b.title) return 1; // a after b, or b before a
      if(a.title === b.title) return 0;
    }
  });
  return orderByYearbyTitle ;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // create a new array to use sort
  const moviesByTitle = movies.map(movie => movie.title);
  //compare strings
  const sortByTitle = moviesByTitle.sort((a, b) => {
    if(a < b) return -1; // a before  b
    if(a > b) return 1; // a after b, or b before a
    if(a === b) return 0;
  })
  // take only the 20 first titles - splice
  const firstTwentyTitles = sortByTitle.splice(0, 20);
  return firstTwentyTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const moviesWithDuration = movies.map( movie => {
    // create minutes--> the result is string, convert with Number()
    // if there is no value/not defined, Number(var), var will be assign with integer 0
    // Number(undefined || 0) --> Number(0)  ///  Number(null || 0)--> 0
    const minutes = Number(movie.duration.split('min')[0].split(" ")[1] || 0); 
    // create hours, multiply by 60 min --> 1h --> 60min
    const hoursToMinutes = Number(movie.duration.split('h')[0] || 0) * 60;
    // sum in minutes
    const totalMinutes = minutes + hoursToMinutes;

    // change a property without mutate the original object
    // option 1 - spread operator
    // return {...movie, duration: totalMinutes}
    // option 2
    // create an empty object {} --> and push all 'movie' key-value pairs into this object {}
    // and modify the property--> duration with new value
    return Object.assign({}, movie, {duration: totalMinutes});
  })
  return moviesWithDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length) return null;
  // 1 - create an empty Object to group by year =  score
  // { year1: [score1, score2, score3...], year2: [score1]}
  const scoreByYear = {};
  // Iterate to assign the result to an object grouped by year and score
  movies.forEach( movie => {
    // set an empty object group by year--> year : [score1, score2..]
    let year = movie.year;
    let score = movie.score;
    // if the property year is not in the object, at first is empty
    // set the property and assign the score --> year = [score]
    if (!scoreByYear[year]) { // if there is no property year, set the year = [score]
      scoreByYear[year] = [score]; //array to push the scores
    } else { // the year exists, so push the score to the array
      //So, if 1980 exists, push the score--> scoreByYear[1980].push(2) --> { 1980 = [5, 2] }
      scoreByYear[year].push(score);
    }
  });
  // 2 -Iterate over each year of the object, to sum the scores and get the average
  // to access the values, iterate over the Object.keys
  // access the values with the property key -->scoreByYear[2015] --> [8.2, 8.1, 8.1, 8.1]
  const result = Object.keys(scoreByYear).map(year => {
    // assign the value of scoreByYear[year]--> to const scores
    const scores = scoreByYear[year];  //[8.2, 8.1, 8.1, 8.1]
    // sum the values
    const sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue); //no initial value-> acc = first value, curr= second value
    const avg = sum/scores.length;
    // return object with year an average
    return {
      year: year,
      avg: avg,
    }
  });
  // 3- Reduce - compare to get the max score
  const finalResult = result.reduce((previous, currentValue) => {
    if(currentValue.avg > previous.avg) { 
      return currentValue;
    } else if(previous.avg > currentValue.avg){
      return previous;
    } else { // if the year is equal, returns the oldest year
      return previous.year < currentValue.year ? previous : currentValue;
    }
  });

  return `The best year was ${finalResult.year} with an average score of ${finalResult.avg}`
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
