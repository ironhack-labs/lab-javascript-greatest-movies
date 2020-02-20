/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const newArr = [...array]
    newArr.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0
            }
        } else {
            return a.year - b.year
        }
    })
    return newArr
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
    
function howManyMovies() {
    let directorSt =  movies.filter(function(dir) {
        if (dir.director == "Steven Spielberg" && dir.genre.includes("Drama")) {
          return true;
        } else {
          return false;
        }
      });
    return directorSt.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

var orderAlpha = movies.sort(function(a, b) {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
var orderAlpha = JSON.parse(JSON.stringify(movies));
orderAlpha.sort((a, b) => a - b);

var result = orderAlpha.map(a => {
    return a.title;
});
function orderAlphabetically() {
    if (result.length > 20) {
        return result.slice(0, 20);
    } else if (result.length > 20) {
        return result;
    }
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage() {

}

// Iteration 5: Drama movies - Get the average of Drama Movies

var dramaMovies = movies.filter(function(drama) {
    if (drama.genre == "Drama") {
    return true;
    } else {
    return false;
    }
});

var dramaMoviesRateVar = dramaMovies.map(a => a.rate);

var sumDrama = 0;
for( var i = 0; i < dramaMoviesRateVar.length ; i++ ){
    sumDrama += dramaMoviesRateVar[i]; 
}

var avgDrama = parseInt(sumDrama, 10)/dramaMoviesRateVar.length;
var avgNum = parseInt(avgDrama, 10);
function dramaMoviesRate() {
    if (dramaMoviesRateVar === 0) {
        return 0
    } else {
        return avgNum;
    } 
 }
   


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes() {

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg() {

}