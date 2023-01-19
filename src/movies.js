// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {

 const getDir = moviesArray.map((el) => el.director)

 return getDir
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    
    const dramaSteve = moviesArray.filter((el) => el.director === "Steven Spielberg" && el.genre.includes("Drama") === true)

    return dramaSteve.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
   if (!moviesArray.length) return 0; //return 0 if an empty array is passed

   const avarScore = moviesArray.reduce((acc, val)=>{
        if (!val.score)
        {return acc} //return average even if one of the movies does not have score
        else {return acc + val.score}
   }, 0);

   let avarScoreRounded = Math.round((avarScore/moviesArray.length)* 100)/ 100;
   return avarScoreRounded;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramaMovies = moviesArray.filter (movie => movie.genre.includes("Drama")) //1º Do an Array with JUST drama movies
    return scoresAverage(dramaMovies)                                              //Return the average Scores of the array created
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
         
    const cloneMoviesArray= moviesArray.slice(0); // Create a cloned array

    cloneMoviesArray.sort( function (a, b) {
          if(a.year === b.year)
           {
                if (a.title < b.title) {         //
                    return -1                    //
                } else if (a.title > b.title) {  //  Condicional to order
                    return 1                     //  titles alphabetically 
                } else {                         //  if movies have the same year
                    return 0; 
                }                                
              }
           else { return a.year - b.year}   
    });
    return cloneMoviesArray
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
       
       const titles = moviesArray.map((el) => el.title) // create a new array with just the titles values
       const alphaOrder = titles.sort(); 
       const top20 = alphaOrder.slice(0,20) // Return the first 20
    return top20
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
