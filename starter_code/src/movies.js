/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
  return array.map(e => {
    let copy = JSON.parse(JSON.stringify(e));
    let h = e.duration.indexOf("h") > -1 ? parseInt(e.duration.split(" ")[0]) : 0;
    let min = e.duration.indexOf("min") > -1 ? (e.duration.indexOf(" ") > -1 ? parseInt(e.duration.split(" ")[1]) : parseInt(e.duration.split(" ")[0])) : 0;
    copy.duration = h*60 + min;
    return copy;
  })
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  // gotta do that for the tests -.-
  if (!array || array.length < 1) return undefined;
  return parseFloat((array.reduce((sum, e) => sum += e.rate, 0) / array.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  return ratesAverage(array.filter(e => e.genre.includes("Drama")));
}

// Order by time duration, in growing order
function orderByDuration(array) {
  return array.sort((a, b) => {
    return a.duration - b.duration !== 0 ? a.duration - b.duration : (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
  })
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  // tests...
  if (!array || array.length < 1) return undefined;
  return `Steven Spielberg directed ${array.filter(e => e.director.toLowerCase() === "steven spielberg" && e.genre.includes("Drama")).length} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  return array.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1).filter((elem, i) => i < 20).map(e => e.title);
}

// Best yearly rate average
function bestYearAvg(array) {
  if (!array || array.length < 1) return undefined;
  let yearAvg = {};
  array.forEach(element => {
    if(!yearAvg.hasOwnProperty(element.year)) yearAvg[element.year.toString()] = [];

    yearAvg[element.year.toString()].push(element.rate)
  });
  let max = 0;
  let maxYear;
  for(let year in yearAvg) {
    yearAvg[year] = parseFloat((yearAvg[year].reduce((sum, e) => sum += e, 0) / array.length).toFixed(2));
    if(yearAvg[year] > max || (yearAvg[year] === max && year < maxYear)) {
      max = yearAvg[year];
      maxYear = year;
    }
  }
  return `The best year was ${maxYear} with an average rate of ${max}`;
}
