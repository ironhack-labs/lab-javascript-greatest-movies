/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(peliculas){

    let copiaPeliculas = JSON.parse(JSON.stringify(peliculas));

       return copiaPeliculas.sort((a,b) => {
        if (a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        else {
            return a.year - b.year
        }
    })
  };


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    if(arr.length === 0)
    return 0;

    let dramaMovie = true;

    let peliculasFiltradas = arr.filter(function(peliculas){
        return peliculas.director === "Steven Spielberg" && peliculas.genre.includes("Drama") === dramaMovie;
    });
return peliculasFiltradas.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

/*function orderAlphabetically (arrDePeliculas){
    let copiaAlfabeticas = JSON.parse(JSON.stringify(arrDePeliculas));
        return copiaAlfabeticas.sort((a,b) => {
            a.title - b.title
        })
}; */

function orderAlphabetically(arrDePeliculas){
    let orderedArray = arrDePeliculas.map(arrDePeliculas=>arrDePeliculas.title);
    return orderedArray.sort().filter((arrDePeliculas,idx)=>idx<20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrAvergae){
    let average = arrAvergae.map(arrAvergae => arrAvergae.rate);
    return average.reduce()
};
// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
