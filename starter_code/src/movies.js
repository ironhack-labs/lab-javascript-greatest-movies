/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
    if (array.length === 0){
      return undefined;
    }
    var filteredOne = array.filter(function(elem){
      return (elem.genre.includes("Drama"));
    });
    var filteredTwo = filteredOne.filter(function(elem){
      return (elem.director.includes("Steven Spielberg"));
    });
    return "Steven Spielberg directed " + filteredTwo.length + " drama movies!";
  }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    var titleArray = [];
    array.forEach(function(elem){
      titleArray.push(elem.title);
    });
    titleArray.sort();
    if (titleArray.length >= 20){
      titleArray = titleArray.slice(0,20);
    }
    return titleArray;
  }
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    var sumRating = array.reduce(function(a, rating){
      return a + parseFloat(rating.rate);
    }, 0);
    average = sumRating / array.length;
    return average;
  }

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    var filtered = array.filter(function(elem){
      return elem.genre.includes("Drama");
    })
    var sumAverage = filtered.reduce(function(a, rating){
      return a + Number(rating.rate);
    }, 0);
    if (sumAverage === 0){
      return undefined;
    }
    result = sumAverage / filtered.length;
    return Number(result.toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
