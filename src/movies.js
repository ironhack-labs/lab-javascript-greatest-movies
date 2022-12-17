// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray =  moviesArray.map(films => films.director)
        return directorsArray;
    };

// console.log(getAllDirectors(movies.length))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies =  moviesArray.filter(films => films.genre.includes('Drama') && films.director === 'Steven Spielberg')
    return dramaMovies.length    
}
// console.log(howManyMovies(movies));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    const totalScore = moviesArray.reduce((value, element) => value + (element.score || 0), 0);
    const average = totalScore / moviesArray.length;
    return Number(average.toFixed(2));
}
// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((film) => {
        return film.genre.includes("Drama");
    });
    if(dramaMovies.length === 0){
        return 0
    }else {
        const justNumber = dramaMovies.filter(value => {
            return typeof value.score == "number";
        })
        const totalSum = justNumber.reduce((accumulator, value) =>{
            return accumulator + value.score
        }, 0)
        return parseFloat((totalSum / dramaMovies.length).toFixed(2))
    }
}
// console.log(dramaMoviesScore(movies))
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if(moviesArray.length === 1){
        return moviesArray;
    }
    const sortedMovies = [...moviesArray];
    sortedMovies.sort(function(a, b){
        return a.year - b.year || a.title.localeCompare(b.title);
    });
    return sortedMovies;
}
// console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesTitles = moviesArray.map(movies => movies.title)
    orderedMovies = moviesTitles.sort((a, b) => a.localeCompare(b));
    return orderedMovies.splice(0, 20);
};
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
