//  eslint no-restricted-globals: 'off' 

// const movies = require("./data");



// Iteration 1: Ordering by year - Order by year, ascending (in growing order)





function orderByYear (array) {
    let arrayCopie = [...array];
    let newSortedArray = arrayCopie.sort(function(a,b) {

        if(a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else { 

    return a.year - b.year; }
    }); 
    return newSortedArray ;
}






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


function howManyMovies(array) {

    let newArray = array.filter(function(movie) {


        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
        
        
    });
    
     return newArray.length;
}

howManyMovies(movies);



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let justTitle = array.map(theMovie =>{
    return theMovie.title});
    justTitle.sort(function(a,b){
        return a.localeCompare(b)
        }); 
        if (justTitle.length<=20){
        return justTitle;
        }else{ 
        justTitle.splice(20)
        return justTitle
        }
    };

    orderAlphabetically(movies)


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (array) {
    const justRates = array.map(theMovie => {
        return theMovie.rate
    })
    let averageRate = 0;
    // let numberOfRates = 0;
    if (array.length==0){
        return 0
    } else{
    for (let i=0;i<justRates.length;i++){
        if (typeof justRates[i]==="number"){
            // numberOfRates+=1;
            averageRate+=justRates[i]

        }
        }
    }
    averageRate = Math.round(averageRate/justRates.length*100)/100
    return averageRate
}
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
    const newArray = array.filter(function(film) {
    return film.genre.includes("Drama");
    });
    const justDramaRates = newArray.map(film => {
    return film.rate;
    });
    let averageDramaRate = 0;
    if (justDramaRates.length==0){
        return 0
    } else{
    for (let i=0;i<justDramaRates.length;i++){
        if (typeof justDramaRates[i]==="number"){
            averageDramaRate+=justDramaRates[i]
        }
        }
    }
    averageDramaRate = Math.round(averageDramaRate/justDramaRates.length*100)/100;
    return averageDramaRate;
}

dramaMoviesRate(movies)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
