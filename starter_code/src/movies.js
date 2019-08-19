/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(ary) {
  let newAry = ary.map(function(mov) {
    return Number(mov.rate);
  });

  let sumrates = newAry.reduce(function(Sumrates, varRate) {
    return Sumrates + varRate;
  }, 0);
  return sumrates / newAry.length;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(ary) {
  if (!ary.length) return 0;
  let cnt = 0;
  let dramaSumRate = ary.reduce(function(Acc, value) {
    if (value.genre.indexOf("Drama") !== -1) {
      cnt++;
      return Acc + Number(value.rate);
    } else return Acc;
  }, 0);

  if (dramaSumRate === 0) return 0;
  return Number((dramaSumRate / cnt).toFixed(2));
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(ary) {
  if (!ary.length) return 0;
  let sortMovies = ary.slice().sort(function(a, b) {
    if (a.duration <= b.duration) return -1;
  });

  return sortMovies;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(ary) {
  if (!ary.length) return 0;
  let spielbergMovies = ary.filter(function(mov) {
    return (
      mov.director === "Steven Spielberg" && mov.genre.indexOf("Drama") !== -1
    );
  });

  return spielbergMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(ary) {
  if (!ary.length) return 0;
  let orderTitle = ary.map(function(mov) {
    return mov.title;
  });
  let orderAlpha = orderTitle.slice().sort(function(a, b) {
    if (a <= b) return -1;
  });

  let orderAlpha20 = orderAlpha.filter(function(tit, idx) {
    return idx < 20;
  });

  return orderAlpha20;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(ary) {
  if (!ary.length) return 0;
  let tempAry = ary.slice();
  let hrToMin = tempAry.map(function(mov) {
    let timeMin = 0;
    if (mov.duration.indexOf(" ") !== -1)
      timeMin =
        parseInt(mov.duration) * 60 +
        parseInt(mov.duration.slice(mov.duration.indexOf(" ") + 1));
    else if (mov.duration.indexOf("h") !== -1)
      timeMin = parseInt(mov.duration) * 60;
    else if (mov.duration.indexOf("m") !== -1) timeMin = parseInt(mov.duration);

    mov.duration = timeMin;
    return mov;
  });

  return hrToMin;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(ary) {
  if (!ary.length) return 0;
  let sortAry = ary.sort(function(a, b) {
    return Number(a.year) - Number(b.year);
  });
}
