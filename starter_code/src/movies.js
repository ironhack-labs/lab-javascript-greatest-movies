/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    let moviesForYear = [...movies];
    //Short bydefault ordena por orden alfabetico sino con "Localcompare"
     moviesForYear = moviesForYear.sort(function(movie1, movie2){
        if(movie1.year > movie2.year) return 1;
        return -1; 
    });
    return moviesForYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
    return movies.filter(movie => movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg")).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let orderTitle = [...movies];

    orderTitle = orderTitle.map((title) => {
       return title.title
    }).sort().splice(0,20);

    return orderTitle;      
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
   if (movies.length === 0) return 0;
    return parseFloat((movies.reduce((ac, movie) => {
        if(typeof(movie.rate) != "number") {
            movie.rate = 0;}
        return ac += movie.rate
    }, 0)/movies.length).toFixed(2))
        
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){

    let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) return 0;
    return parseFloat((dramaMovies.reduce((ac, movie) => {
        if(typeof(movie.rate) != "number") {
            movie.rate = 0;}
        return ac += movie.rate
    }, 0)/dramaMovies.length).toFixed(2))
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
    let backUp = [...movies];
    let newArr = [];
    // toMinute = toMinute.map((movie) =>{
    //     let newArr = movie.duration.split(" ");
        
    //     if (newArr.includes("h") && newArr.includes("min")){
            
    //     })
    // }
    return newArr;
    

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
