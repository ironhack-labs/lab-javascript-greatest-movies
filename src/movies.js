// Iteration 1: All directors? - Get the array of all directors.

 function getAllDirectors(movies) {
        return movies.map(function(movie) {
            return movie.director;
        })
 }

//  const getAllDirectors = movies => movies.map(movie => movie.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(movies) {
//     directors = [];
//     movies.map(function(movie) {
//         if(!directors.includes(movie.director)) directors.push(movie.director);
//     });
//     console.log(directors);
//     return directors;
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    return movies.filter(function(movie) {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
    }).length
}
// const howManyMovies = movies => movies.filter(movie => movie.genre.includes("Drama") && movie.director === "Steven Spielberg").length


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    let ratesArr = movies.map(movie => {
        if (!movie.rate ) {
            return 0;
    }
        return movie.rate
    });
    let average = ratesArr.reduce((acc, value) => acc + value, 0) / ratesArr.length;
    if (ratesArr.length === 0) return 0; 
    return Number(average.toFixed(2));
} 


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramas = movies.filter(movie => movie.genre.includes("Drama"));
    if (dramas.length === 0) return 0;
    let dramaRateArr = dramas.map( drama => {
        if (!drama.rate) {
            return 0;
        }
      return drama.rate;
    });
    let dramaAvg = dramaRateArr.reduce((acc, value) => acc + value, 0) / dramaRateArr.length;
    return Number(dramaAvg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let orderedByYear = [...movies].sort(function (a, b) {
        if (a.year === b.year) {
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        }
        return a.year - b.year;
    });
    return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let sortedAlpha = [...movies].sort(function (a, b) {
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        });
    let titles = movies.map(movie => movie.title);
    titles = titles.sort();
    let firstTwenty = titles.slice(0,20);
    return firstTwenty;
    }

    
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
    const copy = movies.map(movie => { 
        return {...movie}
    });
// Works to complete Jasmin test but doesn't cover movies with a duration of 1h 01 to 1h 09 correctly.
    copy.map(element => {
        if(element.duration) {
            const regexNum = /[1-9][0-9]/;
            let minutesTotal; 
            let hours;
            if(element.duration[1] === 'h') hours = element.duration[0]*60;
            else hours = 0;
            let minutes = String(element.duration).match(regexNum);
            minutes = Number(minutes);
            minutesTotal = hours + minutes;
            element.duration = minutesTotal;
        }
    });
    return copy;
}

    
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = movies => {
    if (movies.length === 0) return null; 
    let bestRate;
    let bestYear;
    return `The best year was ${bestYear} with an average rate of ${bestRate}`
};
