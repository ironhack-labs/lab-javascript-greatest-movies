// Iteration 1: All directors? - Get the array of all directors.

// let getAllDirectors = (movies) =>
//   movies.map((array) => {
//     return array.director;
//   });

function getAllDirectors(movies) {
  const directors = movies.map(function (array) {
    return array.director;
  });
  // console.log(directors);
  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const stevenDramaMovies = movies.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return stevenDramaMovies.length;
}

//const  howManyMovies = (movies) => movies.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// const ratesAverage = movies.map(function (array) {
//   console.log(array.rate);
// });
function ratesAverage(movies) {
  const totalOfNotes = movies.reduce(function (accumulator, movie) {
    accumulator += movie.rate;
    return accumulator;
  }, 0);

  let average = totalOfNotes / movies.length;
  // console.log(totalOfNotes);

  if (!movies.length) {
    // memo : same as (movies.length ===0)
    return 0;
  } else {
    return Number(average.toFixed(2));
  }
}
// console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  // recuperer que les Drama
  const drama = movies.filter(function (array) {
    return array.genre == "Drama";
  });
  // console.log(drama.length);

  // recuperer les notes
  const rates = drama.reduce(function (accumulator, movie) {
    accumulator += movie.rate;
    // console.log(accumulator);
    return accumulator;
  }, 0);
  // console.log(rates);

  const rateOfDrama = rates / drama.length;
  // console.log(rateOfDrama)

  if (drama.length === 0) {
    return 0;
  } else {
    return Number(rateOfDrama.toFixed(2));
  }
  // console.log(Number(rateOfDrama.toFixed(2)));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let newArrayOfMovies = [...movies];
// // console.log(newArrayOfMovies);

function orderByYear(newArrayOfMovies) {
  const sortYear = [...newArrayOfMovies].sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return (
        newArrayOfMovies.indexOf(a.title) - newArrayOfMovies.indexOf(b.title)
      );
    }
  });
  // console.log(sortYear);
  return sortYear;
}

// orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const alltheTitle = movies.map(function (array) {
    return array.title;
  });
  alltheTitle.sort();
  if (alltheTitle.length >= 20) {
    return alltheTitle.slice(0, 20);
  } else {
    return alltheTitle;
  }

  // console.log(AlltheTitle);
  // return alltheTitle;
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
