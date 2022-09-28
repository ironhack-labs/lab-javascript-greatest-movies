// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let nameEachDirector = moviesArray.map((eachDirector) => {
        return eachDirector.director;
    } );
    return nameEachDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filterDirector = moviesArray.filter((eachDirector) => {
        if (eachDirector.director === "Steven Spielberg" && eachDirector.genre.includes("Drama") === true){
            // utilizamos include para buscar algo denrto de un array
            // tambien podemos utilizar .indexOf("Drama") !== -1 (-1 ya que si se encuentra dara true) 
            return true
        } else { // no haria fala poner el else ya que si mi funcion detcta que no se cumple la funcion if automaticamente dice que es undifined por tanto undefined lo convierte como false y por tanto devolvera un false
            return false
        }
    })
    return filterDirector.length

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    let sumScores = moviesArray.reduce ((acc, eachMovie) =>{
        if (eachMovie.score === undefined){
            return acc
        }
        else{
            return acc + eachMovie.score
        }
        return acc + eachMovie.score
    },0)
    console.log(sumScores)
    let average = sumScores / moviesArray.length
    let twoDecimals = average.toFixed(2)
    let twoDecimalsNum = parseFloat(twoDecimals)
    return twoDecimalsNum
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter ((eachMovies) =>{
        if (eachMovies.genre.includes ("Drama")){
            return true
        }
        else{
            return false
        }
    })
    let average = scoresAverage(dramaMovies)
    return average
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let clonedArr = structuredClone(moviesArray)
    clonedArr.sort ((eachMovie2, eachMovie1) =>{
        if (eachMovie1.year > eachMovie2.year){
            return -1
        }
        else if (eachMovie1.year < eachMovie2.year){
            return 1
        }
        else{
            if (eachMovie1.title > eachMovie2.title){
                return -1
            }
            else if( eachMovie1.title < eachMovie2.title){
                return 1
            }
            else{
                return 0
            }
        }
    })
    return clonedArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // 1. creamos variable, para clonar la arr original
    let cloneNewArr = structuredClone(moviesArray);
    // 2. cramos variable que nos ordena el array clonado
    let orderMovie = cloneNewArr.sort ((movies2, movies1) => {
        if (movies2.title > movies1.title){
            return 1;
        }
        else if (movies1.title > movies2.title){
            return -1;
        }
        else{
            return 0;
        }
    });
    // 3. nueva variable, y el .map solo escogemos los titulos
    let twentyTitles = orderMovie.map( (eachTitle, index) => {
        return eachTitle.title;
    } )
    // 4. nos dice que si hay mas de 20 titulos, nos devuelva los 20 primeros
    if (twentyTitles.length > 20) {
        return twentyTitles.slice(0, 20);
    }
    //5. si hay - de 20 titulos nos devuelve todos
    else {
         return twentyTitles;
    }

}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
