// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (moviesList) => {
  // variable = store the array given by map()
  let directorsList = moviesList.map((movie) => {
    return movie.director;
  });

  return directorsList;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getDirectorsOnceEach = (moviesList) => {
  
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movieList) => {
  let = stevenSpielbergMovies = movieList.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'));
  // stevenSpielbergMovies.length counts how many element the array has
  return stevenSpielbergMovies.length;
};
  
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movieList) => {
  let ratesSum = movieList.reduce((acc, currMov) => acc.rate + currMov.rate);
  
  // average * 100, for example 8.2154 * 100 = 821.54 round up 822 / 100 = 8.22 (2 decimals)
  return Math.round((ratesSum / movieList.length)*100) / 100;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movieList) => {
  let avgDramaMovies = movieList.filter( movie => movie.genre.includes('Drama'));

  return ratesAverage(avgDramaMovies);
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movieList) => {
  let movieMap = movieList.map(movie => ({title: movie.title, year: movie.year}));

  const ordered = movieMap.sort((mov1, mov2) => {
      if(mov1.year == mov2.year) {
          if(movie1.title <= movie2.title)
              return -1;
          else
              return 1;
      } else
          return mov1.year - mov2.year;
  });
  
  return ordered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movieList) => {
  let movieTitles = movieList.map(movie => movie = movie.title);
  let afphaOrder = movieTitlessort((mov1, mov2) => {
    if(mov1.title < mov2.title) {
      return -1;
    } else {
      return 1;
    }
  })

  let twentiethMovies = alphaOrder.slice(0, 19);
  return twentiethMovies;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movieList) => {

}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (movieList) => {

}
