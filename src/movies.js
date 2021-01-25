// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrayOfMovies){
        const arrayOfDirectors = arrayOfMovies.map(function(movies){
        return movies.director;
    });
    return arrayOfDirectors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// I think it should be something like this. I tried it in repl.it and is working fine.

function getAllDirectors(arrayOfMovies){
        let arrayOfDirectors = arrayOfMovies.map(function(movies){
        return movies.director;
    })
    return arrayOfDirectors.filter(function (directorName, idx) {
    return arrayOfDirectors.indexOf(directorName) === idx;
  });
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfMovies){
    
    let arrayOfDramaMovies = 0;
    arrayOfMovies.filter(function(movies){
        if(movies.director === "Steven Spielberg" && movies.genre.includes("Drama")){
            arrayOfDramaMovies += 1;
        }
    });
    return arrayOfDramaMovies;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrayOfMovies){
    if(arrayOfMovies.length===0){
        return 0;
    }
    let totalRate = arrayOfMovies.reduce(function(acc, movie){
        if(!movie.rate){
           return acc; 
        }
        return acc + movie.rate;
    },0);
    return parseFloat((totalRate/arrayOfMovies.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies){
    let numberOfDramas = 0;
    let totalDramaMovies = arrayOfMovies.reduce(function(acc, movie){
        if(!movie.genre.includes("Drama")){
            return acc; 
         }
         if (movie.genre.includes("Drama")){
            numberOfDramas += 1;
            return acc + movie.rate;
        }
    },0);
    if (totalDramaMovies === 0) {
        return 0;
      }
    return parseFloat((totalDramaMovies/numberOfDramas).toFixed(2));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayOfMovies){
    let copyOfArray = arrayOfMovies.map(function(movies){
        return movies;
    })
    .sort(function(movie1, movie2){
        if (movie1.year < movie2.year){
            return -1;
        } else if (movie1.year > movie2.year) {
            return 1;
        } else if (movie1.year === movie2.year){
            return (movie1.title.localeCompare(movie2.title));
        }
    });
    return copyOfArray;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies){
    const arrayOfTitles = arrayOfMovies.map(function(movies){
        return movies.title
      });
      return arrayOfTitles.sort().slice(0, 20);
  }
 
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
