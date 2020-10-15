// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = moviesArray => moviesArray.map(movies => movies['director']);


getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = listOfMovies => {
  let stevenMovies = listOfMovies.filter(list => list['director'] === 'Steven Spielberg');
  let solution = stevenMovies.filter (dramas => dramas['genre'].includes('Drama'));

 return solution.length;
};

console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = moviesArray => {
  if(moviesArray.length === 0) {return 0};
  let total = moviesArray.map(movies => movies['rate']);
  let average = total.reduce((a,b) => a + b );

  return Number((average / moviesArray.length).toFixed(2));
};

ratesAverage(movies);


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arrayOfMovies => {
  let dramaMovies = arrayOfMovies.filter (dramas => dramas['genre'].includes('Drama'));
  if(dramaMovies.length === 0) {return 0};
  let rates = dramaMovies.map(movies => movies['rate']);
  let average = rates.reduce((a,b) => a + b );

  return Number((average / dramaMovies.length).toFixed(2));
};

dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = moviesArray => {
  let moviesCopy = moviesArray;

  moviesCopy.sort((a, b) => {
    if (a['year'] > b['year']) return 1;
    if (a['year'] < b['year']) return -1;
    if (a['title'] > b['title']) return 1;
    if (a['title'] < b['title']) return -1;} 
  );
    
  return moviesCopy;  
};

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arrayOfMovies => {
  let moviesCopy = arrayOfMovies.map(movies => movies['title']);;
  if(moviesCopy.length > 20) {
    return moviesCopy.sort().slice(0, 20)
  }; 

  return moviesCopy.sort().slice(0, (moviesCopy.length))

};

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
