// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

let result = []

result = moviesArray.map ((element) => element.director)
return result

}

// function getAllDirectors(moviesArray) { -----> version mas simplificada

// return moviesArray.map ((element) => element.director)

// }  




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// function howManyMovies(moviesArray) {
//     const result = moviesArray.filter((e) => e.director=="Steven Spielberg" && e.genre.includes("Drama"))
//     return result.length

 function howManyMovies(moviesArray) {

    let result = 0;

 result = moviesArray.filter ((e) => {
     return e.director === "Steven Spielberg" && e.genre.includes("Drama");

})
return result.length;

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// These are the best movies based on their scores, so they all have remarkable scores. In this iteration, we want to know the average score of all of them and display it on the console. Create a scoresAverage() function that receives an array as a parameter and solves the challenge.

// The score must be returned rounded to 2 decimals!

// Maybe you want to "reduce" the data to a single value. 

function scoresAverage(moviesArray) {
    if (!moviesArray || moviesArray.length === 0) return 0;
    
    const moviesFiltered = moviesArray.filter( (e) => e.score ) // filtro para incluir las pelis que no tienen score****//
    const suma = moviesFiltered.reduce((acc, e) => acc + e.score, 0); // este es el contador del acumulador. que a pesar de ser opcional se puede inicializar en 0, es como decir let acc = 0, aqui se suma el resultado que revisa en cada ciclo.

const average = suma/moviesArray.length; //este metodo hace que sean solo dos decimales

return Math.round(average*100)/100;     // ---->/*
                                                    // ¿Por qué Math Round?
                                                    // 1º Imagina que tenemos el número 5,677
                                                    // 2º Lo multiplicamos por 100. -> 567.7
                                                    // 3º Aplicamos Math.round -> 568
                                                    // 4º Lo dividimos entre 100 -> 5.68
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    

    const dramaMovies = moviesArray.filter((e) => e.genre.includes("Drama")) //filtro para peliculas de drama.
    
    if (dramaMovies.length === 0) {
        return 0; // Si no hay películas de drama, devolver 0
      }
    const totalScore = dramaMovies.reduce((acc, e) => acc + e.score, 0); // aqui se recorre la cadena de las pelis de drama y se hace la suma total de su score.

    const dramaAverage = totalScore/dramaMovies.length; // el average de la puntuacion especifica de drama

    return Math.round(dramaAverage*100)/100; // Resultado a decimales
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

    function orderByYear(moviesArray) {
       
        const orderedMovies = [...moviesArray];  // Creamos una copia del array original para no modificarlo
      
        orderedMovies.sort((a, b) => { // Utilizamos la función sort() para ordenar los elementos del array
          
          if (a.year !== b.year) { // Primero comparamos los años de lanzamiento
            return a.year - b.year; // Orden ascendente por año
          } else {
            
            return a.title.localeCompare(b.title); // Si los años son iguales, ordenamos por título alfabéticamente
          }
        });
      
        return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const sortedMovies = [...moviesArray]; 

    sortedMovies.sort((a, b) => a.title.localeCompare(b.title)); // Ordenamos alfabéticamente por título
    
    const first20movies = sortedMovies.slice(0, 20).map(e => e.title) // seleccionamos y cortamos del array ya ordenamos y los convertimos en uno nuevo con map.
    
    return first20movies; 
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
