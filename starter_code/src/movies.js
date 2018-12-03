/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage (arr){
  let sumRates = arr.reduce(function(accumulator, movie){
    return accumulator + parseFloat(movie.rate);
  }, 0);
  return Math.round((sumRates/arr.length)*100) /100
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  
  let dramaMovies = movies.filter(function (movie) {
  return movie.genre.indexOf("Drama") !== -1;
  }); 
  
  if (dramaMovies.length === 0) {
   return undefined;
 } else {
    let media = dramaMovies.map(function (movie) {
    if (movie.rate === "") {
     movie.rate = 0;
    }
    return parseFloat(movie.rate);
  }).reduce(function (accu, value) {
   return accu + value;
}, 0);
  return parseFloat((media / dramaMovies.length).toFixed(2));
}
}

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

function howManyMovies (movies) {
  if (movies.length === 0) {
    return undefined;
  } else {
    let dramaMovies = movies.filter(function (movie) {
    return movie.genre.indexOf("Drama") !== -1;
    }), 
    
    directorSpielberg = dramaMovies.filter(function (movie) {
      return movie.director === "Steven Spielberg";
    }); 

  return `Steven Spielberg directed ${directorSpielberg.length} drama movies!`;

  }
};

console.log(howManyMovies(movies))


// Order by title and print the first 20 titles

function orderAlphabetically (movies) {
  let orderedTitles = movies.map(function (movie) {
    return movie.title
  }).sort();

  if (orderedTitles.length > 20) {
    return orderedTitles.splice(0, 20);
  } else if (orderedTitles.length <= 20) {
    return orderedTitles;
  };
};

console.log(orderAlphabetically(movies));

// Best yearly rate average

function bestYearAvg (movies) {
  if (movies.length === 0) {
    return undefined;
  } else { 
    let newAveragesArray = [];
    //for every movie in movies
    movies.forEach(function (movie) {
      let yearExists = newAveragesArray.filter( (obj) => {
        return obj.year === movie.year
      });
      if(newAveragesArray.length == 0){
        let object = {
          year: movie.year,
          ratings:[parseFloat(movie.rate)]
        }
        newAveragesArray.push(object)
      } else {
          if(yearExists.length > 0){
            yearExists[0].ratings.push(parseFloat(movie.rate))
          } else{
            let object = {
              year: movie.year,
              ratings:[parseFloat(movie.rate)]
            }
            newAveragesArray.push(object)
          }
      }
    });
    let avgPerYear = []
    newAveragesArray.forEach(function(ratingObjectPeryear) {
      let accumulated = ratingObjectPeryear.ratings.reduce(function(accumulator, currentRate) {
        return accumulator + currentRate;
      });
      avgPerYear.push({
        year: ratingObjectPeryear.year,
        avgRate: accumulated/ratingObjectPeryear.ratings.length
      })

    });

    let bestYear = null;
    avgPerYear.forEach( (year) => {
      if(bestYear == null){
        bestYear = year;
      }
      if(year.avgRate > bestYear.avgRate){
        bestYear = year;
      }
      if(year.avgRate === bestYear.avgRate){
        if(bestYear.year > year.year){
          bestYear = year;
        }
      }
    })

    return `The best year was ${bestYear.year} with an average rate of ${bestYear.avgRate}`;
    }
};

console.log(bestYearAvg(movies));

/*
function bestYearAvg (movies) {
  if (movies.length === 0) {
    return undefined;
  } else { 
    /* let newMoviesArray = movies.map(function(movie) {
      let sameYear = movies.filter(function(movie) {
        let movieYear = parseFloat(movie.year); // Can I do that?
        return movieYear === parseFloat(movie.year); // I think this is the mistake
      });
      let yearSum = sameYear.reduce(function(ratesSum, rates) {
        return ratesSum + parseFloat(movie.rate);
      });
      let avgYearRate = yearSum/sameYear.length;
      return {
        year: sameYear,
        rate: avgYearRate
      };
    });  */
    /* This part above is supposed to make a new array with
    an objet including as parameters year and rate (average 
    rate of the year). I know there migth be repeated years as it will
    return a same length array (by now).

    To finish the code I shoud find the highest rated year and return it as 
    bestYearAvg (still have work to do)
    */