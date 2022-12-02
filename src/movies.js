const moviesTest = [
    {
      title: 'The Shawshank Redemption',
      year: 1990,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 3
    },
    {
      title: 'The Godfather',
      year: 1992,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 2
    },
    {
      title: 'The Godfather: Part II',
      year: 1991,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 1
    },]


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/*function getAllDirectors(moviesArray) {
    return moviesArray.map(function (movie) {
        return movie.director;
    });
}
*/
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0){
        return 0;
    }

    return  Number((moviesArray.map(movie => {
        if(typeof movie.score === 'number') {
            return movie.score;
        } else{
            return 0;
        }
    }).reduce((acumulator, currentValue) => acumulator + currentValue)/moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramaArray = moviesArray.filter(movie => movie.genre.includes('Drama'));
    //Why I cannot put the If latter than .reduce?

    const scoreDramaArray = dramaArray.map(dramaScore => dramaScore.score);
    const sumScoresDrama = scoreDramaArray.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
    const average = Number((sumScoresDrama / dramaArray.length).toFixed(2));

    if (dramaArray.length === 0){
        return 0;
    }

    return average;

}
const years = [1988, 1976, 1999]

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.map( x => x );
    
    return sortedMovies.sort( (a , b) =>  a.year - b.year || a.title.localeCompare(b.title));     
}

/*function orderByYear(moviesArray) {
    (b.year === a.year) ? (b.title.localeCompare(a.title)) : (b.year - a.year)
    codición if         ? return                           : else return

    return moviesArray.map(x => x).sort((b, a) => {
        if (b.year === a.year) {
            return b.title.localeCompare(a.title)
        }
        return b.year - a.year
    })
}
*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(x => x.title).sort().splice(0,20);
    console.log("hola");
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// 2h 22min  [2,22]

function turnHoursToMinutes(moviesArray) {

    const newMoviesArray = JSON.parse(JSON.stringify(moviesArray));
    const splitedTimeArray = newMoviesArray.map( film => {
        const timeSplited = film.duration.replace("h","").replace("min","").split(" ").map( durationString => +durationString);
        const timeInMinutes = timeSplited[0] * 60 + (timeSplited[1] === undefined ? 0 : timeSplited[1]);

        film.duration = timeInMinutes;

        return film;
    });

    return splitedTimeArray;
    
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    
    const yearsAndScores = moviesArray.map( film => [film.year,film.score]).sort( (b , a) => a[0] - b[0]).map( (yearAndScoreSorted, i) => {
        let acc=0;
        let count=0;

        if(yearAndScoreSorted[0][i] !== yearAndScoreSorted[0][i+1]){
            count ++;
            acc += yearAndScoreSorted[1][i];
            return acc/count;
        }else{
            count ++;
            acc += yearAndScoreSorted[1][i];
        }

        return yearAndScoreSorted[1][i]

    });

    

    
    return yearsAndScores;

}


console.log(bestYearAvg(moviesTest));

//Line to be able to push the code.

