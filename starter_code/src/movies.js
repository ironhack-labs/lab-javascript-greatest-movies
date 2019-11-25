/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
console.log ("Jahr: " + movies[0].year);
  
function orderByYear (movies){
  const orderedMovies = movies.slice().sort(function(a, b) {
    if (a.year < b.year) {
     console.log (a.year, b.year);  
     return -1; 
    } else if (a.year > b.year) {
      return 1;
    } else if (a.year === b.year) {     
      return (a.title.localeCompare(b.title));  
    }
      return 0;
  });
return orderedMovies;
}  

console.log(orderByYear(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies (movies) {
    const filteredMovies = movies.filter(function(element) {
      if (element.director === "Steven Spielberg" && element.genre.includes("Drama")) {
        return true;
      }
    });
       return filteredMovies.length;
    
  };
  
  console.log(howManyMovies(movies)); 

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) { 
    const first20Movies = movies.slice().sort(function(movieA, movieB) {
      return movieA.title.localeCompare(movieB.title);  
  });
  
  return first20Movies.slice(0,20).map(function(movie){
    return movie.title;
  });
  }
  
  console.log(orderAlphabetically(movies)); 
  


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage( movies ){
    let average = movies.reduce(
        function (accumulator , value){
          return accumulator + value.rate;
        },0
    );
   let averageRound = Math.round(average/movies.length*100)/100
   console.log(averageRound);
  }
  ratesAverage(movies);


// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
