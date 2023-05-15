// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray.map(function(movieObj){
        return movieObj.director;
    });
    return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaArr = moviesArray.filter(function(movieObj){
        return movieObj.director === "Steven Spielberg" && movieObj.genre.includes("Drama");
    });
    return spielbergDramaArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    let reducedScores = [];

    if (moviesArray.length === 0) {
        return 0;
    } else {
        reducedScores = moviesArray.reduce(function(acumulator, currentValue){
            if (currentValue.score === undefined){
                return acumulator;
            } else {
                return acumulator + currentValue.score;
            }
            
        }, 0);
    }

    return +((reducedScores / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaArr =  moviesArray.filter(function(movieObj){
        return movieObj.genre.includes("Drama");
    });
    if (dramaArr.length === 0) {
        return 0;
    }
    const scoreDramaArr = dramaArr.map(function(dramaObj){
        if (dramaObj.score === undefined) {
            return 0;
        } else {
            return dramaObj.score;
        }
    });
    const reducedScore = scoreDramaArr.reduce(function(acumulator, currentValue){
       return acumulator + currentValue;
    }, 0);
    return +((reducedScore / dramaArr.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const copyMoviesArray = [...moviesArray];

    copyMoviesArray.sort(function (objectA, objectB){
        if ( objectA.year === objectB.year) {
            return objectA.title.localeCompare(objectB.title)
            }else {
                return objectA.year - objectB.year; 
            }
          });
    return copyMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleArray = moviesArray.map(function(movieObj){
        return movieObj.title;
    })
    const alphabeticalTitle = titleArray.sort((titleA, titleB) => titleA.localeCompare(titleB));

    if( alphabeticalTitle.length > 20){
        return alphabeticalTitle.slice(0,20);
    } else {
        return alphabeticalTitle;
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
