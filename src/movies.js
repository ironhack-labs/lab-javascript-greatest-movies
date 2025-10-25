// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director);

}
// La función comentada contiene la Iteration 1.1 implementada
// function getAllDirectors(moviesArray) {
//     let previousDirector = "";
//     const cleanedArray = moviesArray
//         .map((movie) => movie.director)
//         .filter((director) => {
//             if(previousDirector === "" || previousDirector === director){
//                 previousDirector = director;
//                 return false;
//             } 
//         });

//     return cleanedArray;

// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director === "Steven Spielberg").filter(movie => movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } else{
        const totalScore = moviesArray.reduce((score, movie) => {
            if (movie.score === undefined || movie.score === "") {
                score += 0;
                return score;
            } else {
                score += movie.score;
                return score;
            }
        }, 0);
        const avgScore = totalScore / moviesArray.length        
        return Number(avgScore.toFixed(2));
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramas = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    if (dramas.length === 0) {
        return 0;
    } else{
        const score = dramas.reduce((score, drama) => {
            if (drama.score === undefined || drama.score === ""){
                score += 0;
                return score;
            } else {
                score += drama.score;
                return score;
            }
        }, 0);
        const result = score / dramas.length
        return Number(result.toFixed(2));
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.toSorted((movie1, movie2) => {
        if (movie1.year > movie2.year) {
            return 1;
        } else if (movie1.year < movie2.year) {
            return -1;
        } else if (movie1.year === movie2.year && movie1.title.localeCompare(movie2.title) > 0) {
            return 1;
        } else {
            return -1;
        }
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
        .toSorted((movie1, movie2) => {
            return movie1.title.localeCompare(movie2.title);
        })
        .map((movie) => movie.title)
        .filter((movie, index) =>{
            if (index < 20){
                return `${movie.title}`;
            }
        });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray
        .map((movie) => {
            const duration = movie.duration;
            let hour;
            let min;

            if (duration.includes("h")) {
                hour = Number(duration.slice(0, duration.indexOf("h"))) * 60;
            } else {
                hour = 0;
            }

            if (duration.includes("min")) {
                min = Number(duration.slice(duration.indexOf(" ") + 1, duration.indexOf("min")));
            } else{
                min = 0;
            }

            movie.duration = hour + min;
            return movie;
        });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    const scoreOrdered = moviesArray.toSorted((movie1, movie2) => movie1.score - movie2.score);
    const bestYear = scoreOrdered[0].year;
    const filtered = scoreOrdered.filter((movie) => (movie.year === bestYear)?true:false);

    const totalScore = filtered
        .reduce((totalScore, movie) => {
            totalScore += movie.score;
            return totalScore;
        }, 0);
    const average = totalScore / filtered.length;
    console.log(`The best year was ${bestYear} with an average score of ${average}`);
    
    return `The best year was ${bestYear} with an average score of ${average}`;
}
