// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(obj) {
  let arr = [];
  arr = obj.map(function (ele) {
    return ele.director;
  });
  return arr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getUniqueDirectors(obj) {
  let uni = {};
  getAllDirectors(obj).forEach(function (element) {
    uni[element] = "";
  });
  return Object.keys(uni).sort();
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let dramas = [];
  dramas = arr.filter(function (ele) {
    if (ele.director === "Steven Spielberg")
      if (ele.genre.includes("Drama")) return 1;
      else return 0;
  });
  return dramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let sum;
  if (movies.length === 0) {
    return 0;
  }

  sum = movies.reduce(function (total, movie) {
    if (!movie.rate) return total;
    else return total + movie.rate;
  }, 0);

  console.log(sum);

  return Number((sum / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramas = [];
  if (movies.length === 0) return 0;
  if (movies.length === 1) return movies[0].rate;
  dramas = movies.filter(function (ele) {
    if (ele.genre.includes("Drama")) return 1;
    else return 0;
  });
  return ratesAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  sorted = movies.map((element) => element);
  sorted.sort(function (a, b) {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    else return 0;
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  titles = movies.map((element) => element.title);
  titles.sort();
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function getMinutes(str) {
  hrs = str.indexOf("h") >= 0 ? str[0] : 0;
  mins =
    str.indexOf("min") >= 0
      ? str.slice(str.indexOf(" ") + 1, str.length - 3)
      : 0;
  return Number(Number(hrs) * 60 + Number(mins));
}

function turnHoursToMinutes(movies) {
  let newFmt = [];
  let movieItem = {};
  for (let i = 0; i < movies.length; i++) {
    movieItem.title = movies[i].title;
    movieItem.year = movies[i].year;
    movieItem.director = movies[i].director;
    movieItem.duration = Number(getMinutes(movies[i].duration));
    movieItem.genre = movies[i].genre;
    movieItem.rate = movies[i].rate;
    newFmt[i] = movieItem;
  }
  return newFmt;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  // array is empty, bounce with null
  if (!movies.length) return null;

  // Create an object with unique years, containing the sum of the ratings and their count
  yearsRates = movies.map((movie) => [movie.year, movie.rate]);
  let uniqueYears = {};
  for (yearRate of yearsRates) {
    console.log(yearRate);
    if (yearRate[0] in uniqueYears) {
      uniqueYears[yearRate[0]].rate += yearRate[1];
      uniqueYears[yearRate[0]].count += 1;
    } else {
      let rateCount = { rate: yearRate[1], count: 1 };
      uniqueYears[yearRate[0]] = rateCount;
    }
  }

  // Create an a list of lists [year, average rating]
  avgRates = [];
  for (year of Object.keys(uniqueYears)) {
    avgRate = uniqueYears[year].rate / uniqueYears[year].count;
    avgRates.push([year, avgRate]);
    console.log(year, uniqueYears[year].rate, uniqueYears[year].count);
  }

  // sort it our, with highest rating at the top, in case of tie, return the oldest year
  avgRates.sort(function (a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    else {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
    }
    return 0;
  });

  // return the highest rating (oldest year at the top)
  return `The best year was ${avgRates[0][0]} with an average rate of ${avgRates[0][1]}`;
}
