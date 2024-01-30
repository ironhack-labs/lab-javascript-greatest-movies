// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((element) => {
    return element.director;
  });

  // If director shows up multiple times in array, splice the first instance
  directorsArray.forEach((element) => {
    if (
      directorsArray.indexOf(element) != directorsArray.lastIndexOf(element) &&
      directorsArray.lastIndexOf(element) != -1
    ) {
      directorsArray.splice(element, 1);
    }
  });

  return directorsArray;
}

function howManyMovies(moviesArray) {
  return moviesArray.reduce((accumulator, currentValue) => {
    return (
      accumulator +
      (currentValue.director.includes("Steven Spielberg") &&
      currentValue.genre.includes("Drama")
        ? 1
        : 0)
    );
  }, 0);
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length > 0) {
    average = moviesArray.reduce((accumulator, currentValue) => {
      if (currentValue.score != "" && Object.keys(currentValue).length != 0) {
        return (accumulator += currentValue.score);
      } else {
        return (accumulator = accumulator);
      }
    }, 0);
    average /= moviesArray.length;
    return parseFloat(average.toFixed(2));
  }
  return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filteredArray = moviesArray.filter((element) =>
    element.genre.includes("Drama")
  );
  return scoresAverage(filteredArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  moviesArray = moviesArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  let newArray = [];
  moviesArray.forEach((element) => {
    newArray.push(element);
  });
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  moviesArray = moviesArray.sort((a, b) => a.title.localeCompare(b.title));
  let titles = moviesArray.map((element) => {
    return element.title;
  });

  if (titles.length > 20) {
    titles = titles.slice(0, 20);
  }

  return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // Regex to capture all digits before "h" and all digits before "m"
  let regexHours = /\d+h/;
  let regexMin = /\d+m/;

  // Extract duration in hours and minutes. Parse from string to integer and convert hours to minutes
  let newArray = moviesArray.map((element) => {
    let hours = element.duration.match(regexHours);
    let minutes = element.duration.match(regexMin);
    if (minutes == null) minutes = 0;
    let newDuration = parseInt(hours) * 60 + parseInt(minutes)
    return {
      title: element.title,
      year: element.year,
      director: element.director,
      duration: newDuration,
      genre: element.genre,
      score: element.score,
    };
  });

  return newArray;
}

const testArr = [
  {
    title: "Paths of Glory",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    score: 8.4,
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "2h 45min",
    genre: ["Drama", "Western"],
    score: 8.4,
  },
  {
    title: "Django 2",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "2h",
    genre: ["Drama", "Western"],
    score: 8.4,
  },
];

console.log(turnHoursToMinutes(testArr));

/*// Iteration 7
describe('Function "turnHoursToMinutes"', () => {
  it('should be declared', () => {
    expect(typeof turnHoursToMinutes).toBe('function');
  });

  it('should return an array', () => {
    expect(turnHoursToMinutes(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not mutate the original one', () => {
    const returnValue = turnHoursToMinutes(movies);
    expect(returnValue instanceof Array).toBe(true);
    expect(turnHoursToMinutes(movies)).not.toBe(movies);    
  });

  it('should return an array of movies with duration as a number', () => {
    expect(typeof turnHoursToMinutes(movies)[0].duration).toBe('number');
  });

  it('should return an array of movies with the correct duration for a 31 minute movie', () => {
    const movieTry = [{ duration: '0h 31min' }];
    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(31);
  });

  it('should return an array of movies with the correct duration for a 341 minute movie', () => {
    const movieTry = [{ duration: '5h 41min' }];
    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(341);
  });

  it('should return an array of movies with the correct duration for a 2 hour movie', () => {
    const movieTry = [{ duration: '2h' }];
    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(120);
  });
});*/
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
