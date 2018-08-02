/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

const exampleData = [
  {
    title: "Dead Poets Society",
    year: "1989",
    director: "Peter Weir",
    duration: "5h 41min",
    genre: ["Comedy", "Drama"],
    rate: "8.0"
  },
  {
    title: "Dog Day Afternoon",
    year: "1975",
    director: "Steven Spielberg",
    duration: "5h 41min",
    genre: ["Biography", "Crime", "Thriller"],
    rate: "8.0"
  },
  {
    title: "The Godfather: Part II",
    year: "1974",
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    rate: "9.0"
  },
  {
    title: "jndqwidsn",
    year: "1993",
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    rate: "8.9"
  },
  {
    title: "Schindler's List",
    year: "1993",
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    rate: "8.9"
  }
];

function turnHoursToMinutes(arr) {}

// Get the average of all rates with 2 decimals

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average

function turnHoursToMinutes(moviesArr) {
  return moviesArr.map(movie => {
    return Object.assign({}, movie, {
      duration: convertHours(movie.duration)
    });
  });
}

function convertHours(time) {
  const splitTime = time.split(" ");
  let hours = 0,
    minutes = 0;
  splitTime.map(timeUnit => {
    if (timeUnit.includes("h")) {
      hours = Number(timeUnit.replace("h", ""));
    } else if (timeUnit.includes("m")) {
      minutes = Number(timeUnit.replace("min", ""));
    }
  });
  return hours * 60 + minutes;
}

function ratesAverage(moviesArr) {
  const totalRating = avgRating(moviesArr);
  return Math.round(totalRating * 100) / 100;
}

function avgRating(moviesArr) {
  if (!moviesArr.length) {
    return undefined;
  }
  return (
    moviesArr.reduce((acc, movie) => {
      return acc + Number(movie.rate);
    }, 0) / moviesArr.length
  );
}

function dramaMoviesRate(moviesArr) {
  const dramaMovies = moviesArr.filter(movie => movie.genre.includes("Drama"));
  const dramaRatings = avgRating(dramaMovies);

  return dramaRatings;
}

function orderByDuration(moviesArr) {
  if (moviesArr.length === 1) {
    return moviesArr;
  }
  const replacedDurationArr = turnHoursToMinutes(moviesArr);
  return replacedDurationArr.sort((a, b) => {
    if (a.duration !== b.duration) {
      return a.duration - b.duration;
    } else {
      return sortByTitle(a, b);
    }
  });
}

function howManyMovies(moviesArr) {
  if (!moviesArr.length) {
    return undefined;
  }
  let moviesCount = moviesArr.filter(
    movie =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
  return `Steven Spielberg directed ${moviesCount} drama movies!`;
}

function orderAlphabetically(movieArr) {
  const orderedArr = movieArr
    .sort((a, b) => {
      return sortByTitle(a, b);
    })
    .map(movie => movie.title);
  if (orderedArr.length > 20) {
    return orderedArr.slice(0, 20);
  }
  return orderedArr;
}

function sortByTitle(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
  if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
  return 0;
}

function bestYearAvg(moviesArr) {
  if (!moviesArr.length) {
    return undefined;
  }

  const years = new Set([]);
  let result = [];

  //find all unique years
  moviesArr.forEach(el => {
    if (!years.has(el.year)) {
      years.add(el.year);
    }
  });

  //go through movies array and sort the movies according to the year
  years.forEach(year => {
    let temp = [];
    moviesArr.forEach(movie => {
      if (movie.year === year) {
        temp.push(movie);
      }
    });
    result.push({
      year: year,
      //calculate average rating of that year
      rating: ratesAverage(temp)
    });
  });

  //sort the result array from lowest rating to highest
  result.sort((a, b) => {
    return a.rating - b.rating;
  });

  return `The best year was ${
    result[result.length - 1].year
  } with an average rate of ${result[result.length - 1].rating}`;
}

console.log(orderAlphabetically(exampleData));
