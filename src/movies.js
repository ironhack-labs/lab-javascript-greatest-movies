// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const director = moviesArray.map(function(movie) {
        return movie.director;
    },)
    return director;
    //return movies.map(movie => movie.director)
    //.filter((director, i., directors) => {
        //return directors.indexOf(director) === i
    // })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
     // let stevenDramaMovies = 0;
    // let drama = 'Drama';
    // const stevenMovies = moviesArray.filter(function(movie) {
    //     return movie.director === 'Steven Spielberg' ; //&&
    // })
    // const stevenDrama = stevenMovies.filter(function(drama) {
    //     return drama.genre.includes(drama);
    // })
    // for (countMovies of stevenDrama)
    // return stevenDramaMovies.length;

    return moviesArray.filter(movie => {
        return movie.genre.includes ("Drama") && movie.director === "Steven Spielberg"
    }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const scoresMultiplied =  moviesArray.reduce((acc,val) => {
        if (!val.score) return acc;
        return acc + val.score
    }, 0)

    return Number((scoresMultiplied / moviesArray.length).toFixed(2)) 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => 
        movie.genre.includes("Drama")
    )
    return scoresAverage (dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
     // [...moviesArray]
     return moviesArray
     .slice()
     .sort((a,b) => 
     a.year - b.year || a.title.localeCompare(b.title));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.map(movie => {
        return movie.title
    })
    .sort((a,b) => {
        return a.localeCompare(b)
    })
return sortedMovies.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return movies.map(movie => {
        let minutes = 0;
        let hoursInMinutes = 0;
        
        if (movie.duration.includes("m")) {
            minutes = Number(movie.duration.slice(movie.duration.indexOf(" ") + 1, movie.duration.indexOf("m")));
        }

        if (movie.duration.includes("h")) {
            hoursInMinutes = Number(movie.duration.slice(0, movie.duration.indexOf("h"))) * 60
        }
    
        return { ...movie, duration: minutes + hoursInMinutes };
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const years = [...new Set(moviesArray.map(movie => movie.year))];
let scoreByYears = [];
years.forEach(year => {
    const avgScore = scoresAverage(moviesArray
    .filter(movie => movie.year === year))
    scoreByYears.push({year, score: avgScore})
})
const scoreByYearsSorted = scoreByYears
.sort((a,b) => {
    return b.score = a.score
})
return scoreByYears;
return `The best year was ${scoreByYearsSorted[0].year} with an average score of ${scoreByYearsSorted[0].score}`;
}
