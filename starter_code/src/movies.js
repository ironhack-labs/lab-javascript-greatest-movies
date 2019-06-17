/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {
  let newArray = JSON.parse(JSON.stringify(arr));
  const convertTime = newArray.map(movie => {
    const movieSplit = movie.duration.split(' ');
    const movieClear = movieSplit.map(item => {
      if (item.includes('h')) {
        return (item = parseInt(item.match(/\d/g), 10) * 60);
      } else {
        return (item = parseInt(item.match(/\d/g).join('')));
      }
    });
    movie.duration = movieClear.reduce((count, itemFinal) => count + itemFinal, 0);
    return movie;
  });
  return convertTime;
};

// Get the average of all rates with 2 decimals

const ratesAverage = (array) => {
  const average = array.reduce((count, array, idx, arr) => {
    return count + (parseFloat(array.rate) / arr.length);
  },0);
  return parseFloat(average.toFixed(2));
}

// Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
  let dramaCount = 0;
  const dramaRate = arr.reduce((count, movie) => {
    if (movie.genre.includes('Drama')){
      const rate = movie.rate ? +movie.rate : 0;
      dramaCount += 1;
      return count + rate;
    }
    return count;
  }, 0);
  const avg = (dramaRate / dramaCount);
  return dramaCount > 0 ? +avg.toFixed(2) : undefined;
}

// Order by time duration, in growing order

const orderByDuration = (arr) => {
  arr.sort((a,b) => {
    if (a.duration === b.duration) {
      return a.title > b.title ? 1 : -1;
    }
    return a.duration - b.duration;
  });
  return arr;
}

// How many movies did STEVEN SPIELBERG
const howManyMovies = (arr) => {
  if (arr.length === 0){
    return undefined;
  }
  const spielberg = arr.filter(movie => {
    return movie.director ==='Steven Spielberg' && movie.genre.includes('Drama');
  })
  return `Steven Spielberg directed ${spielberg.length} drama movies!`;
}


// Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
 const order = arr.sort((a,b) => a.title.localeCompare(b.title));
 return order.slice(0,20).map((item) => item.title);
}

// Best yearly rate average
