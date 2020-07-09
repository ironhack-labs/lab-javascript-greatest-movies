// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (moviesArr) => {
    let directorsArr = moviesArr.map(function(movie){
        return movie["director"];
    });
    return directorsArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectorsUnified = (anArray) => {
    const uniqueArr = [];
    for (let i = 0; i < anArray.length; i++) {
      let word = anArray[i];
      if (uniqueArr.indexOf(word) < 0) {
        uniqueArr.push(word);
      }
    }
    return uniqueArr;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArr) => {
    let dramaSpielbergArr = moviesArr.filter(function(movie){
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    })
    return dramaSpielbergArr.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (moviesArr) => {
    if (moviesArr.length === 0) {
        return 0;
    }
    let totalRates = moviesArr.reduce(function(acc, movie){
        if (typeof movie.rate !== "number" || movie.rate === "undifined"){
            movie.rate = 0;
        }
        return acc + movie.rate;
    }, 0)
    let averageRates = totalRates / moviesArr.length;
    return parseFloat(averageRates.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (moviesArr) => {
    let dramaArr = moviesArr.filter(function(movie){
        return movie.genre.includes("Drama");
    })
    if (dramaArr.length === 0) {
        return 0;
    }
    let dramaTotalRates = dramaArr.reduce(function(acc, movie){
        return acc + movie.rate;
    }, 0)
    let dramaAverageRates = dramaTotalRates / dramaArr.length;
    return parseFloat(dramaAverageRates.toFixed(2));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (moviesArr) => {
    let sortedMoviesArr = JSON.parse(JSON.stringify(moviesArr));
    sortedMoviesArr.sort(function (a, b){
        // Ordering by year
        if (a.year > b.year){
            return 1;
        } else if (a.year < b.year){
            return -1;
        } else {
            // Ordering by title
            if (a.title > b.title){
                return 1;
            } else if (a.title < b.title){
                return -1;
            } else {
                return 0;
            }
        }
    })
    return sortedMoviesArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (moviesArr) => {
    // Cloning the array
    let alphaOrderMoviesArr = JSON.parse(JSON.stringify(moviesArr));
    // Getting only the titles of every movie
    alphaOrderMoviesArr = alphaOrderMoviesArr.map(function(movie){
        return movie.title;
    })
    // Sorting the movie titles in alphabetic order
    alphaOrderMoviesArr.sort(function (a, b){
        if (a > b){
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    })
    // Getting only the 20 first movies
    alphaOrderMoviesArr.splice(20);
    return alphaOrderMoviesArr;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (moviesArr) => {
    let cloneMoviesArr = JSON.parse(JSON.stringify(moviesArr));
    let hoursMoviesArr = cloneMoviesArr.map(function(movie){
        // Converting the string to an array of 2 numbers for hours and minutes
        let durationArray = movie.duration.toString().split(" "); // we get an array ["2h", "22min"]
        //Checking the length of the durationArray
        // If it has hours and minutes
        if (durationArray.length === 2) {
            durationArray[0] = parseInt(durationArray[0].slice(0, 1), 10) // [2, "22min"]
            durationArray[1] = parseInt(durationArray[1].slice(0, -3), 10) // [2, 22]
            // Converting hours to minutes
            durationArray[0] = durationArray[0] * 60 // [120, 22]
            // Adding hours and minutes
            let finalTime = durationArray.reduce(function(acc, elem){
            return acc + elem;
            }, 0) // 142
            // Changing the duration of the movie with the new calculation
            movie.duration = finalTime;
        } else if (durationArray[0].includes("min")){ // The movie is less than 1 hour
            // Converting minutes to a number
            durationArray[0] = parseInt(durationArray[0].slice(0, -3), 10); 
            // Changing the duration of the movie with the minutes in number
            movie.duration = durationArray[0];
        } else if (durationArray[0].includes("h")){ // The movie duration only has hour
            // Converting hours to a number
            durationArray[0] = durationArray[0] = parseInt(durationArray[0].slice(0, 1), 10)
            // Converting hours to minutes
            durationArray[0] = durationArray[0] * 60
            // Changing the duration of the movie with the minutes in number
            movie.duration = durationArray[0];
        }
        return movie;
    });
    return hoursMoviesArr;

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (moviesArr) => {
    if (moviesArr.length === 0) {
        return null;
    }

    // Creating an array of every years
    let yearsArr = moviesArr.map(function(movie){
        return movie.year;
    })

    // Counting the average Rate of every year and stock the highest one
    let maxAverage = 0;
    let bestYear = 0;
    yearsArr.forEach((year) => {
        // Calculating the sum of all the years' rate
        let rateSum = moviesArr.reduce(function(acc, movie){
            if (movie.year === year){
                return acc + movie.rate;
            } else {
                return acc + 0;
            }
        }, 0);
        // Counting the number of movies this year
        let nbMovies = moviesArr.reduce(function(acc, movie){
            if (movie.year === year){
                return acc + 1;
            } else {
                return acc + 0;
            }
        }, 0);
        // Calculating the average for this year
        let avRate = rateSum / nbMovies;
        // If it is the best year, replacing the values
        if (avRate > maxAverage) {
            maxAverage = avRate;
            bestYear = year;
        } else if (avRate === maxAverage && bestYear !== 0 && year < bestYear) {
            maxAverage = avRate;
            bestYear = year;
        }
    })

    return `The best year was ${bestYear} with an average rate of ${maxAverage}`


}