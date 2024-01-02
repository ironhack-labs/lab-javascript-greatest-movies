// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(el => el.director);
    return directors;                      
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(el => el.director === "Steven Spielberg" && el.genre.includes("Drama"));
    return spielbergMovies.length;
 }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const notableMovies = moviesArray.reduce((acc,el) => {
        if (typeof el.score === 'number') {
        return acc + el.score;
        } else {
        return acc;
        }
     },0);
     const scoreNumber = notableMovies / moviesArray.length;
     const roundedAverage = Math.round(scoreNumber* 100) / 100;
     return roundedAverage;
    } 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(el => el.genre.includes("Drama"));
    console.log(dramaMovies);
    if (dramaMovies.length === 0) { 
        return 0;
    } 
    const totalDramaMovies = dramaMovies.reduce((acc, el) => {
        if (typeof el.score === 'number') {
            return acc + el.score;
            } else {
            return acc;
            }
    },0);
    const dramaMovieAcc = totalDramaMovies / dramaMovies.length;
    const roundedAverage = Math.round(dramaMovieAcc* 100) / 100;
    return roundedAverage;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesYears = [...moviesArray];
    moviesYears.sort((movie1, movie2) => {
        if (movie1.year !== movie2.year) {
            return movie1.year - movie2.year;
        } else {
            return movie1.title.localeCompare(movie2.title);
        }
    });
    return moviesYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphaMovies = [...moviesArray];
    alphaMovies.sort((movie1, movie2) => {
        return movie1.title.localeCompare(movie2.title);
    });
    const alphabeticMovies = alphaMovies.slice(0,20).map(function(movie) {
        return movie.title});
    return alphabeticMovies;
}   

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMoviesArray = moviesArray.map((movie) => {
        const newMovie = { ...movie }; // Create a new object to avoid mutating the original one
    
        const [hours, minutes] = newMovie.duration.split("h ");
        const parsedHours = parseInt(hours);
        let parsedMinutes = 0;
        if (minutes !== null) {
        parsedMinutes = parseInt(minutes);
        }
        const totalMinutes = parsedHours * 60 + parsedMinutes;
       
        newMovie.duration = totalMinutes;
    
        return newMovie;
      });
    
      return newMoviesArray;
    }
// No consigo que me de bien en Jasmine: should return an array of movies with the correct duration for a 2 hour movie
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) //Tenia claro que metodos usar pero no sabía como implementarlos bien, lo gice con la ayuda de chatGPT no lo hubiera sacado
{
    if (moviesArray.length === 0) {
        return null;
    }

    const filteredMovies = moviesArray.filter(el => el.year);

    if (filteredMovies.length === 0) {
        return null;
    }

    const yearData = filteredMovies.reduce((acc, movie) => {
        if (typeof movie.score === 'number') {
            const year = movie.year.toString();
            acc[year] = acc[year] || { totalScore: 0, count: 0 };
            acc[year].totalScore += movie.score;
            acc[year].count += 1;
        }
        return acc;
    }, {});

    const averageScores = Object.keys(yearData).map(year => {
        const averageScore = yearData[year].totalScore / yearData[year].count;
        return { year: parseInt(year), averageScore };
    });

    averageScores.sort((a, b) => b.averageScore - a.averageScore || a.year - b.year);

    const bestYear = averageScores[0].year;
    const bestAverageScore = averageScores[0].averageScore;

    return `The best year was ${bestYear} with an average score of ${bestAverageScore.toFixed(1)}`;
}
