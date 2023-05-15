// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(m => m.director);
    console.log("directors", directors.length);

    let directorsFiltered = directors.filter((movie, index, array) => index === array.indexOf(movie));
    console.log("directors filtered", directorsFiltered.length);
    
    return directorsFiltered;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(m => m.director === 'Steven Spielberg' && m.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    const allScores = moviesArray.filter(m =>m.score).map(m => m.score);
    return Math.round(allScores.reduce((sum, val) => sum + val, 0) * 100 / moviesArray.length, 2) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    const dramas = moviesArray.filter(m =>m.genre.includes('Drama'));
    return scoresAverage(dramas);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.map(m => m).sort((m1, m2) => {
        if (m1.year !== m2.year) {
            return m1.year - m2.year;
        }
        
        return m1.title.localeCompare(m2.title);
    
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let count = 0;
    return moviesArray
        .map(m => m)
        .sort((m1, m2) => m1.title.localeCompare(m2.title))
        .map(m => m.title)
        .filter(m => {
            count++;
            return count <= 20;
        });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray
        .map(m => {
            let duration = m.duration;
            const hours = parseInt(duration.slice(0, duration.indexOf('h')));
            // console.log("hours", hours)

            let minutes = 0;
            const iMin = duration.indexOf('min');
            if(iMin !== -1) {
                minutes = parseInt(duration.slice(duration.indexOf('h') + 1, iMin));
            }
            
            if(isNaN(minutes)) {
                console.log("minutes", duration.slice(duration.indexOf('h') + 1, duration.indexOf('min')));
            }

            let movie = {...m};
            movie.duration = hours * 60 + minutes;

            return movie;
        });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }

   const aggregate = moviesArray.reduce((acc, movie) => {
    var obj = acc[movie.year];
    if(obj === undefined) {
        acc[movie.year] = { total: movie.score, count: 1};
    } else {
        obj.total += movie.score;
        obj.count++;
    }

    return acc;

   }, []);

   const bestYear = aggregate.reduce((acc, movieData, i) => {
        // console.log(movieData, i);
        const movieAvg = movieData.total / movieData.count;
        if(movieAvg > acc.avg) {
                return { year: i, avg: movieAvg};
        }
        return acc;
    }, { year: -1000, avg: -1})

    return `The best year was ${bestYear.year} with an average score of ${bestYear.avg}`

}
