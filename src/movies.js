// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const allDirectors = movies.map(function(movie){
        return movie.director;
    });  
    return allDirectors; 
    
   /*for(let i=0;i<allDirectors.length;i++){
       
        const director=allDirectors[i];
        if(allDirectors.indexOf(director)===allDirectors.lastIndexOf(director)){
            
            let uniqDirectors=allDirectors.slice(i,1);
            return uniqDirectors;
            
        }else{
            return allDirectors;
        }
    }*/
        
    }
    


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const moviesSpielberg=movies.filter(function(movie){
        return movie.director===`Steven Spielberg`}) ;  
    const dramaMoviesSpielberg=moviesSpielberg.filter(function(movieSpielberg){
        return movieSpielberg.genre.indexOf(`Drama`)!==-1});
    
    let dramaMoviesSpielbergTotal=dramaMoviesSpielberg.length;
    return dramaMoviesSpielbergTotal; 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {    
    const scoresTotal=movies.reduce(function(acc,currMovie){
        if(currMovie.score===Number){
        return acc+currMovie.score;
        }else{
        return acc;
        }},0);        
    let averageScore=scoresTotal/movies.length;    
    return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    for(let i=0;i<movies.length;i++){
        
        if(movies[i].genre.indexOf(`Drama`)!==-1){
            const dramaMovies=[];
            dramaMovies.push(movies[i]);
            return dramaMovies;
        }else{
            return 0;
        }   
    };  
    const dramaMoviesScoreTotal=dramaMovies.reduce(function(acc,currDramaMovie){
        if(typeof currDramaMovie.score===Number){
            return acc+currDramaMovie.score;
            }else{
            return acc;        
    }},0);
    let dramaMoviesScoreAverage=dramaMoviesScoreTotal/dramaMovies.length;
    return Number(dramaMoviesScoreAverage.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
   
        const movieOrder=movies.sort(function(movieA,movieB){
            return movieA.year-movieB.year;
})
       return movieOrder;
   
    }





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


