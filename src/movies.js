// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (arr) => {
    let directors = arr.map((el) => {
        return el.director;
    });
    return directors;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
let getUniqueDirectors = (arr) => {
    let directors = arr.map((el) => {
        return el.director;
    });
    //Delete duplicates
    let cleanDirectors = [];
    directors.forEach((el) => {
        if (!cleanDirectors.includes(el)) {
            cleanDirectors.push(el);
        }
    });
    return cleanDirectors;
};
//If we want to do it without the function, with the data returned by getAllDirectors():
let directors = [];
getAllDirectors(movies).forEach((director) => {
    if (!directors.includes(director)){
        directors.push(director);
    }
});

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (arr) => {
    return arr.filter((el) => el.director === "Steven Spielberg" && el.genre.includes("Drama")).length;};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (arr) => {
    let average = arr.reduce((acc, movie) => {
      if (movie.rate === "" || !movie.rate) {
        acc += 0;
      } else {
        acc += movie.rate / arr.length;
      }
      return acc;
    }, 0);
    return parseFloat(average.toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
let dramaMoviesRate = (arr) => {
    let dramaMovies = arr.filter((el) => el.genre.includes("Drama"));
    return ratesAverage(dramaMovies);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = (arr) => {
    let sortedMovies = arr.slice(0);
    sortedMovies.sort((movie1, movie2) => {
      if (movie1.year === movie2.year) {
        if (movie1.title < movie2.title) {
          return -1;
        } else if (movie1.title > movie2.title) {
          return 1;
        } else {
          return 0;
        }
      } else if (movie1.year < movie2.year) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedMovies;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (arr) => {
    let alphabeticalMovies = arr.slice(0);
    alphabeticalMovies.sort((movie1, movie2) => {
      if (movie1.title < movie2.title) {
        return -1;
      } else if (movie1.title > movie2.title) {
        return 1;
      } else {
        return 0;
      }
    });
    return alphabeticalMovies.map((el) => el.title).slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let turnHoursToMinutes = (arr) => {
    let modifiedMovies = [];
    modifiedMovies = arr.map((movie) => {
        let newMovieObject = {};
        let time = movie.duration.split(" ");
        newMovieObject = { ...movie };
        if (time.length === 1 && movie.duration.includes('h')) {
            newMovieObject.duration = parseInt(time[0].split("h")) * 60;
        } else if (time.length === 1 && movie.duration.includes('min')) {
            newMovieObject.duration = parseInt(time[0].split("min"));
        } else {
            newMovieObject.duration = parseInt(time[0].split("h")) * 60 + parseInt(time[1].split("min"));
        }
        return newMovieObject;
    });
    return modifiedMovies;
};