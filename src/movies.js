// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
return directors;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    count = 0;
    moviesArray.forEach(movie => {
     if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
        count++
      }
    })
   return count
 }



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
      const totalScore = moviesArray.reduce(function (acc, val) {
        if (val.score) {
          return acc + val.score;
        } else {
          return acc;
        }
      }, 0); 
      const averageScore = totalScore / moviesArray.length;
      return Number(averageScore.toFixed(2));
    }
    


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function (movie) {
      return movie.genre.includes('Drama');
    });
    return scoresAverage(dramaMovies);
  }
  
  
  
          
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(moviesArray) {
    const newMoviesArray = [...moviesArray]; 
    newMoviesArray.sort(function (a, b) {
        if(a.year === b.year){
        return a.title.localeCompare(b.title)
        }
        return a.year - b.year;
      }
    
      );
      return newMoviesArray;
      
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMoviesArrayCloned = [...moviesArray]
    let sortedByTitle = newMoviesArrayCloned.sort((a,b) => {
       return  a.title.localeCompare(b.title)
   }).map(movie => {return movie.title})

   return sortedByTitle.slice(0,20)
 }
    
    


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMinutesArray = [...moviesArray]
     let  mapped = newMinutesArray.map(movie => {
        const durationParts = movie.duration.split(' ');
        const hours = parseInt(durationParts[0]);
        const minutes = parseInt(durationParts[1]);
        const totalMinutes = Math.round(hours * 60 + minutes);
        return {
          ...movie,
          duration: totalMinutes
        };
        
      } 
      );
    return mapped;
     }
 

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
