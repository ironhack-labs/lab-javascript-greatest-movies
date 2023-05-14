
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramas = moviesArray.filter((movie) => {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return true
        }
    })
    return spielbergDramas.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const scoreAverages = moviesArray.reduce((count, scoreNum) => {
        if ('score' in scoreNum && !(scoreNum.score === '')) {
            return count + scoreNum.score
        } else {
            return count
        }
    }, 0)
    return Number((scoreAverages / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaAverage = moviesArray.reduce((count, dramaScoreSum) => {
        if (dramaScoreSum.genre.includes('Drama')) {
            return count += dramaScoreSum.score
        } else {
            return count;
        }
    }, 0)
    const dramaMoviesNumber = moviesArray.filter(genreValue => genreValue.genre.includes('Drama'))

    if (dramaMoviesNumber.length === 0) {
        return 0
    } else {
        return Number((dramaAverage / dramaMoviesNumber.length).toFixed(2))

    }
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviesCopy = movies.slice();
    moviesCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        return a.title.localeCompare(b.title);
    });
    return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    moviesArray.sort((a, b) => a.title.localeCompare(b.title));
    const newMoviesArr = moviesArray.map((movie)=>{return movie.title})
   if(newMoviesArr.length>=20){
    const otherArr = newMoviesArr.slice(0,20)
    return otherArr
   }else{
   
    // newMoviesArr.map((movie) => {
    //     return { title: movie.title }
    // })
    //newMoviesArr.sort((a, b) => a.title.localeCompare(b.title));
    return newMoviesArr
   }
}
console.log(orderAlphabetically([{ title: 'xyz' }, { title: 'abc' }]))
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesArrayCopy = moviesArray.slice()
    moviesArrayCopy.map((movie) => {
        const minutes = Number(`${movie.duration[3]}` + `${movie.duration[4]}`);
        const hour = Number(movie.duration[0] * 60);
        movie.duration = Number(hour + minutes)
        return movie
    })
    return moviesArrayCopy
}
let test2 = [{ duration: '0h 31min' }]
//console.log(turnHoursToMinutes(movies))
//console.log(turnHoursToMinutes(test))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
