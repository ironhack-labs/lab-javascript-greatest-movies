// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const arrayDirectors = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })
      return arrayDirectors;
   
}
/// BONUS 1.1/////
// function getAllDirectorsUnified(moviesArray) {
//     const arrayDirectors = moviesArray.filter((eachMovie) =>{
//         return eachMovie.director !== eachMovie.director
//     })
//     return arrayDirectors;
// }
// getAllDirectorsUnified(moviesArray);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let counter = 0;
    const filteredMovies = moviesArray.filter((eachMovie) => {
        if (eachMovie.director === 'Steven Spielberg') {
            eachMovie.genre.forEach(genero => {
                if (genero === 'Drama') {
                    counter++;
                }
            });
        }
    })
    return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

   if (moviesArray.length === 0) {

        return 0

   } else {

        const result = moviesArray.reduce((acc, eachMovie) => {
            if (!eachMovie.score) {
                eachMovie.score = 0;
            }
            return acc + eachMovie.score
        }, 0)

        const avg = result / moviesArray.length

        return Number(avg.toFixed(2))
   }
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   
     let dramaMoviesArr = moviesArray.filter((eachMovie) => {
            return eachMovie.genre.includes('Drama')
    })

         if (dramaMoviesArr.length === 0 ) {
                return 0
            } else {

                 const result = dramaMoviesArr.reduce((acc, eachMovie) => {
                      if (!eachMovie.score ) {
                         eachMovie.score = 0;
                      }
                       return acc + eachMovie.score
                  }, 0)

                   const avg = result / dramaMoviesArr.length

                    return Number(avg.toFixed(2))
   }
   
   
}
dramaMoviesScore(moviesArray)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   const moviesArrayClon = JSON.parse(JSON.stringify(moviesArray));
  const moviesArraySorted = moviesArrayClon.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {

      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return moviesArraySorted;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayClon = JSON.parse(JSON.stringify(moviesArray));
    const titlesArray = moviesArrayClon.map((eachMovie) => {
    
        return eachMovie.title
    })
    const sortedTitles = titlesArray.sort();
    const result = sortedTitles.slice(0,20)
    return result

    
   
}
orderAlphabetically(moviesArray);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
