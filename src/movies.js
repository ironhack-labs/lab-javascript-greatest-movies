
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    return moviesArray.map((movies) => movies.director)
}

const directors = getAllDirectors(movies);
console.log(directors);

// Iteration 1.1: Clean the array of directors
function cleanDirectorsArray(moviesArray) {
    const cleanDirectors = moviesArray.filter((director, index) => moviesArray.indexOf(director) === index);
    return cleanDirectors;
}
const cleanDirectors = cleanDirectorsArray(getAllDirectors(movies));
console.log(cleanDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const steveMovies = moviesArray.filter(movies => movies.director == "Steven Spielberg");
   const steveDrama = steveMovies.filter(movies => movies.genre.includes("Drama"));
   
   if (steveMovies.length == 0){
       return 0;
   } else {
       return steveDrama.length;
   }
}
howManyMovies(movies)


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let totalMoviesWithScore = 0;
    const ratingSum = moviesArray.reduce((acc, curr) => {
        if (curr.score !== undefined && !isNaN(curr.score)) {
            totalMoviesWithScore++;
            return acc + curr.score;
        } 
        return acc;
    }, 0);

    if (totalMoviesWithScore === 0){
        return 0;
    }
    let result = ratingSum / totalMoviesWithScore;
    return Math.round(result * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let totalDramaMoviesWithScore = 0;
    const dramaRatingSum = moviesArray.reduce((acc, curr) => {
        if (curr.genre.includes("Drama") && curr.score !== undefined && !isNaN(curr.score)) {
            totalDramaMoviesWithScore++;
            return acc + curr.score;
        } 
        return acc;
    }, 0);

    if(totalDramaMoviesWithScore === 0){
        return 0;
    }

    let result = dramaRatingSum / totalDramaMoviesWithScore;
    return Math.round(result * 100) / 100;
}
const dramaAvg = dramaMoviesScore(movies)
console.log("The AVG score of ALL Drama movies in the Top 250 of IMDB is: ", dramaAvg);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if(moviesArray.length === 1){
        return moviesArray;
    }

    return moviesArray.slice().sort((a, b) => {
        if (a.year === b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitlesSorted = moviesArray.map((movies) => movies.title).slice().sort((a, b) => a-b).slice(0, 20);
    for (let i =0; i < 20; i++){
        movieTitlesSorted[i]
    }
    return movieTitlesSorted.sort().slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    // 2h 22min
    // 2h 4min
    for (let i=0; i < moviesArray.length; i++){
        let durationTime = moviesArray[i].duration;
        let hours = durationTime.slice(0, 1) * 60;
        let mins;
        if (durationTime.length == 8){
            mins = durationTime.slice(3, 5) * 1;
        } else {
            mins = durationTime.slice(3, 4) * 1;
        }
        let duration = hours + mins;
        durationTime = duration;
        moviesArray[i].duration = durationTime;
    }
    return moviesArray;
}




