/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(m) {
  const arrayMovies = m.map(elm => {
    const dur = changeTime(elm.duration);

    const output = {
      title: elm.title,
      year: elm.year,
      director: elm.director,
      duration: dur,
      genre: elm.genre,
      rate: elm.rate
    };
    return output;
  });

  return arrayMovies;
}

function ratesAverage(m) {
  const value = m.reduce((acc, elm) => acc + parseFloat(elm.rate), 0);
  return value / m.length;
}

function dramaMoviesRate(m) {
  const a = m.filter(elm => {
    elm.genre.filter(elem => {
      elem == "Drama";
    });
  });
  //     if (arrayGenre(elm.genre)) {
  //       const output = {
  //         rate: elm.rate
  //       };
  //       return output;
  //     }
  //   });

  //   const value = array.reduce(
  //     (acc, elm) => acc + checkUndef(parseFloat(elm.rate)),
  //     0
  //   );
  //   return value / m.length;
  //   return array;
  return a;
}

function checkUndef(x) {
  if (x > 0) {
    return x;
  } else {
    return 0;
  }
}
function arrayGenre(m) {
  let x = 0;
  let z = false;
  while (x < m.length) {
    if (m[x] == "Drama") {
      z = true;
    }
    x++;
  }
  return z;
}
console.log(dramaMoviesRate(movies));
/////////////////////       FUNCTIONS       ///////////////////////
function changeTime(z) {
  let a = "";
  a = z;
  let y = 0;
  check = true;
  let hours = "";
  let minutes = "";

  while (y < a.length) {
    if (parseInt(a.charAt(y)) == NaN) {
      y++;
      continue;
    }
    if (a.charAt(y) == "h") {
      y++;
      check = false;
      continue;
    }
    if (check && parseInt(a.charAt(y)) != NaN) {
      hours += a.charAt(y);
    }
    if (!check && parseInt(a.charAt(y)) != NaN) {
      minutes += a.charAt(y);
    }

    y++;
  }

  if (parseInt(minutes) > 0) {
    if (parseInt(hours) > 0) {
      return parseInt(hours) * 60 + parseInt(minutes);
    } else {
      return parseInt(minutes);
    }
  }
  if (parseInt(hours) > 0) {
    return parseInt(hours) * 60;
  }
}

// x = "2h 03min";
// console.log(
//   turnHoursToMinutes(movies).map(ele => {
//     return {
//       duration: ele.duration
//     };
//   })
// );

/////////////////////////////////

/////////////////
// Get the average of all rates with 2 decimals

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
