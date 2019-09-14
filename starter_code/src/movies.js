/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = movies => {
  const sumRates = movies.reduce((acc, obj) => {
    return acc + parseInt(obj.rate);
  }, 0);
  
  const averageRates = sumRates / movies.length;
  const roundedAverage = Math.floor(averageRates * 1000) / 1000;
  return roundedAverage;
};


// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
  const dramaMovies = movies.filter(obj => obj.genre.includes('Drama'));
  const sumRates = dramaMovies.reduce((acc, obj) => {
    if (obj.rate) {
    return acc + parseInt(obj.rate);
  } else {
    return acc;
    }
  }, 0);

  const averageDramaRates = sumRates / dramaMovies.length;
  const roundedDramaRatesAverage = Math.floor(averageDramaRates * 100) / 100;
  return roundedDramaRatesAverage || 0;

}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => {
  const sorted = movies.sort((obj1, obj2) => {
    if (obj1.duration !== obj2.duration) {
      return obj1.duration - obj2.duration;
    } else {
      return obj1.title.localeCompare(obj2.title);
    }
  });
  return sorted;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {
  const howMany = movies.filter(obj => {
    if (obj.director === "Steven Spielberg" && obj.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });
  return howMany.length || 0;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = array => {
  const moviesTitle = array.map(movie => {
    return movie.title;
  });
  if(moviesTitle.length < 20){
    return moviesTitle.sort();
  }
  return moviesTitle.sort().slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const hourToMin = hString => {
  return Number(hString.replace(/h/, '')) * 60
}
const min = minString => {
  return Number(minString.replace(/min/, ''))
}

const minutesFromDurationString = duration => {
  const durationArr = duration.split(' ');
  if(durationArr.length === 2) {
    return hourToMin(durationArr[0]) + min(durationArr[1])
  }
  else if (durationArr[0].includes('h')) {
    return hourToMin(durationArr[0])
  }
  return min(durationArr[0])
};

const turnHoursToMinutes = array => {
  return array.map(obj => {
    const newArray = {};
    newArray.duration = minutesFromDurationString(obj.duration);
    return newArray;
  })
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
