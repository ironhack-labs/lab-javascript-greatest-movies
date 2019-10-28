/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

   function orderByYear(movies) {

    return [...movies.sort(function(movie1, movie2){
        if (movie1.year > movie2.year) return 1;
        return -1;
        if (movie1.year === movie2.year) 
            return movie1.name.localCompare(movie2.year);  
    }
    )
    ]
   }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

   function howManyMovies(movies) {
       let spilbergDrama = 0;
        spilbergDrama = movies.filter((movies)=> movies.genre.includes("Drama")&& movies.director === "Steven Spielberg").length
        return spilbergDrama;
   }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

   function orderAlphabetically(movies) {
       let allTheMovies = movies.map(movie => movie.title);
       return allTheMovies.sort().splice(0,20);
   }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

   function ratesAverage(movies) {
      if (movies.length === 0) {
          return 0;
      }
      let sum = movies.reduce((ac, movie) => {
          if (typeof(movie.rate) != "number") {
              movie.rate = 0
          } return movie.rate + ac
      }, 0)
        return parseFloat((sum/movies.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

    function dramaMoviesRate(movies) {
       
    }

   











// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
