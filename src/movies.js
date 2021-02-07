
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) { 
  return (movies.map(movie => movie.director));
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const mov = movies.filter(movie => {
        return  movie.director === "Steven Spielberg" && movie.genre.includes('Drama');    
    });
    return (mov.length);
}

// function howManyMovies(movies) {
//   let stevie = movies.filter((toto) => {
//     return toto.director === "Steven Spielberg" && toto.genre.includes("Drama");
//   });
//   return stevie.length;
// }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// const ratesAverage = movies => movies.reduce((sumRates, movie) => sumRates + movie.rate, 0) / movies.length

function ratesAverage (movies) {
  if (movies.length === 0) {
    return 0;
  } else {
  const avgRate = movies.reduce((sumRates, movie) => sumRates + Number(typeof movie.rate === "undefined" ? 0 : movie.rate), 0) / movies.length;
  return Math.round(avgRate*100)/100;
  }
}

// function ratesAverage(movies) {
//   if (movies.length > 0) {
//     let addition = movies.reduce((acc, toto) => {
//       return acc + toto.rate;
//     });
//     return Number((addition / movies.length).toFixed(2));
//   } else {
//     return 0;
//   }
// }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const sortedMovies = [...movies];
  return sortedMovies.sort((mov1,mov2) => {
      if (mov1.year !== mov2.year) {
          return mov1.year - mov2.year;
      } else {
        return mov1.title.localeCompare(mov2.title)
      }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const movies2 = [...movies];
  const movies2Title = movies2.map((toto) => {
    return toto.title;
  });
  return movies2Title.sort((titi, tutu) => titi.localeCompare(tutu)).splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const moviesDuration = [...movies];
  moviesDuration.map(movie => {
    let hours = 0;
    let mins = 0;
    hours = Number(movie.duration.split('h')[0]);
    mins = Number(movie.duration.split('h')[1].split('min')[0]);
    return movie.duration = hours * 60 + mins;
  });
  return moviesDuration
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

// function bestYearAvg(movies) {
//   // For a given year AAAA
//   let moviesInYear = movies.map(toto => {
//     const moviesInYear = movies.filter(toto => toto.year === AAAA;
//     return ratesAverage(moviesInYear);
//   }
// }

// const bestYearAvg = arr => {
//     if (arr.length === 0) {
//       return undefined;
//     }
//     if (arr.length === 1) {
//       return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`;
//     }
//     const allRatesArr = filteredSingleYear(arr);
//     let maxRate = 0;
//     let maxRateYear = 0;
//     for (let i = 0; i < allRatesArr.length; i += 1) {
//       if (allRatesArr[i][1] > maxRate) {
//         maxRate = allRatesArr[i][1];
//         maxRateYear = allRatesArr[i][0];
//       }
//     }
//     return `The best year was ${maxRateYear} with an average rate of ${maxRate}`;
//   }
//   console.log(bestYearAvg(newMoviesArr));