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

var directorSt =  movies.filter(function(dir) {
    if (dir.director == "Steven Spielberg" && dir.genre.includes("Drama")) {
    return true;
    } else {
    return false;
    }
});



function howManyMovies() {
    return directorSt.length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

var sortedMovies = movies.sort(function(a, b) {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});

var result = sortedMovies.map(a => a.title);



function orderAlphabetically(){
    if (result.length > 19) {
        return result.slice(0, 20);   
    } else if (result.length < 20) {
        return sortedMovies;
    }
    return;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

var allRates = movies.map(a => a.rate);

var sum = 0;
for( var i = 0; i < allRates.length ; i++ ){
    sum += allRates[i]; 
}

var avg = parseInt(sum, 10)/allRates.length;

var avgNum = parseInt(avg, 10);


function ratesAverage(){
    return avgNum.toFixed(2);
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
    return avgNum;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

var onlyTimeArr = movies.map(a => a.duration);

var date = new Date();
console.log(date.getMinutes());

// BONUS Iteration: Best yearly rate average - Best yearly rate average
