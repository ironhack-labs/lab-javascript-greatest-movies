// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map((eachElement) => {
        let result = eachElement.director;
        return result;
    })

    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    } 


    let filterMovies = moviesArray.filter((eachElement) => eachElement.director === "Steven Spielberg" && eachElement.genre.includes("Drama"));
    return filterMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    let totalArray = moviesArray.reduce((acc, films) => {
      if (films.score){
        return films.score + acc
      } else {
        return acc
      }
    }, 0)

return Math.round((totalArray * 100)/ moviesArray.length)/100    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    let dramaMovies = moviesArray.filter((dramaMovies) => dramaMovies.genre.includes("Drama"));
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    let cloneArray = JSON.parse( JSON.stringify(moviesArray))
    cloneArray.sort((elem1, elem2) => {
        if (elem1.year === elem2.year) {
            return elem1.title.localeCompare(elem2.title)
        } 
        return elem1.year - elem2.year;
    })

    return cloneArray

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const movieNames = moviesArray.map(movies => movies.title);
    const sortedTitles = movieNames.sort();
    return sortedTitles.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
