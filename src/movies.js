/////////////////////////////////////////////////////////
////BONUS: function to test if array is empy        ////
//////////////////////////////////////////////////////
function isArrayFull(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        return true;
    } else {
        return false;
    }
}

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    if (!isArrayFull(moviesArray)) {
        return false;
    }
    const allDirectorsArrayUnified = moviesArray
        .map(function (element) {
            return element.director;
        })
        .filter(function (element, index, array) {
            //remove duplicated content
            //take only first element of its value, don't take the next ones
            //if element already exist before in the array, indexOf won't be its current index
            //test is made on the entire array
            return array.indexOf(element) === index;
        });
    return allDirectorsArrayUnified;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!isArrayFull(moviesArray)) {
        return 0;
    }
    const movieOfStevenDramaArray = moviesArray.filter(function (element) {
        return element.director === 'Steven Spielberg' && element.genre.indexOf('Drama') != -1;
    });
    return movieOfStevenDramaArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!isArrayFull(moviesArray)) {
        return 0;
    }
    const initialValue = 0;
    const sum = moviesArray.reduce(function (accumulator, currentValue) {
        if (!isNaN(currentValue.score)) {
            return accumulator + currentValue.score;
        } else {
            return accumulator;
        }
    }, initialValue);
    return Math.round(sum / moviesArray.length * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!isArrayFull(moviesArray)) {
        return false;
    }
    const sumDrama = moviesArray.filter(function (element) {
        return element.genre.indexOf('Drama') != -1;
    });
    return scoresAverage(sumDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayByYear = [...moviesArray];
    moviesArrayByYear.sort(function (a, b) {
        if (a.year === b.year) {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        } else {
            return a.year - b.year;
        }
    });
    return moviesArrayByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayByTitle = [...moviesArray];

    let titleArray = [];
    moviesArrayByTitle.forEach(element => titleArray.push(element.title));

    titleArray.sort();

    titleArray = titleArray.slice(0, 20);

    return titleArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesArrayNewDate = [...moviesArray];

    moviesArrayNewDate.forEach(function (element) {
        let hourValue;
        let minuteValue;
        if (typeof element.duration === 'string') {
            if (element.duration.indexOf("h") != -1) {
                hourValue = element.duration.substring(0, element.duration.indexOf("h"));
                hourValue *= 1;
            } else {
                hourValue = 0
            }
            if (element.duration.indexOf("min") != -1) {
                minuteValue = element.duration.substring(element.duration.indexOf("h") + 2, element.duration.indexOf("min"));
                minuteValue *= 1;
            } else {
                minuteValue = 0;
            }
            minuteValue += hourValue * 60;
            element.duration = minuteValue;
        }
    })
    return moviesArrayNewDate;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!isArrayFull(moviesArray)) {
        return null;
    }

    const allYear = moviesArray
        .map(function (element) {
            return element.year;
        })
        .filter(function (element, index, array) {
            return array.indexOf(element) === index;
        });
    allYear.sort();
    let arrayToManipulate;
    let bestYear = 0;
    let bestAvgScore = 0;
    for (let i = 0; i < allYear.length; i++) {
        arrayToManipulate = moviesArray.filter(function (element, index, array) {
            return element.year === allYear[i];
        });
        if (bestAvgScore < scoresAverage(arrayToManipulate)) {
            bestAvgScore = scoresAverage(arrayToManipulate);
            bestYear = allYear[i];
        }
    }
    return `The best year was ${bestYear} with an average score of ${bestAvgScore}`;



}
