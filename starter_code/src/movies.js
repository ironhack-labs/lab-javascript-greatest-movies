function turnHoursToMinutes(array) {
  return array.map(e => {
    return { ...e, duration: sumTime(e.duration) };
  });
}

function sumTime(string) {
  let array;
  let hours = 0;
  let minutes = 0;
  let stringOf = string + "";
  if (stringOf.indexOf("h") !== -1) {
    array = stringOf.split("h ");
    hours = parseInt(array[0]) * 60;
    if (array.length === 2) {
      minutes = parseInt(array[1].split("m")[0]);
    }
  } else if (stringOf.indexOf("m") !== -1) {
    array = stringOf.split("m");
    minutes = parseInt(array[0]);
  }
  return hours + minutes;
}

function ratesAverage(array) {
  return Math.round((array.reduce((acc, curr) => acc + parseInt(curr.rate), 0) / array.length) * 100) / 100;
}

function filterDramas(array) {
  return array.filter(e => e.genre.some(f => f === "Drama"));
}

function dramaMoviesRate(array) {
  const dramaFilms = filterDramas(array);
  return dramaFilms.length === 0
    ? undefined
    : +(dramaFilms.reduce((acc, curr) => (curr.rate ? acc + parseInt(curr.rate) : acc), 0) / dramaFilms.length).toFixed(
        2
      );
}

function orderByDuration(array) {
  if (array.length === 0) {
    return;
  }
  if (array.length === 1) {
    return array;
  }
  let minsArray = turnHoursToMinutes(array);

  return array.sort((a, b) => {
    let n = a.duration - b.duration;
    if (n !== 0) {
      return n;
    }
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
  });
  // return minsArray.sort((a, b) => {
  //   let n = a.duration - b.duration;
  //   if (n !== 0) {
  //     return n;
  //   }
  //   return a.title - b.title;
  // });
}

function howManyMovies(array) {
  if (array.length === 0) {
    return undefined;
  }
  const number = filterDramas(array).filter(e => e.director === "Steven Spielberg").length;
  return `Steven Spielberg directed ${number} drama movies!`;
}

function orderAlphabetically(array) {
  return array
    .sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    })
    .reduce((acc, curr) => acc.concat(curr.title), [])
    .slice(0, 20);
  // .sort((a, b) => {
  //   if (a < b) return -1;
  //   if (a > b) return 1;
  // })
  // );
  // return array
  //   .reduce((acc, curr) => acc.concat(curr.title), [])
  //   .slice(0, 20)
  //   .sort((a, b) => {
  //     if (a < b) return -1;
  //     if (a > b) return 1;
  //   });
}

function bestYearAvg(array) {
  if (array.length === 0) {
    return undefined;
  }
  let counter = 0;
  let year = 0;
  const sortByDate = array.sort((a, b) => parseInt(a.year) - parseInt(b.year));
  let first = parseInt(sortByDate[0].year);
  const last = parseInt(sortByDate[sortByDate.length - 1].year);
  while (first < last) {
    let filteredAge = array.filter(e => e.year === first.toString());
    let number = filteredAge.reduce((acc, curr) => acc + parseFloat(curr.rate), 0) / filteredAge.length;
    if (counter === number && year > first) {
      year = first;
    }

    if (counter < number) {
      counter = number;
      year = first;
    }
    first++;
  }
  if (array.length === 1) {
    counter = array[0].rate;
    year = array[0].year;
  }
  return `The best year was ${year} with an average rate of ${counter}`;
}
