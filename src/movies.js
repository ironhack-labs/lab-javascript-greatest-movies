// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(movies) {
    return movies.map(function(movie){
    return movie.director;
})
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies){

    let answer = movies.filter(function(movie){
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });

    return answer.length;

}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    let ratedMovies = movies.filter(function(movie){
      return movie.rate;
    });

    let allRates = ratedMovies.reduce(function(acc, movie){
        return acc + movie.rate;
    }, 0);

    let average = allRates / ratedMovies.length;
    let roundedAverage = average.toFixed(2);
    return parseFloat(roundedAverage);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(function(movie){
        return movie.genre.includes("Drama");
    })

    if (dramaMovies.length === 0) {
        return 0;
    } else {

    let dramaRates = dramaMovies.reduce(function(acc, movie){
        return acc + movie.rate;
    }, 0);

    let averageDrama = dramaRates / dramaMovies.length;
    let roundedDramaAverage = averageDrama.toFixed(2);
    return parseFloat(roundedDramaAverage);
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {

    let yearSorted = movies.sort(function(a, b){
    
    if (a.year === b.year){
        if (a.year === b.year){
        var nameA = a.title.toUpperCase(); 
        var nameB = b.title.toUpperCase(); 
        if (nameA < nameB) {
        return -1;
  }
  if (nameA > nameB) {
    return 1;
  }}
    } else {

    return a.year - b.year;
    }});

    return yearSorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically (movies) {
    let alphabetSorted = movies.sort (function(a, b){
        let nameA = a.title.toUpperCase();
        let nameB = b.title.toUpperCase();

        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    });
    let answer = alphabetSorted.map(function(movie){
      return movie.title;
    });
    answer.splice(20);
    return answer;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
