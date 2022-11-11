// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// I had some syntax issues and tried it that way after research 
function getAllDirectors(moviesArray) {
    const moviesDirectors = moviesArray.map(({director}) => director) 
        return moviesDirectors;
    }
// just wanted to try the code we reviewed in the class   
/* function getAllDirectors(moviesArray){
    const movieDirectors = moviesArray.map(function(value) { 
    return value.director;
})
return movieDirectors
} */

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// same here, I had a syntax issue and researched for another way - after our class it is clear
function howManyMovies(moviesArray) {
    return moviesArray.filter(drama => {
        return drama.genre.includes('Drama') && drama.director === 'Steven Spielberg';
      }).length;
    } 

// just to practice the syntax from class
 /*    function howManyMovies(moviesArray) {
        const stevenDrama = moviesArray.filter(function(steven){
            return steven.genre.includes('Drama') && steven.director === 'Steven Spielberg';
        })
        return stevenDrama.length;
    }  
 */


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length <= 0){
        return 0;
    }
    const movieScores = moviesArray.map(function(number){ 
        return number.score;
    })

    const totalScore = movieScores.reduce(function(total, current) {
       return (total + current.score) / movieScores.length;
    },0);

    return totalScore.toFixed(2);
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   const dramaMovies = moviesArray.filter(function(type) { 
        return type.genre.includes('Drama') && type.score;
    });
    if(!dramaMovies.length){
        return 0;
    } 
    const scoreOnly = dramaMovies.map(function(number){
        return number.score;
    });
    const dramaScores = scoreOnly.reduce(function(total, current) {
        return (total + current.score) ;
    },0);
    const avgDramaScore = dramaScores / dramaScores.length;
    return avgDramaScore.toFixed(2);
    
   
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopie = [...moviesArray];

    moviesCopie.sort(function(a, b){
        return a.year - b.year;
    });
    if(moviesCopie.title === moviesCopie.title){
        return moviesCopie.sort();
   }
   //const alphabetic = moviesCopie.sort((a, b) => a.title.localeCompare(b.title))
    
        return moviesCopie;
}

// without any research :-) I was super happy when it turned green
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    function orderAlphabetically(moviesArray) {
    const movieCopie = [...moviesArray];
    const moviesTitle = movieCopie.map(function(name){ 
        return name.title;
    }); 
    moviesTitle.sort();
    return moviesTitle.slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newDuration = moviesArray.map(function(minutes){
        return minutes.duration 
    });
   const minutes = 0;
    if(newDuration.includes("h")){
        minutes += parseInt("", 2) * 60;
        return minutes;
    }
    if(newDuration.includes("min")){
        minutes += parseInt("",2)
        return minutes
    } 
    return minutes

}

// the avg Score annoyed me in 3 + 4 - I don't know what to change. Thats why I can't do 8
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
