// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movieArray) {

    const directors = movieArray.map(function(movieArray) {
        return movieArray.director;
    })
        return directors;
    }
    
    getAllDirectors(movies);
    console.log(getAllDirectors(movies))
    
    // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
    
    function howManyMovies(movieArray) {
        
     let amountOfMovies = movieArray.filter(function(movieArray){
        if (movieArray.director === "Steven Spielberg" && movieArray.genre.includes("Drama")) {
        return true
        }
        })
    return amountOfMovies.length
    }
        
    console.log(howManyMovies(movies));
    
    
    // Iteration 3: All rates average - Get the average of all rates with 2 decimals
    
    function ratesAverage(movieArray) {
    
    let sum = movieArray.reduce(function(rate, movieArray) {
        return rate + movieArray.rate
     }, 0)
     return (sum / movieArray.length).toFixed(2);
    }
    
    ratesAverage(movies);
    
    
    
    
    // Iteration 4: Drama movies - Get the average of Drama Movies
    
    function dramaMoviesRate(movieArray) {
    
        let sumDrama = movieArray.reduce(function(rate, movieArray) {
            if (movieArray.genre.includes("Drama")) {
            return rate + movieArray.rate
            }
         }, 0)
         return (sumDrama / movieArray.length).toFixed(2);
        }
        
     dramaMoviesRate(movies);
    
    // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
    
    function orderByYear(movieArray) {
        let sortedMovies = movieArray.year.sort(function(a, b) {
        return a - b
        })
        return sortedMovies
    }
    
    orderByYear(movies);
    
    // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    
    function orderAlphabetically(movieArray) {
        let sortedByTitle = movieArray.title.sort(function(a, b) {
        if movieArray.title < 20 {
        return 1
        }
        if movieArray.title > 20 {
        return -1
        }
    })
    }
    
    orderAlphabetically(movies);