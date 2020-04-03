/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(films){
    let sortedMovies = Array.from(films);

    let sorting = (film1, film2) => {
        if (film1.year===film2.year){
            if (film1.title.toLowerCase()>film2.title.toLowerCase()){
                return 1;
            } else if (film1.title.toLowerCase()<film2.title.toLowerCase()) {
                return -1;
            } else { return 0; }
        } 
        else return film1.year-film2.year;
    }

    return sortedMovies.sort(sorting);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(films){
    return films.filter(film=>film.director==='Steven Spielberg' && hasGenre(film,'Drama')).length;
}
function hasGenre(movie,genreToFilter){
    return movie.genre.filter(gen => gen === genreToFilter).length > 0;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(films){
    let orderedArray = films.map(film=>film.title);

    return orderedArray.sort().filter((film,idx)=>idx<20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(films){
    if (films.length===0) return 0;

    let rateAvg = films.filter(film=> 'rate' in film).reduce((sum,film) => sum + film.rate, 0);

    return parseFloat((rateAvg/films.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(films){
    return ratesAverage(films.filter(film=>hasGenre(film,'Drama')));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
