// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const mapMovies = moviesArray.map(movie => movie.director);
    return mapMovies;
}
//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length) return 0;
    const spielbergMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    //console.log(spielbergMovies);
    return spielbergMovies.length;
}
//console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    
    const sumScores = moviesArray.reduce((acc, movie) => {
        if (movie.score) return acc + movie.score;
        else return acc;
    }, 0)
    const averageScores = (sumScores / moviesArray.length);
    return Math.round(averageScores* 100)  / 100;
}
//console.log(scoresAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const getDrama = moviesArray.filter(movie => movie.genre.includes('Drama'))
    if (!getDrama.length) return 0
    const sumScores = getDrama.reduce((acc, movie) => {
        if (movie.score) return acc + movie.score;
        else return acc;
}, 0);
    const averageScores = (sumScores / getDrama.length);
    return Math.round(averageScores * 100)  / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   /*  const titleSort = moviesArray.title.sort() */
    const movArrCopy = moviesArray.map((x) => x)
    const yearSort = movArrCopy.sort((a, b) => a.year - b.year);
    return yearSort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(movie => movie.title);
    const alphaSort = movieTitles.sort();
    const filterAlpha = alphaSort.filter((title, index) => index < 20)
    return filterAlpha;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
/* function turnHoursToMinutes(moviesArray) {
     const getMovieDuration = moviesArray.map(movie => parseInt(movie.duration) * 60);
    return getMovieDuration; */

   /*  const getMovieDuration = moviesArray.map(movie => parseInt(movie.duration)) */

   function turnHoursToMinutes(moviesArray) {
    const newArr = moviesArray.map(movie => {

        parseInt(movie.duration, 10);

        if (movie.duration.includes('h')) {
            const indexH = movie.duration.indexOf('h');
            movie.duration[indexH] = '';
            const indexMin = movie.duration.indexOf('min');
            for (i = indexMin; i < 3; i++) {
                movie.duration[i] = '';
            } 

            let minChars = parseInt(movie.duration[3] + movie.duration[4]);
          return {...movie, duration: parseInt(movie.duration[0] * 60) + minChars };
        }
        });
         return newArr;                          
        }
    


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    const sortByYear = moviesArray.sort((movieA, movieB) => {
        if (movieA.year === movieB.year)
            return 0;
        else if (movieA.year < movieB.year) {
            return -1; // a is less than b
        }
        else if (movieA.year > movieB.year) {
            return 1; // a is greater than b
        }
    }); 

  // New array with only years, how many occurrences of each year
  const yearsMapArr = sortByYear.map(movie => movie.year);
  const countYears = yearsMapArr.reduce((accumulator, value) => {
  accumulator[value] = ++accumulator[value] || 1;
  return accumulator;
}, {});
  
  // All the years with no duplicates return filterCountYears.length to check.
  // Total: 81; Lowest: 1921; Highest:2017 Timespan: 96
  const filterCountYears = yearsMapArr.filter((year, index) => {
    return yearsMapArr.indexOf(year) === index;
  });
  // Array with only scores
  const scoreMap = sortByYear.map(movie => movie.score);
  
    
  const lastTry = sortByYear.filter((movie, index) => 
        movie.year === yearsMapArr[index + 1] ||
        movie.year === yearsMapArr[index + 2] ||  
        movie.year === yearsMapArr[index + 3] ||  
        movie.year === yearsMapArr[index + 4]);
  
  return lastTry;    
};
            
  console.log(bestYearAvg(movies));

  // Second attempt:
  
/* function bestYearAvg(moviesArray) {
    const yearSort = moviesArray.sort((a, b) => a.year - b.year);
    const separateYears = yearSort.filter((movie, index) => {
        if ( movie.indexOf(index) === )
    })
}
console.log(bestYearAvg(movies)); */
