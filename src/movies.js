// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 1_Bonus_: It seems some of the directors had directed multiple movies 
// so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectorsWithOutDuplicates(moviesArray) {
    return [...new Set(getAllDirectors(moviesArray))];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director === 'Steven Spielberg' 
                                    && movie.genre.includes('Drama')
                             ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length <= 0) return 0;
    const scores = moviesArray.map(movie => movie.score === '' || movie.score === undefined ? 0 : movie.score)
    let scoreAverage = scores.reduce((a, v) => a + v) / scores.length;
    return parseFloat(scoreAverage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort(function (a, b) {
        if (a.year < b.year) return -1;  //  1 here (instead of -1 for ASC)     
        if (a.year > b.year) return 1;   // -1 here (instead of  1 for ASC)      
        if (a.year === b.year) {
            if (a.title < b.title) return -1;      
            if (a.title > b.title) return 1;
            if (a.title === b.title) return 0;            
        }
      });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titles = [];   
    let sortedMovies = [];
    moviesArray.sort(function (a, b) {
                        if (a.title < b.title)   return -1;      
                        if (a.title > b.title)   return 1;
                        if (a.title === b.title) return 0;            
                    });
    sortedMovies = moviesArray.slice(0, 20);
    titles = sortedMovies.map(movie => movie.title);    

    return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let moviesWithTimeInMinuts = moviesArray.map(movie => {
        const extractHours = parseInt(movie.duration.split("h")[0]);
        const extractMinuts = parseInt(movie.duration.split("h")[1].split("min")[0]);
        const totalOfMinuts = isNaN(extractMinuts) ? extractHours * 60 : extractMinuts + extractHours * 60;
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: totalOfMinuts,
            genre: movie.genre,
            score: movie.score
        }
    })
    return moviesWithTimeInMinuts;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    // First, it handles empty array case.
    if (moviesArray.length === 0) return null;
    // Second, it handles case when array length is only one.
    if (moviesArray.length === 1) {
      return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;
    }

    // Third, it handles for arrays bigger than 1 element
    const totalScoreByMovieYear = new Map();
    let bestAverageScore = 0;
    let bestYear = 0;
    moviesArray.forEach(movie => {
        if (totalScoreByMovieYear.has(movie.year)) {
            totalScoreByMovieYear.set(movie.year, {
                                       occurrence: totalScoreByMovieYear.get(movie.year).occurrence + 1,
                                       totalAverageScore: (totalScoreByMovieYear.get(movie.year).totalAverageScore + movie.score) 
                                                         / (totalScoreByMovieYear.get(movie.year).occurrence + 1)
                });            
        } else {
            totalScoreByMovieYear.set(movie.year, {
                                       totalAverageScore: movie.score,
                                       occurrence: 1
            });
        }
    });

    for (let [key, value] of totalScoreByMovieYear.entries()) {
        let average = value.totalAverageScore;
        if (average > bestAverageScore) {
          bestAverageScore = average;
          bestYear = key;
        } else if (average === bestAverageScore && bestYear > key) {
            bestYear = key;
        }
    }    

    console.log(`The best year was ${bestYear} with an average score of ${bestAverageScore}`);
    return `The best year was ${bestYear} with an average score of ${bestAverageScore}`;
}
/*

const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1994,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    },
    {
      title: '12 Angry Men',
      year: 2008,
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      score: 8.9
    }   
  ];
  bestYearAvg(movies);
*/