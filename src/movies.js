// Iteration 1: All directors?

function getAllDirectors(moviesArray) {

    const directors = moviesArray.map(movie => movie.director);
    return Array.from(new Set(directors)); // new Set(unique values, without duplicates) with Array.from(back to Array)
    }

// Iteration 2

function howManyMovies(moviesArray) {

    if (moviesArray.length ===0) {
        return 0;
    }

    const count = moviesArray.filter((movie) => 
    movie.director === "Steven Spielberg" && movie.genre.includes('Drama'));
return count.length;
 }


// Iteration 3
function scoresAverage(moviesArray) {

    if (moviesArray =[] ) {
        return 0;
    }

const sum=moviesArray.reduce((acc, curr) => (acc + curr.score),0);
const averageSum = sum/moviesArray.length;
return Math.round (averageSum*100)/100;

}

// Iteration 4
function dramaMoviesScore(moviesArray)  {
    const dramaList = moviesArray.filter(movie => movie.genre.includes("Drama"));
      
      if (moviesArray.length ===0) {
        return 0;
      }
      
    
    const dramaSum = dramaList.reduce((acc, curr) => acc + curr.score,0);
    const dramaAverage = dramaSum/dramaList.length;
    return Math.round(dramaAverage*100)/100;
        
         
      }
    

// Iteration 5
function orderByYear(moviesArray) {

    const newArray = moviesArray.sort((a,b)=>{
        
        if (a.year === b.year) {
            return a.title.localeCompare(b.year);  // a.title-b.title cannot work (not numeric values)
        } else {
        return a.year-b.year;
    }
    
    });
    return newArray; // without it, this gives me an error!
     }
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {  
    const newTitleArray = moviesArray.map(movie => movie.title);
    const sortedArray = newTitleArray.sort((a,b) => a.localeCompare(b); 
    const finalNewArray = sortedArray.slice(0,20);
                                        
     return finalNewArray;
        
        }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
