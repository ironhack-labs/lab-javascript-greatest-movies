/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
  return arr.concat().sort((a, b) => {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } return -1;
    }
    return a.year - b.year;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) => {
  const spielberg = (arr) => {
    return arr.director === "Steven Spielberg";
  }
  const spielbergMovies = arr.filter(spielberg);
  const filteredResult = spielbergMovies.filter((item) => {
    return (item.genre.indexOf('Drama') >= 0);
  });
  return filteredResult.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
  const sorted = arr.concat().sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } return -1;
  });
  const extracted = [];
  sorted.forEach(element => {
    extracted.push(element.title);
  });
  const first20 = extracted.slice(0, 20);
  return first20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const totalSum = arr.reduce((sum, movie) =>  sum + movie.rate, 0);
  const avg = totalSum / arr.length;
  const avgRounded = Math.round(avg * 100) / 100;
  return avgRounded;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  const dramaMovies = arr.filter((item) => {
    return (item.genre.indexOf('Drama') >= 0);
  });
  if (dramaMovies.length === 0 ) {
    return 0;
  }
  const totalSum = dramaMovies.reduce(function(sum, movie){
    return sum + movie.rate;
  }, 0);
  const avg = totalSum / dramaMovies.length;
  return parseFloat(avg.toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (arr) => {
  const newArray = JSON.parse(JSON.stringify(arr));
  
  const turnHours = newArray.map(movie => {
    
    const hoursMinSplit = movie.duration.split(' ');
    
    const hoursNum = hoursMinSplit[0].replace('h', '');
    const hoursToMin = parseInt(hoursNum, 10) * 60;

    const minNum = hoursMinSplit[1].replace('min', '');
    const minInt = parseInt(minNum, 10);

    movie.duration = hoursToMin + minInt;
    return movie;
  });

  return turnHours;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average


const bestYearAvg = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  result = arr.reduce(function (acc, value) {
    acc[value.year] = acc[value.year] || [];
    acc[value.year].push(value);
    return acc;
  }, Object.create(null));
  return result;
}

bestYearAvg(movies);



// 1. group movies by year
// 2. calculate rate average of year
// 3. compare all rates of years


