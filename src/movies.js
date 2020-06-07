// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArr) {
    const directorsArr = moviesArr.map(function showDirector(movie) {
      return movie.director;
    });
    return directorsArr;
  }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
    const bySpielberg = moviesArr.filter(function (movie) {
        return movie.director==="Steven Spielberg";
    });
     const byGenre = bySpielberg.filter(function (movie) {
        return movie.genre.includes("Drama");
     });
    return byGenre.length;
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArr) {
    let avgRate=0;
  if (moviesArr.length!=0) {
      let ratings=moviesArr.reduce(function (acc, val) {
    if (typeof val.rate==="number") return acc+val.rate;
        else return acc;
  }, 0);
  avgRate=+(ratings/moviesArr.length).toFixed(2);
  }
    return avgRate;
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr) {
    const dramaMovies = moviesArr.filter(function (movie) {
          return movie.genre.includes("Drama");
      });
    return ratesAverage(dramaMovies)
  }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
    let byYear = moviesArr.slice().sort(function(older, newer){
      if (older.year==newer.year) {
      if (older.title.toLowerCase() < newer.title.toLowerCase())
          return -1;
          else return 1;
  } else return older.year-newer.year;
  })
    return byYear;
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
    let byAlphabet=moviesArr.slice().sort(function(a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      else return 1;
  })
  let alph20=[];
    for (let i=0; i<moviesArr.length; i++) {
      if (i>19) break;
      alph20.push(byAlphabet[i].title)
    }
    return alph20;
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
    const moviesToMinutes=moviesArr.map(function(movie) {
      let mins=0;
      let times=movie.duration.split(' ');
      times.forEach(function(time) {
        if (time.includes('h')) {
        mins+=parseInt(time)*60;
      }
        if (time.includes('min')) {
        mins+=parseInt(time);
      } 
    })
  return {...movie, duration: mins};
   })
    return moviesToMinutes;
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(moviesArr) {
  //create a rates by year object and till with rates
  let ratesByYear={};
  for (let movie of moviesArr) {
    ratesByYear[movie.year]=[];
  }
    for (let movie of moviesArr) {  
    ratesByYear[movie.year].push(movie.rate);
  }
  //sum rates by reducing arrays and give the average
  let sumByYear={...ratesByYear};
  let avgByYear={...ratesByYear};
  for (let year in ratesByYear) {
    sumByYear[year]=ratesByYear[year].slice().reduce(function(acc, val) {
      if (typeof val == "number") 
      return acc+val;
      else return acc;
  }, 0)
    avgByYear[year]=sumByYear[year]/ratesByYear[year].length 
  }
  //iterate over average ratings array to find the best year
  let bestYear=null;
  let bestRate=null;
if (moviesArr.length>0) {
  for (let year in avgByYear) {
   if (avgByYear[year]>bestRate) {
     bestYear=year;
      bestRate=avgByYear[year];
    }
}
  return `The best year was ${bestYear} with an average rate of ${bestRate}`
} else return null;
}