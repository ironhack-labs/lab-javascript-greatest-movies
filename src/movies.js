const myMovies = [
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
    }
]

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (arr) {
    let directors = arr.map(function (movie){
        return movie.director
    })
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function removeDups(uniqueDirectors) {
    let unique = {};
    uniqueDirectors.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }
  removeDups(uniqueDirectors)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    let stevenDrama = arr.filter(function (movie) {
      if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
        return true
      }
    })
    return stevenDrama
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let length = 0;
    let ratingsSum = arr.reduce(function (sum, val){
      if(!val.rate) {
        return sum
      } else { 
        length++;
      return sum + val.rate}
    }, 0)
    
    let num = ratingsSum/length   
      return +(Math.round(num + "e+2")  + "e-2")
  
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let allDrama = arr.filter(function (movie) {
      if (movie.genre.includes("Drama")) {
        let length = 0;
        let dramaRatingsSum = arr.reduce(function (sum, val){
      if(!val.rate) {
        return sum
      } else { 
        length++;
      return sum + val.rate}
    }, 0)
    return dramaRatingsSum/length 
    }})
    return allDrama.length;
   }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    const sorted = [...arr].sort(function (a, b) {
      if (a.year > b.year) return -1;
      if (a.year < b.year) return 1;
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
        return arr
  });
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
