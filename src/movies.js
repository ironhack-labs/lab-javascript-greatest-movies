let testArr = [
  {
    title: "Paths of Glory",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    rate: 8,
  },
  {
    title: "Paths of Glory 2",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    rate: 9,
  },
  {
    title: "Django Unchained 2",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "5h",
    genre: ["Western"],
    rate: 6,
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "45min",
    genre: ["Western"],
    rate: 4,
  },
  {
    title: "Django Unchained 2",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "5h",
    genre: ["Western"],
    rate: 6,
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "45min",
    genre: ["Western"],
    rate: 4,
  }, 
  {
    title: "Paths of Glory",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    rate: 8,
  },
  {
    title: "Paths of Glory 2",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    rate: 9,
  },
  {
    "title": "Léon",
    "year": 1988,
    "director": "Luc Besson",
    "duration": "1h 50min",
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rate": 8.6
  },
  {
    "title": "Saving Private Ryan",
    "year": 1998,
    "director": "Steven Spielberg",
    "duration": "2h 49min",
    "genre": [
      "Drama",
      "War"
    ],
    "rate": 8.6
  },
  {
    "title": "Sen to Chihiro no kamikakushi",
    "year": 2001,
    "director": "Hayao Miyazaki",
    "duration": "2h 5min",
    "genre": [
      "Animation",
      "Adventure",
      "Family",
      "Fantasy",
      "Mystery"
    ],
    "rate": 8.6
  },
  {
    "title": "American History X",
    "year": 1998,
    "director": "Tony Kaye",
    "duration": "1h 59min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 8.5
  },
  {
    "title": "C\"era una volta il West",
    "year": 1968,
    "director": "Sergio Leone",
    "duration": "2h 44min",
    "genre": [
      "Western"
    ],
    "rate": 8.6
  },
  {
    "title": "Interstellar",
    "year": 2014,
    "director": "Christopher Nolan",
    "duration": "2h 49min",
    "genre": [
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "rate": 8.6
  },
  {
    "title": "Psycho",
    "year": 1960,
    "director": "Alfred Hitchcock",
    "duration": "1h 49min",
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "rate": 8.5
  },
  {
    "title": "The Green Mile",
    "year": 1999,
    "director": "Frank Darabont",
    "duration": "3h 9min",
    "genre": [
      "Crime",
      "Drama",
      "Fantasy",
      "Mystery"
    ],
    "rate": 8.5
  }
];

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

turnHoursToMinutes(testArr);

/*
//Nicolas
function turnHoursToMinutes(movies) {
const copiedMovies = [...movies];
const moviesArray = copiedMovies.map((movie) => {
  if (!movie.duration.match("min")) {
    let timeArray = movie.duration.replace(/[a-z]/gi, "");
    let runningTime = Number(timeArray * 60);
    movie.duration = runningTime;
  } else if (!movie.duration.match("h")) {
    let timeArray = movie.duration.replace(/[a-z]/gi, "");
    let runningTime = Number(timeArray);
    movie.duration = runningTime;
  } else {
    let timeArray = movie.duration.replace(/[a-z]/gi, "").split(" ");
    let runningTime = Number(timeArray[0] * 60) + Number(timeArray[1]);
    movie.duration = runningTime;
  }
  return movie;
});
return moviesArray;
};*/


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

bestYearAvg(testArr);


 