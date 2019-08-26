/* eslint no-restricted-globals: 'off' */
// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = movies => {

  let average = (movies.reduce(
                        (ac, movie) => 
                        ac + +movie.rate, 0))
                        /movies.length;
  
  return +average.toFixed(2);
}
console.log(ratesAverage(movies));
 
// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = movies => {

  let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  return (dramaMovies.length == 0)? 0 : ratesAverage(dramaMovies);
}

console.log(dramaMoviesRate(movies));
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = movies => {
  
  let moviesOrdered = movies.sort((a, b) => {

    if (a.duration < b.duration) return -1;
    if (a.duration > b.duration) return 1;
  
    if (a.title < b.title) return -1; 
    if (a.title > b.title) return 1;
    
    return 0;
    
  });

  return moviesOrdered;
}

let moviesOrdered = orderByDuration(movies);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = movies => {

  let SpielbergMovies = movies.filter(movie => movie.director == 'Steven Spielberg' && 
                                               movie.genre.includes('Drama'));
  let totalMovies = SpielbergMovies.length;

  return totalMovies;
}

console.log(howManyMovies(movies));
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies => {

  let moviesSorted = movies.sort((a, b) =>
    a.title.localeCompare(b.title, "es", { sensitivity: "base" })
    );

  return (moviesSorted.length < 20) ?
              moviesSorted.map(movie => movie.title) :
              new Array(20).fill().map((arr, idx) => moviesSorted[idx].title);
  
}

console.log(orderAlphabetically(movies));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = movies => {

  let mins;

  return movies.map(movie => {

    mins = 0;

    if(movie.duration.indexOf('h') >= 0) {
      mins += +movie.duration.split('h')[0] * 60;

      if(movie.duration.indexOf(' ') >= 0) {
        mins += +movie.duration.split(' ')[1].slice(0, -3);
      }
    } else {
      mins += +movie.duration.slice(0, -3);
    }  
    return {...movie, duration:mins}    
 
  });
}

console.log(turnHoursToMinutes(movies));


// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = movies => {

  let years = movies.map(movie => movie.year);
  years = [...new Set(years)]; 

  let moviesPerYear;
  let averagePerYear = new Array();

  years.forEach((year, idx) => {  
  
      moviesPerYear = movies.filter(movie => movie.year == year);
      averagePerYear.push([year, ratesAverage(moviesPerYear)]);  
  });

  averagePerYear.sort((a, b) => {
    if(a[1] < b[1]) return 1;

    if(a[1] > b[1]) return -1;

    if(a[0] < b[0]) return -1;
    
    if(a[0] > b[0]) return -1;
    
    return 0
  });
  
  if(averagePerYear.length == 0) return null;
  return `The best year was ${averagePerYear[0][0]} with an average rate of ${averagePerYear[0][1]}`;
}

console.log(bestYearAvg(movies));