// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArrayUnfiltered = moviesArray.map( element => element.director);
    let directorsArrayFiltered = directorsArrayUnfiltered.filter((element,index) => directorsArrayUnfiltered.indexOf(element.director,index+1));

    return directorsArrayFiltered;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filteredArray = moviesArray.filter(element => element.director === "Steven Spielberg" && element.genre.includes("Drama"));
    return filteredArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length===0){
        return 0
    }
    else {
        let getScores = moviesArray.map(element => element.score);
        let getFilteredScores = getScores.filter(element => element);
        let totalScore = getFilteredScores.reduce((acc,curr) => acc + curr,0);
        let avgScore = totalScore/getScores.length;
        let result= Math.round(avgScore*100)/100;
        return result
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(element => element.genre.includes("Drama"));
    if(dramaMovies.length===0)
    {
        return 0
    }
    else {
        let dramaTotalScore = dramaMovies.reduce(function(acc,curr)
            {
            return acc + curr.score
            },0
            );
        let avgScore = dramaTotalScore/dramaMovies.length;
        return avgScore
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedArray = moviesArray.map(element => element)
    orderedArray.sort((a,b) => a.year - b.year||a.title.localeCompare(b.title));
    return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedArray = moviesArray.map(element => element.title);
    orderedArray = orderedArray.sort((a,b)=>a.localeCompare(b));
    orderedArray = orderedArray.slice(0,20);

    console.log(orderedArray);
    return orderedArray;


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let modifiedArray = JSON.parse(JSON.stringify(moviesArray));

    modifiedArray.map(element => {
        if(element.duration.search("min")!==-1){
            element.duration= Number(element.duration.split('h')[0])*60 + Number(element.duration.split('h ').pop().split("min")[0])
        }
        else{
            element.duration = Number(element.duration.split('h')[0])*60
        }
    });
    return modifiedArray;
    


}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {



}
