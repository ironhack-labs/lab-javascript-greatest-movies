
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let directorsArr = moviesArray.map(
        // movies => (movies.director)
        function(movieDir){
            return movieDir.director;
        }
    )
    return directorsArr;
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let spielbergMovies = moviesArray.filter(
        function(movie){
            // if(movie.director === 'Steven Spielberg'){
            //     if(movie.genre.includes('Drama') === true){
            //         return movie.title;
            //     }
            // }
            return movie.director === 'Steven Spielberg';
        }
    )
    let spielbergDramaMovies = spielbergMovies.filter(
        function(movie){
            return movie.genre.includes('Drama')
        }
    )

    return spielbergDramaMovies.length;
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0){
        return 0;
    }

    let scoreSum = moviesArray.reduce(
        function(accumulator, movie){
            if(movie.hasOwnProperty('score') === true){
                return accumulator + movie.score;
            } else {
                return accumulator;
            }
        }
    , 0)
    return Math.round((scoreSum / moviesArray.length)*100)/100;
}
console.log(scoresAverage(movies))

// if(movies[0].hasOwnProperty('score') === true){
//     console.log('movie')
// }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMovies = moviesArray.filter(
        function(movie){
            return movie.genre.includes('Drama')
        }
    )
    return scoresAverage(dramaMovies);
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    let clonedMoviesArray = moviesArray.slice()
    
    let sortedByYearClonedMoviesArray = clonedMoviesArray.sort(
        function(movie1, movie2){
            if(movie1.year>movie2.year){
                return 1;
            } else if(movie1.year<movie2.year){
                return -1;
            }
            else {
                return 0;
            }
        }
    )
    return sortedByYearClonedMoviesArray;
}
console.log(orderByYear(movies))
console.log(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let clonedMoviesSlicedArray = moviesArray.slice()

    let sortedByTitleClonedMoviesSlicedArray = clonedMoviesSlicedArray.sort(
        function(movie1, movie2){
            if(movie1.title>movie2.title){
                return 1;
            } else if(movie1.title<movie2.title){
                return -1;
            }
            else {
                return 0;
            }
        }
    )
    let titlesArr = sortedByTitleClonedMoviesSlicedArray.map(
        // movies => (movies.director)
        function(movieTitle){
            return movieTitle.title;
        }
    )
    return titlesArr.slice(0, 20);
}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
