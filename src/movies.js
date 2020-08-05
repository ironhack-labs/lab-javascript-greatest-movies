// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (array) => array.map(movie => movie.director)

const cleanArray = (array) => array.filter((director, index) => {
  return array.indexOf(director) === index
});

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (array) => {

  let sum = 0;

  array.filter(movie => {

    if (
      movie.director === 'Steven Spielberg' && 
      movie.genre.includes('Drama')) {
        sum += 1
      }

  })

  return sum;

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (array) => {

  if (array.length === 0) { return 0 }

  let sum = array.reduce((sum, {rate}) => {
    if (!rate) { rate = null }
    return sum + rate;
  }, 0)

  sum = sum / array.length

  sum = parseFloat(sum.toPrecision(3));

  return sum

};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = array => {

  if (array.length === 0) { return 0 }

  filteredArray = array.filter(movie => (movie.genre.length === 1 && movie.genre[0] === 'Drama'))

  if (filteredArray.length === 0) { return 0 }

  let sum = filteredArray.reduce((sum, {rate}) => {
    if (!rate) { rate = null }
    return sum + rate;
  }, 0)

  sum = sum / filteredArray.length

  sum = parseFloat(sum.toPrecision(3))

  return sum

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = array => {

  let sortedArray = [];
  
  array.sort((movie, index) => {
    if (movie.year > index.year) {
      return 1;
    } else if (movie.year < index.year) {
      return -1;
    } else if (movie.year === index.year && movie.title > index.title) {
      return 1;
    } else if (movie.year === index.year && movie.title < index.title) {
      return -1;
    };
  });

  for (movie of array) {
    sortedArray.push(movie);
  }

  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = array => {

  let sortedArray = [];
  let results = [];
  let nrOfresults = 20;

  array.map(a => sortedArray.push(a.title));
  sortedArray.sort();

  for (i = 0; i < 20; i++) { results.push(`${sortedArray[i]}`) };
  
  return (sortedArray.length < nrOfresults) ? sortedArray : results;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (array) => {

  // let newArray = array.map(movie => {
  //   [hours, minutes] = movie.duration.match(/\d{1,2}/g);
  //   hours = Number(hours);
  //   minutes = Number(minutes);
  //   if (!minutes) { minutes = 0 }
  //   if (!hours) { hours = 0 }
  //   movie.duration = hours * 60 + minutes;
  //   }
  // );

  // return newArray;

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAverage = (array) => {

  let object = {};
  let newArray = Array.from(array);

  newArray.forEach(movie => {
    if (!object[movie.year]) {
      object[movie.year] = [movie.rate];
    } else {
      object[movie.year].push(movie.rate);
    }
  });

  newArray = (Object.entries(object))

  for (array in newArray) {
    let total = newArray[array][1].reduce((a,b) => a + b);
    newArray[array][2] = total;
  }

  for (array in newArray) {
    let average = newArray[array][2] / newArray[array][1].length;
    average = parseFloat(average.toFixed(2));
    newArray[array][3] = average;
  }
  
  newArray.sort((array, comparator) => {
    if (array[3] > comparator[3]) {
      return -1;
    } else if (array[3] < comparator[3]) {
      return 1;
    } else if (array[3] === comparator[3] && array[0] > comparator[0]) {
      return -1;
    }
  });

  return `The best year was ${newArray[0][0]} with an average rate of ${newArray[0][2]}`;

}
