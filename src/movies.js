// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newMoviesArray = moviesArray.map((item) => item.director);
    return newMoviesArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }else{
      const result = moviesArray.filter(function(movie) {
        if(movie.director === 'Steven Spielberg'){
            for(let i = 0; i < movie.genre.length; i++){
                if(movie.genre[i] === 'Drama'){
                    return true;
                }
            }
        }
      })
     return result.length;
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    } else{
        const moviesWithScore = moviesArray.filter(movie => movie.score);
        const movieScore = moviesWithScore.map(movie => movie.score);
        let sumScore = movieScore.reduce((sum, score) => {
            return sum += score;
        });
        return Math.round((sumScore / moviesArray.length) * 100) / 100;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if(dramaMovies.length === 0){
        return 0;
    }else{
        const avaregeScore = scoresAverage(dramaMovies);
        return avaregeScore;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = moviesArray.map((item) => item);
    moviesByYear.sort((firstMovie, secondMovie) => {
        if(firstMovie.year === secondMovie.year){
           return firstMovie.title.localeCompare(secondMovie.title);
        }else{
            return firstMovie.year - secondMovie.year;
        }
    }) 
    return moviesByYear;  
    //We need to decide with year is greater
      //if both are equal
       //We will need to use sort to order the alphabetically if has the sam year
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newMoviesArray = [...moviesArray];
    let onlyTitle = [];
    if(newMoviesArray.length < 20){
        newMoviesArray.forEach((item) => {
            onlyTitle.push(item.title);
        })
        onlyTitle.sort(function(a ,b) {
            return a.localeCompare(b);
        });
        return onlyTitle;
    }else{
        newMoviesArray.forEach((item) => {
            onlyTitle.push(item.title);
        })
        onlyTitle.sort(function(a ,b) {
            return a.localeCompare(b);
        });
        onlyTitle.splice(20, onlyTitle.length);
        return onlyTitle;
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray = [...moviesArray];
    newArray.forEach((item) => {
        let hourToMinute = 0;
        let minutes = 0;
        for(let i = 0; i < item.duration.length; i++){
            if(item.duration[i] === 'h'){
                  hourToMinute = item.duration[i - 1];
            }
            if(item.duration[i] === 'm'){
                minutes = item.duration[i -2] + item.duration[i -1];
            }
        }
        let totalMinutes = (Number(hourToMinute) * 60) + Number(minutes);
        item.duration = totalMinutes;
    })
    return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
