// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArr = moviesArray.map((item) => item.director);
  return newArr;
}

// Bonus - Iteration 1.1: Clean the array of directors
// Some of the directors had directed multiple movies, so they will pop up multiple times in the array of directors. How could you "clean" this array and make it unified (meaning, without duplicates)? Don't prioritize the bonus part now. You can return to it when you finish the mandatory iterations. 😉

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;

  if (!moviesArray.length) {
    return 0;
  }
  const spielBerg = moviesArray.filter(
    (arr) => arr.director === "Steven Spielberg"
  );

  const spielBergGenre = spielBerg.filter((arr1) =>
    arr1.genre.includes("Drama")
  );
  return spielBergGenre.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  const theFilteredArr = moviesArray.filter(
    (element) => (element.score ? element.score : 0)
    // element.score || 0
  );
  const getScore = theFilteredArr.map((element) => element.score);
  const sumScores = getScore.reduce((arr, curr) => {
    return arr + curr;
  }, 0);
  //console.log(sumScores);
  const theAvg = sumScores / moviesArray.length;

  return +theAvg.toFixed(2);
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const onlyDrama = moviesArray.filter((item) => item.genre.includes("Drama"));
  if (!onlyDrama.length) {
    return 0;
  }
  const onlyDramaScores = onlyDrama.map((item) => item.score);

  const result = onlyDramaScores.reduce((arr, curr) => arr + curr);
  const theAvg = Math.round((result / onlyDrama.length) * 100) / 100;
  return theAvg;
}
//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = moviesArray.slice().sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return sortedArray;
}
//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const onlyTitle = moviesArray.map((item) => item.title);
  const sortedArray1 = onlyTitle.sort((a, b) => {
    return a.localeCompare(b);
  });
  return sortedArray1.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArr = moviesArray.map(
    (item) => {
      return {
        duration:
          Number(item.duration.substring(0, 1)) * 60 +
          Number(item.duration.substring(2, 5)),
      };
    }

    //item.duration.substring(0, 1) * 60 + item.duration.substring(2, 5))
  );
  //console.log(newArr);
  // const convertHours = +moviesArray[0].duration.substring(0, 1) * 60;
  //const convertMinutes = +moviesArray[0].duration.substring(2, 5);
  //console.log(convertHours + convertMinutes);
  //console.log(convertHours);
  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  let emptyObj = {};

  if (!moviesArray.length) {
    return null;
  }

  for (let i = 0; i < moviesArray.length; i++) {
    const result = moviesArray.filter(
      (index) => index.year === moviesArray[i].year
    );
    emptyObj[moviesArray[i].year] = result;
  }
  //console.log(emptyObj);
  for (let key in emptyObj) {
    let sumScore = 0;
    for (let j = 0; j < emptyObj[key].length; j++) {
      sumScore += emptyObj[key][j].score;
      emptyObj[key] = sumScore / emptyObj[key].length;
    }
  }
  const newSorted = Object.entries(emptyObj).sort((a, b) => {
    return b[1] - a[1];
    // if (a[0][1] === b[0][1]) {
    //   return b[0];
    // } else {
    //   return b[1] - a[1];
    // }
  });

  console.log(newSorted);

  //newSorted[0];
}

console.log(bestYearAvg(movies));
