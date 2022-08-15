// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray.map(directors => directors.director);
    return directorsArr;
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const StevenSpielbergMovies = moviesArray.filter(stevenMovies => stevenMovies.director === 'Steven Spielberg' && stevenMovies.genre.includes('Drama'))
    return StevenSpielbergMovies.length;
}
howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }

    const initialValue = 0;
    let sumWithInitialValue;
    sumWithInitialValue = moviesArray.reduce((acc, curr) => acc + curr.score, initialValue);

    return Math.round((sumWithInitialValue/moviesArray.length)*100)/100;
}
scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const initialValue = 0;
    const dramaMovies = moviesArray.filter(dramaMovie => dramaMovie.genre.includes('Drama'));
    let sumWithInitialValue = dramaMovies.reduce((acc, curr) => acc + curr.score, initialValue)

    if(dramaMovies.length === 0){
        return 0;
    }

    return Math.round((sumWithInitialValue/dramaMovies.length)*100)/100;
}   
dramaMoviesScore(movies) 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const newMoviesArr = [...moviesArray]

    newMoviesArr.sort((a, b) =>  a.year - b.year)

    return newMoviesArr;

}
orderByYear(movies) 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArr = [...moviesArray];

    newArr.sort(function(a, b) {
    let textA = a.title.toUpperCase();
    let textB = b.title.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
    const titlesArr = newArr.map(titles => titles.title);
    const firstTwentyTitles = titlesArr.slice(0,20);

    return firstTwentyTitles
}
orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
