/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
//..sort by year
function orderByYear(array) {
    const newMoviesArray = JSON.parse(JSON.stringify(array))
    return orderByTitle(array).sort((a, b) => a["year"] - b["year"]);
}

//..sort by title (only if same year)
function orderByTitle(array) {
    const newMoviesArray = JSON.parse(JSON.stringify(array))
    return newMoviesArray.sort(function(a, b) {
      if (a["title"] < b["title"]) {
        return -1;
      } 
      if (a["title"] > b["title"]) {
        return 1;
      }
      if (a["title"] == b["title"]) {
        return 0;
      }
    }); 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function theSpielbergMovies(array) {
    const newMoviesArray = JSON.parse(JSON.stringify(array));
    const spielbergMovies = newMoviesArray.filter(theDirector => theDirector["director"] == "Steven Spielberg");
    return spielbergMovies;
}
  
function theDramaMovies(array) {
    const newMoviesArray = JSON.parse(JSON.stringify(array));
    const theDramaMovies = newMoviesArray.filter(theDrama => theDrama["genre"].includes("Drama"));
    return theDramaMovies;
}

function howManyMovies(array) {
    const dramaArray = theDramaMovies(array);
    return theSpielbergMovies(dramaArray).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
//..cut down to 20
function cutArrayToTwenty(array) {
  const newMoviesArray = JSON.parse(JSON.stringify(array))
  if (newMoviesArray.length > 20) {
    return newMoviesArray.slice(0,20);
  } else {
    return newMoviesArray;
  }
}

//..Get titles only
function getTitleOnly(array) {
  const newMoviesArray = JSON.parse(JSON.stringify(array));
  const titlesArray = newMoviesArray.map(theTitle => {
    return theTitle["title"]
  })
  return titlesArray
}

function orderAlphabetically(array) {
  let twentyMovies = orderByTitle(array);
  twentyMovies = cutArrayToTwenty(twentyMovies);
  twentyMovies = getTitleOnly(twentyMovies);
  return twentyMovies;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

//..filter objects with score and keep socre only in new array
function theAverageScoreArray(array) {
  const newMoviesArray = JSON.parse(JSON.stringify(array));
  const theAverageScore = newMoviesArray.filter(callback => callback["rate"] > 0);
  const allRates = theAverageScore.map(theRate => theRate["rate"]);
  return allRates;
}

//.. calculate average rate
function ratesAverage(array) {
  if (array.length < 1 || array.length == null || array.length == undefined) {
    return 0
  } else {
    return +(theAverageScoreArray(array).reduce((accumulator, currentValue) => accumulator + currentValue)/array.length).toFixed(2);
  }
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  const getDrama = theDramaMovies(array);
  if (getDrama.length < 1 || getDrama.length == null || getDrama.length == undefined) {
    return 0
  } else {
  const getScoreOnly = theAverageScoreArray(getDrama);
  return +(getScoreOnly.reduce((accumulator, currentValue) => accumulator + currentValue)/getDrama.length).toFixed(2);
  }
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  const newMoviesArray = JSON.parse(JSON.stringify(array));
  newMoviesArray.forEach(element => element["duration"] = toMinutes(element["duration"]));
  return newMoviesArray
}

function toMinutes(string) {
  if (string.includes("h") && string.includes("min")) {
    let minutes = string.replace(/h|min/g, "");
    minutes = minutes.split(" ");
    return +minutes[0]*60 + +minutes[1];
  } else if (string.includes("h")) {
    let minutes = string.replace(/h/g, "");
    return +minutes*60;
  } else if (string.includes("min")) {
    let minutes = string.replace(/min/g, "");
    return +minutes;
  } else {
    return +minutes;
  } 
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
function yearsOnly(array) {
  const newMoviesArray = JSON.parse(JSON.stringify(array));
  const years = newMoviesArray.map(theRate => theRate["year"]);
  const result = years.filter((item, index) => years.indexOf(item) === index);
  return result.sort((a, b) => a - b);
}
// yearsOnly(movies)

function filter1927(array, year) {
  const newMoviesArray = JSON.parse(JSON.stringify(array));
  let theYear = year;
  const onlyTheYear = newMoviesArray.filter(callback => callback["year"] == theYear);
  const rates = onlyTheYear.map(theRate => theRate["rate"]);
  return [theYear, +(rates.reduce((accumulator, currentValue) => accumulator + currentValue)/onlyTheYear.length).toFixed(2)];
}


function yearRate(array) {
  for (let i = 0; i < yearsOnly(array).length; i++) {
    let result = filter1927(array, yearsOnly(array)[i]);
    let resultNext = filter1927(array, yearsOnly(array)[i+1]);
    let theBest = result;
    if(resultNext[1]>result[1]) {
      theBest = resultNext;
    }
  return theBest;
  }
}

function bestYearAvg(array) {
  if (array.length < 1 || array.length == null || array.length == undefined) {
    return null    
  } else {
    let year = yearRate(array)[0];
  let rate = yearRate(array)[1];
  console.log(`The best year was ${year} with an average rate of ${rate}`)
  }
}

