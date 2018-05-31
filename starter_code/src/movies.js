/* eslint no-restricted-globals: 'off' */
console.log("the javascript is linked!");

// Get the average of all rates with 2 decimals

function ratesAverage(inputArray){
    var average = 0;
    var sum = inputArray.reduce(function(accu, movie){
        return accu + parseInt(movie.rate);
    },0);

    average = sum / inputArray.length;
    return average;
};

console.log("Total movie rating is: "+ ratesAverage(movies));

// Get the average of Drama Movies
//console.log(typeof movies.genre);

var dramaMov = movies.filter(function(movie){  //filtered by Drama
    return movie.genre.includes("Drama");
});
//console.log(dramaMov);

function dramaMoviesRate(array){   //re-use the ratesAverage function
    return ratesAverage(array);
}

console.log("drama movies average rating is: "+ dramaMoviesRate(dramaMov));

function getPercentage(a,b){
    return (b/a)*100;
}

console.log(getPercentage(dramaMoviesRate(dramaMov),ratesAverage(movies))+"%")

//Order by Rating
function orderByRate(array){
    var sortedMov = array.sort(function(a,b){
        if (a.rate>b.rate){
            return 1;
        } else {
            return -1;
        }
    });
    return sortedMov
};

console.log(orderByRate(movies));

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    var StevSpielArray = array.filter(function(movie){
        return movie.director.includes('Steven Spielberg') && movie.genre.includes("Drama");
    });
    return StevSpielArray
};

console.log(howManyMovies(movies));

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var sortedMov = array.sort( function( strA, strB){
        strA = strA.title.toLowerCase();
        strB = strB.title.toLowerCase();

        if (strA > strB){
            return 1;
        } else {
            return -1;
        }
    });
    return sortedMov.slice(0,20)
};

console.log(orderAlphabetically(movies));

// Best yearly rate average
