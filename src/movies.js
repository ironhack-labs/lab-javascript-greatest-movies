// Iteration 1: All directors? - Get the array of all directors.
//const getAllDirectors = movies.map((e) => e.director)
//console.log(getAllDirectors)

/*const directores = movies.map(function (getAllDirectors) {
    return getAllDirectors = movies.map.director;
  });
   
  console.log(directores);  */


  function getAllDirectors(mos){
    return valor= mos.map(e=> e.director)
}

console.log(getAllDirectors(movies))


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(mos){
    const steven = mos.filter(eDirector => eDirector.director === "Steven Spielberg" && eDirector.genre.includes("Drama"))
    return steven.length
}
howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(arrMovies) {
    if(arrMovies.length===0){
        return 0
    }
    const numArray = arrMovies.map(e => e.rate)
    const suma = numArray.reduce((a,b) => {
        return a + b
    },0)
}

console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
const dmr = movies.filter(function(dramaMovie) {
    return (dramaMovie.director==="Steven Spielberg" || dramaMovie.genre.indexOf('Drama') !== -1)
    }).length

    console.log(dmr)


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arreglo){
    const ultima = arreglo.map(e => e.title)
    ultima.sort()
    const veinte = ultima.slice(0,20)
    return veinte
}

console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrmovies){
    const prueba = arrmovies.map(e => e)
    return prueba
}
console.log(turnHoursToMinutes(movies))
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
