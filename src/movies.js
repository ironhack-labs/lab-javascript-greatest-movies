// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function (movie){
        return movie.director;
        });
        return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramasSpielberg = moviesArray.filter(function (movie){
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    });
    return dramasSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const sumScore = moviesArray.reduce(function (accumulator, currentValue){
        if (currentValue.score !== undefined){
          return accumulator + currentValue.score;
        }else {
            return accumulator;
        }
    }, 0);
//    console.log(sumScore / moviesArray.length);
    // return sumScore / moviesArray.length;
    return Number((sumScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 1){
        return moviesArray[0].score;
    }
    

    const dramaMovies = moviesArray.filter(function(movie){
        
        return movie.genre.includes("Drama");

    });

    return scoresAverage(dramaMovies);


    

  }
    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //.sort
    // const moviesArrayCopy = [...moviesArray];
    //
    const moviesArrayCopy = [];
    console.log("Empty: "+ moviesArrayCopy)
    moviesArray.forEach(function(movie){
        moviesArrayCopy.push(movie);
    });

    console.log("Copy: "+ moviesArrayCopy);

    moviesArrayCopy.sort(function (a, b){
        if(a.year < b.year){
            return -1;
        } else if(a.year > b.year){
            return 1;
        } else {
            if(a.title < b.title){
                return -1;
            }

            return 0;
        }
    });

    console.log("Sorted: "+ moviesArrayCopy);

    return moviesArrayCopy;

}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
