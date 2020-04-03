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
function hasGenre(movie,genretoFilter){
    return movie.genre.filter(gen => gen === genretoFilter).length > 0;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
