// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(data) {
  let directors = data.map((dataPoint) => dataPoint.director);
  let directorsFiltered = directors.filter(
    (director, index, arr) => index === arr.indexOf(director)
  );
  return directorsFiltered;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(data) {
  let films = data.filter((film) => film.director === 'Steven Spielberg');
  let dramaFilms = films.map((dataPoint) =>
    dataPoint.genre.filter((drama) => drama === 'Drama')
  );
  let filteredByDrama = dramaFilms.filter((point) => point.length > 0);
  return filteredByDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(data) {
  if (data.length !== 0) {
    let score = data.map((film) => film.score);
    let filtered = score.filter((el) => el !== undefined);
    let sum = filtered.reduce(
      (currentValue, dataPoint) => (currentValue += dataPoint)
    );
    let number = +(sum / data.length).toFixed(2);
    return number;
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(data) {
  let drama = data.map((dataPoint) =>
    dataPoint.genre.filter((point) => point === 'Drama')
  );
  let num = [];
  for (i = 0; i < drama.length; i++) {
    if (drama[i].length > 0) {
      num.push(i);
    }
  }
  if (num.length !== 0) {
    let films = [];
    for (j = 0; j < num.length; j++) {
      films.push(data[num[j]]);
    }
    let score = films.map((film) => film.score);
    let sum = score.reduce(
      (currentValue, dataPoint) => (currentValue += dataPoint)
    );
    let number = +(sum / films.length).toFixed(2);
    return number;
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(data) {
  let order = [...data];
  order.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return order;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(data) {
  if (data.length > 20) {
    let titleFilms = data.map((film) => film.title);
    let order = titleFilms.sort((a, b) => {
      const lowerCaseA = a.toLowerCase();
      const lowerCaseB = b.toLowerCase();
      if (lowerCaseA < lowerCaseB) {
        return -1;
      } else if (lowerCaseA > lowerCaseB) {
        return 1;
      } else {
        return 0;
      }
    });
    return order.slice(0, 20);
  } else {
    let titleFilms = data.map((film) => film.title);
    let order = titleFilms.sort((a, b) => {
      const lowerCaseA = a.toLowerCase();
      const lowerCaseB = b.toLowerCase();
      if (lowerCaseA < lowerCaseB) {
        return -1;
      } else if (lowerCaseA > lowerCaseB) {
        return 1;
      } else {
        return 0;
      }
    });
    return order;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(data) {
  let newsMoviesArray = data.map((film) => {
    if (!film.duration) {
      film.duration = '0min';
    }
    film.duration = transForTime(film.duration);
    //console.log(film.duration);
  });
  //console.log(time);
  function transForTime(time) {
    let sum = 0;
    let valueInTime;
    //console.log('$$$$$$$$$$$', time, typeof time, time.includes(' '));
    if (time.includes(' ')) {
      valueInTime = time.split(' ');
      //console.log('----->', time, valueInTime);
      if (valueInTime.length > 1) {
        for (k = 0; k < valueInTime.length; k++) {
          if (valueInTime[k].includes('h')) {
            if (!valueInTime[k + 1]) {
              sum = parseFloat(valueInTime[k]) * 60;
            } else {
              sum =
                parseFloat(valueInTime[k]) * 60 +
                parseFloat(valueInTime[k + 1]);
            }
          }
        }
      } else {
        sum = parseFloat(valueInTime[k]);
      }
    } else {
      valueInTime = time;
      //console.log('<-----', time, valueInTime);
      if (valueInTime.includes('h')) {
        sum = parseFloat(valueInTime) * 60;
      } else {
        sum = parseFloat(valueInTime);
      }
    }
    //console.log(sum);
    return sum;
  }
  //console.log(newsMoviesArray);
  return newsMoviesArray;
}

//

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(data) {
  if (data.length === 0) {
    return null;
  } else {
    let years = data.map((year) => year.year);
    let yearsFiltered = years.filter(
      (year, index, arr) => index === arr.indexOf(year)
    );
    let sumScore = yearsFiltered.map((el) => {
      let yearAndScore = data.filter((el2) => {
        return el2.year === el;
      });
      let sum = yearAndScore.reduce(
        (totalSum, filmScore) => (totalSum += filmScore.score),
        0
      );
      let avg = sum / yearAndScore.length;
      return {
        year: el,
        score: avg
      };
    });
    console.log(sumScore);
    let final = sumScore.sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      } else {
        if (a.score > b.score) {
          return -1;
        } else if (a.score === b.score) {
          if (a.year > b.year) {
            return 1;
          } else {
            return -1;
          }
        }
      }
    });
    return `The best year was ${final[0].year} with an average score of ${final[0].score}`;
  }
}

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
