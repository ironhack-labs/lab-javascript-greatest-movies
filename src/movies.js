// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
const result = movies.map(function(names) {
    return names.director;
})
    return result;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const dramaMovies = movies.filter(function(number){
        if(number.director === 'Steven Spielberg' && number.genre.indexOf('Drama') !== -1){
            return true;
        } else {
            return false;
        }
    })
    return dramaMovies.length
}

//need to use indeof = check if the element you are looking for is in the array
//

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if(movies.length === 0) return 0;
      const getTheSum = movies.reduce(function(sum,movie){
        if(!movie.rate) return sum;
        return sum + movie.rate
      }, 0)
      const getTheAve = getTheSum / movies.length
      return Math.round(getTheAve * 100) / 100;
    }

// Iteration 4: Drama movies - Get the average of Drama movies

 // would need to call 2 method within the function ? Filter and reduce

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    const newArr = [];
    const sortedByYear = movies.sort(function(){
      return newArr.push(movies.year);
    })
    return sortedByYear;
  }

  // if I return newArr - the test case 'single element array is not valid anymore' ???

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
