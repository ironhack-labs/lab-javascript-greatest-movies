// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let orderedYear = movies.slice().sort((a, b) => {
    if (a.year < b.year) return -1;
    else if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  //   console.log(orderedYear);
  return orderedYear;
}

//option 1
// function orderByYear(movies) {
//   let orderedYear = movies.slice().sort((a, b) => a.year - b.year);
//   return orderedYear;
// }

// option 2
// function orderByYear(arr) {
//   let orderedYear = arr.slice().sort(function(a, b) {
//     if (a.year < b.year) {
//       return 1;
//     } else if (a.year === b.year) {
//       return b.name.localeCompare(a.name);
//     }
//   });
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  const filmStevenDrama = movies.filter(function(movies) {
    return (
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    );
  });

  return filmStevenDrama.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let orderedYear = movies.slice().sort(function(a, b) {
    if (a.title.localeCompare(b.title) > 0) {
      return 1;
    } else {
      return -1;
    }
  });

  return orderedYear.slice(0, 20).map(elemen => {
    return elemen.title;
  });
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// function ratesAverage(movies) {
//   let averadRates = movies.reduce((acc, cur) => acc + cur.rate, 0);
//   console.log(movies);
//   console.log(averadRates);
//   console.log(Math.round((averadRates / movies.length) * 100) / 100);
//   return Math.round((averadRates / movies.length) * 100) / 100 || 0;
// }

function ratesAverage(movies) {
  let averadRates = movies.reduce(function(acc, cur) {
    if (cur.rate) return acc + cur.rate;
    else return acc + "";
  }, 0);

  //   console.log(movies);
  //   console.log(averadRates);
  //   console.log(Math.round((averadRates / movies.length) * 100) / 100 || 0);
  return Math.round((averadRates / movies.length) * 100) / 100 || 0;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  //   console.log(movies);
  const filmDrama = movies.filter(function(movies) {
    // console.log(movies);

    return movies.genre.includes("Drama");
  });
  let averadRates = filmDrama.reduce(function(acc, cur) {
    if (cur.rate) return acc + cur.rate;
    else return acc + "";
  }, 0);
  //   console.log(movies);
  //   console.log(filmDrama);
  //   console.log(averadRates);
  //   console.log(Math.round((averadRates / filmDrama.length) * 100) / 100 || 0);
  return Math.round((averadRates / filmDrama.length) * 100) / 100 || 0;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// THIS IS NOT WORKING IN JASMIN; BUT CONSOLING IT MAKES IT GOOD I WOULD REALLY FIND THE PROBLEM ON IT
function turnHoursToMinutes(array) {
  console.log(array);
  let newArr = JSON.parse(JSON.stringify(array));
  newArr = newArr.map(function(time) {
    console.log("medium");
    if (time.duration.includes("min")) {
      console.log("markis");
      time.duration = eval(
        time.duration.replace("h", "*60 +" || 0).replace("min", "")
      );
    } else {
      time.duration = eval(time.duration.replace("h", "*60"));
    }
    // console.log(movies);
    console.log("after");
    console.log(newArr);
    return time;
  });
  return newArr;
}
// agustina solution
// function turnHoursToMinutes(array) {
//   return array.map(movie => {
//     const originalDuration = movie.duration;
//     let duration = 0;
//     for (let value of originalDuration.split(" ")) {
//       const hour = parseInt(value);
//       if (value.includes("h")) {
//         duration += hour * 60;
//       } else if (value.includes("min")) {
//         duration += hour;
//       }
//     }
//     return {
//       ...movie,
//       duration
//     };
//   });
// }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
