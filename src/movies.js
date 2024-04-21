// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let arrayAllDirectors = [];
    
    arrayAllDirectors = moviesArray.map(el => el.director);
    return arrayAllDirectors;
    }
    
    // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
    //preguntar porque no funciona con === en vez del includes
    function howManyMovies(moviesArray) {
            if(!moviesArray.length) return 0
            
            let dramatics = 0;
            dramatics = moviesArray.filter((el) => {
            return el.director.includes("Steven Spielberg") && el.genre.includes("Drama")
        });
            
    return dramatics.length;
    }
    
    // Iteration 3: All scores average - Get the average of all scores with 2 decimals
    function scoresAverage(moviesArray) {
        if(!moviesArray.length) return 0
        
        let resultado = 0;
    
        let arrayFiltro = moviesArray.filter(el => el.score);
    
            //si no es por el cero como segundo parametro opcional del metodo reduce no anda
            //valor inicial del acumulador es 0 (resultado)
        let arraySum = arrayFiltro.reduce( (acc,el) => acc + el.score, resultado ); 
        
        arraySum = arraySum/moviesArray.length;
    
        return Math.round(arraySum*100) / 100;
    }
    
    // Iteration 4: Drama movies - Get the average of Drama Movies
    function dramaMoviesScore(moviesArray) {
    
        let arrayFiltro2 = moviesArray.filter(el => el.genre.includes("Drama"));
        return scoresAverage(arrayFiltro2);
    }
    // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
    function orderByYear(moviesArray) {
        return [...moviesArray].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
        });
    }
    
    // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    function orderAlphabetically(moviesArray) {}
    
    // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
    function turnHoursToMinutes(moviesArray) {}
    
    // BONUS - Iteration 8: Best yearly score average - Best yearly score average
    function bestYearAvg(moviesArray) {}