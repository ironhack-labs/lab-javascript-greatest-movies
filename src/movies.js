// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(item => item.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray
    .filter(item => {
      const b1 = item.director === "Steven Spielberg";
      const b2 = item.genre.includes("Drama");
      console.log({b1, b2, genre: item.genre});
      return b1 && b2;
    });
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let moviesWithScore = moviesArray.filter(item => item.score !== undefined && item.score !== null && item.score !== "");
    let sumScores = moviesWithScore.reduce((total, item) => total + item.score, 0); 
    let numberOfScores = moviesWithScore.length;
    if (numberOfScores>0) {
        let avgScore = sumScores/numberOfScores;
        return parseFloat(avgScore.toFixed(2));
    }
    else {
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let moviesWithScore = moviesArray.filter(item => item.score !== undefined && item.score !== null && item.score !== "" && item.genre.includes("Drama"));
    let sumScores = moviesWithScore.reduce((total, item) => total + item.score, 0); 
    let numberOfScores = moviesWithScore.length;
    if (numberOfScores>0) {
        let avgScore = sumScores/numberOfScores;
        return parseFloat(avgScore.toFixed(2));
    }
    else {
        return 0;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyArray = [...moviesArray];
    let moviesOrdered = copyArray.sort(compareFn);
    function compareFn(a, b) {
        if (a.year < b.year) {
          return -1;
        } else if (a.year > b.year) {
          return 1;
        }
        else if (a.year === b.year) {
                if (a.title < b.title) {
                  return -1;
                }
                else if (a.title > b.title) {
                  return 1;
                }
                return 0;
              }
          }
      return moviesOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let copyArray = [...moviesArray];
    function compareFn(a, b) {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
        // a must be equal to b
        return 0;
      }
    let moviesOrdered = copyArray.sort(compareFn);
    let topTwenty = moviesOrdered.slice(0, 20);
    return topTwenty.map(item => item.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    function hoursToMins (item) {
        let times = item.match(/\d+/g);
        if (times.length === 2) {
            return Number(times[0])*60+Number(times[1]);
        }
        else if (times.length === 1) {
            return Number(times[0])*60;
        }
    }
    let copyArray = moviesArray.map(movie => ({...movie,duration : hoursToMins(movie.duration)}));
    return copyArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let moviesWithScore = moviesArray.filter(item => item.score !== undefined && item.score !== null && item.score !== "");  
    let endObject = {};
    if (moviesWithScore.length === 0) {
        return null;
    }
    for (let i=0; i<moviesWithScore.length; i++) {
      let a= moviesWithScore[i].year;
      let b= moviesWithScore[i].score;
      if (!endObject[a]) {
        endObject[a] = {score: moviesWithScore[i].score, count: 1};
      }
      else if (endObject[a]) {
        endObject[a].score += moviesWithScore[i].score;
        endObject[a].count += 1;
      }
}
        let newArray = Object.entries(endObject).map(([year, data]) => {
        return { year: parseInt(year), avgScore: data.score / data.count };
    });
  function compareFn(a, b) {
  if (a.avgScore<b.avgScore) {
    return -1;
  } else if (a.avgScore>b.avgScore) {
    return 1;
  }
  else if (a.avgScore === b.avgScore) {
    if (a.year > b.year) {
        return -1;
    }
    else if (a.year < b.year) {
        return 1;
    }
  }
}
  newArray.sort(compareFn).reverse();
  return `The best year was ${newArray[0].year} with an average score of ${newArray[0].avgScore}`
}
