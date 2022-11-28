// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return directorsArray = moviesArray.map(elem => elem.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const director = `Steven Spielberg`;
    const ourGenre = `Drama`;
    const moviesSteven = moviesArray.filter((elem) => elem.director === director).filter((elem) => elem.genre.includes(ourGenre));
  
    return moviesSteven.length;;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    const average=moviesArray.reduce((function(acl,curr){
        if(typeof curr.score === "number"){
            return acl+(curr.score/moviesArray.length)
        }else{
            return acl
        }        
    
    }),0)
    const averageRounded= Math.round(average *100)/100
    return averageRounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes(`Drama`) )
    return scoresAverage(dramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    ////solution 1 --------------------------------------------------------without ordering alphabetically
    // let moviesOrdered = moviesArray;
    // moviesOrdered.sort((a, b) => a.year - b.year);  
    ////---------------------I dont understand why this 2 lines of code also change moviesArray
   

    ////solution2 --------------------------------------------------without ordering alphabetically
    // const  moviesOrdered = moviesArray.map(movies=> movies)
    // moviesOrdered.sort((a,b) =>  a.year - b.year)


    
    //solution 3 ------------------------- to be honest i dont really understand why it works
    const  moviesOrdered = moviesArray.map(movies=> movies)
    moviesOrdered.sort(function(a,b) { 
        
        if(a.year===b.year){
           return a.title.localeCompare(b.title)
        }   
                
        return a.year - b.year
    })
    

   
  return moviesOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const  moviesOrdered = moviesArray.map(movies=> movies)
    
    moviesOrdered.sort((a,b)=> a.title.localeCompare(b.title))
    const movieTitles = moviesOrdered.map(movies => movies.title)

    if(movieTitles.length>20){
        for (let i = 0; i < 20; i++) {
             movieTitles.splice(20,Infinity)
    }
    }


    return movieTitles;

    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
