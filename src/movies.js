// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    //Forma simple
    // let resultado = 0;
    // for (let i=0; i<moviesArray.length;i++){
    //     if (moviesArray[i].director === "Steven Spielberg" && moviesArray[i].genre.includes("Drama")){
    //         resultado++;
    //     }
    // }
    // return resultado;
    return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;

}
    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let resultado = 0;
    console.log(moviesArray.length)
    if (moviesArray.length === 0){
        return 0;
    }
    for (let i = 0; i < moviesArray.length; i++){
        resultado += moviesArray[i].score || 0;
    }
    return Number((resultado/moviesArray.length).toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let resultado = 0;
    let contador = 0;

    for (let i=0; i<moviesArray.length; i++){
        if (moviesArray[i].genre.includes("Drama")){
            resultado += moviesArray[i].score;
            contador++;
        }
    }

    if (contador === 0){
        return 0;
    }else{
        return Number((resultado/contador).toFixed(2));
    }
    

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.slice().sort((a, b) => a.title.localeCompare(b.title));
    const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);
    return first20Titles;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let moviesInMinutes = moviesArray.map(movie => {
        let duration = movie.duration;
        let hours = 0;
        let minutes = 0;
        if (duration.includes('h')) {
            hours = parseInt(duration.split('h')[0]);
        }
        if (duration.includes('min')) {
            minutes = parseInt(duration.split('min')[0].split(' ').pop());
        }   
        return {
            ...movie, //copia todo el objeto original
            duration: hours * 60 + minutes //pero modifica la propiedad duration con el nuevo valor en minutos
        };
    });
    return moviesInMinutes; 


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// Para cada año, calculamos el promedio de scores de las películas de ese año. Luego, comparamos esos promedios para encontrar el año con el mejor promedio. 
// Si hay un empate en el promedio, se devuelve el año más antiguo (menor). Finalmente, se devuelve un string con el resultado.
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    const scoresByYear = {};
    moviesArray.forEach(movie => {
        if (!scoresByYear[movie.year]) { // Si no existe una entrada para ese año, la inicializamos como un array vacío
            scoresByYear[movie.year] = []; // Luego, agregamos el score de la película al array correspondiente al año
        }
        scoresByYear[movie.year].push(movie.score); // Esto nos permitirá calcular el promedio de scores para cada año posteriormente
    });  
    let bestYear = null;
    let bestAvg = 0;
    for (const year in scoresByYear) {
        const avg = scoresByYear[year].reduce((a, b) => a + b, 0) / scoresByYear[year].length; // Calculamos el promedio de scores para cada año
        if (avg > bestAvg || (avg === bestAvg && year < bestYear)) { 
            bestAvg = avg;
            bestYear = year;
        }   
    }  return `The best year was ${bestYear} with an average score of ${bestAvg}`;  


}
