// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

     const movies = moviesArray.map((movies)=>{return `${movies.director}`})


    return movies
  
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (moviesArray.length == 0){
     return 0;
    }
    const spielbergDramaMovies = moviesArray.filter( movies => movies.director === "Steven Spielberg" && movies.genre.includes("Drama") );

    return spielbergDramaMovies.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let count = 0;
    
    
    // if(!moviesArray.length) {
    //     return 0
    // }else if(moviesArray.score === 0){
    //     return count 
    // }else if (typeof movies.score == "string"){
    //     return count
    // }

    count = moviesArray.reduce((count, movies) => count + movies.score, 0 ) 
    if(!moviesArray.length ) {
        return 0
    } else if (moviesArray.score === 0){
        return count

    }
  
    return Number((count / moviesArray.length).toFixed(2))

}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore( moviesArray ) {

 const movies = moviesArray.filter (x => x.genre[0] === "Drama" );

 const movies2 = movies.map( a => a.score )
 const movies3 = movies2.reduce((count, points)=> count + points, 0) / movies2.length
 const movies4 = + ( movies3.toFixed(2) )
//  if (moviesArray.genre !== "Drama") {
//     return 0
// }
 return movies4

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

const movies2 = [...moviesArray]
movies2.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))
return movies2
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movies = [...moviesArray]
    movies.map(a => a.title)
    movies.sort()
    movies.slice(0,20)



    return movies


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
