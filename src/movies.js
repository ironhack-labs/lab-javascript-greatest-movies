// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map( theDirector =>{
        return{
            director: theDirector.director
        };
    
    });
    //console.log(moviesArray.length);
    //console.log(newArray.length);
    return newArray;//por que no me marcan el punto de "should return a new array with the same length as the original one" como bueno si si es de la misma longitud el nuevo arreglo
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
const steven=moviesArray.filter(pelicula=> pelicula.director === 'Steven Spielberg' && pelicula.genre.indexOf('Drama')>-1);                     
 //console.log(steven);
 let res= steven.length;
 //return resultado;
 return (res);
 
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let longitud=moviesArray.length;
    if(longitud<1){
        return 0;
    }
const numeracion=moviesArray.map(suma=>{
    return  suma.score;
});
let promedio=0;
let sum=0;
for(let n of numeracion){
    sum +=n;
}

promedio=sum/longitud;
//let resul=promedio.toFixed(2);

return promedio;//(cuando utilizo toFixed(2), no me toma el punto aceptado)
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dram=moviesArray.filter(peli=> peli.genre.indexOf('Drama')>-1);                     
    return scoresAverage(dram);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
