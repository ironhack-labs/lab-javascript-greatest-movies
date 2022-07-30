// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/*const movies = [ {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
        director: 'Peter Jackson',
        duration: '3h 21min',
        genre: ['Adventure', 'Drama', 'Fantasy'],
        score: 8.9
      },
    {title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  }] */

function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map(movie => movie.director);
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergDramaMovies = moviesArray.filter(movie => {return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')})
    return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    /* for (let i = 0; i < moviesArray.length; i +=1) {
        return moviesArray.score[i] / moviesArray.length
    } */
    const average = moviesArray.reduce((sum, movie) => {
        if (movie.score) {sum += movie.score} 
        return sum 
    }, 0)
    console.log(average)
        return Number((average / moviesArray.length).toFixed(2))
    }

    //scoresAverage(movies)//
 
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    return scoresAverage(dramaMovies)
 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = moviesArray.filter(movie => movie.year)
    moviesByYear.sort()  //to arrange them alphabetically, but not working //
    return moviesByYear.sort((a, b) => a - b) //for some reason this is not returning the ascending order//
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let allTitles = moviesArray.map(movie => movie.title);
    return allTitles.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    function timeConvert(hours) {
        let timeParts = hours.split(" h   min");
        return (Number(timeParts[0])) * 60 + Number(timeParts[1]);
    }
   // console.log(timeConvert("2h 44min"))// 
    let duration = moviesArray.map(movie => movie.duration)
    return [`${timeConvert}(duration)`] //this is not returning a number//
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;

    const bestYearEver = []
    moviesByYear.forEach(movie => {
        return scoresAverage(moviesByYear)
    });
    return bestYearEver.sort((a, b) => a - b).slice(0, 1);
}
