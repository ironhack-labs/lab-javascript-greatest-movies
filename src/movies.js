// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
    let directorsList = [];
    moviesArr.map(function (movie) {
      if (!directorsList.includes(movie.director)) {
        directorsList.push(movie.director);
      }
    });
    return directorsList;
  }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
    // filter drama + director
    const spielbergDrama = moviesArr.filter(function (movie) {
      return (
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
      );
    });
    return spielbergDrama.length;
  }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArr) {

    if(moviesArr.length === 0){
        return 0;
    }

    let avgRate = moviesArr.reduce(function (acc, movie) {
      if(!isNaN(movie.rate)){
        return acc + movie.rate;
      } else {
          return acc;
      }
    },0);
    return parseFloat((avgRate / moviesArr.length).toPrecision(3));
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr){
    const dramaMovies = moviesArr.filter(function(movie){
        return movie.genre.includes('Drama');
    })
    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr){
    let sortedMoviesArr = JSON.parse(JSON.stringify(moviesArr));
    sortedMoviesArr.sort(function(a,b){
        if(a.year == b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    })
    return sortedMoviesArr;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
    let sortedMoviesArr = JSON.parse(JSON.stringify(moviesArr));
    sortedMoviesArr.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  
    var moviesTitleArr = sortedMoviesArr.map(function (movie) {
            return movie.title;
      });

    if(moviesTitleArr.length > 20){
    var cutArr = [];
    for (let i = 0; i < 20; i++) {
        cutArr[i] = moviesTitleArr[i];
    }
    return cutArr;
    } else {
        return moviesTitleArr;
    }

  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
    var formattedArr = JSON.parse(JSON.stringify(moviesArr));
    formattedArr.forEach(movie => {
        movie.duration = parseDuration(movie.duration);
    });
    return formattedArr;
  }

 function parseDuration(str) {
    if (str.includes('h') && str.includes('min')) {
        let hours = str.split('h');
        hoursInMin = parseInt(hours[0] * 60);
        let rawMins = str.split(' ');
        let mins = rawMins[1].split('min');
        mins = parseInt(mins[0]);
        return hoursInMin + mins;
      } else if (str.includes('h')) {
        let hours = str.split('h');
        return parseInt(hours[0] * 60);
      } else if (str.includes('min')) {
        let mins = str.split('min');
        return parseInt(mins);
    }
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(moviesArr) {
  if (moviesArr.length === 0) {
    return null;
  }

  let orderedByYear = orderByYear(moviesArr);
  let topAvg = 0;
  let bestYear = 0;
  let yearsArr = []; 
  orderedByYear.forEach((movie) => {
    if (yearsArr[movie.year] == undefined) {
      yearsArr[movie.year] = [];
      yearsArr[movie.year].push(movie.rate);
    } else {
      yearsArr[movie.year].push(movie.rate);
    }
  });

  let totalRates = 0;
  let avgRate = 0;

  for (let i = 0; i < yearsArr.length; i++) {
    if (yearsArr[i] !== undefined) {
      for (let j = 0; j < yearsArr[i].length; j++) {
        totalRates += yearsArr[i][j];
      }
      avgRate = totalRates / yearsArr[i].length;
      console.log('Year: ' + i + ' avgRate: ' + avgRate);
      if (avgRate > topAvg || avgRate == topAvg) {
        topAvg = avgRate;
        bestYear = i;
      }
      totalRates = 0;
    }
  }

  return 'The best year was ' + bestYear + ' with an average rate of ' + topAvg;
}