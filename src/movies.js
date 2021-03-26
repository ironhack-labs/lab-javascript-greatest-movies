// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (movies){
    let mapped = movies.map(function(movie){
        return movie.director;
    });
    return mapped; 
}

//console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    const dramaMovies = movies.filter(function(dramaMovie){
        if (dramaMovie.director === "Steven Spielberg" && dramaMovie.genre.includes("Drama")){
            return true;
        }
    }) 
    return dramaMovies.length
}

//console.log(howManyMovies(movies));


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
      const filterRate = movies.map(function(movie){
        return movie.rate;
      });
      //return filterRate;
      const sumRate = filterRate.reduce(function(acc , val){
        return acc + val;
      }, 0);  
      return Math.round((sumRate/movies.length)*100)/100;
    }
};
  
//console.log(ratesAverage(movies));




// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    if (movies.length === 0){
    return 0;
    } else {
        const filterDrama = movies.filter(function(movieDrama){
            return movieDrama.genre.includes("Drama");
        });

        const ratesDrama = filterDrama.reduce(function(acc, val){
            return acc + val.rate;
        },0)
        
        const averageDrama = ratesDrama / filterDrama.length;
        return Math.round((averageDrama)*100)/100;
};

//console.log(dramaMoviesRate(movies))




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
  const mapped = movies.map(function(movie){
    return [movie.title ,movie.year]
  });
  const sorted = mapped.sort(function(a,b){
    return b-a
  });
  return sorted;
}

//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    const titlesMovie = movies.map(function(movie{
        return movie.title;
    });
    const titlesSorted = titlesMovie.sort(function(title1, title2){
        return title2 - title1;
    });
    return titlesSorted.slice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
