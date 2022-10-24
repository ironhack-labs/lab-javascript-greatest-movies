// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);   
}

//Bonus 1.1
function getUniqueValues(arr){
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(uniqueArr.includes(arr[i]) === false){
            uniqueArr.push(arr[i]); 
        }
    }
    return uniqueArr;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergArr = moviesArray.filter(movie => movie.director === "Steven Spielberg").filter(movie =>
        movie.genre.includes("Drama") === true);
    return spielbergArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){return 0;} 
    else {
        let clonedArr = moviesArray.map(movie => movie);
        clonedArr.forEach(function(movie){
            if(movie.score === '' || movie.score === undefined){movie.score = 0}
        })

        let scoreArr = clonedArr.map(movie => movie.score);
        let totalScore = scoreArr.reduce((accValue, currentValue) => accValue + currentValue, 0);
        let aveScore = Math.round(totalScore / scoreArr.length * 100) / 100;

        return aveScore;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArr = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let clonedArr = moviesArray.map(movie => movie);
    clonedArr.sort(function(a,b){ 
        if(a.year === b.year){
            if(a.title < b.title){return -1;}
            else if (a.title > b.title){return 1};
        } else {return a.year - b.year;}
    });
    return clonedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedArr = moviesArray.map(movie => movie);
    orderedArr.sort(function(a,b){
        if(a.title < b.title){return -1;}
        else if (a.title > b.title){return 1};
    });

    let shortArr = [];
    if(orderedArr.length < 20){
        shortArr = orderedArr.map(movie => movie.title);
    } else {
        for(let i = 0; i < 20; i++){
            shortArr.push(orderedArr[i].title);
        }
    };

    return shortArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
    let clonedArr = moviesArray.map(movie => movie);
    let formatedArr = clonedArr.map(function(movie){
        let hourFormat = movie.duration;
        let hours = 0;
        let minutes = 0;

        if(hourFormat.includes("h")){
            hours = Number(hourFormat.slice(0, hourFormat.indexOf("h")));
        };
        if(hourFormat.includes(" ") && hourFormat.includes("min")){
            minutes = Number(hourFormat.slice(hourFormat.indexOf(" "), hourFormat.indexOf("min")));
        } else if(hourFormat.includes("min") && hourFormat.includes(" ") === false){
            minutes = Number(hourFormat.slice(0, hourFormat.indexOf("min")));
        }

        let totalMinutes = hours * 60 + minutes;
        return {...movie, duration: totalMinutes};
    });

    return formatedArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function maxNum(arr){
    let maxNum = 0;
    for(let i=0; i<arr.length; i++){
        maxNum = maxNum < arr[i] ? arr[i] : maxNum;
    }
    return maxNum;
}


function bestYearAvg(moviesArray) {
    if(moviesArray.length === 0){return null;}
    else if(moviesArray.length === 1){
        return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;
    } else {
       let clonedArr = moviesArray.map(movie => movie);

       let formatedArr = turnHoursToMinutes(clonedArr);
       let uniqueYearArr = getUniqueValues(formatedArr.map(movie => movie.year));
       uniqueYearArr.sort((a, b) => a - b);
       
       let uniqueScoreArr = [];
       for(let i=0; i < uniqueYearArr.length; i++){
          uniqueScoreArr.push(scoresAverage(formatedArr.filter(movie => movie.year === uniqueYearArr[i])));
       };
       
       let bestScore = maxNum(uniqueScoreArr);   
       let bestYear = uniqueYearArr[uniqueScoreArr.indexOf(bestScore)];
       return `The best year was ${bestYear} with an average score of ${bestScore}`;
    }
}


