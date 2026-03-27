// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie=> movie.director);

    /**
     * OTRA SOLUCION
     * return [...new Set(movies.map(movie) => movie.director))];
     * // El spread operator con Set (lo de arriba) elimina duplicados
     */
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    //Acordarme de usar includes
    if(!moviesArray.length) return 0;
    return moviesArray.filter((movie) => (movie.director === "Steven Spielberg" && movie.genre.includes("Drama") ) ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    /**
     * Comprobar si el array no es vacio
     * Usamos reduce con un acumulador y un actual
     * Si el actual tiene score, se suma al acumulado
     * Sino se queda como está
     * Se reduce a un número y se hace la media
     * Finalmente con Numbers(reduce).toFixed(2) redondeamos a dos decimales
     */
    if(!moviesArray.length) return 0;
    return Number((moviesArray.reduce((acc, curr) => curr.score ? acc + curr.score : acc+0,0)/moviesArray.length).toFixed(2));

    /**
     * OTRA SOLUCIÓN
     * if(movie.length === 0) return 0;
     * 
     * const totalScore = movies.reduce((sum, movie)=>{
     *  return sum + (movie.score || 0); //Si no existe movie.score, devuelve 0
     * }, 0);
     * 
     * return parseFloat(totalScore/movies.length).toFixed(2);
     */
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    /**
     * Comprobar si hay peliculas de drama, sino devuelve 0
     * Filtramos por las peliculas de Drama
     * Hacemos un reduce con un acumulador y un actual
     * Calculamos la media del nuevo array
     */
    const dramaArray = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    if(!dramaArray.length)return 0;
    return Number((dramaArray.reduce((acc, curr)=> acc+curr.score, 0)/dramaArray.length).toFixed(2));

    /**
     * OTRA SOLUCION
     * Las dos primeras lineas igual
     * return scoresAverage(dramaArray);
     */
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    /**
     * Copiamos el array para trabajar con otro y no modificarlo
     * Ordenamos el array en orden ascendente,
     * En caso de que haya películas con el mismo año las ordenamos por orden alfabético
     * Devolvemos el nuevo array ordenado
     */
    const copy = structuredClone(moviesArray); //Copia profunda del array
    copy.sort((a,b)=>{
        if(a.year !== b.year){
            return a.year - b.year;
        }else{
            return a.title.localeCompare(b.title);
        }
    });
    return copy;

    /**
     * OTRA SOLUCION
     * return [..movies].sort((a,b) =>{
     *  if(a.year === b.year) return a.title.localeCompare(b.title);
     *  return a.year - b.year;
     * });
     */

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // const copy = structuredClone(moviesArray);
    // copy.sort((a,b)=>a.title.localeCompare(b.title));
    // const copySliced = copy.slice(0,20);
    // return copySliced.map((movie)=>movie.title);

    const copy = moviesArray.map((movie)=>movie.title);
    copy.sort((a,b)=>a.localeCompare(b));
    return copy.slice(0,20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    // const durationArray = moviesArray.map((movie)=>movie.duration);
    // const hoursArray = durationArray.map(duration => {
    //     duration.slice(0,1);
    // });
    // const minutes = durationArray.map(duration => {
    //     duration.charAt(4)!=="m" ? duration.slice(3,5) : duration.slice(3,4);
    // });

    // const hoursToMinute = hoursArray.map((hours)=> hours*60);
    // const sum = hoursToMinute.map((min, index)=> min +minutes[index]);

    // const result = moviesArray.map((movie, index)=> movie.duration = sum[index]);
    // return result;

    return moviesArray.map((movie)=>{
        let totalMinutes = 0;
        const timePieces = movie.duration.split(" ");
        timePieces.forEach(piece => {
            if(piece.includes("h")){
                totalMinutes += parseInt(piece)*60;
            } else if(piece.includes("min")){
                totalMinutes += parseInt(piece);
            }
        });

        return{
            ...movie,
            duration: totalMinutes
        };
    });

    /**
     * OTRA SOLUCIÓN
     * return movies.map(movie =>{
     *  const duration = movie.duration;
     * let minutes = 0;
     * if(duration.includes("h"))
     * minutes += parseInt(duration.split("h")[0]) * 60;
     * if(duration.includes("min")) minutes += parseInt(duration.split(" "[1]).replace("min",""));
     * })
     * 
     * return{
     *  ...movie,
     * duration: minutes
     * };
     */

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(!moviesArray.length) return null;

    const yearScores ={};

    moviesArray.forEach(movie =>{
        if(!yearScores[movie.year])yearScores[movie.year] = [];

        yearScores[movie.year].push(movie.score || 0);

    });

    let bestYear = null;
    let bestAverage = 0;

    for(let year in yearScores){
        const average = yearScores[year].reduce((sum, score) => sum +score, 0);
        yearScores[year].length;

        if(average>bestAverage){
            bestAverage = average;
            bestYear = year;
        }else if(average === bestAverage){
            bestYear = Math.min(bestYear, year);
        }
    }

    return `The best year was ${bestYear} with an average of ${bestAverage}`;

}
