// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsName = moviesArray.map((movie) => {
        return movie.director;
    });
    return (directorsName);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (moviesArray){
    const moviesBySteven = moviesArray.filter(movie => {
     return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return moviesBySteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage (moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    const averageOfScores = moviesArray.reduce((accumulator, movie) => {
        return accumulator + (movie.score || 0);
    }, 0) / moviesArray.length;
    
    return Number(averageOfScores.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray){
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama")) 

    if(dramaMovies.length === 0){
        return 0;
    }

    const totalScore = dramaMovies.reduce((accumulator, movie) => accumulator + (movie.score || 0), 0);

    return Number((totalScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (moviesArray){
    const moviesArCopy =[...moviesArray];

    moviesArCopy.sort((a, b) => {
        if (a.year !== b.year){
            return a.year - b.year
        }
         return a.title.localeCompare(b.title)
    });
     
    return moviesArCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (moviesArray){
    const alphabeticalOrder = [...moviesArray].sort((a,b) => {
        return a.title.localeCompare(b.title);
    });
    const movieTitles =  alphabeticalOrder.map(movie => movie.title);

    return movieTitles.slice (0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray){
    return moviesArray.map(movie => {
        const newMovie = { ...movie };
        
        const durationArray = newMovie.duration.split(" ");
        
        let hours = 0;
        let minutes = 0;

        if (durationArray[0] && durationArray[0].includes("h")) {
            hours = parseInt(durationArray[0].replace("h", ""));
        }

        if (durationArray[1] && durationArray[1].includes("min")) {
            minutes = parseInt(durationArray[1].replace("min", ""));
        } else if (durationArray[0] && durationArray[0].includes("min")) {
            minutes = parseInt(durationArray[0].replace("min", ""));
        }

        newMovie.duration = (hours * 60) + minutes;

        return newMovie;
    });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
    function bestYearAvg(moviesArray){

        if (moviesArray.length === 0){
            return null;
        }

        const scoreAverage = {};
       
        moviesArray.forEach(movie => {
            const year = movie.year;
            const score = movie.score;

            if(!scoreAverage[year]){
                scoreAverage[year] = [];
            }
            scoreAverage[year].push(score);
        });

        let bestYear = null;
        let bestAverage = 0;

         for (const year in scoreAverage) {
            const currentYearScores = scoresByYear[year];

            
        const totalScore = currentYearScores.reduce((accumulator, score) => accumulator + score, 0);
   
        const currentAverage = totalScore / currentYearScores.length;

        if (currentAverage > bestAverage) {
             bestAverage = currentAverage;
             bestYear = year;

         } else if (currentAverage === bestAverage) {
            if (bestYear === null || Number(year) < Number(bestYear)) {
                bestYear = year;
            }
         }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}
    
