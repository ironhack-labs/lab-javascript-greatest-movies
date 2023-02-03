// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(item => item.director);

    return newArray
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray) return 0
   
    const resultDirector = moviesArray.filter((film => film.director === 'Steven Spielberg'));
    const resultFilm = resultDirector.filter((film => film.genre.includes('Drama')));

    return resultFilm.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const numbersCopy = moviesArray.map(item => item.score); 
    const arrPreparado = numbersCopy.filter(item => typeof item === 'number')
    const totalParcial = arrPreparado.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const total =+ (totalParcial / numbersCopy.length).toFixed(2)
   
    if(totalParcial === 0) return 0
   
    return total
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const films = moviesArray.filter((film => film.genre.includes('Drama')));
    const numbersCopy = films.map(item => item.score); 
    const arrPreparado = numbersCopy.filter(item => typeof item === 'number')
    const totalParcial = arrPreparado.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const total =+ (totalParcial / numbersCopy.length).toFixed(2)

    if(films.length === 0) return 0
    
    return total
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const resultado = moviesArray
    .map(item => item)
    .sort((a, b) => {
        if(!a.title) return 0
        return a.title.localeCompare(b.title) 
    })
    .sort((a, b) => a.year - b.year)
   
    return resultado
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const resultado = moviesArray
    .map(item => item.title).sort((a,b) => a.localeCompare(b))
    if(resultado.length > 20){
        
        return resultado.splice(0, 20)

    }
    
    return resultado

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
