// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
    const allDirectors = arr.map(function (obj) {
      return obj.director;
    });
    return allDirectors;
  };

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    const stevenSpielberg = arr.filter(function (obj) {
      return obj.director === 'Steven Spielberg' && obj.genre.includes('Drama');
    });
    return stevenSpielberg.length;
  };
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
    if (arr.length === 0) {
      return 0;
    } else {
      const totalSum = arr.map(function (obj) {
        if (typeof obj.score === 'undefined')
          return {
            title: obj.title,
            year: obj.year,
            director: obj.director,
            genre: obj.genre,
            score: ''
          };
        return obj;
      }).reduce(function (acc, value) {
        return acc + value.score;
      }, 0);
      return +(totalSum / arr.length).toFixed(2); 
  }};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
    const drama = arr.filter(function (obj) {
      return obj.genre.includes('Drama');
    });
    if (drama.length === 0) return 0;
      return scoresAverage(drama);
  };
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const orderByYear = arr
        .map(obj => obj)
        .sort(function (a, b) { return a.year - b.year || a.title.localeCompare(b.title);
    });
    return orderByYear;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    const alphabeticOrder = orderByYear(arr)
            .sort(function (a, b) { return a.title.localeCompare(b.title);})
            .map(function (obj) {
            return obj.title;
    });
    return alphabeticOrder.slice(0, 20);
  }

