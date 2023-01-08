// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((moviesArray) => moviesArray.director);
  
  // bonus 1.1 get rid of repeated directors
  let directorsWithoutRepetition = [];
  directors.forEach((element) => {
    if (!directorsWithoutRepetition.includes(element)) {
      directorsWithoutRepetition.push(element);
    }
  });

  return directorsWithoutRepetition;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < moviesArray.length; i++) {
      if (!moviesArray[i].director == "Steven Spielberg") {
        return 0;
      } else {
        const spielbergMovies = moviesArray.filter(
          (moviesArray) => moviesArray.director == "Steven Spielberg"
        );
        console.log(spielbergMovies);

        let spielbergDramaMovies = spielbergMovies.filter((spielbergMovies) =>
          spielbergMovies.genre.includes("Drama")
        );
        console.log(spielbergDramaMovies);
        console.log(spielbergDramaMovies.length);
        return spielbergDramaMovies.length;
      }
    }
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  } else {
    let scoresArray = moviesArray.map((moviesArray) => moviesArray.score);
    const scoresArrayDef = scoresArray.filter(
      (scores) => typeof scores === "number"
    );

    let scoreSum = scoresArrayDef.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    let scoreAvg = Number((scoreSum / scoresArray.length).toFixed(2));
    console.log(scoreAvg);
    return scoreAvg;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaArr = moviesArray.filter((moviesArray) =>
    moviesArray.genre.includes("Drama")
  );
  if (dramaArr.length == 0) {
    return 0;
  } else {
    console.log(dramaArr);
    let scoresDramaArray = dramaArr.map((dramaArr) => dramaArr.score);
    const scoresDramaArrayDef = scoresDramaArray.filter(
      (scores) => typeof scores === "number"
    );

    let scoreDramaSum = scoresDramaArrayDef.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      }
    );
    let scoreDramaAvg = Number(
      (scoreDramaSum / scoresDramaArray.length).toFixed(2)
    );
    console.log(scoreDramaAvg);
    return scoreDramaAvg;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
  moviesArrayCopy.sort((a, b) => (a.title > b.title ? 1 : -1));
  moviesArrayCopy.sort((a, b) => a.year - b.year);
  return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
  moviesArrayCopy.sort((a, b) => (a.title > b.title ? 1 : -1));
  const moviesTitlesArr = moviesArrayCopy.map(
    (moviesArrayCopy) => moviesArrayCopy.title
  );
  moviesTitlesArr.sort((a, b) => (a.toUpperCase() > b.toUpperCase() ? 1 : -1));
  if (moviesTitlesArr.length <= 20) {
    return moviesTitlesArr;
  } else if (moviesTitlesArr.length > 20) {
    return moviesTitlesArr.slice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
  let hours;
  let minutes;
  let durationInMin;
  for (let i = 0; i < moviesArrayCopy.length; i++) {
    hours = Number(moviesArrayCopy[i].duration.split("h")[0].trim());
    minutes = moviesArrayCopy[i].duration.split("h")[1].trim();
    minutes = Number(minutes.split("m")[0]);
    durationInMin = hours * 60 + minutes;
    moviesArrayCopy[i].duration = durationInMin;
  }
  return moviesArrayCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
if (!moviesArray.length) {
  return null;
  } else {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
    moviesArrayCopy.sort((a, b) => a.year - b.year);
    let yearsArr = moviesArrayCopy.map(
      (moviesArrayCopy) => moviesArrayCopy.year
    );
    let bestYear;
    let averageScore = 0;
    let yearsArrWithoutRepetition = yearsArr.filter((element, index) => {
      return yearsArr.indexOf(element) === index;
    });

    for (y = 0; y < yearsArrWithoutRepetition.length; y++) {
      let moviesEachYear = moviesArrayCopy.filter(
        (moviesArrayCopy) =>
          moviesArrayCopy.year == yearsArrWithoutRepetition[y]
      );
      let avgScoreHolder = moviesEachYear.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.score;
        }, 0);
        avgScoreHolder = avgScoreHolder / moviesEachYear.length;
      if (averageScore < avgScoreHolder) {
        averageScore = avgScoreHolder;
        bestYear = yearsArrWithoutRepetition[y];
        console.log(avgScoreHolder)
        console.log(averageScore)
      }
    }
    console.log(`The best year was ${bestYear} with an average score of ${averageScore}`)
    return `The best year was ${bestYear} with an average score of ${averageScore}`;
 }
} 