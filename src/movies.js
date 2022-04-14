// The `movies` array from the file `src/data.js`.

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((eachElement) => {
    return eachElement.director;
  });
  let unique = [];
  directors.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenMovies = movies.filter((eachElement, index) => {
    return (
      eachElement.director === 'Steven Spielberg' &&
      eachElement.genre.includes('Drama')
    );
  });

  return stevenMovies.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let scoreSum = movies.reduce((accumulator, eachElement) => {
    return eachElement.score !== undefined
      ? accumulator + eachElement.score
      : accumulator;
  }, 0);
  return Number((scoreSum / movies.length).toFixed(2));
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((eachElement, index) => {
    return eachElement.genre.includes('Drama');
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  let scoreSum = dramaMovies.reduce((accumulator, eachElement) => {
    return accumulator + eachElement.score;
  }, 0);
  return Number((scoreSum / dramaMovies.length).toFixed(2));
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newMoviesArray = JSON.parse(JSON.stringify(movies));
  const moviesSort = newMoviesArray.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    } else if (elem1.year < elem2.year) {
      return -1;
    } else {
      if (elem1.title > elem2.title) {
        return 1;
      } else if (elem1.title < elem2.title) {
        return -1;
      } else {
        return 0; // no los cambies de posición
      }
    }
  });

  return moviesSort;
}

//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newMoviesArray = JSON.parse(JSON.stringify(movies));

  const moviesSort = newMoviesArray
    .sort((elem1, elem2) => {
      if (elem1.title > elem2.title) {
        return 1;
      } else if (elem1.title < elem2.title) {
        return -1;
      } else {
        return 0; // no los cambies de posición
      }
    })
    .filter((eachElement, index) => {
      if (index < 20) {
        return eachElement.title;
      }
    })
    .map((eachElement) => {
      return eachElement.title;
    });

  return moviesSort;
}
// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let mappedArr = movies.map((eachElem) => {
    let duration = eachElem.duration;
    let posHour = duration.indexOf('h');
    let posMin = duration.indexOf('m');
    let hours = 0;
    let minutes = '';
    let totalMinutes = 0;
    if (duration[posHour - 1] !== undefined) {
      hours = duration[posHour - 1];
    }
    if (
      duration[posMin - 1] !== undefined ||
      duration[posMin - 2] !== undefined
    ) {
      if (duration[posMin - 2] !== undefined) {
        minutes += duration[posMin - 2];
      }
      if (duration[posMin - 1] !== undefined) {
        minutes += duration[posMin - 1];
      }
    }
    totalMinutes = hours * 60 + Number(minutes);
    // console.log(
    //   `DURACION: ${duration}  POSICION H: ${posHour} POS M: ${posMin} HORAS: ${hours} MINUTOS: ${minutes} RESULT: ${totalMinutes}`
    // );
    return {
      title: eachElem.title,
      year: eachElem.year,
      director: eachElem.director,
      duration: totalMinutes,
      genre: eachElem.genre,
      score: eachElem.score
    };
  });

  return mappedArr;
}
// console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) return null;
  let newMoviesArray = JSON.parse(JSON.stringify(movies));

  let moviesByYearAndScore = [];

  let yearAndScoreSorted = newMoviesArray
    .map((eachElement) => {
      return { year: eachElement.year, score: eachElement.score };
    })
    .sort((elem1, elem2) => {
      if (elem1.year > elem2.year) {
        return 1;
      } else if (elem1.year < elem2.year) {
        return -1;
      } else {
        return 0; // no los cambies de posición
      }
    });
  // console.log('TeST');
  // console.log(yearAndScoreSorted);

  let unique = [];
  yearAndScoreSorted.forEach((element) => {
    if (!unique.includes(element.year)) {
      unique.push(element.year);
    }
  });
  // console.log(unique);
  let finalArray = [];
  let arrayScores = [];
  unique.forEach((año) => {
    let yearSum = 0;
    let yearCount = 0;
    yearAndScoreSorted.find((yearElement) => {
      if (yearElement.year === año) {
        yearSum += yearElement.score;
        yearCount++;
        // console.log(`YEAR ${año} ${yearElement.score}`);
        arrayScores.push(yearElement.score);
      }
    });
    // console.log(yearSum, yearCount);
    let resultScore = yearSum / yearCount;
    finalArray.push({ year: año, score: Number(resultScore.toFixed(2)) });
    arrayScores = [];
    yearCount = 0;
  });
  // console.log(finalArray);
  finalArray.sort((elem1, elem2) => {
    if (elem1.score < elem2.score) {
      return 1;
    } else if (elem1.score > elem2.score) {
      return -1;
    } else {
      return 0; // no los cambies de posición
    }
  });

  // console.log(finalArray);
  return `The best year was ${finalArray[0].year} with an average score of ${finalArray[0].score}`;
}

// console.log(bestYearAvg(movies));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
