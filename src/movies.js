// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const newArray = moviesArray.map( element => {
        return element.director;
    });
    return newArray;
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0) return 0;
    const countMoviesSpilberg = moviesArray.filter( spilberg => {
        return spilberg.director.includes('Steven Spielberg') && spilberg.genre.includes('Drama')
    });
    return countMoviesSpilberg.length;


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0) return 0;
 
    let prom;
    const average = moviesArray.reduce((acum, element, index, array)=>{
        
        if(!element.score) element.score = 0;
        acum += element.score;
        return acum;
    
    }, 0);

    prom = average / moviesArray.length;
    return Number((prom).toFixed(2));
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const moviesDrama = moviesArray.filter( movie=>{
        return movie.genre.includes('Drama');
    });
    if(moviesDrama.length === 0){
        return 0;
    }else{
        const averageDrama = moviesDrama.reduce((acum, movieDrama) => {
        return acum += movieDrama.score;
    }, 0);
        prom = averageDrama / moviesDrama.length;
        return Number((prom).toFixed(2));
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray];
    const moviesOrderByYear = moviesCopy.sort((a, b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title);
        } else{return a.year - b.year;}
    });

    return moviesOrderByYear;

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesCopy = [...moviesArray];
    return moviesCopy.map(movie => movie.title)
    .sort()
    .splice(0, 20);
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const moviesCopy = JSON.parse(JSON.stringify(moviesArray));
    moviesCopy.map(movie => {
        const indexMinutes = movie.duration.indexOf('min');
        let minutes = 0;
        if(movie.duration.indexOf('min') !== -1) minutes = Number(movie.duration.slice(indexMinutes -2 , indexMinutes ));
        const converterHoursToMinutes = movie.duration[0] * 60;
        Number(movie.duration = converterHoursToMinutes + minutes);
 
    } );    
    return moviesCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(moviesArray.length === 0) return null;
    const moviesCopy = [...moviesArray]
    let bestYear = 0;
    let bestScore = 0;
    moviesCopy.map(movie => movie.year).filter((year, index, array)  => array.indexOf(year) === index).sort((a, b) => a - b).forEach(element => {
        const filterMoviesYear = moviesCopy.filter(movie => movie.year === element);
        let scoreForYear = filterMoviesYear.reduce((a, movie) => {
            return a + (movie.score / filterMoviesYear.length);
        }, 0);
        if(scoreForYear > bestScore){
            bestScore = scoreForYear;
            bestYear = element;
        }
    });
    return `The best year was ${bestYear} with an average score of ${bestScore}`;
}