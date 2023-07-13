// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray.map((movie)=>{
        return  movie.director;
    })
    return directorsArr;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    let numStevenDrama = moviesArray.filter((movie)=>{
        if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
            return movie;
        }
    })
    return numStevenDrama.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0};
    let sumArr = moviesArray.reduce((acc, curr) => {
        if(curr.score === "" || !curr.score){
            curr.score = 0;
        }
        return acc + curr.score
    }, 0)
    

    return Math.round(sumArr / moviesArray.length * 100) / 100;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
        let dramaArr = moviesArray.filter((movie)=>{
            if(movie.genre.includes("Drama")){
                return movie;
            }
        })
    return scoresAverage(dramaArr)
};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArr = moviesArray.slice();

    newArr.sort((a, b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title)} //local compare means receiving two values, either 1 or -1, now  if the result is -1 then what is om the left will come first 
        else{
            return a.year - b.year;
        }
    })
    return newArr;
 };


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphaArr = moviesArray.map((movie)=>{
        return  movie.title;
    })
    alphaArr.sort();
    if(alphaArr.length > 20){
        return alphaArr.slice(0, 20)
    }
    return alphaArr;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let minutesArray = moviesArray.map((movie) => {
        let duration = movie.duration;
        let nrHours = 0;
        let nrMinutes = 0;
        if (typeof duration === "string") {
            const timeParts = duration.split(" ");
      
            if (timeParts[0].includes("h")) {
              nrHours = parseInt(timeParts[0], 10);
            }
      
            if (timeParts[1]) {
                nrMinutes = parseInt(timeParts[1], 10);
            }
        }
        let totalMinutes = (nrHours * 60) + nrMinutes;
        return {duration: totalMinutes};
    });
    return minutesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {};
