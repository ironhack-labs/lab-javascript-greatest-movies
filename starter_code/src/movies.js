/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(array) {

    let array2 = array.map(element => {
       return element.rate;
    } )
    parseFloat(array2);
    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let result = array2.reduce(reducer) / array2.length;

    return result;
}

 
// Iteration 2: Drama movies - Get the average of Drama Movies

function ratesAverage (array) {
    let sumOfRatings = array.reduce((accu, element) =>
    {
      let rating = element.rate || 0;
      return accu+parseFloat(rating);
    }, 0)
    return Math.round((sumOfRatings/array.length)*100)/100;
    }
    // Iteration 2: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(array) {
      let dramaMovies = array.filter(movie => {
        return movie.genre.includes("Drama");
      })
        if(!dramaMovies.length) return 0;
        return ratesAverage(dramaMovies);
    }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {

    let sortedArray = movies.sort(function (a, b) {
      if ((a.duration - b.duration) === 0) {

        return a.title.localeCompare(b.title);

      }

      return a.duration - b.duration;

   });

    return sortedArray;

   }


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(array) {

    let result;

    result = array.filter(function (element) {
       return element.director.includes("Steven Spielberg") && element.genre.includes("Drama");
    })

    return result.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let onlyTitles = array.map(function(element) {
        return element.title;
    })
    let sortedArray = onlyTitles.sort(function(a,b) {
        return a.localeCompare(b);
    }).splice(0, 20);
    return sortedArray;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    var newArr = JSON.parse(JSON.stringify( movies ));
    newArr.forEach(element => {
      if (element.duration.includes(" ")) {
       let zeit = element.duration.split(" ");
       let minutes = parseInt(zeit[0])*60 + parseInt(zeit[1]);
       element.duration = minutes;
      }
      else {
       if (element.duration.includes("h")) {
          element.duration = (parseInt(element.duration))*60
        }
       else {
         element.duration = parseInt(element.duration)
       }
      }
    })
   return newArr;
 }

// BONUS Iteration: Best yearly rate average - Best yearly rate average

