
// import movies from "./data.js"
let movieLab = [
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "director": "Francis Ford Coppola",
    "duration": "2h 55min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.2
  },
  {
    "title": "The Godfather: Part II",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "duration": "3h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "duration": "2h 32min",
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rate": 9
  },
  {
    "title": "12 Angry Men",
    "year": 1957,
    "director": "Sidney Lumet",
    "duration": "1h 36min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 8.9
  },
  {
    "title": "Schindler\"s List",
    "year": 1993,
    "director": "Steven Spielberg",
    "duration": "3h 15min",
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "rate": 8.9
  }]

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
let directors = array.map(function(movie) {
  console.log(movie.director);
  return movie.director;
  })
  return directors;
}
getAllDirectors(movieLab);


// Iteration 2

function howManyMovies(array) {
const numberMovie = array.filter(function(movie){
  if (movie.director === "Steven Spielberg") {
    return movie;
  }
})
return numberMovie.length;
}

console.log(howManyMovies(movieLab));

// // Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
let rates = array.map(function(array) {
  return array.rate;
  })

let totalRate = rates.reduce(function(acc, rate){
acc += rate;
return acc;
},0)

return Number(((totalRate / rates.length).toFixed(2)));
}

console.log(ratesAverage(movieLab));

// // Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
const dramaMovies = array.filter(function (value) {
    return value.genre.includes("Drama");
});
if(!dramaMovies.length){
  return 0;
} else {
return ratesAverage(dramaMovies);
}
}

dramaMoviesRate(movieLab);

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)



function orderByYear(movieList){
  const yearMovies = movieList.sort(function(movie1,movie2){
    if (movie1.year>movie2.year) {
      return 1;
    } else {
      return -1;
    }
  })
  return [...yearMovies];
}

console.log(orderByYear(movieLab));

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movieList){
  const titleMovies = movieList.sort(function(movie1,movie2){

    if(movie1.title>movie2.title){
      return movie1.title;
    } else {
      return movie2.title;
    }
  })
    return titleMovies.slice(0,20)
}

console.log(orderAlphabetically(movieLab));



// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


