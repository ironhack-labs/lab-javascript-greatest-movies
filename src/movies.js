// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {  
 let directorsArray = [];
 directorsArray = moviesArray.map((director1) =>{
    return director1.director;
 });
 return directorsArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
 
 const dramaSpielberg = moviesArray.filter((onlyDrama) =>
    onlyDrama.director === 'Steven Spielberg' && onlyDrama.genre.includes('Drama')
)
 return dramaSpielberg.length
};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (moviesArray.length === 0) {
    return 0
}
    const scoresArray = moviesArray.reduce((accumulator, element) => {
        if (element.score === undefined)
        return accumulator
    const sumArray = accumulator + element.score
        return sumArray
}, 0)
    return Math.round(scoresArray / moviesArray.length * 100) / 100
} 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const averagDrama = moviesArray.filter((onlydrama2) => {
        return onlydrama2.genre.includes('Drama')
    })
 return scoresAverage(averagDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesClone = moviesArray.slice()
    
    moviesClone.sort((orderByYear, movieTitle) => {
        if (orderByYear.year !== movieTitle.year) {
          return orderByYear.year - movieTitle.year; 
        } else {
          if (orderByYear.title < movieTitle.title) {
            return -1
          } else if (orderByYear.title > movieTitle.title) {
            return 1
          } else {
            return 0
          }
        }
      })
      return moviesClone
    }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesClone = moviesArray.slice();

    moviesClone.sort((orderTitle, alphaTitle) => {
        const titleA = orderTitle.title.toUpperCase();
        const titleB = alphaTitle.title.toUpperCase();
        if (titleA < titleB) {
        return -1
        }
        if (titleA > titleB) {
        return 1
        }
        return 0
    })

    const titlesArray = moviesClone.map(movie => movie.title);
    return titlesArray.slice(0, 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesClone = moviesArray.slice()
    return moviesClone
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
