
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    var directors = moviesArray.map(function (movie) {
        return movie.director;
    });
    return directors;
}
// function sortedDirectorsUnique(moviesArray){
//     return getAllDirectors(moviesArray)
// .filter(director, i, moviesArray)
// if directors === i 
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(function (movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    });

    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) { return 0 };

    const overallAverage = moviesArray.reduce(function (acc, val) {
        if (val.score === undefined) { return acc };
        return acc + val.score;
    }, 0);

    return Math.round((overallAverage / moviesArray.length) * 100) / 100
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function (movie) {
        return movie.genre.includes("Drama");
    })
    if (dramaMovies.length === 0) {
        return 0;
    }
    const averageScore = dramaMovies.reduce(function (acc, val) {
        return acc + val.score;
    }, 0);
    return Math.round((averageScore / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movieByYear = moviesArray.slice(0).sort(function (a, b) {
        if (a.year != b.year) {
            return a.year - b.year;
        } else if (a.year == b.year) {
            return a.title.localeCompare(b.title);
        }
    });
    return movieByYear;
}
// objArray.sort((a, b) => a.DepartmentName.localeCompare(b.DepartmentName))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieByTitle = moviesArray.slice(0).sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    const sortedTitles = movieByTitle.map(function (movies) {
        return movies.title;
    });
    return sortedTitles.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {
//     const arrLoop = moviesArray.forEach(movie => {
//         let timeInMin = ((parseInt(movie.duration) * 60) + (parseInt(movie.duration.slice(2, -1))))
//         return {
//             ...movie, duration: timeInMin
//         }
//     });
//     return arrLoop.slice(0)
// }
function turnHoursToMinutes(moviesArray) {
    /*const arrLoop = [...new Set(moviesArray)]
    arrLoop.forEach(movie => {
      let timeInMin = 
          (parseInt(movie.duration)*60) + (parseInt(movie.duration.slice(2, -1)))
          return [...arrLoop, duration = timeInMin]
    });

return arrLoop*/
    return moviesArray.map(movie => {
        const time = movie.duration.split(" ");
        const movieDurationStr = { ...movie }

        movieDurationStr.duration = parseInt(time[0]) * 60;
        if (time[1]) {
            movieDurationStr.duration += parseInt(time[1]);
        }

        return movieDurationStr;
    });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    }
/*single element array*/
    if (moviesArray.length === 1) {
        return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`
    }
    moviesArray.sort((a, b) => {
        return a.year - b.year
    })

    let bestScoreAvg = 0
    let topYear = 0

    moviesArray.forEach((movie) => {
        let yearOfMovie = movie.year
        let yearGroups = moviesArray.filter((titles) => {
            return yearOfMovie == titles.year
        })
        if (scoresAverage(yearGroups) > bestScoreAvg) {
            bestScoreAvg = scoresAverage(yearGroups)
            topYear = yearOfMovie
        }
    })
    return `The best year was ${topYear} with an average score of ${bestScoreAvg}`
}