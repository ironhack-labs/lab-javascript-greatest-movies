//const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors =   moviesArray.map(item => item.director);

    return allDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const dramas = moviesArray.filter(item => item.director.includes('Steven Spielberg') && item.genre.includes('Drama'));

    return dramas.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length===0){
        return 0;
    }

    const listScore = [];

    moviesArray.forEach(function(item){ 
        if(item.score){
            listScore.push(item.score);
        }
    });

    const sum = listScore.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );

      const moy = sum / moviesArray.length;

      return parseFloat(moy.toFixed(2));    
    
    // I still feel like doing this would have been shorter:
    // for (let movie of moviesArray) {count += movie.score}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramas = moviesArray.filter(item => item.genre.includes('Drama'));

    return scoresAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const sortYear = moviesArray.sort(function(movie1, movie2){
        if( movie1.year < movie2.year) {
            return -1;

        } else if (movie1.year === movie2.year) {
             if (movie1.title < movie2.title) {
                return -1;

             } else {
                return 1;
            }

        } else{
             return 1;
        }
    });

    const mapYear = sortYear.map(movie => movie);
    
    return mapYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const sortTitle = moviesArray.sort(function(movie1, movie2){

        if (movie1.title < movie2.title) {
            return -1;

        } else {
            return 1;
        }
    });
    
    const titles20 = [];

    if (sortTitle.length < 20){
        sortTitle.forEach((movie) => titles20.push(movie.title));
    } else {
        for (let i=0 ; i<20 ; i++){
            titles20.push(sortTitle[i].title);;
        }
    }
    
    return titles20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    // const minuteNotHours = moviesArray.map(function(movie){
    //     movie.duration.split(typeof 'numbers');
    // })

    // return minuteNotHours;
}

console.log(turnHoursToMinutes([{duration: "2hh22"}]));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
