// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let allDirectors = movies.map(function(movie) {
        return movie.director;
    });
    const uniqueDirectors = [...new Set(allDirectors)];
    return uniqueDirectors;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    return array.filter(function(movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movAvg){
    if(movAvg.length === 0){
        return 0;
    }
    total = 0;  
    let rating = [];

   rating =  movAvg.map(function(movie){
        if (!movie.rate){
                return movie.rate === 0;
                }
        return movie.rate;
      });
      const sum = rating.reduce((max, val) => {
      return max + val;
    }); 
      total = (sum / movAvg.length).toFixed(2);
      return Number.parseFloat(total);

    }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (dramAvg) {
    // if(dramAvg.length === 0){
    //     return 0;
    // }
    // total = 0
    // let rating = [];

    // rating = dramAvg.map(funtion(movie) {
    //     if 
    // })
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
  const sorted = movies.slice().sort(function(a, b) {
      if (a.year !== b.year) {
      return a.year - b.year;
    } else {
        return a.title.localeComapare(b.title);
    }
  })
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let movName = [];
movies.map(function(movie){
    movName.push(movie.title);
});


  if (movName.length > 20) {
    movName = movName.sort().slice(0,20);
    return movName;
    }
  return movName.sort()
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes () {
    
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg (movies) {
    if (movies.length === 0) {
        return null;
    }
}