// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

function getAlldirectors(movies) {
    const directors = movies.map(function (movie) {
        return movie.director;
    });
    return directors;
}
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(function (movie) {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
      }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
      const sum = moviesArray.reduce((avg, movie) => {
        if (movie.score) {
          return avg + movie.score;
        }
        return avg;
      }, 0);
      const avg = sum / moviesArray.length;
      return Math.round(avg * 100) / 100;
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMoviesAverage = moviesArray.filter((element)=> element.genre.includes('Drama'));
    return scoresAverage(dramaMoviesAverage)
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.map(function (movie) {
      return movie;
    })
    .sort(function (a, b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }

      return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = moviesArray.slice();  
    return moviesCopy.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20).map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const hours = movie.duration.split("h")[0];
        const minutes = movie.duration.split("min")[0].split("h")[1];
        // movie.duration = Number(hours) * 60 + Number(minutes);
        // return movie;
        return {
            ...movie,
            duration: Number(hours) * 60 + Number(minutes)
        }
      });
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    let newArr = structuredClone(moviesArray)

    if (newArr.length === 0) {
        return null
    }

    if (newArr.length === 1) {
        //console.log("single:",  newArr[0]["score"], "newArr:", newArr)
        return `The best year was ${newArr[0]["year"]} with an average score of ${Number(newArr[0]["score"])}`

    }

    let yearScore = []

    for (let yearIti = 1900; yearIti < 2013; yearIti++) {
        let filteredYears = newArr.filter( (elem) => {
            return elem.year === yearIti
        })
        yearScore.push({year: yearIti, score: scoresAverage(filteredYears)})
    }
    //console.log("yearScore:", yearScore)

    let sortedYearScore = yearScore.sort( (elem2, elem1) => {
        if (elem2.score > elem1.score) {
            return -1
        } else if (elem2.score < elem1.score) {
            return 1
        } else {
            if (elem2.year > elem1.year) {
                return 1
            } else if (elem2.year < elem1.year) {
                return -1
            } else {
                return 0
            }
        }

    })

    //console.log("sortedYearScore", sortedYearScore)

    return `The best year was ${sortedYearScore[0]["year"]} with an average score of ${sortedYearScore[0]["score"]}`
}
