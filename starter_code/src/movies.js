// /* eslint no-restricted-globals: 'off' */

// // Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// let movies = [
//     {
//       "title": "BINGO",
//       "year": 1994,
//       "director": "Steven Spielberg",
//       "duration": "2h 22min",
//       "genre": [
//         "Crime",
//         "Drama"
//       ],
//       "rate": 9.3
//     },
//     {
//       "title": "AVIAO",
//       "year": 1994,
//       "director": "Francis Ford Coppola",
//       "duration": "2h 55min",
//       "genre": [
//         "Crime",
//         "Drama"
//       ],
//       "rate": 9.2
//     }
// ]


function orderByYear(arr) {
    const newArr = [...arr];
    newArr.sort((a,b) => {
        if (a.year === b.year) {
            newArr.sort((a,b) => {a.title - b.title
                return -1;
            })
        } return (a.year - b.year)
    })
    return newArr;
}
// console.log(orderByYear(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    const newArr = [...arr];
    newArr.filter(movieInfo => movieInfo.director === "Steven Spielberg");
    return newArr.length;
}
// console.log(howManyMovies(movies)); 
// console.log(movies.filter(movieInfo => movieInfo.director === "Steven Spielberg").length);


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const newArr = [...arr];
  newArr.sort((a,b) => a.title - b.title);
  if (newArr.length > 20){
  newArr.slice(0,19);
  return newArr.map(movie => movie.title);
  } else {
  return newArr.map(movie => movie.title);
  }
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
