// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map((movie)=>{
        return movie.director
    })
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesCount = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return moviesCount.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
       return 0;
    }
    const sum = moviesArray.reduce((accumulator, currentValue) =>{
        if(currentValue.score){ 
            return accumulator + currentValue.score;
        }   
        else{ 
            return currentValue.score + 0};   
    }, 0)
     const average = (sum / moviesArray.length).toFixed(2);
     return Number(average);

}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((drama)=>{
        return drama.genre.includes('Drama');
    });

    if(dramaMovies.length === 0){
        return 0;
    };
    const avg = dramaMovies.reduce((previous, current)=>{
        return (previous + current.score);
    }, 0);
        return Math.round((avg / dramaMovies.length)*100)/100;
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const order1 = [... moviesArray];
    order1.sort((a,b) =>{
        if(a.year !== b.year){
            return a.year-b.year;
        }
        else {
            return a.title.localeCompare(b.title)
        }
    })
    return order1;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = [];
     for(let i= 0; i < moviesArray.length; i++){
        newArray.push(moviesArray[i].title)
     }
     newArray.sort();
     if(newArray.length > 20){
        newArray = newArray.slice(0,20);
     }
     return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray = [];
    for(let i= 0; i < moviesArray.length; i++){
        moviesArray[i].duration
    }
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
