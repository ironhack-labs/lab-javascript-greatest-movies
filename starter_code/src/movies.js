/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {
    let newArray = array.map(element => element)
    newArray.sort((a,b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }else {
        return a.year - b.year
        }
    });
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


const howManyMovies = (array) => {
    const newArray = array.filter(element => element.genre.includes('Drama') === true && element.director === 'Steven Spielberg')
    return newArray.length
} 

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => {
  const newArray = arr.map(element => element.title);
  newArray.sort((a, b) => {
    return a.localeCompare(b);
  });
  const newArray2 = newArray.filter((element, i) => {
    return i < 20;
  });
  return newArray2;
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
  if(arr.length === 0){
    return 0;
  }
  const arrayOfMoviesWithRates = arr.filter(element => typeof element.rate !== 'undefined');
  const sumOfRates = arrayOfMoviesWithRates.reduce((sum, element) => sum += element.rate, 0);
  let averageRound = Math.round((sumOfRates / arr.length) * 100) / 100; //Get the average and round it to 2 decimals
  return averageRound;
};

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average


