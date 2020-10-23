// Iteration 1: All directors? - Get the array of all directors.
// Go ahead and create a function named getAllDirectors() that receives an array of movies as an argument and returns a new (mapped array).

function getAllDirectors(arrayOfMovies) {
  let newArray = arrayOfMovies.map(function (movies) {
    return movies.director;
  });
  return newArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// Go ahead and create a howManyMovies() function that receives an array as a parameter and filter the array so we can have only the drama movies where Steven Spielberg is the director.

function howManyMovies(arrayOfMovies) {
  let spielDramaList = arrayOfMovies.filter(function (movies) {
    return (
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    );
  });
  console.log(spielDramaList);
  return spielDramaList.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// Create a ratesAverage() function that receives an array as a parameter. The rate must be returned rounded to 2 decimals! Maybe you want to "reduce" the data to a single value.

function ratesAverage(moviesArr) {
  // if (!moviesArr.length) {
  //   return 0; // se o array não existe, retorne 0
  // }

  const avg = moviesArr.reduce(
    (acc, currentValue, currentIndex, originalArray) => {
      if (!currentValue.rate) {
        currentValue.rate = 0; // caso a propriedade rate esteja vazia, atualize-a para 0
      }
      if (currentIndex === originalArray.length - 1) {
        // se o reduce estiver no último elemento da array, retorne a média
        acc = acc + currentValue.rate; // atualize o acumulador
        return acc / originalArray.length; // retorne o acumulador dividido pela quantidade de elementos do array
      }
      return acc + currentValue.rate; // caso contrário, atualize o acumulador
    },
    0 // define o início do acumulador em 0 (não funciona sem isso)
  );
  return parseFloat(avg.toFixed(2)); // coloca 2 casas decimais
}

// Iteration 4: Drama movies - Get the average of Drama Movies
// Create a dramaMoviesRate() function that receives an array as a parameter to get the average rate of all drama movies! Let's see if it is better than the general average. Again, rounded to 2 decimals!

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(
    (movie) => movie.genre.includes("Drama") >= 0
  );
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// Create a function orderByYear() that receives an array as parameter and returns a new sorted array. If two movies have the same year, order them in alphabetical order by their title!

function orderByYear(moviesArr) {
  const newArr = moviesArr.map((movie) => movie);

  newArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });
  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Create a orderAlphabetically() function, that receives an array and returns an array of first 20 titles, alphabetically ordered.
// Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.

function orderAlphabetically(arrayOfMovies) {
  let titles = arrayOfMovies.map(function (movies) {
    return movies.title;
  });
  let alphaSort = titles.sort();
  return alphaSort.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
