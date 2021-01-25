// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    return movies.map(function (element){
        return element.director;
    });
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    let filteredArray = array.filter(function (element){
        return ((element.director === 'Steven Spielberg') && (element.genre.includes("Drama")));
    })
    return filteredArray.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    else {
    let ratesSum = moviesArray.reduce(function(accumulator, currentValue) {
        if(!currentValue.rate) {
            return accumulator + 0
        }
        else {
        return accumulator + currentValue.rate
        }
    }, 0)
    let average = ratesSum/moviesArray.length;
    return Number(average.toFixed(2));
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    let dramaGenre = array.filter(function(movie){
        return movie.genre.includes('Drama')
    })
    return ratesAverage(dramaGenre)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // first make a temp array so you do not change the original movies array
    let moviesTempArray = [];
    moviesArray.forEach(function(element) {
        moviesTempArray.push(element);
    });
    // then sort the temp array
    let moviesSorted = moviesTempArray.sort(function (movie1,movie2){
        if (movie1.year < movie2.year) {
            return -1;
        } else if (movie1.year < movie2.year) {
            return 1;
        } else if (movie1.year === movie2.year) {
            if (movie1.title < movie2.title) {
                return -1;
            } else if (movie1.title < movie2.title) {
                return 1;
            }
        }
        return 0;
        // return movie1.year - movie2.year  ||  movie1.title - movie2.title; //https://stackoverflow.com/questions/13211709/javascript-sort-array-by-multiple-number-fields
    });
    return moviesSorted
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // first make a temp array so you do not change the original movies array and extract only the title
    let moviesTempArray = [];
    moviesArray.forEach(function(element) {
        moviesTempArray.push(element.title);
    });
    // then sort the temp array
    let moviesSorted = moviesTempArray.sort(function (movie1Title,movie2Title){
        if (movie1Title < movie2Title) {
            return -1;
        } else if (movie1Title < movie2Title) {
            return 1;
        }
        return 0;
    });
    // first make a temp array so you do not change the original movies array and extract only the title
    let top20 = [];
    moviesSorted.forEach(function(element) {
        if (top20.length < 20)
        top20.push(element);
    });
    return top20;
}
   
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
