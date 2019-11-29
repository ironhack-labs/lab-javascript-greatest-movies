/* eslint no-restricted-globals: 'off' */

// let movies = [{
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Frank Darabont",
//     "duration": "2h 22min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9.3
//   },
//   {
//     "title": "The Godfather",
//     "year": 1972,
//     "director": "Francis Ford Coppola",
//     "duration": "2h 55min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9.2
//   },
//   {
//     "title": "The Godfather: Part II",
//     "year": 1974,
//     "director": "Francis Ford Coppola",
//     "duration": "3h 22min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9
//   },
//   {
//     "title": "The Dark Knight",
//     "year": 2008,
//     "director": "Christopher Nolan",
//     "duration": "2h 32min",
//     "genre": [
//       "Action",
//       "Crime",
//       "Drama",
//       "Thriller"
//     ],
//     "rate": 9
//   },
//   {
//     "title": "12 Angry Men",
//     "year": 1957,
//     "director": "Sidney Lumet",
//     "duration": "1h 36min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 8.9
//   }
// ]

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newArray = [...movies];
  newArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return newArray;
}

console.log(orderByYear(movies));
//movies.sort((a, b) => a.title.localeCompare(b.title));

// let orderMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
// return orderMovies;




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average