/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear([...movies]){
  return movies.sort( (a, b) => {
    if (a.year > b.year){
      return 1;
    } else if (a.year < b.year){
      return -1;
    } else if (a.title > b.title){
      return 1;
    } else {
      return -1;
    }
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
  return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.some(genre => genre === 'Drama')).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically([...movies]){
  let orderArr = movies.sort( (a, b) => {
    if (a.title > b.title){
      return 1;
    } else {
      return -1;
    }
  })
  
  return orderArr.slice(0, 20).map(movie => movie.title);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
  let rates = movies.reduce( (acc, current) => {
    if (typeof current.rate == 'number'){
      return acc + current.rate;
    } else {
      return acc;
    }
  }, 0 );

  if (rates > 0){
    return parseFloat( (rates / movies.length).toFixed(2) );
  }  else {
    return 0;
  }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
  let dramaMovies = movies.filter(movie => movie.genre.some(genre => genre === 'Drama'));
  return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
  let moviesArr = JSON.parse(JSON.stringify(movies));

  return moviesArr.map(movie => {
    let time = movie.duration.split(' ');

    let minutes = time.reduce((acc, current) => {
      if (current.indexOf('h') != -1) {
        return parseInt(current.replace('h', '')) * 60;
      } else {
        return acc + parseInt(current.replace('min', ''));
      }
    }, 0);
    
    movie.duration = minutes;
    return movie;
  })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
  let yearsAverage = {};
  let yearsAverageArr = [];

  movies.forEach(movie => {
    if (movie.year in yearsAverage){
      yearsAverage[movie.year].push(movie.rate);
    } else {
      yearsAverage[movie.year] = [movie.rate];
    }
  })

  for (year in yearsAverage){
    let average = yearsAverage[year].reduce((acc, current) => {
      return acc + current / yearsAverage[year].length;
    }, 0);
    yearsAverageArr.push({ 'year' : year, 'average' : parseFloat(average.toFixed(2)) });
  }

  yearsAverageArr.sort((a, b) => {
    return b.average - a.average;
  })

  return yearsAverageArr.length > 0 ? `The best year was ${yearsAverageArr[0].year} with an average rate of ${yearsAverageArr[0].average}` : null
}