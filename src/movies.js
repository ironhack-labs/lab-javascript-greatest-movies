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
    if (val.rate === "" || "rate" in val === false) return acc;

    return acc + val.rate;
  }, 0);
  //console.log("-------", average);
  return Number((sum / array.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Drama is the genre that repeats the most on our array. Apparently, people love drama! 👀
// Create a dramaMoviesRate() function that receives an array as a
//parameter to get the average rate of all drama movies! Let's see if it is better than the general average.

function dramaMoviesRate(array) {
  const sum = array.reduce((acc, val) => {
    if (val.genre.includes("Drama")) {
      return acc + val.rate;
    } else {
      return acc;
    }
  }, 0);

  return Number((sum / array.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// We need to sort the movies in ascending order by their release year.
// This should be easy using one of the methods we have just learned. 😉
// Create a function orderByYear() that receives an array as parameter and returns a new sorted array.
//If two movies have the same year, order them in alphabetical order by their title! ✔️
//💡 Make sure not to mutate the original array 😉

function orderByYear(array) {
  const sortedArray = [...array];
  sortedArray.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    }
    return a.year - b.year;
  });
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// Another popular way to order the movies is to sort them alphabetically using the title key. However, in this case, we only need to print the title of the first 20. Easy peasy for an expert like you. 😉
// Create a orderAlphabetically() function, that receives an array and returns an array of first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.

function orderAlphabetically(array) {
  const arrOfTitles = array.map((title) => {
    console.log(title.title);
    return title.title;
  });

  const sorted = arrOfTitles.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return a - b;
  });

  if (sorted.length > 20) {
    console.log(sorted.slice(0, 20));
    return sorted.slice(0, 20);
  }
  // console.log(sorted);

  return sorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
