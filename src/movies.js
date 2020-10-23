// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  let directorsArr = [];
  array.map((movie) => {
    // console.log("*****************movie", movie);
    // console.log("director", movie.director);
    directorsArr.push(movie.director);
    return movie.director;
  });
  return directorsArr;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// One of the most famous directors in cinema is Steven Spielberg, and he has some really awesome drama movies that are on our list, but we want to know how many of them are there.
// Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 the array so we can have only the drama movies where Steven Spielberg is the director.

function howManyMovies(array) {
  if (array.length === 0) return 0;
  const filteredMovies = array.filter((movie) => {
    // console.log("-----director", movie.director);

    const director = movie.director;

    if (director === "Steven Spielberg" && movie.genre.includes("Drama")) {
      return true;
    }
  });
  // console.log("filteredMovies", filteredMovies);
  return filteredMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// These are the best movies based on their rates, so supposedly all of them have a remarkable rate. In this iteration, we want to know the average rate of all of them and display it on the console. Create a ratesAverage() function that receives an array as a parameter and solves the challenge.

// The rate must be returned rounded to 2 decimals!

// 💡 Maybe you want to "reduce" the data to a single value. 😉

function ratesAverage(array) {
  if (array.length === 0) return 0;
  // console.log(array);

  const sum = array.reduce((acc, val) => {
    //console.log("val.rate", val.rate);
    if (val.rate === "" || "rate" in val === false) return 0;

    // || val.rate == undefined
    return acc + val.rate;
  }, 0);
  //console.log("-------", average);
  return Number((sum / array.length).toFixed(2));
}

// const totalRates = product.reviews.reduce(function (sum, review) {
//   return sum + review.rate;
// }, 0);

// console.log(totalRates);

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
