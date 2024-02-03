// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getMoviesMap(moviesArr) {
  const mapOfData = moviesArr.map((v) => v);
  return mapOfData;
}

function getAllDirectors(moviesArray) {
  const mapOfMovies = getMoviesMap(moviesArray);
  let arrayDirectors = Array.from(mapOfMovies.values()).map((c) => c.director);

  //Bonus 1.1
  let noDuplicatedArray = arrayDirectors.reduce(function (cleaned, old) {
    if (!cleaned.includes(old)) cleaned.push(old);
    return cleaned;
  }, []);
  // End of Bonus 1.1

  return arrayDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const mapOfMovies = getMoviesMap(moviesArray);
  const spielbergDramaMovies = mapOfMovies.filter((m) => {
    return m.director == "Steven Spielberg" && m.genre.includes("Drama");
  });
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const mapOfMovies = getMoviesMap(moviesArray);
  const arrayScores = Array.from(mapOfMovies.values()).map(
    (c) => parseFloat(c.score) || 0
  );

  if (arrayScores.length === 0) {
    return 0;
  } else {
    const arraySum = arrayScores.reduce((a, b) => a + b, 0);
    const arrayAverage = arraySum / arrayScores.length;
    return parseFloat(arrayAverage.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const mapOfMovies = getMoviesMap(moviesArray);
  const dramaMovies = mapOfMovies.filter((m) => {
    return m.genre.includes("Drama");
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedArray = [...moviesArray];
  sortedArray = sortedArray.sort(function (a, b) {
    var keyA = a.year,
      keyB = b.year;
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    if (keyA == keyB) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
    }
  });
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedArray = [...moviesArray].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  if (sortedArray.length < 20) {
    return sortedArray.map((item) => item.title);
  } else {
    const topTwenty = [...sortedArray.slice(0, 20)];
    return topTwenty.map((item) => item.title);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newFormatTime = moviesArray.map((item) => {
    const newItem = { ...item };
    timeDuration = item.duration.match(/\d+/g);
    if (timeDuration.length > 1) {
      duration = parseInt(timeDuration[0] * 60) + parseInt(timeDuration[1]);
    } else {
      duration = parseInt(timeDuration[0] * 60);
    }
    if (duration === NaN || duration === null) duration = 0;
    newItem.duration = duration;
    return newItem;
  });
  return newFormatTime;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length < 1) return null;

  const groupYear = {};
  let bestYear = 0;
  let bestAverageScore = 0;

  moviesArray.forEach((movie) => {
    const { year, score } = movie;

    if (year in groupYear) {
      groupYear[year].totalScore += score;
      groupYear[year].count++;
    } else {
      // If the year doesn't exist, initialize it with the score and count of 1
      groupYear[year] = {
        totalScore: score,
        count: 1,
      };
    }
  });
  for (const year in groupYear) {
    const { totalScore, count } = groupYear[year];
    const averageScore = totalScore / count;

    if (averageScore > bestAverageScore) {
      bestAverageScore = averageScore;
      bestYear = year;
    }
  }
  console.log(
    `The best year was ${bestYear} with an average score of ${bestAverageScore}`
  );

  return `The best year was ${bestYear} with an average score of ${bestAverageScore}`;
}
