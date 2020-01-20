/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order);

function orderByYear(movies) {
  return [...movies].sort(function(movie1, movie2) {
    if (movie1.year === movie2.year) {
      if (movie1.title.localeCompare(movie2.title)) {
        return -1;
      } else {
        return 1;
      }
    } else if (movie1.year < movie2.year) {
      return -1;
    } else if (movie2.year > movie2.year) {
      return 1;
    }
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  let dramaMovies = movies.filter(
    movie =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );

  //Este me salía mal porque era con include
  // if(movies.director == "Steven Spielberg" && movies.genre == "Drama"){

  // }

  // if(movies.director != "Steven Spielberg"){
  //     return 0;
  // }
  return dramaMovies.length;
}

// Iteration 3: Alphabetic Order - Order by.year and print the first 20 titles

function orderAlphabetically(movies) {
  let order = [...movies]
    .sort((a, b) => a.title - b.title)
    .map(title => title.title)
    .sort();

  return order.splice(0, 20);
}

// // Iteration 4: All rates average - Get the average of all rates with 2 decimals


    function ratesAverage(movies){
        if (movies.length === 0) {
            return 0;
        }
       let rate = movies.reduce((acumulator, value) => acumulator + value.rate, 0);
       let moviesLength = movies.length;
       let rateAverage = rate/moviesLength;
       if (movies.rate === undefined){
       return +(rateAverage.toFixed(2));
    }

}


// Iteration 5: Drama movies - Get the average of Drama Movies

// function dramaMovies(movies) {


//     if (movies.length === 0) {
//       return 0;
//     }
  
//     let rates = movies.map(movie => movie.rate);
//     let sum = rates.reduce((a, b) => a + b, 0);
//     let average = parseFloat((sum / movies.length).toFixed(2));
  
//     return average;
//   }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
