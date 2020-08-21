// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arrayOfMovies) {
    let allDirectors = arrayOfMovies.map((director) => {
      return director.director;
    });
    return allDirectors;
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    let stevenSpielbergDrama = movies.filter(function(movie){
    for (let i=0; i<movie.genre.length; i++)
    if ((movie.director === `Steven Spielberg`)   && (movie.genre[i] === `Drama`)) //.includes    só para igualar nao vai funcionar (***ver isso no final de semana dps de ver a aula q perdi***)
      return movie
  })
    return stevenSpielbergDrama.length
    }



//  let filterOnlyDramaMovies = arrayOfMovies.filter((movies) => {
//       if (movies.director === "Steven Spielberg" && movies.genre === "Drama" && movies.genre.length === 0){

//  }})
//     return 1
//}
  // return movies.director


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
