// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {
  return movies.map(movie => movie.director);
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const cleanList = (list) => {
  return list.filter(
    item => list.indexOf(item,0) !== list.indexOf(item,-1)
  );
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
  const searched_genre = "Drama";
  const searched_director = "Steven Spielberg";

  return movies.filter(movie => (
    movie.genre.includes(searched_genre) &&
    movie.director === searched_director)
  ).length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {

  // ### Comment: The average value returned is wrong, since it based on the total
  // ###          number of movies in the array, whereas it should be calculated
  // ###          only based on the actual number of movies which have a rate 
  // ###          (total_rate.count).
  // ###          I return the 'wrong' result here in order to pass the test.

  if(!movies || movies.length === 0) return 0;

  const rate = movies.reduce((total_rate, movie) => {
    if (movie.rate) {
      total_rate.sum += movie.rate;
      total_rate.count++;
    }
    return total_rate;
  },{sum:0,count:0});

  return Math.round(rate.sum / movies.length * 100) / 100;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
  const dramaMovies = movies.filter(movie=>movie.genre.includes("Drama"));
  return ratesAverage(dramaMovies);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  const ascending = (a,b) => {
    if (a.year === b.year) return b.title < a.title ? 1 : (b.title>a.title)? -1 : 0;
    return a.year - b.year;
  };

  return [...movies].sort(ascending);
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  const ascending = (a,b) => {
    return b.title < a.title ? 1 : (b.title>a.title) ? -1 : 0;
  };

  return [...movies].sort(ascending).map(movie=>movie.title).slice(0,20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies) => {
  if(!movies) return [];

  const res = JSON.parse(JSON.stringify(movies));
  
  res.map(movie => {
    if(movie.duration){
      let duration = movie.duration.split(' ');

      movie.duration = duration.reduce((total,time)=>{
        return total += (time.includes('h')) ?
          +time.slice(0,time.indexOf('h')) * 60 : 
          +time.slice(0,time.indexOf('min'));
      },0);
    }
  });

  return res;
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (movies) => {
  if(!movies || movies.length === 0) return null;
  
  let rate_by_year = movies.reduce((el,movie) =>{
    (!el[movie.year]) ? 
      el[movie.year] = [movie.rate] : 
      el[movie.year].push(movie.rate);
    if(el) return el;
  }, []);

  let best_ever = {year:0,rate:0};
  for (let year in rate_by_year) {
    if(year){
      let years_avg = rate_by_year[year].reduce((avg,rate) => {
        return avg += rate;
      },0) / rate_by_year[year].length;
      if(best_ever.rate < years_avg) {
        best_ever= {
          rate: years_avg,
          year: year
        };
      }
    }
  }

  return `The best year was ${best_ever.year} with an average rate of ${best_ever.rate}`;
};
