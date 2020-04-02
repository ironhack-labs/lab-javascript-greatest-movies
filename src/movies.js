/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const arrCopy = [...arr];
  arrCopy.sort(function(movie1, movie2) {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.year < movie2.year) {
      return -1;
    } else if (movie1.year === movie2.year) {
      if (movie1.title > movie2.title) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return arrCopy;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  const arr2 = arr.filter(function(obj) {
    if (
      obj.genre.indexOf("Drama") !== -1 &&
      obj.director === "Steven Spielberg"
    ) {
      return true;
    }
  });

  return arr2.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const arrCopy = arr.map(element => {
    return element.title;
  });

  arrCopy.sort(function(movie1, movie2) {
    if (movie1 > movie2) {
      return 1;
    } else if (movie1 < movie2) {
      return -1;
    } else {
      return 0;
    }
  });
  const arr2 = arrCopy.splice(0, 20);
  return arr2;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length > 0) {
    var rating = 0;
    var counter = 0;
    arr.map(element => {
      if (element.rate) rating += element.rate;
      counter++;
      return rating;
    });
    let avgRate = rating / counter;

    return Number(avgRate.toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  var rating = 0;
  var counter = 0;
  let arr2 = [];

  arr2 = arr.filter(function(obj) {
    if (obj.genre.indexOf("Drama") !== -1) {
      return true;
    } else {
      return 0;
    }
  });
  if (arr2.length === 0) {
    return 0;
  } else {
    arr2.map(element => {
      if (element.rate) {
        rating += element.rate;
        counter++;
        return rating;
      }
    });
    let avgRate = rating / counter;

    return Number(avgRate.toFixed(2));
  }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  let arr2 = [...arr];
  let arr3 = arr2.map(function(element) {
    if (element.duration.indexOf("h")) {
      return element.duration.replace("h", "*60");
    }
  });
  console.log(arr3);
  return arr3;
}

function turnHoursToMinutes(arr) {
  let arr2 = [...arr];
  for(var i = 0 ; i<arr2.length;i++){
    
    arr2[i].duration = arr2[i].duration.replace(/h/i, "*60")
    arr2[i].duration = arr2[i].duration.replace(/min/i, "")

  }
  
  return arr2;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
