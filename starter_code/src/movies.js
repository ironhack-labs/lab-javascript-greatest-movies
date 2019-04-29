/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(elm => {
    const newMovies = { ...movies };
    newMovies.duration = minTransform(elm.duration);
    return newMovies;
  });
}
function minTransform(time) {
  const minHourArray = time.split(" ");
  let hours = parseInt(minHourArray[0]);
  let minutes = parseInt(minHourArr[1]);
  if (minHourArr.length == 1) {
    if (minHourArray[0].includes("h")) {
      hours *= 60;
      return hours;
    } else if (minHourArray[0].includes("min")) {
      return hours;
    }
  } else {
    return hours * 60 + minutes;
  }
}

// Get the average of all rates with 2 decimals

function ratesAverage(rates) {
  const ratios = rates.reduce((ac, rate) => {
    const numberRates = parseFloat(rate.rate);
    //  console.log(numberRates);
    const media = numberRates + ac;
    // console.log(media);
    return media;
  }, 0);
  const averageFinal = media / rates.length;
  console.log(rates.length);
  console.log(averageFinal);
  const roundedItems = Math.round(averageFinal * 100) / 100;
  console.log(roundedItems);
  return roundedItems;
}
// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
