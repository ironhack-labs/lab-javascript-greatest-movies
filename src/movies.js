/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies){
    
    let copyMovies = Array.from(arrMovies);

    function orderNames(a,b){
        if (a.title < b.title){
            return -1;
        } else if (a.title > b.title){
            return 1;
        } else {
            return 0;
        };
    };

    function orderYear(a,b){
        return a.year -b.year;
    };

    copyMovies.sort(orderNames);
    return copyMovies.sort(orderYear);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arrMovies){
    let copyMovies = Array.from(arrMovies);

    let directorFilter = copyMovies.filter(function(arrDirector){
        return arrDirector.director === "Steven Spielberg" && arrDirector.genre.includes("Drama");
    }
    );
    return directorFilter.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies){
    let copyMovies = Array.from(arrMovies);

    function orderNames(a,b){
        if (a.title < b.title){
            return -1;
        } else if (a.title > b.title){
            return 1;
        } else {
            return 0;
        };
    };

    return copyMovies.sort(orderNames).slice(0,20).map(arr => arr.title);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrMovies){
    if (arrMovies.length === 0){
        return 0;
    };
    
    let copyMovies = Array.from(arrMovies);

    let rates = copyMovies.filter(film => "rate" in film).reduce((sum, film)=>{
        return sum + film.rate;
    },0);

    return Math.round(rates/copyMovies.length*100)/100;
};

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrMovies){
    
    let dramaMovies = Array.from(arrMovies);
    
    dramaMovies = dramaMovies.filter(film => film.genre.includes("Drama"));

    if (dramaMovies.length === 0){
        return 0;
    };

    let dramaRates = dramaMovies.reduce((sum, film)=>{
        return sum + film.rate;
    },0);

    return Math.round(dramaRates/dramaMovies.length*100)/100;
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
