// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let directors = movies.map(movie => {
          return movie.director;
      });
    return directors;
  }
  getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple 
// movies so they will pop up multiple times in the array of directors. 
// How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(movies) {
    function howManyMovies(movies) {
        let numberOfMovies = movies.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1;
      }).length;
    return numberOfMovies
    }
    howManyMovies(movies);
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
//summed value / number of elements
function ratesAverage(movies) {
    let sum = movies.reduce((total, rates) => {
      return total + rates.rate; 
    }, 0)
    let average = sum / 250;
    return Number(average.toFixed(2))
}

ratesAverage(movies);

// function ratesAverage(movies) {
//     let avrg = movies.filter(movie => movie.rate).reduce(function(total, value) {
//       return total + value.rate / movies.length
//     }, 0)
// ​
//     return Number(avrg.toFixed(2))
//   }
  
//   ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    //  number of Drama returns 185
      let dramaNumber = movies.filter(movie => {
        return movie.genre.includes('Drama')
      }); 
    //   validation
      if(dramaNumber.length === 0) {
        return 0;
      };
    //  average rate of drama genre
       let sum = dramaNumber.reduce((total, rates) => {
         return total + rates.rate
       }, 0);
      let averageDrama = sum / dramaNumber.length;
      return Number(averageDrama.toFixed(2))
    }
    dramaMoviesRate(movies)
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let listOfMovies = [...movies];
    listOfMovies.sort(function (a, b) {
    //   if years are the same sort movies title by alphabet
    if (a.year === b.year){
     return a.title.localeCompare(b.title);
    } 
 return a.year - b.year;
});
  return listOfMovies;
}; 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    // returns array of first 20 titles alphabetically ordered
    // return only title key
    // if less than 20 movies then return all
    let listOfMovies = [...movies];
// below returns alphabetically arranged movie objects
    listOfMovies.sort(function(a, b) {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    
  });
//   below returns titles prop only.
// but has to print just first 20
  const movieTitles = [];
  for(let i = 0; i < listOfMovies.length; i++){
    movieTitles.push(listOfMovies[i].title); 
    if(i === 19) {
      break;
    }
  }
  return movieTitles;

};
orderAlphabetically(movies)


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHours 
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
