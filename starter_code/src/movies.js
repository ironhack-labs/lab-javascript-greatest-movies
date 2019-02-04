/* eslint no-restricted-globals: 'off' */

// -------------------------------------------- //
// Turn duration of the movies from hours to minutes  
// -------------------------------------------- // 
const setDurationInMinutes = arrayInput => (
  arrayInput.map(element => {
    let hour = parseInt(element.duration.slice(0, element.duration.indexOf("h")) * 60) || 0;
    let min = parseInt(element.duration.slice(element.duration.indexOf("h") + 2, element.duration.indexOf("min"))) || 0;
    element.duration = hour + min;
    return element;
  })
)

console.log(setDurationInMinutes(movies));

// Check if some have a missing duration now
const hoursCheck = movies.filter(movie => movie.duration == NaN);
console.log(hoursCheck);

// -------------------------------------------- //
// Get the average of all rates with 2 decimals 
// -------------------------------------------- //  
const calcTotalRates = arrayInput => (
  arrayInput.reduce((acc, current) => {
    return parseFloat(acc) + parseFloat(current.rate);
  }, 0) // 0 needed because it is an object
)

const calcAvgRate = arrayInput => {
  return (calcTotalRates(arrayInput) / arrayInput.length).toFixed(2);
}

console.log("Average rating is: " + calcAvgRate(movies));

// -------------------------------------------- //
// Get the average of Drama Movies
// -------------------------------------------- // 
const filterGenre = (arrayInput, genreInput) => {
  return arrayInput.filter(movie => movie.genre.indexOf(genreInput) > 0);
}

// set genre filter
let genre = "Drama";
console.log("Average rating " + genre + " is: " + calcAvgRate(filterGenre(movies, genre)));

// -------------------------------------------- //
// Order by time duration, in growing order
// -------------------------------------------- //
// this order function is screwed up by the sorting later on.  so now it's ordered by year
// I tried to make a copy of the movies dataset, but I did not get that working... 

const sortByDurationTitle = arrayInput => (
  arrayInput.sort((a, b) => {
    // equal duration, then look at title
    if (a.duration == b.duration) {
      return a.title.localeCompare(b.title);
    } // else
    return a.duration - b.duration;
  })
)

console.log(sortByDurationTitle(movies));

// -------------------------------------------- //
// How many movies did STEVEN SPIELBERG in Drama
// -------------------------------------------- //
let howManyMovies = movies.filter(movie => movie.genre.indexOf("Drama") >= 0 && movie.director == "Steven Spielberg").length;

console.log("Steven Spielberg did " + howManyMovies + " drama movies"); // 4

// -------------------------------------------- //
// Order by title and print the first 20 titles
// -------------------------------------------- //
let orderAlphabetically = movies.sort((a, b) => {
  return a.title.localeCompare(b.title);
})

top20 = [];
for (let i = 0; i < Math.min(20, orderAlphabetically.length); i++) {
  top20.push(orderAlphabetically[i].title);
}

console.log(top20);

// -------------------------------------------- //
// Best yearly rate average
// -------------------------------------------- //

// order by year 
let moviesYear = movies.sort((a, b) => {
  return a.year - b.year;
})

// setting counters and initial values
let averageList = [];
let total = parseFloat(movies[0].rate);
let counter = 1;
let movieList = [movies[0].title];

// Go through all the elements. Start at 1 so we can compare with previous year.
for (let i = 1; i < movies.length; i++) {
  // if previous year is different, add previous year as an average to list
  if (movies[i].year != movies[i - 1].year) {
    averageList.push({
      year: movies[i - 1].year,
      average: +parseFloat(total / counter).toFixed(2),
      movies: movieList
    });
    // and reset counters
    total = 0;
    counter = 0;
    movieList = [];
  } // (else) when the next iteration is the same year
  // add this movie's rate to the total + storing the titles
  total += parseFloat(movies[i].rate);
  movieList.push(movies[i].title)
  // set counter for this year + 1
  counter += 1;
};

// logging the whole list with average per year and titles included
console.log(averageList);

// calculate highest ranking year
let highest = averageList[0].average;

for (let i = 1; i < averageList.length; i++) {
  if (averageList[i].average > highest) {
    highest = averageList[i].average;
    winner = averageList[i]
  }
}

console.log(winner);    