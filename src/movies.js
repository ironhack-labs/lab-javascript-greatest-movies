// Iteration 1: All directors? - Get the array of all directors.
//const getAllDirectors = movies.map((e) => e.director)
//console.log(getAllDirectors)

/*const directores = movies.map(function (getAllDirectors) {
    return getAllDirectors = movies.map.director;
  });
   
  console.log(directores);  */


function getAllDirectors(mos) {
    return valor = mos.map(e => e.director)
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(mos) {
    const steven = mos.filter(eDirector => eDirector.director === "Steven Spielberg" && eDirector.genre.includes("Drama"))
    return steven.length
}
howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(arrMovies) {
    if (arrMovies.length === 0) {
        return 0
    }
    let numArray = arrMovies.map(e => e.rate ? e.rate : 0)
    let suma = numArray.reduce((a, b) => a + b, 0)
    let prom = (suma / arrMovies.length).toFixed(2)
    return parseFloat(prom)
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const drama = movies.filter(function(dramaMovie) {
        return (dramaMovie.genre.indexOf('Drama') > -1)
    })
    if (!drama.length) return 0
    let suma = (drama.reduce((acc, cv) => acc + cv.rate, 0) / drama.length).toFixed(2)
    return parseFloat(suma)
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arreglo) {
    const ultima = arreglo.map(e => e.title)
    ultima.sort()
    const veinte = ultima.slice(0, 20)
    return veinte
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrmovies) {
    const prueba = arrmovies.map(e => e)
    return prueba
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average