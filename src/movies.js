// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
 
    const newArray = moviesArray.map( (element) => element.director)
    return newArray;

}

//Bonus 1.1:

function filteringDirectors(moviesArray, getDirectors) {

    const uniqueDirectors = [];

    const allDirectors = getDirectors(moviesArray)

    allDirectors.forEach((element) => {

        if(!uniqueDirectors.includes(element)){

            uniqueDirectors.push(element)
        }
    })

    return uniqueDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {

    let result = 0;

    if(moviesArray.length === 0){
        return 0;

    } else {
        moviesArray.filter( (element) => {

        if( element.director === 'Steven Spielberg' && element.genre.includes('Drama') ){
            result++;
        }
    })
    }
    return result;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0) {
        return 0;

    }
    
    const totalScore = moviesArray.reduce( (sum, movie) => {
       
        if (!movie.score) {
            movie.score = 0;
            return sum + movie.score;
        } else {
            return sum  + movie.score;
        }
    }, 0);

    let total = totalScore / moviesArray.length

    return Number(total.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = []

    moviesArray.filter( (element) => {
        if ( element.genre.includes('Drama') ) {

            dramaMovies.push(element)
        }
    })

    totalScore = scoresAverage(dramaMovies)

    return totalScore;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedArray = moviesArray.slice().sort((a, b) => {
        if( a.year === b.year ){
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const sortedArray = orderByYear(moviesArray)
    return sortedArray.slice(0, 20).map(el => el.title);
    // alguien me puede decir porque funciona este codigo? La #5 tambien ordena por año no?
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

