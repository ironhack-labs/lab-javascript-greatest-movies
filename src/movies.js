// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const directors = moviesArray.map( el => el.director)
   return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const result = moviesArray.filter((elem) => elem.director === 'Steven Spielberg').filter((elem) => elem.genre.includes('Drama'))

    return result.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    const movies = moviesArray.filter((movie) => typeof movie.score === 'number')

    const sum = movies.reduce((acc, movie) => acc + movie.score, 0);
    const average = sum / movies.length;

    const roundedAverage = parseFloat(average.toFixed(2));

    return roundedAverage

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'))
    const sumDrama = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
    const average = sumDrama / dramaMovies.length

    const roundedAverage = parseFloat(average.toFixed(2));

    if (dramaMovies.length === 0) return 0

    return roundedAverage


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const newArray = [...moviesArray];
    
        
        newArray.sort((a, b) => {
            if (a.year !== b.year) {
                return a.year - b.year;
            } else {
                return a.title.localeCompare(b.title);
            }
        });
        
        return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    newArray = [...moviesArray]

    const justTitles = newArray.map((element) => element.title)
    const orderedArr = justTitles.sort()
    const slicedArr = orderedArr.slice(0,20)
    return slicedArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArr = [... moviesArray]

    const durations = newArr.map((movie) => movie.duration)
    const toMinutes = durations.map((element) => {
        
        const minutes = parseInt(element[0]) * 60 + parseInt(element[3]) * 10 + parseInt(element[4])
        return minutes
    })

    return toMinutes
}


console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
