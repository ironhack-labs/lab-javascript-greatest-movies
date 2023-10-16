


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map((movie)=>{
        return movie.director
    })
    return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

   const moviesCount = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama") 
    })

return moviesCount.length


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (moviesArray.length === 0) {
    return 0
}
const sum = moviesArray.reduce((accumulator, currentValue)=> {
    if ( currentValue.score) {
        return accumulator + currentValue.score;
    } else {
        return accumulator + 0;
    }
},0)
const avg = (sum / moviesArray.length).toFixed(2)
return Number(avg)
}
scoresAverage(movies)



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => { 
        return movie.genre.includes("Drama")
    },0);
        if (dramaMovies.length === 0) {
        return 0
        }   

       
    const avgDrama = dramaMovies.reduce((accumulator, currentValue) => {
        if ( currentValue.score) {
            return accumulator + currentValue.score;
        } else {
            return accumulator + 0;
            }

    },0)
    
        const avg = avgDrama / dramaMovies.length
        return scoresAverage(dramaMovies)
}
    


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [... moviesArray]
    newArray.sort((a,b)=>{
        if (a.year !== b.year) {
            return a.year-b.year
        }
        else {
            return a.title.localeCompare(b.title)
        }
    });
        return newArray
}
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { 
  
let movieTitles = []

for ( let i = 0; i < moviesArray.length; i++) {
    movieTitles.push(moviesArray[i].title)
}
movieTitles.sort()


if(movieTitles.length > 20 ) {
    movieTitles = movieTitles.slice(0,20)
}
return movieTitles
}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}
    

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
