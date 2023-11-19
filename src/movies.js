// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const directors = moviesArray.map(movie=> movie.director);
   return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;
    const totScore = moviesArray.reduce((accum,currVal)=>{
        if(typeof currVal.score === 'number'){
            return accum + currVal.score;
        }
        return accum;
    },0);
    const avgScore = totScore/moviesArray.length;
    return Number(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray].sort((a,b) =>{ 
        if(a.year - b.year === 0){
           return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    sortedMovies = [...moviesArray].sort((a,b)=> a.title.localeCompare(b.title)).map((obj)=>obj.title).slice(0,20);
    return sortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMoviesDuration = moviesArray.map(movie =>{
        const newArr = movie.duration.split(' ');
        let hr = newArr[0].charAt(0);
        if (movie.duration.includes('min')){
            const indexMin = newArr[1].indexOf('min');
            let min = newArr[1].slice(0,indexMin);
            return {...movie, duration: Number(hr) * 60 + Number(min)};
        }
        else{
            return {...movie, duration: Number(hr) * 60};
        }
    });
    return newMoviesDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
       if (moviesArray.length === 0){
        return null;
       }

    //    const sortedMovie = moviesArray.sort((a,b)=> a.year - b.year);

    //    let yearArr = [];

    //    for (let i = 0; i <sortedMovie.length; i++){
    //      yearArr [i] = [];
    //      for (let x = 0; x < sortedMovie.length; x++){
    //         if (sortedMovie[i].year === sortedMovie[x].year){
    //             yearArr[i].push(sortedMovie[x]);
    //         }
    //     }
    //    }

    //    let highestAvg = 0;
    //    let oldestYear = 0;

    //    for (let sameYearMovie of yearArr){
    //     let avg = scoresAverage (sameYearMovie);
      
    //     if(avg > highestAvg){
    //         highestAvg = avg;
    //         oldestYear = sameYearMovie[0].year;
    //     }
    //    }

    //    return `The best year was ${oldestYear} with an average score of ${highestAvg}`;

    const movieObj = {};

    moviesArray.forEach(movie => {
        if(!movieObj[movie.year]){
            movieObj[movie.year] = [];
            movieObj[movie.year].push(movie);
        }
        else{
            movieObj[movie.year].push(movie);
        }
    });

    let highestAvg = 0;
    let oldestYear = 0;

    for(let year in movieObj){
        let avg = scoresAverage(movieObj[year]);

        if(avg > highestAvg){
            highestAvg = avg;
            oldestYear = year;
         }
    }

    return `The best year was ${oldestYear} with an average score of ${highestAvg}`;
}

