/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let rate = [];
  movies.forEach(function(element) {
    rate.push(Number(element.rate));
  });

  const average =
    rate.reduce(function(total, amount) {
      return total + amount;
    }, 0) / movies.length;
  return parseFloat(average.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(dramas) {
  const filtered = dramas.filter(function(movie) {
    if (movie.genre.indexOf("Drama") === 0) {
      return true;
    }
  });
  const dramaRating = ratesAverage(filtered);
  if (filtered.length === 0) {
    return 0;
  }
  return dramaRating;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(movies) {
  let order = movies.sort(function(a, b) {
    // if year is NOT equal
    if (a.year !== b.year) {
      return a.year - b.year; // return year ascending
    }
    {
      if (a.title > b.title) {
        return 1;
      }

      if (a.title < b.title) {
        return -1;
      }
    }
  });
  console.table(order);
  return order;
}

// console.log(movies);
console.clear();

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(director) {
  const filtered = director.filter(function(movie, genre) {
    if (movie.director.indexOf("Steven Spielberg") === 0) {
      return true;
    }
  });
  console.table(filtered);
  return filtered.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const alphOrder = movies.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    }

    if (a.title < b.title) {
      return -1;
    }
  });
  console.table(alphOrder);
  const mapped = alphOrder.map(function(word) {
    return word.title;
  });
  return mapped.slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const arrayCopy = movies.map(function(item) {
    item.director = item.director;
    item.genre = item.genre;
    item.rate = item.rate;
    item.title = item.title;
    item.year = item.year;
    item.duration = durationToMinutes(item.duration);
    return item;
  });
  console.log(arrayCopy);
  return arrayCopy;
}
//console.log(arrayCopy);
function durationToMinutes(item) {
  //console.log(item);
  let timeSplit = item.split(" ");
  //console.log(timeSplit);
  let hour = parseInt(timeSplit[0], 10) * 60;
  // console.log(hour);
  let minutes = parseInt(timeSplit[1], 10);
  // console.log(minutes);
  if (timeSplit.length > 0 && timeSplit.indexOf("h") > 0) {
    // console.log(hour);
    return hour;
  } else if (timeSplit.length === 1 && timeSplit.indexOf("h") > -1) {
    return minutes;
  }
  console.log(hour + minutes);
  return hour + minutes;
}
// console.table(durationArr);
// return durationArr;

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  // calculate average rating according to array input
  //console.log(movies);
  // const averageRating = ratesAverage(movies);
  // if (movies.length === 0) {
  //   return null;
  // }
  // console.log(averageRating);

  // for(let i = 0; i<movies.length; i++){
  //   let year = movies.year;
  // let hightestAvg = 0;

  // }

  //   if(year === element.year){

  //   }
  // })

  // movies.filter(function(element) {
  //   return element.year === "2010";
  // });
  // console.log(year);
  // return year;
  // console.log(year);

  let msg = `The best year was ${year} with an average rate of ${averageRating}`;
  console.log(msg);
  return msg;
  //
}

// The best year was 2007 with an average rate of 8
