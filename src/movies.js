// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
}*/

function getAllDirectors(moviesArray) {
    let allDirArry = moviesArray.map((nameDirector) => {
        return nameDirector.director;
    });

    return allDirArry;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergDrama = moviesArray.filter((movie) => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) { 
            return movie;
        };
    })
    return spielbergDrama.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0) {
        return 0;
    }
    
    let moviesArrayCopy = moviesArray.map((score) => {
        return score.score;
    });

    let moviesArrayAddingZeros = moviesArrayCopy.filter((values) => {
        if (values === 0) {
            return 0;
        } else {
            return values;
        }
    })

    let totalScore = moviesArrayAddingZeros.reduce((sum,scoreRating) => {
        return sum+scoreRating;
    },0);
    
    let average=totalScore/moviesArrayCopy.length;
     

    return Number(average.toFixed(2));
}

// RETURN HERE - MISSING THE LAST POINT


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama');
  });

  let average = scoresAverage(dramaMovies);
  return average;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = moviesArray.map((movie) => {
        return movie;
    })
    moviesArrayCopy.sort((a,b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else if (a.title > b.title) {
            return 1;    
        } else if (a.title < b.title) {
            return -1;
        } else {
            return 0;}     
});
return moviesArrayCopy;
} 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderAlphabeticallyCopy = moviesArray.map((movie) => {
        return movie.title;
    })
    orderAlphabeticallyCopy.sort();

    let first20Titles = orderAlphabeticallyCopy.slice(0,20);
    return first20Titles;
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let moviesArrayCopy=[...moviesArray];








    return moviesArrayCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }



}
