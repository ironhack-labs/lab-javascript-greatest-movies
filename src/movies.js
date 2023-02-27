// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (element) {
    return element.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const steven = moviesArray.filter(function (film) {
      if (film.director === "Steven Spielberg") return true;
    });
    if (steven.length === 0) {
      return 0;
    } else {
      stevenDrama = steven.filter(function (film) {
        if (film.genre.includes("Drama")) return true;
      });
      return stevenDrama.length;
    }
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const scores = moviesArray.map(function (element) {
      return element.score;
    });
    const result = scores.reduce(function (accu, curr) {
      return accu + curr;
    }, 0);
    return Math.round((result / scores.length) * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dram = moviesArray.filter(function (film) {
    if (film.genre.includes("Drama")) {
      return true;
    }
  });
  if (dram.length === 0) return 0;
  const scores = dram.map(function (element) {
    return element.score;
  });
  const result = scores.reduce(function (accu, curr) {
    return accu + curr;
  }, 0);
  return Math.round((result / scores.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let list = [...moviesArray];
  list.sort((a, b) => a.year - b.year);

  return list;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const list1 = [...moviesArray];
  //   list1.sort((a, b) => a.title - b.title);
  const list2 = list1.map(function (element) {
    return element.title;
  });
  list2.sort();
  const list3 = [];
  for (let i = 0; i < 20; i++) {
    list3.push(list2[i]);
  }
  if (list1.length < 20) {
    return list2;
  } else return list3;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
