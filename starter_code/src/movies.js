/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => movies.slice(0).sort((a, b) => a.year !== b.year ? a.year - b.year : (a.title > b.title) ? 1 : -1);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (movies) => movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => movies.map(movie => movie.title).sort().slice(0,20);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage =  (movies) => {
    const average =  movies.length === 0 ? 0 : movies.map(movie => (movie.rate && typeof movie.rate==='number') ? movie.rate : 0).reduce((a, b) => a + b) / movies.length; 
    return Number(Math.round(average+'e2')+'e-2');
}

// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    const moviesFiltered = movies.filter(movie => {
        return movies.length === 0 ? 0 : movie.genre.includes('Drama');
    });
    const average =  moviesFiltered.length === 0 ? 0 : moviesFiltered.map(movie => (movie.rate && typeof movie.rate==='number') ? movie.rate : 0).reduce((a, b) => a + b) / movies.length;
    return Number(Math.round(average+'e2')+'e-2');
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies) => {
    let moviescopy = JSON.parse(JSON.stringify(movies));
    moviescopy.forEach(movie => {
        let minsFromHours = movie.duration.includes('h') ? parseInt(movie.duration.split('h')[0])*60 : 0;
        let minsFromMins = 0;
        if (movie.duration.includes('min') && movie.duration.includes('h')){
            minsFromMins = parseInt(movie.duration.split('h')[1].split('min')[0].substr(1)) 
        }
        if (movie.duration.includes('min') && movie.duration.includes('h') === false ){
            minsFromMins = parseInt(movie.duration.split('min'));
        } 
        movie.duration = minsFromHours + minsFromMins;
    });
    return moviescopy;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average

