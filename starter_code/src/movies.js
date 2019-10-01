/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


// Iteration 2: Drama movies - Get the average of Drama Movies


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

// //Calcular a média e arredondar duas casas decimais

// let movies = [
//   {
//     title: 'The Shawshank Redemption',
//     year: '1994',
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.3'
//   },
//   {
//     title: 'The Godfather',
//     year: '1972',
//     director: 'Francis Ford Coppola',
//     duration: '2h 55min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.2'
//   },
//   {
//     title: 'The Godfather: Part II',
//     year: '1974',
//     director: 'Francis Ford Coppola',
//     duration: '3h 22min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.0'
//   }
// ]

function ratesAverage(array) {
  let averageRate = array.reduce((acc, item) => {
    return acc + parseFloat(item.rate)
  }, 0)

  return parseFloat((averageRate / array.length).toFixed(2));
}

function dramaMoviesRate(array) {

  let filteredArray = array.filter(movie => {
    return movie.genre.includes('Drama')
  });
  if (filteredArray.length === 0) {
    return 0;
  }

  let dramaRate = filteredArray.reduce((acc, item) => {
    if (item.rate === "") {
      return acc;
    }
    return acc + parseFloat(item.rate)
  }, 0)
  return parseFloat((dramaRate / filteredArray.length).toFixed(2));

};

function orderByDuration(array) {
  return array.sort((a, b) => {
    if (a.duration === b.duration) {
      return (a.title.localeCompare(b.title));
    }
    return a.duration - b.duration;
  })
}

const howManyMovies = (array) => {
  let dramaSpielberg = array.filter(movie => {
    return movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg");
  })
  return dramaSpielberg.length;
}

function orderAlphabetically(array) {
  let orderedByTitle = array.sort((a, b) => a.title.localeCompare(b.title));
  let onlyTitles = [];
  for (let i = 0; i < orderedByTitle.length; i++) {
    onlyTitles.push(orderedByTitle[i].title);

  }
  if (onlyTitles.length <= 20) {
    return onlyTitles;
  }
  else if (onlyTitles.length > 20) {
    return onlyTitles.slice(0, 20);
  }
}


function turnHoursToMinutes(array) {
  
}


