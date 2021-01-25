// const { movies } = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr){
    return directors = arr.map((movies) => { 
        return movies.director;
    });
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    return howMany = arr.filter((movies) => {
        return movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
    }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if(movies.length != 0){
        const average = movies.reduce((total, movie) => {
                return total + movie.rate;
        }, 0) / movies.length;
        if(isNaN(average)){
            for(let i=0; i<movies.length ; i++){
               return movies[i].rate/movies.length;
            }
        }
        return parseFloat(average.toFixed(2));
    }
    return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let quantity = movies.filter((movie) => {
        return movie.genre == 'Drama';
    });
    if(quantity.length > 0){
        const average = movies.reduce((total, movie) => {
            if(movie.genre[0] === 'Drama') return total + movie.rate;
            else return total;
        }, 0) / quantity.length;
        return parseFloat(average.toFixed(2));
    }
    return 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    if(movies.length > 0){
        return sorted = movies.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.year > b.year) ? 1 : -1) : -1 );
    }
    return 0;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let sorted = [];
    const arr = movies.slice(0, 500);
    sorted = arr.sort((a, b) => (a.title > b.title) ? 1 : (a.title === b.title) ? ((a.title > b.title) ? 1 : -1) : -1 );
    return sortedTitles = sorted.map((sorted) => { 
        return sorted.title;
    }).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
    const stringMovies = JSON.parse(JSON.stringify(movies));
    return converted = stringMovies.map((movie) => {
        if(movie.duration.includes('h') && movie.duration.includes('min')){
            movie.duration = parseInt(movie.duration) * 60 + parseInt(movie.duration.slice(2, 100));
        } else if(movie.duration.includes('h')){
            movie.duration = parseInt(movie.duration) * 60;
        } else{
            movie.duration = parseInt(movie.duration);
        }
        return movie;
    });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
    if(movies.length > 0){
        let result = { bestYear: 0, averageRate: 0 };
        const year = movies.reduce((total, movie) => {
            if(total[movie.year]){
                total[movie.year].push({ rate: movie.rate });
            }else{
                total[movie.year] = [{ rate: movie.rate }];
            }
            return total;
        }, []);
        for(i in year){
            const average = year[i].reduce((total, year) => {
                return total + year.rate;
            }, 0) / year[i].length;
            if(average > result.averageRate){
                result = { bestYear: i, averageRate: average };
            }
        }
        return `The best year was ${result.bestYear} with an average rate of ${result.averageRate}`;
    }
    return null;
}
