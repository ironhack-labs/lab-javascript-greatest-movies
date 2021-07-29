// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => {
    return movie.director;    
  }); 
}


// Bônus - Iteração 1.1: Limpe o conjunto de diretores

const getAllUniqueDirectors = moviesArray => {

  const newArray = [];

  moviesArray.forEach(movie => {
    if (newArray.includes(movie.director)) {
      newArray.push(movie.director)
    }
  });

  return newArray;
};

console.log(getAllUniqueDirectors(movies));






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = moviesArray => {
const filterMovies = moviesArray.filter(movie => {
    return movie.director.toUpperCase() === 'STEVEN SPIELBERG' && movie.genre.includes('Drama'); 
});

return filterMovies.length;

}
howManyMovies(movies);




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0)  return 0;

  const rateSum = moviesArray.reduce(function(acc,element) {
    if (!element.rate){
      return acc + 0;
    }

      return acc + element.rate;
  }, 0);

const avg = (rateSum / moviesArray.length).toFixed(2);
return +avg;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = moviesArray => {
  if (moviesArray.length === 0) return 0;

  const dramaAvg = moviesArray.reduce((acc, movie) => {
    if (movie.genre.includes('Drama')) {
      acc.rateSum += movie.rate;
      acc.dramaMoviesQuantity += 1;
      
      return acc;
    }

    return acc;

  }, { rateSum: 0, dramaMoviesQuantity: 0});

    if(dramaAvg.dramaMoviesQuantity === 0) return 0;

    const avg = (dramaAvg.rateSum / dramaAvg.dramaMoviesQuantity).toFixed(2);

    return +avg;

};

//console.log(dramaMoviesScore([{ genre: ['Action']}])); 




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  const moviesCopy = JSON.parse(JSON.stringify(moviesArray));

  moviesCopy.sort((movie1, movie2) => {
    if(movie1.year < movie2.year) return -1;
    if(movie1.year > movie2.year) return 1;

    return movie1.title.localeCompare(movie2.title);

  });

    return moviesCopy;
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  return moviesArray.map(movie => movie.title).sort((movie1, movie2) => movie1.localeCompare(movie2)).slice(0, 20);
  
};

orderAlphabetically(movies); 



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray));
  
  moviesCopy.forEach(movie => {
    let hoursToMin = 0;
    let minuts = 0;
  
    if(movie.duration.includes('h')) {
      const hours = movie.duration.slice(0, 1);
      hoursToMin = parseInt(hours) * 60;
    }
   
    if(movie.duration.includes('min')) {
      const indexMin = movie.duration.indexOf('min');
  
      const min = movie.duration.slice(indexMin - 2, indexMin);
  
      minuts = parseInt(min);
  
    }
  
    const totalTime = hoursToMin + minuts;
    movie.duration = totalTime;
  });
  
  return moviesCopy;
  
  };
  
  
  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  
    const bestYearAvg = moviesArray => {
    if (moviesArray.length === 0) return null;
  
    const moviesRatesByYear = {};
  
  
    moviesArray.forEach(function(movie) {
  
      if(!moviesRatesByYear[movie.year]) {
        moviesRatesByYear[movie.year] = {ratesSum: movie.rate, ratesQuantity: 1, year: movie.year };
  
      } else {
        moviesRatesByYear[movie.year].ratesSum += movie.rate;
        moviesRatesByYear[movie.year].ratesQuantity += 1;
      }
    });
  
    const moviesRatesByYear = Object.values(moviesRatesByYear);
  
    const moviesRatesAverage = moviesRatesByYearArray.map(yearMovie => {
      return {
        yearAverage: yearMovie.ratesSum / yearMovie.ratesQuantity,
        year: yearMovie.year,
      }
    });
  
    moviesRatesAverage.sort((year1, year2) => {
      if (year2.yearAverage < year1.yearAverage) return -1;
  
      if (year2.yearAverage > year1.yearAverage) return 1;
  
      if (year2.year > year1.year) return -1;
  
      if (year2.year < year1.year) return 1;
    });
  
    return `The best year was ${moviesRatesAverage[0].year} with an average score of ${moviesRatesAverage[0].yearAverage}`;
  };
  
  bestYearAvg(movies);





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
