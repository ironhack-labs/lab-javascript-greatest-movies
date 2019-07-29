/* eslint no-restricted-globals: 'off' */


// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = movies => {
    movies.reduce( (acc, movie) => {
        subtotal = acc += parseFloat(movie.rate);
        return subtotal;
    }, 0);
    return subtotal / movies.length;
}

 
// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {  
    let dramas = movies.filter(movie => {
        movie.genre.includes('Drama');
    }); 
    return ratesAverage(dramas);
};
// console.log(dramaMoviesRate(movies));




// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => {
    let arr = [];
    movies.forEach(movie => {
        // console.log(movie.duration);      
        let hrsInMinutes = (movie.duration.slice(0, 1) * 60);
        let minutes = parseInt(movie.duration.slice(3, 5));
        // console.log(`minutes: ${hrsInMinutes + minutes}`)
        movie.duration = hrsInMinutes + minutes;
        arr.push(movie);
    })
    arr.sort((a, b) => a - b);
    
    return arr;
};
// console.log(orderByDuration(movies));


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {};


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {};


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {};


// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = movies => {};