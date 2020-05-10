// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(anArray){
    let newArray = anArray.map(function(anArray){
        return anArray.director;
    })
    return newArray;
}
getAllDirectors(movies);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(anArray){
    if (anArray.length === 0){
        return 0;
    }
    let fromSpielburgDrama = anArray.filter(function (anArray) {
        return anArray.director === "Steven Spielberg" && anArray.genre.includes("Drama");
    })
    console.log(fromSpielburgDrama.length);
    return fromSpielburgDrama.length;
}

howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(anArray){
    if (anArray.length === 0) {
        return 0;
    }

    const allRates = anArray.map(function(anArray) {
        return anArray.rate;
    })

    const averageRate = allRates.reduce(function(accumulator, currentValue){        
        if (typeof currentValue !== 'number') {
            return accumulator;
        } else {
            return accumulator + currentValue/(allRates.length);
        }
    }, 0);
    return Math.round(averageRate * 100) / 100;
}

ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(anArray){

    const dramaMovieArray = anArray.filter(function(anArray){
        return anArray.genre.includes("Drama");
    })

    console.log(dramaMovieArray);

    const dramaMovieArrayRates = dramaMovieArray.map(function (dramaMovieArray){
        return dramaMovieArray.rate;
    })
    
    console.log(dramaMovieArrayRates);

    const dramaMovieAverage = dramaMovieArrayRates.reduce(function (acc, curr) {
        if(typeof curr !== 'number'){
            return acc;
        } else{
            return acc + curr / dramaMovieArrayRates.length;
        }
    }, 0);
    console.log(Math.round(dramaMovieAverage * 100) / 100);
    return Math.round(dramaMovieAverage * 100) / 100;
}

dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(anArray){
    const sortedMoviesArray = anArray.sort(function (a, b) {
        if (a.year === b.year){
            if (a.title < b.title){
                return -1;
            } else{
                return 1;
            }
        } else {
            return a.year - b.year;
        }
    });
    console.log(sortedMoviesArray);
    return sortedMoviesArray;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(anArray){
    let titlesOfMovies = anArray.map(function (anArray) {
        return anArray.title;
    })

    let sortAlphabetically = titlesOfMovies.sort();
    console.log(sortAlphabetically);

    if (sortAlphabetically.length < 20) {
        console.log(sortAlphabetically);
        return sortAlphabetically;
    } else if (sortAlphabetically.length > 20) {
        console.log(sortAlphabetically.splice(0, 20));
        return sortAlphabetically.splice(0, 20);
    }
}

orderAlphabetically(movies);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
