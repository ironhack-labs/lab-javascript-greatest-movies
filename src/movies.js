// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(directores){
const directorsMovies = directores.map(function(oneMovie){
    return oneMovie.director;
})
return directorsMovies;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// no reusar Get all directors de momento
function howManyMovies(movies){
    var spielbergmovies = movies.filter(function (OneElement){
        return OneElement.director === "Steven Spielberg" && OneElement.genre.includes("Drama")
         })
    return spielbergmovies.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// Capu dice que con reduce deberia ser suficiente

function ratesAverage(movies){
    var SumOfRates =  movies.reduce((sum, movi) => sum + movi.rate, 0);
    var mediaRate = SumOfRates/movies.length;
    var redondear = Math.ceil(mediaRate* 100) / 100;
    if (SumOfRates === 0) return 0 ;
    return redondear;
 }


// Iteration 4: Drama movies - Get the average of Drama Movies

    function dramaMoviesRate(movies){
        var peliculasDrama = movies.filter(function (oneElement){
             return oneElement.genre.includes("Drama")
              });
        var cantidad = peliculasDrama.length;
        var sumOfRates =  movies.reduce((sum, movi) => sum + movi.cantidad, 0);
        var mediaRate = cantidad/movies.length;
        var redondear = Math.ceil(mediaRate* 100) / 100;
        if (sumOfRates === 0) return 0 ;
        return redondear;
     }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
     function orderByYear(movies){
        const orderYears = movies.filter(function (sum,oneElement){
            return sum + movies.year;
             },0);
        
        return orderYears;
     }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
     function orderAlphabetically(movies){
        const ordertitles = movies.filter(function (sum,oneElement){
            return sum + movies.title;
             },0);
// recive un array y itro con los primeros 20 titulos ordenador alfabeticamente
// Devuelve el titulo de cada pelicula
// si el array es menos de 20, return.
             return ordertitles;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
