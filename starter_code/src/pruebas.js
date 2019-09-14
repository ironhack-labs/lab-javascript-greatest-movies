// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = movies => {
  const sumRates = movies.reduce((acc, obj) => {
    return acc + parseInt(obj.rate);
  }, 0);

  const avgRate = sumRates / movies.length;
  const roundedAvg = Math.floor(avgRate * 1000 / 1000);

  return roundedAvg;
}


// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesAvg = movies => {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  const dramaMoviesRate = dramaMovies.reduce((acc, obj) => {
    return acc + parseInt(obj.rate);
  }, 0);

  const avgRateDramaMovies = dramaMoviesRate / dramaMovies.length;
  const roundedDramaMoviesRate = Math.floor(avgRateDramaMovies * 1000 / 1000);

  return roundedDramaMoviesRate;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = movies => {
  const sorted = movies.sort((movie1, movie2) => {
    if (movie1.duration !== movie2.duration) {
      return movie1.duration - movie2.duration;
    } else {
      return movie1.duration.localeCompare(movie2.duration);
    }
  });
  return sorted;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const HowManyMovies = movies => {
  const spielbergMovies = movies.filter(movie => movie.director.includes('Steven Spielberg'));
  return spielbergMovies.length;
}