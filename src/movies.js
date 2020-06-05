// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(movies){
  const directors = movies.map(movie => movie.director);
  return directors;
}  
//const filterAllDirectors

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
//function howManyMovies(funcao){
//  const direct
//}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  return movies.filter(movie => {
    return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'; 
  }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
  if(movies.length === 0){
    return 0;
  } else {
    const ratesArray = movies.map(movie => movie.rate).filter(item => typeof item === 'number').reduce((acc, cv) => acc + cv);
    return parseFloat((ratesArray / movies.length).toFixed(2));
  
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){

    let moviesDrama = movies.filter(item => item.genre.includes('Drama'))

    if(moviesDrama.length > 0){
      return (parseFloat((moviesDrama.map(movie=>movie.rate)
      .filter(item => typeof(item) === 'number')
      .reduce((acc, cv) => acc + cv)/(moviesDrama.length))
      .toFixed(2)))
    } else {
      return 0;
    }
  }

console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies){
    let arrOrder = [];

    let sortM = [...movies]
    sortM.sort((a,b) => {
      if(a.year < b.year){
        return -1;
      }
      if(a.year > b.year){
        return 1;
      }
      if (a.title < b.title){
        return -1
      }
      if (a.title > b.title){
        return 1;
      }
      return 0
    })
    
    return sortM;
   

}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.map(movie => movie.title).sort((a, b) => {
      const firstMovie = a.toLowerCase();
      const secondMovie = b.toLowerCase();
      if (firstMovie > secondMovie) {
        return 1;
      } else if (firstMovie < secondMovie) {
        return -1;
      } else {
        return 0;
      }
    }).slice(0, 20);
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
 
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
