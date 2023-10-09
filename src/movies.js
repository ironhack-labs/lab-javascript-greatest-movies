// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie)=>movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length) return 0
    const stevenMovies = moviesArray.filter(function (movie){
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')});
    console.log(stevenMovies)
    const stevenMoviesNumber = stevenMovies.length
    return stevenMoviesNumber
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    const sumScore = moviesArray.reduce((sum, movie)=>sum + (movie.score ? movie.score : 0), 0)
    const average = sumScore/moviesArray.length
    const fixedNum = Math.round(average*100)/100;
    console.log(fixedNum)
    return fixedNum
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function(movie){
        return movie.genre.includes('Drama')});
        const sumScore = dramaMovies.reduce((sum, movie)=>sum + (movie.score ? movie.score : 0), 0)
        if (!dramaMovies.length) return 0
    const average = sumScore/dramaMovies.length
    const fixedNum = Math.round(average*100)/100;
    return fixedNum
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMoviesArray = moviesArray.slice();
    copyMoviesArray.sort(function(a, b){
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.year === b.year) return a.title.localeCompare(b.title);
    });
    return copyMoviesArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesTitle = moviesArray.filter(movie => movie.title);
    moviesTitle.sort((a, b) => a.title.localeCompare(b.title));
    const titles = moviesTitle.map((movie) => movie.title)
    return titles.slice(0,20)
    console.log(moviesTitle)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const copyArr = JSON.parse(JSON.stringify(moviesArray))
    const newArray = copyArr.map(movie =>{
        const movieCopy = {
            ...movie
        }
        if (movie.duration.includes('h')&& movie.duration.includes('min')){
            const time = movieCopy.duration.split(' ')
            const hours = parseInt(time[0])*60
            const minutes = parseInt(time[1])
            movieCopy.duration = hours + minutes
            return movieCopy
        } else if (!movie.duration.includes('min')){
            const hours = parseInt(movieCopy.duration) * 60
            movieCopy.duration = hours
            return movieCopy
        }
    })
    return newArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null
    const arrayByYear = moviesArray.reduce(function (accumulator, movie) {
        const year = movie.year;
    
        if (!accumulator[year]) {
          accumulator[year] = [];
        }
    
        accumulator[year].push(movie);
    
        return accumulator;
      }, {});
    
      let rateMax = 0;
    
      for (const year in arrayByYear) {
        rate = scoresAverage(arrayByYear[year]);
    
        if (rate > rateMax) {
          rateMax = rate;
          yearMaxAverage = year;
        }
      }
    
      return `The best year was ${yearMaxAverage} with an average score of ${rateMax}`;
    }
