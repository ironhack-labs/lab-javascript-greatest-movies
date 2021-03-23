// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (movies){
    return movies.map(movie => movie.director)
}

console.log(getAllDirectors(movies));

//let uniqueDirectors = [...new Set(getAllDirectors)];

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
//const howManyMovies = testArr.filter(array =>array.director === 'Quentin Tarantino' && array.genre[0] ==='Drama');
//console.log(howManyMovies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
  return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
} 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
  const totalItems = movies.length;
  if(totalItems === 0){
    return 0
  }
  const allRates = movies.map(movie => (movie.rate === '' || movie.rate === undefined) ?  0 : movie.rate)
  const sumRates = allRates.reduce((total, num) => total + num)
  const averageRates =(sumRates / totalItems);
  return(Math.round((averageRates)*100)/100);
}

ratesAverage(movies);

//return Return average even if one of the movies does not have rate!

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  const getAllDramas = movies.filter(movie => movie.genre.includes('Drama'));
  return ratesAverage(getAllDramas);
}

dramaMoviesRate(movies);

/* 
You should return a number!
Return the rate of a single element array!
It should return the average of the array!
It should return the average of the array, float!
Only Drama Movies! You should return the average of Drama movies only!
Should return 0 if there is no Drama movie! */
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


//TODO: iteration 5 not finished. Include if in the function and print movie object not the year

function orderByYear(movies){
  const moviesSorted = movies.sort(function(a, b){
    if(a === b){
      const getAllTitles = movies.map(movie => movie.title);
      console.log(getAllTitles.sort());
    }else{
      return a.year - b.year
    };
  })
};
  //return moviesSorted;

function orderByYear(movies) {
  const moviesSorted = movies.sort((a, b) => { 
    if (a.year === b.year) {
      // solo la parte de cómo se determina el sort, no todo completo
      // recuerda, no necesitas un sort dentro del sort
      if (a.title < b.title) {
        return -1 ;
      }
      if (a.title > b.title) {
        return 1 ;
      }
    } else {
      return a.year - b.year;
    }
  });
  return moviesSorted; // si solo vas a regresar el array en tu función, puedes ponerlo directo. e.i. return movies.sort(...);;
}
   

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(movies){
    const getAllTitles = movies.map(movie => movie.title);
    const titlesSorted = getAllTitles.sort();
    const top20movies = titlesSorted.slice(0,20);
    return top20movies;
  }

/* Defines orderAlphabetically

If there are less than 20 elements, return all of them.
If there are more than 20 elements, return only 20 of them. splice

You should return the top20 after ordering them alphabetically. */
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
