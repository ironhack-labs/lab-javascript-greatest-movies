/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesParam) {
  let copiaMovies = Array.from(moviesParam);
  let ordenar = (a, b) => {
    return a.year - b.year;
  };
  return copiaMovies.sort(ordenar);
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(copiaMovies) {
  return copiaMovies.filter(
    ({
      director,
      genre
    }) =>
    genre.includes("Drama") && director == "Steven Spielberg"
  ).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(copiaMovies) {
  let arrayTitle = [];
  for (let i = 0; i < copiaMovies.length; i++) {
    arrayTitle.push(copiaMovies[i].title);
  }
  arrayTitle.sort();
  return arrayTitle.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

//function ratesAverage(copiaMovies) {
 // if (copiaMovies.length == 0) {
   // return 0;


//  }
  //let copiaMovies 
//}


// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes HAY  Q USAR EL JSON

// BONUS Iteration: Best yearly rate average - Best yearly rate average