// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director)
}

//Bonus 1.1
function getUniqueValues(moviesArrays) {
  let directors = getAllDirectors(moviesArrays);
  let uniqueDirectors = [];
  for (let person of directors) {
    if (!uniqueDirectors.includes(person)) {
      uniqueDirectors.push(person);
    }
  }
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) return 0;
  let moviesSteven = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  return moviesSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  let average = 0;
  let sum = moviesArray.reduce(function (result, item) {
    return result + (item.score || 0);
  }, 0);
  average = (sum / moviesArray.length).toFixed(2);
  return Number(average)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter(movie => movie.score && movie.genre.includes("Drama"));
  let average = 0;
  let sum = dramaMovies.reduce(function (result, item) {
    return result + item.score;
  }, 0);
  average = (sum / dramaMovies.length).toFixed(2);
  if (!dramaMovies.length) return 0;
  return Number(average)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArr = [...moviesArray];
  return yearSort = newArr.sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    } else {
      return a.year - b.year
    }
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let arr = [];
  arr = moviesArray.map(movie => movie.title)
  let titleSort = arr.sort();
  return titleSort.slice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const converter = (time) => {
    let timeArr = time.split(' ');
    if (timeArr.length === 1) {
      let timeOption = timeArr[0];
      if (timeOption.includes('h')) {
        return Number(timeOption.slice(0, timeOption.indexOf('h')) * 60);
      } else {
        return Number(timeOption.slice(0, timeOption.indexOf('m')));
      }
    } else {
      const [hour, min] = timeArr;
      let hourNum = Number(hour.slice(0, hour.indexOf('h'))) * 60;
      let minNum = Number(min.slice(0, min.indexOf('m')));
      return hourNum + minNum;
    }
  }

  return moviesArray.map((item) => {
    return { ...item, duration: converter(item.duration) };
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null

  const reduced = moviesArray.reduce(function (m, d) {
    if (!m[d.year]) {
      m[d.year] = { ...d, count: 1 };
      return m;
    }
    m[d.year].score += d.score;
    m[d.year].count += 1;
    return m;
  }, {});

  // Create new array from grouped data and compute the average
  const result = Object.keys(reduced).map(function (k) {
    const item = reduced[k];
    return {
      year: item.year,
      score: item.score / item.count,
    }
  })

  const final = result.reduce((acc, curr) => {
    if (acc.score === curr.score) {
      return acc.year < curr.year ? acc : curr
    }
    return acc.score > curr.score ? acc : curr
  })
  return `The best year was ${final.year} with an average score of ${final.score}`
}

console.log(bestYearAvg(movies))
