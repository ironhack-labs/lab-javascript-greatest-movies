/* eslint no-restricted-globals: 'off' */

/****************************************************************
         Turn duration of the movies from hours to minutes
*****************************************************************/

// function turnHoursToMinutes(movies) {
//   var minDuration = [];
//   var newArray = turnHoursToMinutes().set(movies.duration, minDuration);
//   movies.forEach(function(time) {
//     var duration = time.duration;
//     var nohours = duration.split("h ");
//     var hoursToMinutes = nohours[0] * 60;

//     let minutes = 0;

//     console.log(nohours);
//     console.log(nohours[1][1]);

//     for (var i = 0; i < nohours[1].length; i++) {
//       if (nohours[1][1] == "m") {
//         minutes = parseInt(nohours[1][0]);
//       } else {
//         minutes = parseInt(nohours[1][1] + nohours[1][2]);
//       }
//     }
//     minDuration = hoursToMinutes + minutes + "min";
//     console.log(minDuration);
//     return newArray;
//     // return movies.map(movies.duration => minDuration)
//   });

//   console.log(newArray)

// }

function turnHoursToMinutes(movies) {
  var minutesArray = movies.map(eachMovie => {
    var movie = eachMovie.duration.split(" ");
    let totalMinutes = 0;
    movie.forEach(m => {
      console.log(m);
      if (m.includes("h")) {
        totalMinutes += Number(m.replace("h", "")) * 60;
      }
      if (m.includes("min")) {
        totalMinutes += Number(m.replace("min", ""));
      }
    });
    console.log(totalMinutes);

    return { ...eachMovie, duration: totalMinutes };
  });
  return minutesArray;
}

turnHoursToMinutes(movies);

/****************************************************************
         Get the average of all rates with 2 decimals
*****************************************************************/

function ratesAverage(movies) {
  var totalRate = 0;
  for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
    totalRate += movies[i].rate;
  }
  console.log(totalRate);
  return parseFloat((totalRate / movies.length).toFixed(2));
}

ratesAverage(movies);

/****************************************************************
            Get the average of Drama Movies 
*****************************************************************/

// function dramaMoviesRate(movies){

//   var onlyDrama=[];
//   for (var i = 0; i < movies.length; i++) {
//     if(movies[i].genre.includes("Drama")) {
//       onlyDrama.push(movies[i])
//     }
//   }

//    if(onlyDrama.length === 0) {

//    return undefined
//    }

//   var totalRate= 0;
//   for (var j = 0; j < onlyDrama.length; j++) {
//       totalRate += onlyDrama[j].rate;

//   }
//   return parseFloat(totalRate/onlyDrama.length).toFixed(2);
// }

// console.log(dramaMoviesRate(movies))

function dramaMoviesRate(movies) {
  var onlyDrama = [];
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].genre.includes("Drama")) {
      onlyDrama.push(movies[i]);
    }
  }

  if (onlyDrama.length === 0) {
    return undefined;
  }
  return ratesAverage(onlyDrama);
}

dramaMoviesRate(movies);

/****************************************************************
            Order by time duration, in growing order 
*****************************************************************/

function orderByDuration(movies) {
  movies.sort((a, b) => {
    if (a.duration < b.duration) {
      return -1;
    } //keep in mind that when its a return if its true it stops if not it keeps going
    if (a.duration > b.duration) {
      return 1;
    }

    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });
  return movies;
}
console.log(orderByDuration(turnHoursToMinutes(movies)));

/****************************************************************
              How many movies did STEVEN SPIELBERG
*****************************************************************/

function howManyMovies(movies) {
  if (movies.length === 0) {
    return undefined;
  }

  var onlyDrama = [];
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].genre.includes("Drama")) {
      onlyDrama.push(movies[i]);
    }
  }

  var howmany = [];

  for (var i = 0; i < onlyDrama.length; i++) {
    if (onlyDrama[i].director === "Steven Spielberg") {
      howmany.push(onlyDrama[i]);
    }
  }

  return "Steven Spielberg directed " + howmany.length + " drama movies!";
}

console.log(howManyMovies(movies));

/****************************************************************
             Order by title and print the first 20 titles
*****************************************************************/

function orderAlphabetically(movies) {
  var correctOrder = movies.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } //keep in mind that when its a return if its true it stops if not it keeps going
    if (a.title > b.title) {
      return 1;
    }
  });

  var titleOrder;

  if (correctOrder.length < 20) {
    titleOrder = correctOrder;
  } else if (correctOrder.length > 20) {
    titleOrder = correctOrder.splice(0, 20);
  }

  var titles = [];
  for (var i = 0; i < titleOrder.length; i++) {
    titles.push(titleOrder[i].title);
  }

  return titles;
}

console.log(orderAlphabetically(movies));

/****************************************************************
                 Best yearly rate average
*****************************************************************/

function bestYearAvg(movies) {
  if (movies.length === 0) {
    return undefined;
  }

  var ratesPerYear = {};

  for (var i in movies) {
    var movie = movies[i];

    if (movie.rate === "") {
      movie.rate = 0;
    }

    var rate = parseFloat(movie.rate);

    if (!ratesPerYear[movie.year]) {
      ratesPerYear[movie.year] = [rate];
    } else {
      ratesPerYear[movie.year].push(rate);
    }
  }

  function getAverageRate(rates) {
    var total = 0;

    for (var i = 0; i < rates.length; i++) {
      total += rates[i];
    }

    return total / rates.length;
  }

  var pairs = [];

  for (var key in ratesPerYear) {
    var rates = ratesPerYear[key];

    pairs.push([key, getAverageRate(rates)]);
  }

  var sortedPairs = pairs.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
  });

  var [year, rate] = sortedPairs[0];

  return `The best year was ${year} with an average rate of ${rate}`;
}
