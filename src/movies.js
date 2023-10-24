// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// If you want to see any output from visual studio code you need to use console.log() function to see outputs !!!!

console.log("Hello World")

function getAllDirectors(moviesArray) {
    return moviesArray.map((element) => {
      return element.director
    }
    )
}

// MAP TEST 

// const mapMe = [ {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },
//   {
//     title: 'The Godfather',
//     year: 1972,
//     director: 'Francis Ford Coppola',
//     duration: '2h 55min',
//     genre: ['Crime', 'Drama'],
//     score: 9.2
//   },
//   {
//     title: 'The Godfather: Part II',
//     year: 1974,
//     director: 'Francis Ford Coppola',
//     duration: '3h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9
//   },
//   {
//     title: 'The Dark Knight',
//     year: 2008,
//     director: 'Christopher Nolan',
//     duration: '2h 32min',
//     genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//     score: 9
//   },]

// const mapResult = mapMe.map((x) => {
//     return x.director
// })

// console.log(mapResult)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    const filteredMovies = moviesArray.filter(movie => { 
        if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama") ) {
            return movie;
        }
    })
    return filteredMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length) return 0;
    const moviesWithScore = moviesArray.filter((e) => e.score)
    const totalScore = moviesWithScore.reduce((acc,curr) => acc + curr.score,0)
    return Number((totalScore / moviesArray.length).toFixed(2))
    // if(!moviesArray.length) return 0;
    // const totalScore = moviesArray.filter((e) => e.score).reduce(function (acc, curr){ return acc + curr.score;
    // }, 0);
    // const averageScore = totalScore / movies.length;
    // console.log("total",averageScore.toFixed(2))
    // return Number()
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter (movie => movie.genre.includes("Drama"))
    if (dramaMovies.length === 0) {
        return 0 
    } else {
        const dramaMoviesSum = dramaMovies.reduce ((acc, movie) => acc + movie.score, 0)
        let dramaMovieAvg = dramaMoviesSum / dramaMovies.length
        return Number (dramaMovieAvg.toFixes(2))
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArr = moviesArray
    .map ((el) => el)
    .sort ((a,b ) => {
        if (a.year !== b.year) {
            return a.year.localeCompare(b.title);
        }
    })
}
return newArr;

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const NewArr = moviesArray
    .map((el) => el.title)
    .sort ((a, b) => a.localeCompare(b))
    .slice (0, 20);
    return newArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
