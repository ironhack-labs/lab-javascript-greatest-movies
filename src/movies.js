// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  const directorArray = array.map((movie) => {
    return movie.director;
  });
  return directorArray;
}
//console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
let uniqDirectorList = [...new Set(getAllDirectors(movies))];
//console.log(uniqDirectorList)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const directorSpielberg = array.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return movie;
    }
  });
  const onlyTitle = directorSpielberg.map((movie) => movie.title);
  return onlyTitle.length;
}
//console.log(howManyMovies(movies))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  const sumRatingFunc = array.reduce((total, movie) => {
    let sumRating = total + movie.rate;
    return sumRating;
  }, 0);
  let averRating = 0;
  if (array.length) {
    if (array.length === 1) {
      averRating = sumRatingFunc.toFixed(2);
    } else {
      averRating = (sumRatingFunc / array.length).toFixed(2);
    }
  } else averRating = 0;
  return Number(averRating);
}
//console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  const dramaList = array.filter((movie) => {
    if (movie.genre.includes("Drama")) {
      return movie;
    }
  });
  const dramaSumRating = dramaList.reduce((totalSum, dramaMovieRating) => {
    let sum = totalSum + dramaMovieRating.rate;
    return sum;
  }, 0);
  let dramaRatingAverage = 0;
  if (array.length) {
    if (array.length === 1) {
      dramaRatingAverage = dramaSumRating.toFixed(2);
    } else {
      dramaRatingAverage = (dramaSumRating / array.length).toFixed(2);
    }
  } else {
    dramaRatingAverage = 0;
  }
  return Number(dramaRatingAverage);
}
//console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//i copied an movies array but couldn't pass the test "Order the movies by year - orderByYear Should return a new array"
const newMoviesArrayForSort = JSON.parse(JSON.stringify(movies));
function orderByYear(array) {
  const moviesSortedByYears = array.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return moviesSortedByYears;
}
//console.log(orderByYear(newMoviesArrayForSort))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const newMoviesArray = JSON.parse(JSON.stringify(movies));
function orderAlphabetically(array) {
  let titleArray = [];
  const titleArrayCreation = array.map((value) => {
    titleArray.push(value["title"]);
    return titleArray;
  });
  const sortedTitleArray = titleArray.sort();
  const finalSortedTitle = [];
  if (sortedTitleArray.length > 20) {
    for (let i = 0; i < 20; i++) {
      finalSortedTitle.push(sortedTitleArray[i]);
    }
  } else {
    for (let j = 0; j < sortedTitleArray.length; j++) {
      finalSortedTitle.push(sortedTitleArray[j]);
    }
  }
  return finalSortedTitle;
}
//console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
