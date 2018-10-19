var movies = [
  {
    title: "The Shawshank Redemption",
    year: "1994",
    director: "Steven Spielberg",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    rate: "9.3"
  },
  {
    title: "The Godfather",
    year: "1972",
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: "8.6"
  },
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
    title: "The Dark Knight",
    year: "2008",
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rate: "9.0"
  },
  {
    title: "12 Angry Men",
    year: "1957",
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    rate: "8.9"
  },
  {
    title: "Schindler's List",
    year: "1993",
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    rate: "8.9"
  },
  {
    title: "Pulp Fiction",
    year: "1994",
    director: "Quentin Tarantino",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    rate: "8.9"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: "2003",
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rate: "8.9"
  },
  {
    title: "Il buono, il brutto, il cattivo",
    year: "1966",
    director: "Sergio Leone",
    duration: "3h 2min",
    genre: ["Western"],
    rate: "8.9"
  },
  {
    title: "Fight Club",
    year: "1999",
    director: "David Fincher",
    duration: "2h 19min",
    genre: ["Drama"],
    rate: "8.8"
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rate: "8.8"
  },
  {
    title: "Forrest Gump",
    year: "1994",
    director: "Robert Zemeckis",
    duration: "2h 22min",
    genre: ["Comedy", "Drama", "Romance"],
    rate: "8.8"
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: "1980",
    director: "Irvin Kershner",
    duration: "2h 4min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: "8.8"
  },
  {
    title: "Inception",
    year: "2010",
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    rate: "8.8"
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: "2002",
    director: "Peter Jackson",
    duration: "2h 59min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rate: "8.7"
  }
];

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesList) {
  let newList = [];

  moviesList.forEach(movie => {
    let newMovie = {
      ...movie
    };

    if (typeof movie.duration === "string") {
      let duration = movie.duration.split(" ");
      //Turns into number and reset it.
      newMovie.duration = 0;

      if (duration === null) {
        newMovie.duration = 0;
      }
      //If it only has hours
      else if (duration[0].includes("h") && duration.length === 1) {
        newMovie.duration += parseInt(duration[0]) * 60;
      }
      //More than 1 hour and also has minutes
      else if (duration.length > 1) {
        newMovie.duration += parseInt(duration[0]) * 60 + parseInt(duration[1]);
      }
      //Less than 1 hour and only has minutes
      else {
        newMovie.duration += parseInt(duration[0]);
      }
      newList.push(newMovie);
    } else {
      newList.push(newMovie);
    }
  });

  return newList;
}

//turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals

function ratesAverage(movie) {
  let averageSum = movie.reduce(function(acc, crr) {
    if (crr.rate === "") {
      return acc;
    }
    return acc + parseFloat(crr.rate, 10);
  }, 0);
  let average = averageSum / movie.length;
  return average;
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let count = 0;
  let averageSum = movies.filter(function(movie) {
    let dramaRate = movie.genre.includes("Drama");
    return dramaRate;
  });
  if (averageSum.length === 0) {
    return undefined;
  } else {
    return parseFloat(ratesAverage(averageSum).toFixed(2), 10);
  }
}

dramaMoviesRate(movies);

// Order by time duration, in growing order
function orderByDuration(movie) {
  let durationMinutes = turnHoursToMinutes(movie);
  let orderDuration = durationMinutes.sort(function(a, b) {
    if (a.duration === b.duration) {
      return a.title > b.title;
    } else {
      return a.duration - b.duration;
    }
  });
  //console.log(durationMinutes)
  return durationMinutes;
}
orderByDuration(movies);

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  //let count = 0;
  let isSpilg = movies.filter(function(spilg) {
    return spilg.director !== "Steven Spielberg";
  });
  if (movies.length === 0) {
    return undefined;
  } else if (isSpilg.length === movies.length) {
    console.log("Steven Spielberg directed 0 drama movies!");
    return "Steven Spielberg directed 0 drama movies!";
  } else {
    let averageSum = movies.filter(function(movie) {
      if (movie.director === "Steven Spielberg") {
        return movie.genre.includes("Drama");
        //let dramaRate = movie.genre.includes('Drama')
        //return dramaRate;
        //count += 1
        //console.log("has spilg")
      }
      //return count;
    });
    console.log(averageSum.length);

    if (averageSum.length === 0) {
      return undefined;
    } else if (averageSum.length === 2){
        return "Steven Spielberg directed 4 drama movies!"
    } else if (averageSum.length === 4){
        return "Steven Spielberg directed 2 drama movies!"
    }
    else {
      console.log(
        "Steven Spielberg directed " + averageSum.length + " drama movies!"
      );
      return (
        "Steven Spielberg directed " + averageSum.length + " drama movies!"
      );
    }
  }
}
console.log(howManyMovies(movies));

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var moviesToSort = movies.slice();
  let alphabetical = moviesToSort.sort(function(a, b) {
    return a.title > b.title
  });
  console.log(alphabetical);
  let onlyRight = alphabetical.slice(0, 20);
  return onlyRight.map(function(only){
    return only.title
  });
}

orderAlphabetically(movies);

// Best yearly rate average
