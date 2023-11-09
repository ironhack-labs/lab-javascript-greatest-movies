
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors =  moviesArray.map(element =>  element.director );
    return [...new Set(directors)]
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
        return 0;
      }
    
      return moviesArray.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
      }).length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
        return 0;
      }

      const sumScores = moviesArray.reduce((accumulator, currentValue) => {
        if (typeof currentValue.score === 'number') {
          return accumulator + currentValue.score;
        }
        return accumulator;
      }, 0);
    
      const avg = sumScores / moviesArray.length;
      return Number(avg.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
        return 0;
      }
    
      const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    
      if (dramaMovies.length === 0) {
        return 0;
      }
    
      return scoresAverage(dramaMovies);
   
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArr = [...moviesArray].sort((a, b) => {
        if (a.year === b.year) {
          return a.title.localeCompare(b.title);
        } else {
          return a.year - b.year;
        }
      });
    
      return newMoviesArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleArr = [...moviesArray].sort((a, b) => {
         return  a.title.localeCompare(b.title)      
      })
      .map(m => m.title)
      .slice(0,20);
        // console.log(titleArr)

      return titleArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const newMoviesArray = [...moviesArray].map(movie=>{
        let durationInMins = convertTomins(movie.duration)
       return {...movie, duration: durationInMins}

    })
    console.log(newMoviesArray)
    return newMoviesArray

}

const convertTomins = (duration) =>{
    const hoursMatch = duration.match(/(\d+)\s*h/);
    const minutesMatch = duration.match(/(\d+)\s*min/);

    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

    return (hours*60) + minutes

    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    
    if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
        return null;
      }

    let obj = {}
    moviesArray.forEach(movie => {
        if (typeof movie.score === 'number') {
          if (movie.year in obj) {
            obj[movie.year].push(movie.score);
          } else {
            obj[movie.year] = [movie.score];
          }
        }
      });

      let bestYear;
  let highestAvg = 0;
  for (const year in obj) {
    const currentAvg = avg(obj[year]);
    if (currentAvg > highestAvg || (currentAvg === highestAvg && year < bestYear)) {
      highestAvg = currentAvg;
      bestYear = year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${highestAvg}`;

}

const avg = (arr)=>{
    if (arr.length === 0) return 0;

    if (arr.length === 0) return 0;
    const sumScores = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const avg = sumScores / arr.length;
    return Number(avg.toFixed(2));
    
}

