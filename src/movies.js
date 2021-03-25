// Iteration 1: All directors? - Get the array of all directors.

let getAllDirectors = (arrayMovies) =>{
    let mapDirector = arrayMovies.map((movies) =>{
        return movies.director
    })
    return mapDirector;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let cleanDirectors = getAllDirectors.reduce((acc, director) => {
    if(!acc.includes(director)){
        acc.push(director);
    }
    return acc;
}, []);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrayMovies) {
    let total = arrayMovies.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        })
    return total.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrayMovies) {
    let finalRatesAvg = arrayMovies.reduce((acc, movie) => {
        !movie.rate ? acc += 0 : acc += (movie.rate / arrayMovies.length);
        return acc
    }, 0)
    return Number(finalRatesAvg.toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrayMovies) {
    let filterDrama = arrayMovies.filter((movie) => {
        let dramaMovies = movie.genre.includes('Drama');
        return dramaMovies
    });
    return ratesAverage(filterDrama);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrayMovies){

    let copyArray = arrayMovies.map((movie) => {
        return movie;
    });
    let sortMovies = copyArray.sort((el1, el2)=>{
        if(el1.year < el2.year) {
            return -1
        } else if (el1.year > el2.year) {
            return 1
        } else {
            if(el1.title < el2.title) {
                return -1
            } else if (el1.title > el2.title){
            return 1
            }
        }
    });
    return sortMovies;
};


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrayMovies) {
    let copyArray = arrayMovies.map((movie) => {
        return movie.title;
    });
    let firstTwenty = copyArray;

    let sortMovies = firstTwenty.sort();
    return sortMovies.splice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
