// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(e => e.director);

    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if(moviesArray.length == 0){
        return 0;
    }

    let spielbergDramas = moviesArray.filter(function(movie){
        if(movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')){
            return true;
        }
        return false;
    })
    return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length == 0){
        return 0;
    }
    
    let scoreSum = moviesArray.reduce(function(sum,score){
        if(score.score){
            return sum+score.score;
        }else{
            return sum;
        }
    }, 0);

    let avg = scoreSum/moviesArray.length;
    return parseFloat(avg.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let  dramaMovies = moviesArray.filter(function(movie){
        if(movie.genre.includes('Drama')){
            return true;
        }
        return false;
    })

    if(dramaMovies.length == 0){
        return 0;
    }

    let scoreSum = dramaMovies.reduce(function(sum,score){
        return sum+score.score;
    }, 0);

    let avg = scoreSum/dramaMovies.length;
    return parseFloat(avg.toFixed(2));


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let orderedMovies = [];

    moviesArray.forEach(function(movie){
        orderedMovies.push(movie);
    })

    orderedMovies.sort(function (a, b) {
        if (a.year < b.year) return -1; 
        if (a.year > b.year) return 1; 
        if (a.year === b.year){
            if (a.title < b.title) return -1; 
            if (a.title > b.title) return 1; 
        }
      });

      return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedMovies = [];

    let counter = 0;

    while(counter < moviesArray.length){
        orderedMovies.push(moviesArray[counter].title);
        counter++;
    }

    orderedMovies.sort();

    top20 = [];

    for(let i = 0; i < 20; i++){
        if(orderedMovies[i] != undefined){
             top20.push(orderedMovies[i]);
        }
    }

    return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let adjusted = [];

    moviesArray.forEach(function(movie){
        adjusted.push(movie);

        let min = 0;
        min += parseInt(movie.duration[0])*60;

        if(movie.duration.length == 8){
            min += parseInt(movie.duration[3]+movie.duration[4]);
        }
        
        if(movie.duration.length == 7){
            min += parseInt(movie.duration[3]);
        }

        movie.duration = min;
    })

    return adjusted;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if(moviesArray.length == 0){
        return null;
    }

    let orderedMovies = orderByYear(moviesArray);

    let current = orderedMovies[0].year;

    let yearScoreMatrix = [current][''];

    let yearIndex = 0;

    for(let i = 0; i < orderedMovies.length; i++){
        if(current == orderedMovies[i].year){
            yearScoreMatrix[yearIndex].push(orderedMovies[i].score);
        }
        else{
            let current = orderedMovies[i].year;
            yearScoreMatrix.push(current);
            yearIndex++;
            yearScoreMatrix[yearIndex].push(orderedMovies[i].score);
        }
    }

    let maxScore = 0;
    let maxYear;

    for(let i = 0; i < yearScoreMatrix.length; i++){
        let sum = 0;
        for(let j = 0; j < yearScoreMatrix[i].length; j++){
            sum += yearScoreMatrix[i][j];
        }

        if(sum > maxScore){
            maxScore = sum;
            maxYear = i;
        }
        sum = 0;
    }


    return `The best year was ${maxYear} with an average score of ${maxScore}`;
}
