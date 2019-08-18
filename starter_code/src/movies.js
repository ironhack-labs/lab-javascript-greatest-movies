/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let sumUp = 0;
  for (let i = 0; i < movies.length; i++) {
    sumUp = sumUp + parseFloat(movies[i].rate);
  }
  let rateAvg = sumUp / movies.length;
  return parseFloat(rateAvg.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let sumUp = 0;
  let counter = 0;

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.indexOf("Drama") > -1) {
      counter += 1;
    }
    if (movies[i].genre.indexOf("Drama") > -1 && movies[i].rate) {
      sumUp = sumUp + parseFloat(movies[i].rate);
    } else {
    }
  }
  if (counter === 0) return 0;
  else {
    let rateAvg = sumUp / counter;
    return parseFloat(rateAvg.toFixed(2));
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(inputArr) {
  let orderedArr = inputArr.map(function(durations) {
    return durations;
  });

  orderedArr.sort(function(a, b) {
    if (a.duration === b.duration) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    }
    return a.duration - b.duration;
  });
  console.log(orderedArr);
  return orderedArr;
}

// if (!durations.duration.slice(0, 2).includes("h")) return 0;
//   else return parseInt(durations.duration.slice(0, 1)) * 60;

// let turnMinutes = inputArr.map(function(durations) {
//   let minutes = durations.duration.slice(-5, -3);
//   if (!minutes) return 0;
//   else {
//     minutes = minutes.replace(" ", 0);
//     return parseInt(minutes);
//   }
// });

// let finalArr = InputArr.map(function(duration) {
//   return duration;
// });

// orderByDuration([
//   { title: "abc", duration: 180 },
//   { title: "bac", duration: 90 },
//   { title: "aab", duration: 90 }
// ]);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  const stevenArr = movies.filter(
    criteria =>
      criteria.director === "Steven Spielberg" &&
      criteria.genre.includes("Drama")
  );
  return stevenArr.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const orderNew = movies.sort(function(a1, b1) {
    if (a1.title > b1.title) {
      return 1;
    } else {
      return -1;
    }
  });

  const onlyTitle = orderNew.map(function(d) {
    return d.title;
  });

  if (onlyTitle.length < 20) {
    return onlyTitle;
  } else return onlyTitle.slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(testvar) {
  let turnHours = testvar.map(function(durations) {
    if (
      !durations.duration.slice(0, 1) ||
      durations.duration.slice(0, 1) === 0 ||
      !durations.duration.slice(0, 2).includes("h")
    )
      return 0;
    else return parseInt(durations.duration.slice(0, 1)) * 60;
  });

  let turnMinutes = testvar.map(function(durations) {
    let minutes = durations.duration.slice(-5, -3);
    if (!minutes) return 0;
    else {
      minutes = minutes.replace(" ", 0);
      return parseInt(minutes);
    }
  });

  let turnHoursToMinutes = [];

  for (let i = 0; i < turnMinutes.length; i++) {
    turnHoursToMinutes.push({
      duration: parseInt(turnHours[i] + turnMinutes[i])
    });
  }

  return turnHoursToMinutes;
}

turnHoursToMinutes(movies);

// BONUS Iteration: Best yearly rate average - Best yearly rate average
