// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directorsArray = moviesArray.map(

        (movie) => { return movie.director; }  

    ); 

    return directorsArray;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergMovies = moviesArray.filter((spielbergParam) => {

        return spielbergParam.director === 'Steven Spielberg' && spielbergParam.genre.includes('Drama');
        
    });

    return spielbergMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(!moviesArray.length){
        return 0;
    }

    const allScores = moviesArray.filter( (movie) => movie.score);

    const totalSum = allScores.reduce((acc, movie) => {

        return acc + movie.score;

    },0);

    const average = totalSum/moviesArray.length;

    return Math.round(average*100/100);

    };
      
    
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const allDrama = moviesArray.filter( (movies) => movies.genre.includes("Drama"));

    if(!allDrama.length){ return 0;}
    
    else{
    const sumDrama = allDrama.reduce((acc, movie) => {
        return acc + movie.score; 
    },0);

    return Math.round((sumDrama/allDrama.length)*100/100);
    }
  
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const sortedMovies = moviesArray.slice().sort((a, b) => {
        return a.year - b.year; 
    });

    console.log(sortedMovies);
    return sortedMovies;
}

// Ejemplo de cómo llamar a la función
orderByYear(movies); 
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    function titlesFunction(titlesArray) {
        let results = [];
        for (let i = 0; i < 20 && i < titlesArray.length; i++) {
            results.push(titlesArray[i]);
        }
        return results;
    }

    const titlesArray = moviesArray.map(movie => movie.title).sort();

   
    const firstTitles = titlesFunction(titlesArray);


    console.log(titlesArray);

    console.log(firstTitles);

    return firstTitles;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
