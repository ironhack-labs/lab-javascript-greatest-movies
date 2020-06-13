// Iteration 1: All directors? - Get the array of all directors.

let movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Axel",
    duration: "2h 22min",
    genre: ["Drama"],
    rate: 9.45,
  },
  {
    "title": "Into the Wild",
    "year": 2007,
    "director": "Sean Penn",
    "duration": "2h 28min",
    "genre": [
      "Adventure",
      "Biography",
      "Drama"
    ],
    "rate": 8.61
  },
  {
    "title": "Shutter Island",
    "year": 2010,
    "director": "Martin Scorsese",
    "duration": "2h 18min",
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "rate": 8.16
  },
  {
    "title": "Logan",
    "year": 2017,
    "director": "James Mangold",
    "duration": "2h 17min",
    "genre": [
      "Action",
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "rate": 8.28
  },
  {
    "title": "It Happened One Night",
    "year": 1934,
    "director": "Frank Capra",
    "duration": "1h 45min",
    "genre": [
      "Comedy",
      "Romance"
    ],
    "rate": 8.29
  },
  {
    "title": "Life of Brian",
    "year": 1979,
    "director": "Terry Jones",
    "duration": "1h 34min",
    "genre": [
      "Comedy"
    ],
    "rate": 8.19
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Steven Spielberg",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 9.75,
  },
];

// function getAllDirectors(arr) {

//   let newArr = arr.map(function (movie) {
//     return movie.director;
//   });
//   return newArr;
// }

// // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// const howManyMovies = function (array) {
//   let nbOfMovies = 0;
//   nbOfMovies= array.reduce(function (accumulator, movie) {
//     if (
//       movie.director === "Steven Spielberg" &&
//       movie.genre.includes("Drama")
//     ) {
//       nbOfMovies = accumulator + 1;
//     } else nbOfMovies = accumulator;
//     return nbOfMovies;
//   }, 0);
//   return nbOfMovies;
// };

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


const sumRates = function(array) {
    let sumOfRates =0;
    sumOfRates = 
array.reduce(function(accumulator,movie) {
    if(
        movie.rate &&
        movie.rate.toString().length===4
        ) {
    sumOfRates = accumulator+movie.rate;
}
else sumOfRates = accumulator;
return sumOfRates;
}
,0);
return sumOfRates;
}

console.log(`The sum of the rates is ${sumRates(movies)}`);

const nbRates = function(array) {
    let numberOfRates =0;
    numberOfRates = 
array.reduce(function(accumulator,movie) {
    if(movie.rate && movie.rate.toString().length===4) {
    numberOfRates++;
}
else numberOfRates=accumulator;
return numberOfRates;
}
,0);
return numberOfRates;
}

console.log(`The number of rates is ${nbRates(movies)}`);

const ratesAverage = function(array) {
    let averageOfRates=0;
    let numberOfRates = nbRates(array);
    let sumOfRates=sumRates(array);
    averageOfRates=sumOfRates/numberOfRates;
    return averageOfRates;
}


console.log(`The average of the rates is ${ratesAverage(movies)}`);

// Ajouter une condition dans le reduce pour avoir les films qui ont des notes.

// Iteration 4: Drama movies - Get the average of Drama Movies

const sumRatesDrama = function(array) {
    let sumOfRates =0;
    sumOfRates = 
array.reduce(function(accumulator,movie) {
    if(movie.rate && 
        movie.genre.includes("Drama")) {
    sumOfRates = accumulator+movie.rate;
}
else sumOfRates = accumulator;
return sumOfRates;
}
,0);
return sumOfRates;
}

console.log(`sum rate drama movies ${sumRates(movies)}`);

const nbRatesDrama = function(array) {
    let numberOfRates =0;
    numberOfRates = 
array.reduce(function(accumulator,movie) {
    if(movie.rate && 
        movie.genre.includes("Drama")) {
    numberOfRates = numberOfRates++;
}
else numberOfRates=accumulator;
return numberOfRates;
}
,0);
return numberOfRates;
}

console.log(nbRates(movies));

const dramaMoviesRate = function(array) {
    let averageOfRates =0;
    let numberOfRates = nbRatesDrama(array);
    let sumOfRates=sumRatesDrama(array);
    averageOfRates=sumOfRates/numberOfRates;
    return averageOfRates;
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = function(array) {
    let orderYear = array.sort(function(a,b)
    {
        return a.year - b.year;
    }
    )
    return orderYear;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
console.log("-------------------------");


const orderAlphabetically = function (array) {
    let orderAlph = array.sort(function(a,b)
    {
        return a.title - b.title;
    }
    )
    return orderAlph;
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
