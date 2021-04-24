// Iteration 1: All directors? - Get the array of all directors.

//const getAllDirectors = movies.map((el) => el.director);

const getAllDirectors = (names) => {
  const directores = names.map(function (name) {
    return name.director;
  });
  return directores;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (nombres) => {
  let contador = 0;
  nombres.filter((movie) => {
    if (movie.length <= 0) {
      return 0;
    } else {
      if (
        movie.director.includes("Steven Spielberg") &&
        movie.genre.includes("Drama")
      ) {
        return (contador += 1);
      } else {
        return false;
      }
    }
  });
  return contador;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (rates) => {
  const calif = rates.map(function (rate) {
    return rate.rate;
  });
  console.log(calif);
  let suma = 0;
  let media = 0;

  for (i = 0; i < calif.length; i++) {
    if (calif.length <= 0) {
      return 0;
    } else {
      if (calif[i].length <= 0) {
        continue;
      } else {
        suma += calif[i];
      }
    }
  }
  media = suma / calif.length;
  media = media.toFixed(2);
  media = parseFloat(media);
  return media;
};

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
