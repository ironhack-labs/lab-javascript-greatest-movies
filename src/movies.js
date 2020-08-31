// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);
  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function cleanDirectors(directors) {
  const directorsNames = getAllDirectors(directors);

  const cleanedDirectors = directorsNames.filter(
    (a, b) => directorsNames.indexOf(a) === b
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramas = movies.filter(
    (movie) =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spielbergDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (!movies.length) return 0;
  const allRatings = [];
  const getRates = movies.forEach((movie) => {
    if (typeof movie.rate == "number") {
      allRatings.push(movie.rate);
    } else {
      allRatings.push(0);
    }
  });

  const avgRates =
    allRatings.reduce((acc, val) => acc + val) / allRatings.length;
  return Number(avgRates.toFixed(2));
}

ratesAverage(testArr);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
  const dramaMoviesRate = ratesAverage(dramaMovies);
  return dramaMoviesRate;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const copiedMovies = [...movies];
  const sortedMovies = copiedMovies.sort(
    (a, b) => a.year - b.year || a.title.localeCompare(b.title)
  );
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const copiedMovies = [...movies];
  const sortedMovies = copiedMovies.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const firstTwenty = sortedMovies.slice(0, 20);
  let array = [];
  firstTwenty.forEach((movie) => array.push(movie.title));
  return array;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

  //Ailie
  //Make deep copy of array
  const copiedMovies = JSON.parse(JSON.stringify(movies));
  //Declare function to change format of duration
  function changeDuration(movie) {
    if (movie.duration.includes('h') && movie.duration.includes('min')) {
      let time = movie.duration.replace(/[a-z]/gi, "").split(" ");
      movie.duration = Number(time[0] * 60) + Number(time[1]);
    } else if(movie.duration.includes('h')) {
      let time = movie.duration.replace(/[h]/i, "")
      movie.duration = Number(time*60);
    } else {
      movie.duration = Number(movie.duration.replace(/[a-z\s]/gi, ""))
    }
    return movie;
  }
  //Execute function to change duration
  let mappedMovies = copiedMovies.map(movie => changeDuration(movie));
  return mappedMovies;
  } 

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  
if(!movies.length) return null;
 
// Make an array of objects containing year and rating info
 const yearAndRate = movies.map(movie => {
    const movieInfo = {
      year: movie.year,
      rate: movie.rate,
      total: 1
    };
    return movieInfo;
  })

//Sort the years in ascending order
const sortedYears = yearAndRate.sort((a,b) => a.year - b.year);

//Make new array with year, total ratings, and number of movies
let ratingsArray = [sortedYears[0]];
 for(let i = 1; i < sortedYears.length; i++) {
  if (ratingsArray[ratingsArray.length - 1].year === sortedYears[i].year) {
    ratingsArray[ratingsArray.length - 1].rate += sortedYears[i].rate;
    ratingsArray[ratingsArray.length - 1].total += 1;
  } else {
    ratingsArray.push(sortedYears[i]);
  }
 } 
 //console.log(ratingsArray);

 //Divide total ratings by number of films to get average rate
 const avgRate = ratingsArray.map(movie => {
  const movieInfo = [movie.year, movie.rate/movie.total];
  return movieInfo;
} );
//console.log(avgRate);

//Find the highest average
const avgArray = []; 
avgRate.forEach(value => avgArray.push(value[1]));
let highestAvg = Math.max(...avgArray);
//Find the best year
let bestYear = avgRate[avgArray.indexOf(highestAvg)][0];

  console.log(`The best year was ${bestYear} with an average rate of ${highestAvg}`);
  return `The best year was ${bestYear} with an average rate of ${highestAvg}`;
}