/* eslint no-restricted-globals: 'off' */



// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  return parseFloat((array.reduce((acc, current) => acc + parseFloat(current.rate), 0) / array.length).toFixed(2))
}



// Iteration 2: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(draArray) {
  let getDrama = draArray.filter(arr => arr.genre.includes('Drama'));
  if (getDrama.length == 0) return 0;
  let getDramaRate = getDrama.map(movie => 
  isNaN(movie.rate) || movie.rate == ""? 0 : parseFloat(movie.rate)
  ).reduce((ac, cu) => {return ac + cu}, 0);
  let total = getDramaRate / getDrama.length
  return +total.toFixed(2);
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

//** Primera manera **//

// const orderByDuration = movies => {
//   let moviesOrdered = movies.sort((a, b) => {
//     if (a.duration < b.duration) return -1;
//     if (a.duration > b.duration) return 1;
//     if (a.title < b.title) return -1;
//     if (a.title > b.title) return 1;
//     return 0;
//   });
//   return moviesOrdered;
// }

//** Segunda manera **//

function orderByDuration(durArray) {
  if (durArray.length > 1) {
    durArray.sort((movie1, movie2) => {
      if (movie1.duration < movie2.duration)
        return -1;
      if (movie1.duration > movie2.duration)
        return 1;
      if (movie1.title < movie2.title) return -1;
      if (movie1.title > movie2.title) return 1;
      return 0;
    });
  }
  return durArray;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = movies => {
  let getSteven = movies.filter(arr => arr.director == 'Steven Spielberg' && arr.genre.includes('Drama'))
  let totalMovies = getSteven.length;
  return totalMovies;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies => {
  const sortMovies = movies.sort((a, b) => {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
});

let sortTitles = sortMovies.map(movie => movie.title);
return sortTitles.slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
