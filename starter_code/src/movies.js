/* eslint no-restricted-globals: 'off' */
/*{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": [
    "Crime",
    "Drama"
  ],
  "rate": 9.3
},
*/
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {
  const newMovies = [...movies];
  const moviesOrdered = newMovies.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return moviesOrdered;
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = array => {
  return array
    .filter(movie => movie.director.includes('Steven Spielberg'))
    .filter(aSpielbergMovie => aSpielbergMovie.genre.includes('Drama')).length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = array => {
  return (nameOfMovie = array
    .map(nameOfMovie => nameOfMovie.title)
    .sort()
    .slice(0, 20));
};
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
  
// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
