/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    return [...movies.sort(function (year1, year2) {
        if (year1.year > year2.year) return 1;
        return -1;
        if (yea1.name === year2.year)
            return year1.name.localCompare(year2.year);

    })];

}






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct



function howManyMovies(movies) {
    let howMany = 0;
    howMany = movies.filter((movies) => movies.genre.includes("Drama") && movies.director === "Steven Spielberg").length;
    return howMany;
    movies.title.toString();
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let totalMOvie = movies.map(movie => movie.title);
    return totalMOvie.sort().splice(0, 20);
}




// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0){
        return 0
    }
    
    let sum = movies.reduce((ac, movie) => {
        if (typeof(movie.rate) != "number"){
            movie.rate = 0
        }
        return movie.rate + ac
    }, 0) 
    return parseFloat((sum/movies.length).toFixed(2));


}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaMovi = movies.filter(movie => movie.genre.includes("Drama"))
    if (dramaMovi.length === 0)return 0;
    let sum = dramaMovi.reduce((ac, movie) => {
        
        return ac+movie.rate
    }, 0) 
    

   return Math.round((sum / movies.length) *100 )/100
    
}

dramaMoviesRate(movies)


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    movies.map(movie =>  {
    movies.duration = "1h 33min";
    let newDuration = 93;
    return [...movies, duration  = newDuration];
    });
   

    }



// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {

}