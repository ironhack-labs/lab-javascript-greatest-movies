// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movieArray) {
  return movieArray.map((elem) => elem.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectorsClean(movieArray) {
  const directors = movieArray.map(function (elem){
    return elem.director
  })
  for (i= directors.length -1; i>=0; i--){
    if(directors.indexOf(directors[i]) !== i){
    directors.splice ([i], 1)
    }
  }
  return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let howMovies = arr.filter(function (elem) {
    return (
      elem.director.includes("Steven Spielberg") && elem.genre.includes("Drama")
    );
  });
  return howMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sumRate = arr.reduce(function (acc, elem) {
    if (elem.rate === undefined) {
      return acc;
    }
    return acc + elem.rate;
  }, 0);
  const numberOfMovies = arr.length;
  const totalRate = parseFloat((sumRate / numberOfMovies).toFixed(2));
  return totalRate;
}

    
// Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesRate(arr) {
    let dramaMovies = arr.filter(function (elem) {
      return elem.genre.includes("Drama");
    });
    if (dramaMovies.length === 0) {
      return 0;
    }
    const sumRate = dramaMovies.reduce(function (acc, elem) {
      if (elem.rate === undefined) {
        return acc;
      }
      return acc + elem.rate;
    }, 0);
    const numberOfMovies = dramaMovies.length;
    const totalRate = parseFloat((sumRate / numberOfMovies).toFixed(2));
    return totalRate;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let newArr = arr.slice();
  newArr.sort(function (elemento1, elemento2) {
    if (elemento1.year > elemento2.year) {
      return 1;
    } else if (elemento1.year < elemento2.year) {
      return -1;
    } else {
      if (elemento1.title > elemento2.title) {
        return 1;
      } else if (elemento1.title < elemento2.title) {
        return -1;
      }
      return 0;
    }
  });
  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(arr) {
  let newArr = arr.slice()
  let titles = newArr.map(function (elem) {
    return elem.title
    })
    .sort()
  if (titles.length > 20) {
    return titles.slice(0, 20)
  }
  return titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  return arr.map(function (elem) {
    if(elem.duration.length === 1){
      elem.duration = 0
      return elem
    }
    if (elem.duration.length === 8) {
      const hours = parseFloat(elem.duration.slice(0, 1) * 60)
      const minutes = parseFloat(elem.duration.slice(3, -3))
        //console.log (hours)
        //console.log (minutes)
      elem.duration = hours + minutes
      return elem
    }
    else if (elem.duration.length == 2) {
      const hours = parseFloat(elem.duration.slice(0, 1) * 60)
      elem.duration = hours 
      return elem
    }
    else if (elem.duration.length == 4 || elem.duration.length == 5){
      const minutes = parseFloat(elem.duration.slice(0, 3))
      elem.duration = minutes
      return elem
    }
    })
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
  if (arr.length === 0) {
    return null
  }
  let firstTitle = arr[0].year
  let filmSameYear = []
  //console.log (firstTitle)
  arr.filter(function (elem){
    if (elem.year === firstTitle){
      filmSameYear.push(elem)
    }
    //console.log (filmSameYear)
  })
  const rate = ratesAverage(filmSameYear)
  //console.log (rate)

  return `The best year was ${filmSameYear[0].year} with an average rate of ${rate}`
}

