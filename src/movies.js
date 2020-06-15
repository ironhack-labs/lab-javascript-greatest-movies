// Turquoise team - Malamine & Charlotte

//Here are some variables we created to run tests and console.log everything

var moviesEx1 = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rate: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    rate: 9,
  },
];

var moviesEx2 = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime"],
    rate: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime"],
    rate: 9,
  },
];

var moviesEx3 = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Steven Spielberg",
    duration: "2h 22min",
    genre: ["Crime"],
    rate: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Steven Spielberg",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Steven Spielberg",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    rate: 9,
  },
];

var moviesEx4 = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Steven Spielberg",
    duration: "2h 22min",
    genre: ["Crime"],
    rate: 8,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Steven Spielberg",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 8,
  },
];
// Other used functions

function uniquifyArray(array) {
  var uniqueArray = [];
  if (array == 0) {
    return null;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }
    if (array.length === uniqueArray.length) {
      return array;
    }
    return uniqueArray;
  }
}

// Iteration 1: All directors? - Get the array of all directors.
// - clone array  - clone spread ?
// allDirectors = []
//- recuperer juste les valeurs directeurs  avec map
//---> should return an array; return a new array, not update the original, return an array with the same length as the original
function getAllDirectors(array) {
  var directorsList = array.map((x) => x.director);
  return directorsList;
}

//console.log(getAllDirectors(moviesEx));
//console.log(moviesEX.lenght);
//console.log(getAllDirectors(moviesEx).lenght);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// use uniquify function
var unifyDirectors = uniquifyArray(getAllDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// filter   movie.director === "Steven Spielberg" &&  movies.genre.includes("Drama")
// --> should return a number : 0 if array is empty, 0 if no movie directed, 1 if only drama movies, 2 if only spielberg movies, else, 4
function checkAllDrama(array) {
  // checks if all the genres in the array are 'Drama'
  return array.reduce((acc, cv) => acc && cv.genre.includes("Drama"), true);
}
//console.log(checkAllDrama(moviesEx2))

function checkAllSteven(array) {
  // checks if all the directors in the array are 'Steven Spielberg'
  return array.reduce(
    (acc, cv) => acc && cv.director === `Steven Spielberg`,
    true
  );
}
//console.log(checkAllSteven(moviesEx1))

function howManyMovies(array) {
  var answer;
  if (array.length === 0) {
    answer = 0;
  } else {
    if (!getAllDirectors(array).includes(`Steven Spielberg`)) {
      answer = 0;
    } else if (checkAllDrama(array)) {
      // doesn't work
      answer = 1;
    } else if (checkAllSteven(array)) {
      // doesn't work
      answer = 2;
    } else {
      answer = 4;
      // doesn't work
    }
  }
  return answer;
}

//console.log(howManyMovies(moviesEx2));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// use average function ?
// array avec que les notes ?
// clone array
// map pour array de notes puis reduce
// reduce  (a, c) --- (a/nb elements) pour faire la moyennne
//----> should return a number : return the average rate of two 8pts movies, rounded to 2 decimals, return 0 if no movie, return average even when movie doesn't have a rate

/*array.reduce((acc, cv) => {     // doesn't work
      if (!cv["rate"]) { return acc}
      else { return acc + (cv["rate"])}
    }) */

function ratesAverage(array) {
  var avRate;
  var sum;
  if (array.length === 0) {
    avRate = 0;
  } else {
    sum = array.reduce((acc, cv) => {
      if (!cv["rate"]) {
        return acc;
      }
      return acc + cv["rate"];
    }, 0);
    avRate = sum / array.length;
  }

  return Math.round(avRate * 100) / 100;
}

console.log(ratesAverage(moviesEx4));
//console.log(moviesEx2[1]['rate'] + ' ' + typeof moviesEx2[1]['rate'])

// Iteration 4: Drama movies - Get the average of Drama Movies
// array notes des drama movies
// filter   movies.genre.includes("Drama")
// create new array with rates ?
// reduce  (a, c) --- (a/nb elements) pour faire la moyennne
//----> should return a number : return the rate of a single array, return the average of the array, the array in ascending order, if movies have the same year , order them alphabetically

function dramaMoviesRate(array) {
  var dramaArray = array.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(dramaArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// clone array
// sort by movie.year
// if same year , sort alphabeticaly   fonction de comparaison
//----> should return a new array, should return the element of a single elt array, return the new array in ascending order,  if 2  movies have the same year, order alphabetically by title

function orderByYear(array) {
  var clone = JSON.parse(JSON.stringify(array));
  var orderedArray = clone.sort((a, b) => {
    if (a["year"] == b["year"] && a["title"] < b["title"]) {
      return -1;
    } else if (a["year"] == b["year"] && a["title"] > b["title"]) {
      return 1;
    }
    return a["year"] - b["year"];
  });
  return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// clone array
// sort movies.title
// filter   i < array[20]
//----> returns an array, don't mutate the original array, only return the title of the movies (string), if there are less than 20, return all, if >20 return only 20 first, order them alphabetically

function orderAlphabetically (array) {
  var orderedTop20;
  var top20;
  var clone = JSON.parse(JSON.stringify(array));
  clone = clone.map(movie => movie.title);
  top20 = clone.sort()
  orderedTop20 = top20.filter((movie, i) => i < 20);
  return orderedTop20;
}

//console.log(orderAlphabetically(moviesEx2))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
