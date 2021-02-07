// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movieList) {
  // console.log("> in get q,l directors function");

  const directors = movieList.map((movie) => {
    // console.log(movie.director);
    return movie.director;
  });

  // console.log(directors);
  return directors;
}

/*
const getAllDirectors = (movies) => movies.map(movie => movie.director);
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//function howManyMovies(movieList) {
//    console.log ("> in get q,l directors function");
//   const numberOfMovie = movieList.length
//   return numberOfMovie
//}
//  const filteredMovie = movieList.filter(function(directors){
//      return directors == "Steven Spielberg" && "drama"
// });

function howManyMovies(movies) {
  //   console.log (movies)
  return movies.filter((movie) => {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  }).length;
}

// const getAllDirectors = (array) => {const dirArr= array.map((element)=> element.director)
//   return dirArr;}
//   console.log(dirArr);
//   }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

//function ratesAverage(movies) {
//if (movies.length===0){
//  return 0;
//}
//const Allrates = movies.map(value => {
//  return value.rate;
// 
//});
//const sumOfRates = arrayOfRates.reduce ((acc, rate) => {
//  return acc + rate;
//},0);
//return sumOfRates / movies.length;
//} 

function ratesAverage(moviesArray) {
  var rateSum = moviesArray.reduce(function (accumulator, movie) {
    return accumulator + Number(movie.rate);
  }, 0);
  return Number((rateSum / moviesArray.length).toFixed(2));
}
console.log('The average rate is: ' + (ratesAverage(movies)));

//  const rates = movies.reduce(function (accumulator, movies) {
//    console.log(rates);
//  }, 0);
//  const tmp = (accumulator += movies.rate);
//  return tmp;


// Iteration 4: Drama movies - Get the average of Drama Movie

function dramaMoviesRate(movieArray) {
  let dramaMovies = movieArray.filter(function (movieElement) {
    return movieElement.genre.indexOf('Drama') !== -1;
  });
  if (isNaN(ratesAverage(dramaMovies))) {
    return 0;
  }
  return (ratesAverage(dramaMovies));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {
  function compare(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
  }
  let orderedArray = array.slice().sort(compare);
  return orderedArray;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  moviesArray.sort(function (a, b) {
    return a.title < b.title ? -1 : 1;
  });
  let top20Movies = [];
  let limit = 20;
  if (moviesArray.length < 20) {
    limit = moviesArray.length;
  }
  for (let i = 0; i < limit; i++) {
    top20Movies.push(moviesArray[i].title);
  }
  return top20Movies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    const duration = movie.duration.split(' ');    
//  console.log (duration)
// resultat du console log = chaque objet séparement composé d'un array 0: h et 1: min
    let minutes = 0;
    for (let time of duration) {
      if (time.includes('h')) {
// find in MDN : parseInt - convert a string into numbers        
        minutes += parseInt(time) * 60;
// les minutes sont converties en heure et nombres, les minutes restes des minutes.       
      } else {
        minutes += parseInt(time);
      }
    
    }
     
    return {
      ...movie,
      duration: minutes
    };
  });
}

console.log (turnHoursToMinutes(movies))


//  { let movieDuration = moviesArray.filter(function (movieElement){
//    return movieElement.duration;
//  });
//  console.log (movieDuration);
//  if (isNaN(turnHoursToMinute(movieDuration))) {
//    return 0;
//  }
//  console.log (movieDuration)
//  if (movieDuration.length >0) {
//    return Number;
//  }
//}
//  console.log (movieDuration);
    

  


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
