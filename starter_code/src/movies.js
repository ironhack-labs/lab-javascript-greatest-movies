/* eslint no-restricted-globals: 'off' */
// let movies = require('./data');

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = movies => {
  let sumRates = movies.reduce((acc, obj) => {
    return acc + parseInt(obj.rate);
  }, 0);
  let averageRates = sumRates / movies.length;
  let roundedAverage = Math.floor(averageRates * 1000) / 1000;
  return roundedAverage;
};

// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = movies => {
  let dramaMovies = movies.filter(obj => obj.genre.includes('Drama'));
  let sumRates = dramaMovies.reduce((acc, obj) => {
    if (obj.rate) {
      return acc + parseInt(obj.rate);
    } else {
      return acc;
    }
  }, 0);
  let averageRates = sumRates / dramaMovies.length;
  let roundedAverage = Math.floor(averageRates * 100) / 100;
  return roundedAverage || 0;
};

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => {
  let sorted = movies.sort((obj1, obj2) => {
    if (obj1.duration !== obj2.duration) {
      return obj1.duration - obj2.duration;
    } else {
      return obj1.title.localeCompare(obj2.title);
    }
  });
  return sorted;
};

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = movies => {
  let howMany = movies.filter(obj => {
    if (obj.director == 'Steven Spielberg' && obj.genre.includes('Drama')) {
      return true;
    } else {
      return false;
    }
  });
  return howMany.length || 0;
};

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies => {
  let arr = [];
  let sorted = movies.sort((obj1, obj2) => {
    return obj1.title.localeCompare(obj2.title);
  });
  for (let i = 0; i < 20; i += 1) {
    if (sorted[i]) {
      arr.push(sorted[i].title);
    }
  }
  return arr;
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// const turnHoursToMinutes = movies => {
//   let newMovies = JSON.parse(JSON.stringify(movies));

//   newMovies.forEach(obj => {
//     // if (obj.duration.includes('hr')) {

//     let durationSplit = obj.duration
//       .replace('hr', '')
//       .replace('min', '')
//       .split(' ');
//     let newDuration =
//       parseInt(durationSplit[0]) * 60 + parseInt(durationSplit[1]);
//     obj.duration = newDuration;
//   });

//   return newMovies;
// };
const turnHoursToMinutes = movies => {
  let newMovies = JSON.parse(JSON.stringify(movies));

  let newhours = newMovies.map(movie => {
    let duration = movie.duration.split(' ');
    if (duration.length >= 2) {
      let min = parseInt(duration[1].replace('min', ''));
      let hours = parseInt(duration[0].replace('h', '')) * 60;
      let time = min + hours;
      movie.duration = time;
      return movie;
    } else {
      if (duration[0].includes('h')) {
        let newHr = parseInt(duration[0][0] * 60, 10);
        movie.duration = newHr;
        return movie;
      } else {
        let min = parseInt(duration[0].replace('min', ''));
        movie.duration = min;
        return movie;
      }
    }
  });

  return newhours;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
