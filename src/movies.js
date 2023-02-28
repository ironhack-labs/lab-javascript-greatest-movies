// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArr = moviesArray.map(element => {
        return element.director;
    })
    return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArr = moviesArray.filter(function(element){
        return (element.director === "Steven Spielberg" && element.genre.includes("Drama"))
    }).map(element =>{
        return element.title
    })
    
    return newArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0){
        return 0;
    };

    const ave = moviesArray.reduce(function(acc, curr){
        return  acc + (curr.score || 0)
    },0);
    const endAve = ave / moviesArray.length;
    const roundAve = Math.round(endAve * 100)/100
    
    return roundAve;
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaScores = moviesArray.filter(element => element.genre.includes("Drama"));
    if(dramaScores.length>0){

    const dramaMovScores = moviesArray.filter(element => element.genre.includes("Drama")).map(element => element.score); 
    
    const dramaSum = dramaMovScores.reduce(function(acc, curr){  
        return acc + curr
    })
   
    const dramaAve = dramaSum / dramaMovScores.length;
    const formDrAve = Math.round(dramaAve * 100)/100;
    
    return formDrAve;
    }else{
        return 0;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray];

    moviesCopy.sort(function(a,b){
        if ( a.title < b.title){
            return -1;
          }else if ( a.title > b.title ){
            return 1;
          }
          return 0;
    })
     

    const newOrder = moviesCopy.sort((a,b) =>{
        
            return  a.year - b.year;
    })
return newOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copy = [...moviesArray];
    const newArr = copy.map(element => {
        return element.title;
    }).sort();
    newArr.forEach(element =>{
        if(newArr.length > 20){
            newArr.pop();
        }
    })
    return newArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const copy = [...moviesArray];
    const newArr = copy.map(element =>{
        return element.duration;
    })
    return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
