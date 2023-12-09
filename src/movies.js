

let testArr = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 8.3,
  },
  {
    title: "A Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: "A Godfather",
    year: 1965,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: 'Xchindler"s List',
    year: 1994,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    score: 8.9,
  },
  {
    title: 'Xchindler"s List',
    year: 2003,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    score: 8.9,
  },
];

let testArr20 = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "1",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "1",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "1",
];
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allTheDirectors = moviesArray.map(function (element) {
    return element.director;
  });
  return allTheDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let moviesDirector = moviesArray.filter(function (element) {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return moviesDirector.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avrgScore = moviesArray.reduce(function (sum, currVal) {
    if (typeof currVal.score === "number") {
      return sum + currVal.score;
    } else {
      return sum + 0;
    }
  }, 0);
  if (moviesArray.length === 0) {
    return 0;
  } else {
    return Math.round((avrgScore / moviesArray.length) * 100) / 100;
  }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  
  let onlyDrama = moviesArray.filter(function (element) {
    return element.genre.includes("Drama");
  });
  
  return scoresAverage(onlyDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedByYear = moviesArray.map(function (element) {
    return element;
  });
  
  sortedByYear.sort(function (a, b) {
    let yearA = a.year;
    let yearB = b.year;
    if (yearA > yearB) return 1;
    if (yearB > yearA) return -1;
   
    if (yearA === yearB) {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  
  let sortedByTitle = moviesArray.map(function (element) {
    return element.title;
  });

  sortedByTitle.sort();

  if (sortedByTitle.length > 20) {
    return sortedByTitle.slice(0, 20);
  } else {
    return sortedByTitle;
  }
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  let duration_Minutes = JSON.parse(JSON.stringify(moviesArray));
  
  for (let i = 0; i < duration_Minutes.length; i++) {
    duration_Minutes[i].duration = toNumMins(duration_Minutes[i].duration);
  }
  return duration_Minutes;
}


function toNumMins(hoursAndMinutesStr) {
  let strToMin = hoursAndMinutesStr.split(" ");
  for (let i = 0; i < strToMin.length; i++) {
    if (strToMin[i].includes("h"))
      strToMin[i] = strToMin[i].replace("h", "");
    if (strToMin[i].includes("min"))
      strToMin[i] = strToMin[i].replace("min", "");
    strToMin[i] = parseInt(strToMin[i]);
    if (i === 0) strToMin[i] *= 60;
  }
  let totalMins = strToMin.reduce(function (sum, currVal) {
    return sum + currVal;
  });
  return totalMins;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  
  if (moviesArray.length == 0) return null;

 
  let allYears = [];
  moviesArray.forEach((element) => {
    allYears.push(element.year);
  });
  

 
  allYears.sort(function (a, b) {
    return b - a;
  });
 


  let years = [];
  allYears.forEach((element) => {
    if (!years.includes(element)) years.push(element);
  });
  

  let yearsAs2dArray = [[]];
 

  for (let i = 0; i < years.length; i++) {
    let temp = [];
    for (let j = 0; j < moviesArray.length; j++) {
      if (moviesArray[j].year === years[i]) {
        temp.push(moviesArray[j]);
      }
    }
    yearsAs2dArray.push(temp);
  }
    

  yearsAs2dArray.shift();

 
  let yearAndAvrScore = [];
  for (let i = 0; i < yearsAs2dArray.length; i++) {
    let avrScore = scoresAverage(yearsAs2dArray[i]);
    let tempObj = {};
    tempObj.year = yearsAs2dArray[i][0].year;
    tempObj.avrScore = avrScore;
    yearAndAvrScore.push(tempObj);
  }

  
  yearAndAvrScore.sort(function (a, b) {
    let scoreA = a.avrScore;
    let scoreB = b.avrScore;
    if (scoreA > scoreB) return -1;
    if (scoreB > scoreA) return 1;
    if (scoreB === scoreA) {
      return a.year - b.year;
    }
  });

  
  return `The best year was ${yearAndAvrScore[0].year} with an average score of ${yearAndAvrScore[0].avrScore}`;
}



