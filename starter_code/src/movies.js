/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear([...movies]){
  return movies.sort( (a, b) => {
    if (a.year > b.year){
      return 1;
    } else if (a.year < b.year){
      return -1;
    } else if (a.title > b.title){
      return 1;
    } else {
      return -1;
    }
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
  return movies.filter( e => e.director === 'Steven Spielberg' && e.genre.some( g => g === 'Drama' ) ).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically([...movies]){
  let orderArr = movies.sort( (a, b) => {
    if (a.title > b.title){
      return 1;
    } else {
      return -1;
    }
  })

  let titles20 = [];
  for (i = 0; i < 20; i++){
    if (typeof orderArr[i] != 'undefined') titles20.push(orderArr[i].title);
  }

  return titles20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals



// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
