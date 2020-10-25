
  
  // Iteration 1: All directors? - Get the array of all directors.

  function getAllDirectors(directors) {
    const directorsList = directors.map(function(person) {
      return person.director;
    })
    console.log("here");
    return directorsList;
  }
  
  getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const numberOfDramas = movies.filter(function(drama) {
    if (drama.director === 'Steven Spielberg' && drama.genre.includes('Drama')) {
    return drama;
    }
  })
  return (numberOfDramas.length);
}
howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const totalRates = movies.map(function(value) {
      return value.rate;
    });
    let emptyOnes = 0;
    let averageRate = totalRates.reduce(function(acc, val) {
      if (val) {
        return acc + val;
      }
      else {
        emptyOnes++;
        return acc;
      }      
    }, 0);
    //console.log(totalRates);
    //console.log(emptyOnes);
    averageRate = averageRate / (totalRates.length - emptyOnes);
    console.log(averageRate.toFixed(2));
    return parseFloat(averageRate.toFixed(2));
  }
}
ratesAverage(movies);


// Iteration 4: Drama movies - Get the average of Drama Movies

const numberOfDramas = movies.filter(function(drama) {
  if (drama.genre.includes('Drama')) {
   return drama;
  }
})

function dramaMoviesRate(movies) {
if (movies.length === 0) {
  return 0;
} else {
  const totalRates = movies.map(function(value) {
    return value.rate;
  });
  let emptyOnes = 0;
  let averageRate = totalRates.reduce(function(acc, val) {
    if (val) {
      return acc + val;
    }
    else {
      emptyOnes++;
      return acc;
    }      
  }, 0);
  averageRate = averageRate / (totalRates.length - emptyOnes);
  return parseFloat(averageRate.toFixed(2));
}
}
dramaMoviesRate(numberOfDramas);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

  function orderByYear(movies) {
    const sortYear = movies.map(function(getYear) {
      return getYear.year
    })
    const sorted = sortYear.sort(function (a, b) {
    return a - b;
    })
    return sorted;
  }
  
  orderByYear(movies);



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const sortAlpha = movies.map(function(getTitle) {
    return getTitle.title
  })
  const sorted = sortAlpha.sort();   
  return sorted.slice(0, 20);
}

orderAlphabetically(movies);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
