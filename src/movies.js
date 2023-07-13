// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (element) => element.director === "Steven Spielberg" && element.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const totalScores = moviesArray.reduce((total, movie) => {
if (movie.hasOwnProperty('score')) {
        return total + movie.score;
    }
    return total;
    }, 0);


 const totalMovies = moviesArray.length
 const average = totalScores / totalMovies;
 return Math.round(average * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let onlyDrama = moviesArray.filter((movies) => {
return movies.genre.includes("Drama");
    });
    let averageNumber = scoresAverage(onlyDrama)
    return averageNumber
}

    // return moviesArray.filter(
    //     (element) => element.genre.includes("Drama"));
    //     return moviesArray.score




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedArray = moviesArray.slice()   //note to self: the purpose of this line of code is to create a new array so that the fuction does not mutate the original array. 
sortedArray.sort((a, b)=>{
    if (a.year !== b.year) {
        return a.year - b.year;
    }
    else return a.title.localeCompare(b.title)
});
return sortedArray
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortedArray2 = moviesArray.slice()
    sortedArray2.sort((a,b) => 
    a.title.localeCompare(b.title))
for (i = 0; i = 20; i++) {
    console.log(sortedArray2[i].title)
}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
