// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  return movies.map((movie) => {
    return movie.director;
  });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
  const filteredMoviesArray = movies.filter((movie) => {
    return (
      movie.director.toLowerCase() === "steven spielberg" &&
      movie.genre.includes("Drama")
    );
  });
  return filteredMoviesArray.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const ratesSum = movies.reduce(function (acc, el) {
    if (!el.rate) {
      return acc + 0;
    }
    return acc + el.rate;
  }, 0);
  const average = (ratesSum / movies.length).toFixed(2);
  return +average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

/* // Iteration 1: All directors? - Get the array of all directors.
 // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

 function getAllDirectors(movies) {
   return [
     ...new Set(
       movies.map((movie) => {
         return movie.director;
       })
     ),
   ];
 }
 // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

 function howManyMovies(movies) {
   let directed = movies.filter((movie) => movie.director == "Steven Spielberg");
   let dramaMovies = directed.filter((movie) =>
     movie.genre.join(" ").toLowerCase().split(" ").includes("drama")
   );
   return dramaMovies.length;
 }
 // Iteration 3: All rates average - Get the average of all rates with 2 decimals

 function ratesAverage(movies) {
   let average = 0;
   if (movies.length > 0) {
     movies.reduce((acc, value, index, arr) => {
       if (typeof value.rate !== "undefined") {
         average = acc + value.rate;
       }
       return average;
     }, 0);
     average = parseFloat((average / movies.length).toFixed(2));
   }
   return average;
 }
 // Iteration 4: Drama movies - Get the average of Drama Movies

 function dramaMoviesRate(movies) {
   return ratesAverage(
     movies.filter((movie) =>
       movie.genre.join(" ").toLowerCase().split(" ").includes("drama")
     )
   );
 }

 // Iteration 5: Ordering by year - Order by year, ascending (in growing order)

 function orderByYear(movies) {
   const moviesAux = [...movies];
   moviesAux.sort((a, b) => {
     if (a.year == b.year) {
       return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
     }
     return a.year - b.year;
   });
   return moviesAux.sort((a, b) => {
     return a.year - b.year;
   });
 }

 // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

 function orderAlphabetically(movies) {
   let moviesAux = [...movies];
   moviesAux = moviesAux.map((movie) => movie.title);
   moviesAux.sort((a, b) => {
     return a.toLowerCase().localeCompare(b.toLowerCase());
   });

   return moviesAux.slice(0, 20);
 }

 // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

 function turnHoursToMinutes(movies) {
   let moviesAux = movies.map((x) => x);
   moviesAux.map((movie) => {
     let hours = 0;
     let minutes = 0;
     let durationArr = String(movie.duration).split("");

     const minPlace = durationArr.indexOf("m");
     const hourPlace = durationArr.indexOf("h");

     if (hourPlace != -1) {
       hours = 60 * parseInt(durationArr.slice(0, hourPlace).join(""));
     }
     if (minPlace != -1) {
       minutes = parseInt(durationArr.slice(minPlace - 2, minPlace).join(""));
     }
     movie.duration = parseInt(hours + minutes);
   });
   return moviesAux;
 }

 */
