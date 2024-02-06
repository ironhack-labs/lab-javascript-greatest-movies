// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);

    const uniqueDirectors = directors.filter((director, index) => {
        // Return true only if the current director is the first occurrence in the array
        return directors.indexOf(director) === index;
    });
    return uniqueDirectors;
}
//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const stevens = moviesArray.filter(movie => (movie.director === 'Steven Spielberg') && (movie.genre.includes('Drama')));
    return stevens.length;
}
//console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    // Return 0 if the array is empty
    if (moviesArray.length === 0) {
        return 0;
    }

    const scores = moviesArray.map(movie => movie.score);

    const suma = scores.reduce(function (acc, score) {
        return (acc + score)
    });

    return Number((suma / moviesArray.length).toFixed(2));

}

//console.log(scoresAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramas = moviesArray.filter(movie => movie.genre.includes('Drama'));

    const scores = dramas.map(movie => movie.score)

    const average = scores.reduce((acc, score) => acc + score)

    return Number((average / moviesArray.length).toFixed(2));
}

//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/*We need to sort the movies in ascending order by their release year. This
should be easy using one of the methods we have just learned.

 😉 Create a function orderByYear() that receives an array as a parameter and returns
  a new sorted array.*/

// If two movies have the same year, order them in alphabetical order by their title! 

/* Important: Your function should return a new array, containing the movies ordered by the year.
 Your function should not modify (mutate) the original array. 
 You may need to research how to make a "copy" or "clone" an array.*/
function orderByYear(moviesArray) {
    const uniqueArray = [...moviesArray];

    uniqueArray.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    return uniqueArray;
}


//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/*Another popular way to order the movies is to sort them alphabetically using
 the title key. However, in this case, we only need to print the title of the first 20.

Create an orderAlphabetically() function that receives an array and
returns an array of the first 20 titles, alphabetically ordered. 
Return only the title of each movie, and if the array you receive 
has less than 20 movies, return all of them.*/
function orderAlphabetically(moviesArray) {

    const twentyTitles = moviesArray.map(movie => movie.title);

    twentyTitles.sort((a, b) => a.localeCompare(b));

    return twentyTitles.slice(0, 20);
}

//console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    //const formated = [...moviesArray];

    const formated = moviesArray.map(movie => {
        let horas = 0;
        let minutos = 0;

        // Si la peli tiene horas y minutos
        if ((movie.duration.indexOf("h") > -1) && movie.duration.indexOf("min") > -1) {

            horas = Number(movie.duration.substring(0, movie.duration.indexOf("h")));
            minutos = Number(movie.duration.slice(3, movie.duration.indexOf("min")));

            movie.duration = (horas * 60) + minutos;
            
            // Si la peli solo tiene horas
        } else if (movie.duration.indexOf("h") > -1) {
            horas = Number(movie.duration.substring(0, movie.duration.indexOf("h")));
            movie.duration = horas * 60;
         
        }   // Si la peli tiene solo minutos

        return movie;
    });

    return formated;
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    /*const bestyear = [...moviesArray];

    formated.map(movie => {

    });*/
}
