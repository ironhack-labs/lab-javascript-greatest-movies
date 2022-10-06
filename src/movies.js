
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((films) => films.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenFilms = moviesArray.filter((films) => films.director === "Steven Spielberg" && films.genre.includes("Drama"));
    return stevenFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0 ){
        return 0;
    }
    let scoredMovies = moviesArray.filter((films) => films.score);
    console.log(scoredMovies)
    let totalScore = scoredMovies.reduce((acc, film) => acc + film.score, 0);
    let avgScore = totalScore/moviesArray.length;
    
    return Number(avgScore.toFixed(2));
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((films) => films.genre.includes("Drama"));
    if(dramaMovies.length === 0) return 0;

    let totalScoreDramaMovies = dramaMovies.reduce((acc, films) => acc + films.score, 0);
    let avgScoreDramaMovies = totalScoreDramaMovies/dramaMovies.length;
    return +avgScoreDramaMovies.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copiedMoviesArray = moviesArray.slice().sort( (a, b) =>
a.year - b.year).sort(function (a, b){
    if(a.year === b.year) return a.title.localeCompare(b.title);
 })
  return copiedMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let copiedMoviesArray = moviesArray.slice();
    let titlesArray = copiedMoviesArray.map((films) => films.title);
    titlesArray.sort();
    if (titlesArray.length > 20) {
        titlesArray.splice(20);
    }
    return titlesArray;
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let copiedMoviesArray = moviesArray.slice();
    let durationsArray = copiedMoviesArray.map((films) => films.duration);
    let numberDurationArray = [];
    for(let i = 0; i < durationsArray.length; i++){
        let time = 0
        if(durationsArray[i].length === 7){
            time += Number(durationsArray[i][0])*60;
            time += Number(durationsArray[i][3]);
        } else {
            time += Number(durationsArray[i][0])*60;  
            time += Number(durationsArray[i].slice(3, 5));
        }
        numberDurationArray.push(time);
    }
    
for (let i = 0; i < numberDurationArray.length; i++){
    copiedMoviesArray[i].duration = numberDurationArray[i]; 
}
return copiedMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
}
