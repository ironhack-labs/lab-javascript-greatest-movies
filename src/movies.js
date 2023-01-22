// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return allDirectors = moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray){
    SpielbergDramaMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    
    return SpielbergDramaMovies.length
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    const scoreAvg = moviesArray.reduce(function(scoreSum, movie){
        if(!movie.score) {
            return scoreSum + 0;
        }
        return scoreSum + movie.score},0);

    let result = Number((scoreAvg/moviesArray.length).toFixed(2));

    return result
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let count = 0;

    const dramas = moviesArray.filter(function(movie){
       return movie.genre.includes('Drama')
    });
    count = dramas.length
    const sumScore = dramas.reduce(function(sum, drama){
        return sum + drama.score;
    }, 0)
    if(dramas.length === 0) return 0;

    let dramaAvg = Number((sumScore/count).toFixed(2));

    return dramaAvg
}

  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let mvArrCopy = [...moviesArray];
    let alphSort = mvArrCopy.sort(
        (movie1, movie2) => (movie1.title < movie2.title) ? -1 : (movie1.title > movie2.title) ? 1 : 0);
    let sorted = alphSort.sort(
        (movie1, movie2) => (movie1.year < movie2.year) ? -1 : (movie1.year > movie2.year) ? 1 : 0);

    return sorted


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let mvArrCopy = [...moviesArray]
    let sorted = mvArrCopy.sort(
        (movie1, movie2) => (movie1.title < movie2.title) ? -1 : (movie1.title > movie2.title) ? 1 : 0);
    let titlesArray = sorted.map(function(movie){return movie.title})
    titlesArray.sort()
    if(titlesArray.length > 20) titlesArray = titlesArray.slice(0, 20)

    return titlesArray




}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
