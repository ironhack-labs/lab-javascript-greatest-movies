// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (arrayOfMovies) {
    let directors = arrayOfMovies.map(dir => dir.director);
   return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (arrayOfMovies) {
    let filteredArray = arrayOfMovies.filter(movie => 
     (movie.director === "Steven Spielberg")&&(movie.genre.includes("Drama")))
    return filteredArray.length; 
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrayOfMovies) {
    if (!arrayOfMovies.length) return 0;
    let sumOfRates = arrayOfMovies.reduce((accumValue, currValue) => {
      if (currValue.rate > 0) 
      return accumValue + currValue.rate; 
      return accumValue;
    }, 0)
    return parseFloat((sumOfRates / arrayOfMovies.length).toFixed(2));
  }


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (arrayOfMovies) {
    let dramaMovies = arrayOfMovies.filter(movie => (movie.genre.includes("Drama")));
    if (!dramaMovies.length) return 0;
    return ratesAverage(dramaMovies);
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (arrayOfMovies) {
    let sortedArr = arrayOfMovies.slice().sort((a,b) => {
      if (a.year > b.year) return 1;
      if (a.year < b.year) return -1;
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
    }); 
    return sortedArr;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arrayOfMovies) {
    let sortedArr = arrayOfMovies.slice().sort((a,b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
    }); 
    let limitArr = [];
    for (let i=0; (i<sortedArr.length)&&i<20; i++) {
        limitArr.push(sortedArr[i].title);
    }    
    return limitArr;  
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (movies) {
  let newMovies = movies.slice();
  //let newMovies = [...movies.slice];
  let hours = '';
  let minutes = '';
  
  newMovies.forEach(elem => {
    hours = parseInt(elem.duration.match(/[^h]+/));
    minutes = parseInt(elem.duration.match(/([\d.]+) *min/));
    //console.log(hours, " ", minutes);
    //BREAK
    if ((hours > 0) && (minutes > 0)) elem.duration = hours * 60 + minutes;
    else if (hours > 0) elem.duration = hours * 60;
    else if (minutes > 0) elem.duration = minutes;

  });

  return newMovies;
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
