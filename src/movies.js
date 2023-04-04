/* Iteration 1: All directors? */

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    //Get the array of all directors.
    let directorArray = moviesArray.map(currentMovie => currentMovie.director);
    return directorArray;

    //Bonus
    /*
    let cleanDirectorArray = [];
    
    directorArray.forEach(function(currentDirector){
        if (!cleanDirectorArray.includes(currentDirector)){
            cleanDirectorArray.push(currentDirector);
        }
    })

    return cleanDirectorArray;
    */
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergList = moviesArray.filter(currentMovie => currentMovie.director === 'Steven Spielberg' && currentMovie.genre.includes('Drama'))  
    return spielbergList.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    //should return 0 if an empty array is passed
    if ( moviesArray.length === 0) {
        return 0
    } 
    
    const filteredArrSum = moviesArray
        .filter(currentMovie => currentMovie.score !== undefined)
        .reduce((acc, currentMovie) => acc + currentMovie.score, 0);
    
    const avg = filteredArrSum / moviesArray.length;
    
    return Number(avg.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaArray = moviesArray.filter(currentMovie => currentMovie.genre.includes('Drama'));

    if ( dramaArray.length === 0) {
        return 0
    } 

    const dramaScoreSum = dramaArray
        .filter(currentMovie => currentMovie.score !== undefined)
        .reduce((acc, currentMovie) => acc + currentMovie.score, 0)

    const dramaAvg = dramaScoreSum / dramaArray.length;
    
    return Number(dramaAvg.toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //destructuring the array, and pass them back in a new arrey
    let orderedMovieByYear = [...moviesArray]
        .sort((currentMovie, nextMovie) => {
            if (currentMovie.year > nextMovie.year) {
                return 1
            } else if (currentMovie.year < nextMovie.year) {
                return -1
            } else {
                if (currentMovie.title > nextMovie.title) {
                    return 1
                } else {
                    return -1
                }
            }
        })

    return orderedMovieByYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedMovieByTitle = [...moviesArray]
        //get the title of movies
        .map((movie) => movie.title) 
        //sort the titles alphabetically
        .sort((currentMovie, nextMovie) => currentMovie.localeCompare(nextMovie))
    
    //return the top 20 movies
    return orderedMovieByTitle.slice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    //destructuring the original array
    let newArr = [...moviesArray];
    //mapping over each movie and do the culculation to its duration
    newArr.map(function(eachMovie) {
        //Get hours and minutes of duration and turn into minutes 
        let hr = Number(eachMovie.duration.slice(0,1))
        let min = Number(eachMovie.duration.slice(-5, -3))
        let allInMinute = Number(hr * 60 + min)
        //set duration to the new altered one
        eachMovie.duration = allInMinute;
    })

    return newArr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
