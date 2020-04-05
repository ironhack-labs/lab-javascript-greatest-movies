
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    const newArr=[...movies].sort(function (a, b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
return newArr;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
    const spielbergArray=movies.filter(function(movie){
        return movie.director==="Steven Spielberg" && movie.genre.includes("Drama");
    })
    return spielbergArray.length;
    }


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
let titles= movies.map(function (movie) {
        return movie.title;
    });
     let alphatbeticalOrder=titles.sort(function (a, b) {
        return a.localeCompare(b)
    });
    return alphatbeticalOrder.slice(0,20);
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if (movies.length === 0) {
        return 0;
    } else{ 
    const averageRate = movies.reduce(function (acc, val) {
        return acc + (val.rate || 0);
    }, 0) / movies.length;
    return +(averageRate.toFixed(2));
}
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(function (movie) {
        if (movie.genre.indexOf("Drama") !== -1) {
            return true;
        }
    });

    const average = ratesAverage(dramaMovies);
    return average;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    return movies.map(function (movie){
        let newDuration=0;
        if(movie.duration.includes('h')){
            newDuration += Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60;
        }
        if(movie.duration.includes('min')){
newDuration+= Number(movie.duration.slice(movie.duration.indexOf(' ')+1,movie.duration.indexOf('m')));
       }
       return{...movie,duration: newDuration};
    });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (!movies.length) return null;
    const best = movies.reduce(function (best, movie) {
        let average = ratesAverage(movies.filter(function (m) {
            return m.year === movie.year
        }));
        if (average > best.rate || (average === best.rate && movie.year < best.year)) {
            best.year = movie.year;
            best.rate = average;
        }
        return best;
    }, {
        year: null,
        rate: null
    });

    return `The best year was ${best.year} with an average rate of ${best.rate}`;
}



