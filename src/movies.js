// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = [];
    moviesArray.forEach(movie => {
      
        if (movie.director) {
            if (!directors.includes(movie.director)) {
                directors.push(movie.director);
            }
        }
        if (movie.directors && Array.isArray(movie.directors)) {
            movie.directors.forEach(director => {
                if (!directors.includes(director)) {
                    directors.push(director);
                }
            });
        }
    });

    return directors;
   
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(directorsArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const spielbergDramas = moviesArray.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });

    return spielbergDramas.length;
}

   

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const calcAvg = (arr) => {
        const sumScore = arr.reduce((acc,val) => {
            return acc + val.score
        }, 0)
        return sumScore / arr.lenght
        
    }   
    console.log(calcAvg(moviesArray));

      return 0

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const calcAvgDrama = (arr) => {
        const dramaScore = arr.reduce((acc,val) => {
            return acc + val.score
        }, 0)
        return dramaScore 
        
    }  
    return 0 

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArray = moviesArray.slice();

    newMoviesArray.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        } else {
            return a.year - b.year;
        }
    });

    return newMoviesArray;
}
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMoviesArray = moviesArray.slice();
    newMoviesArray.sort ((a, b) => a.title - b.title);
    return newMoviesArray.slice(0,20).map(movie => movie.title);

   

}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0)
    return 0
} 




