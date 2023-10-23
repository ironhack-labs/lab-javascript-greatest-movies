// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const result = moviesArray.map((elm) => elm.director);
    return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const result = moviesArray.filter((elm) => elm.genre.includes("Drama") && elm.director === "Steven Spielberg")
    return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const result = moviesArray.reduce((acc, elm) => {
        if (elm.score) {
            return acc + elm.score / moviesArray.length;
        } else {
            return acc;
        }
    }, 0);
    return Math.round(result * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const resultFiltered = moviesArray.filter((elm) => elm.genre.includes("Drama"));
    const result = resultFiltered.reduce((acc, elm) => {
        if (elm.score) {
            return acc + elm.score / resultFiltered.length;
        } else {
            return acc;
        }
    }, 0);
    return Math.round(result * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copiedArray = [...moviesArray];
    let resultArray = copiedArray.sort(function (a, b) {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.year === b.year && a.title.localeCompare(b.title) === -1) return -1;
        if (a.year === b.year && a.title.localeCompare(b.title) === 1) return 1;
        if (a.year === b.year && a.title.localeCompare(b.title) === 0) return 0;
    });
    return resultArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let copiedArray = [...moviesArray];
    let resultArray = copiedArray.sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        if (a.title === b.title) return 0;
    });
    resultArray = resultArray.filter((elm, i, arr) => i < 20);
    resultArray = resultArray.map((elm) => elm.title);
    return resultArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let copiedArray = [...moviesArray];
    let resultArray = copiedArray.map((elm) => {
        let totalMinutes = 0;
        totalMinutes += parseInt(elm.duration[0]) * 60;
        switch (elm.duration.indexOf('m')) {
            case -1:
                break;
            case 4:
                totalMinutes += parseInt(elm.duration[3]) * 10;
                break;
            case 5:
                totalMinutes += parseInt(elm.duration[3]) * 10 + parseInt(elm.duration[4]);
                break;
        }
        elm.duration = parseInt(totalMinutes);
        return elm;
    });
    return resultArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let copiedArray = [...moviesArray];
  
    let scoresByYear = {};
    copiedArray.map((elm) => {
      if (!scoresByYear.hasOwnProperty(elm.year)) {
        scoresByYear[elm.year] = [];
        scoresByYear[elm.year].push(elm.score);
      } else {
        scoresByYear[elm.year].push(elm.score);
      }
    });
  
    return scoresByYear;
  }
  
