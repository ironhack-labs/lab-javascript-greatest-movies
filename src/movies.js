// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies){
    return movies.map(movie => movie.director);
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielbergMovies = movies.filter(movie =>{
        return (
            movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
        );
    });
    return spielbergMovies.length; 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if(movies.length === 0){
        return 0;
    }
    const sumScores = movies
    .filter(movie => movie.score)
    .reduce ((sum, movie) => sum + movie.score, 0)
    .toFixed(2);

    const average = (sumScores/ movies.length);

    return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));

    if (dramaMovies.length === 0){
        return 0;
    }
    const dramaScoresTotal = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);

    const averageDramaScore = (dramaScoresTotal/dramaMovies.length)

    return parseFloat(averageDramaScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviesSorted = movies
    .slice()
    .map((movie)=> movie)
    .sort((a,b)=> {
        if (a.year !== b.year){
            return a.year - b.year;
        }else{
            return a.title.localeCompare(b.title);
        }
       
    });
    return moviesSorted; 
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const moviesAlphabetical = movies
    .map((movie)=> movie.title)
    .sort((a,b)=> a.localeCompare(b))
    .slice(0,20);

    return moviesAlphabetical;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const newArr = movies.map(function(movie){
        return durationToMinutes(movie);
    });

    function durationToMinutes(movie){
        if(typeof movie.duration === "number"){
            return movie;
        }
       let movieDuration = movie.duration;

        const timeString = movieDuration.split(" ");

        const minutesDuration = timeString.reduce(function(total, string){
            if(string.includes("h")){
                const numOfHours = parseInt(string);
                return total + numOfHours * 60;
            }else{
                const numOfMinutes = parseInt(string);
                return total + numOfMinutes;
            }
        }, 0);

        movie.duration = minutesDuration;
        return movie;
    }

    return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
    if (!movies.length){
        return null; 
    }

    const dictionary = {};

    movies.forEach(function(movie){
        if(!dictionary[movie.year]){
            dictionary[movie.year]=[];
            dictionary[movie.year].push(movie);
        }else{
            dictionary[movie.year].push(movie);
        }
    });

    let highest = 0; 
    let bestYear;

    for (const year in dictionary){
        const currentYearAverage = scoresAverage(dictionary[year]);

        if(currentYearAverage > highest){
            highest = currentYearAverage;
            bestYear = year;
        }else if(currentYearAverage === highest){

            const oldestYear = year < bestYear ? year : bestYear;
            bestYear = oldestYear;
        }
        }
        return `The best year was ${bestYear} with an average score of ${highest}`;
    }
