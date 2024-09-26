// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movies => movies.director); 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movies => movies.genre.includes(`Drama`) && movies.director === `Steven Spielberg`).length     
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    return Number((moviesArray.map(movies => {
        if(typeof movies.score === `number`){
            return movies.score
        } else {
            return 0
        }
    }).reduce((acumulator, currentValue) => acumulator + currentValue) / moviesArray.length).toFixed(2))

}

    

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.filter(movies => movies.genre
            .includes(`Drama`)).length === 0) {
            return 0;
    }
    const totalReviews = moviesArray.filter(movies => movies.genre
            .includes(`Drama`))
            .reduce(function (acumulator, currentValue){
            return acumulator + currentValue.score 
    }, 0);
    const averageRate = totalReviews / moviesArray.filter(movies => movies.genre.includes(`Drama`)).length;
 
    return parseFloat(averageRate.toFixed(2))
        }


        
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // b.year === a.year ? b.title.localeCompare(a.title) : b.year - a.year
    return moviesArray.map(x => x).sort((b, a) => {
        if (b.year === a.year) {
            return b.title.localeCompare(a.title)
        }
        return b.year - a.year
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(movies => movies.title).sort().filter((i, index) => index < 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return JSON.parse(JSON.stringify(moviesArray))
      .map(film => {
        const minsHours = film.duration.replace('h', '').replace('min', '').split(' ').map(time => +time)
        const toMins = (minsHours.length > 1 ? [minsHours[0] * 60, minsHours[1]] : [minsHours[0] * 60]).reduce((acc, el) => acc + el, 0)
        film.duration = toMins
        return film
      })
  }



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    console.log(moviesArray.map(movies => {
        if (!movies.year && movies.score) 
        ({year: movies.year, score: [movies.score]})
     }).sort((a , b) => a.year - b.year));


    return moviesArray.map(movies => ({ year: movies.year, score: movies.score })).sort((a , b) => a.year - b.year)
}
console.log(bestYearAvg(movies))
 
/*
 .filter(movies, i => {
        let counter = 0;
        if (movies.year[i] === movies.year[i+1]){
            counter ++;
        } else {
         let average = movies.score.reduce(((acc, el) => acc + el, 0) / counter);
         counter = 0;
         return { year: movies.year, score: average };
        }
        // return movies 
    }));


*/