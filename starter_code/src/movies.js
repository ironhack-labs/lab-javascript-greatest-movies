let movies = [
  {
    title: "The Shawshank Redemption",
    year: "1994",
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rate: "9.3"
  },
  {
    title: "The Godfather",
    year: "1972",
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: "9.2"
  }
];
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let newMovies = [];
  movies.forEach(movie => {
    let time = movie.duration;
    let minutesArray = time.split(" ");
    if (minutesArray.length >= 2) {
      let hours = parseInt(minutesArray[0], 10);
      let minutes = parseInt(minutesArray[1], 10);
    }
    let hours = parseInt(minutesArray[0], 10);
    let minutes = parseInt(minutesArray[1], 10);
    let timeInMinutes = hours * 60 + minutes;
    e.duration = timeInMinutes;
    newMovies.push(e);
    return timeInMinutes;
  });
  return newMovies;
}
console.log(turnHoursToMinutes(movies));

//}

//turnHoursToMinutes();

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let rates = movies.reduce(function(initialValue, current) {
    let baseArray = Object.keys(movies);
    let base = baseArray.length;
    return initialValue + parseFloat(current.rate) / base;
  }, 0);
}

ratesAverage(movies);

//function ratesAverage(movies)

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
