// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (movies){
    return movies.map(movie => movie.director)
}
//const getAllDirectors = movies.map(movie => movie.director );
console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
//const howManyMovies = testArr.filter(array =>array.director === 'Quentin Tarantino' && array.genre[0] ==='Drama');
//console.log(howManyMovies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/*   function howManyMovies(movies){
    const spielbergMovies = movies.filter(movie){
      return (movie.director === 'Steven Spielberg')
    }
  } 
 */
   function howManyMovies(movies){
    const spielbergMovies = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    console.log(spielbergMovies);
  } 


  //console.log(howManyMovies(movies));

  //no funciona TODO genre: Drama . Return numbr of movies. 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
  const allRates = movies.map(movie =>movie.rate);
  const sumRates = allRates.reduce((total,num) => total + num)
  const totalItems = movies.length;
  const averageRates =(sumRates / totalItems);
  console.log(Math.round((averageRates)*100)/100);
}

ratesAverage(movies);
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  const getAllDramas = movies.filter(movie => movie.genre.includes('Drama'));
  ratesAverage(getAllDramas);
}

dramaMoviesRate(movies);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


//TODO: iteration 5 not finished. Include if in the function and print movie object not the year
function orderByYear(movies){
  const getAllYears = movies.map(movie => movie.year);
  getAllYears.sort(function(a, b){return a - b});
  console.log(getAllYears)
  }
  
  if (a ===b){getAllYears.sort()}
  orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
