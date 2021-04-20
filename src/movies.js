// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => {
    return movies.map(function(movie) {
        return movie.director;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function find(arr, obj) {
    let cont = 0;
    arr.forEach(element => {
        if (element === obj) cont += 1;       
    });
    if(cont > 0) return true;
}

const howManyMovies = (movies) => {
    let stevenMovies = movies.filter(function(movie) {
        return movie.director === "Steven Spielberg"
    })

    let stevenDrama = stevenMovies.filter(function(movie) {
        return find(movie.genre, "Drama") === true
    })

    if (stevenDrama.length > 0) {
        return stevenDrama.length;
    } else {
        return stevenMovies.length;
    }
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    if (movies.length === 0) return 0;
    let rates = movies.map(function(movie) {
        return movie.rate;
    })

    let sum = rates.reduce(function(accumulator, currentValue){
        if (typeof currentValue === "number") {
            return accumulator + currentValue;
          } else { 
            return accumulator + 0;
          }    
    })

    return Math.round((sum/rates.length)*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    let dramaMovies = movies.filter(function(movie) {
        return find(movie.genre, "Drama") === true
    })

    return ratesAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
    let sortMovies = movies.map(function(movie) {
      return movie
    })
    
    sortMovies.sort(function (a, b) {
        if (a.year === b.year) {
          var nameA = a.title.toUpperCase(); 
          var nameB = b.title.toUpperCase(); 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        } else {
          return a.year - b.year;
        }
      });
    
    return sortMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
    let sortTitle = movies.map(function(movie) {
        return movie.title;
    })

    sortTitle.sort(function (a, b) {
        var nameA = a.toUpperCase(); 
        var nameB = b.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    })
    //¿Puedo incluir una condicion de quiebre en el metodo map?
    if (sortTitle.length > 20) {
        let firstTwenty = []
        for (let i = 0; i < 20; i++){
            firstTwenty.push(sortTitle[i])
        }
        return firstTwenty
    } else {
        return sortTitle
    }


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
/* Initial solution
const turnHoursToMinutes = (movies) => {
    let minutes = movies.map(function(movie) {
        return (Number(movie.duration[0] * 60)) + Number(movie.duration.substring(3,5));
    })

    let newFormat = movies.map(function(movie, index) {
      movie.duration = minutes[index];
      return movie
    })

  return newFormat
}
*/


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
