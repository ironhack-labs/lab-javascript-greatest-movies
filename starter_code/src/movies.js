// import { movies } from "./data.js";
/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

/* let ratesAverage = array => {
  let sum_rates = 0;
  let number_movies = movies.length;
  array.forEach(movie => {
    sum_rates += Number(movie.rate);
  });
  return round(sum_rates / number_movies, 2);
};
 */
// with reduce on objects

let ratesAverage = array => {
  let number_movies = array.length;
  let sum_rates = array.reduce((totalscore, movie) => {
    return totalscore + Number(movie.rate);
  }, 0);
  return round(sum_rates / number_movies, 2);
};

// Iteration 2: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = array => {
  let dramaMovies = array.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (dramaMovies.length == 0) {
    return 0;
  }
  let sum_rates = dramaMovies.reduce((totalscore, movie) => {
    return totalscore + Number(movie.rate);
  }, 0);
  return Number(round(sum_rates / dramaMovies.length, 2));
};

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

/* function compare(a,b) {
  const durationA = a.duration
  const durationB = b.duration

  let comparison = 0;
  if(genreA){}
} */

let orderByDuration = array => {
  return array.sort((a, b) => (a.duration > b.duration ? 1 : -1));
};

/* let orderByDuration = array => {
  const minpat = // here a regex to extract the minutes 
  let durationList = array.map(movie => {
    return number(movie.duration[0])*60 +
  })
} */

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
let howManyMovies = array => {
  let dramaMovies = array.filter(movie => {
    return (
      movie.genre.indexOf("Drama") !== -1 &&
      movie.director == "Steven Spielberg"
    );
  });
  let stevenDrama = dramaMovies.reduce((moviesDirected, movie) => {
    return moviesDirected + 1;
  }, 0);
  return stevenDrama;
};

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = array => {
  let title_ordered = array.sort((a, b) => (a.title > b.title ? 1 : -1));
  let title_only = title_ordered.map(movie => {
    return movie.title;
  });
  return title_only.slice(0, 20);
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// function to change duration from string format in hours and min to string of min
let converter = durationString => {
  const regex_hours = /\d\d?h/;
  const regex_minutes = /\d\d?min/;
  let duration_list = durationString.split(" ");
  console.log("=======>>>>>>", duration_list);
  let total_minutes;
  if (regex_hours.test(durationString) && regex_minutes.test(durationString)) {
    let hours = duration_list[0].replace("h", "");
    let minutes = duration_list[1].replace("min", "");
    minutes = Number(minutes);
    hours = Number(hours) * 60;
    total_minutes = minutes + hours;
  } else if (regex_hours.test(durationString)) {
    let hours = duration_list[0].replace("h", "");
    hours = Number(hours) * 60;
    total_minutes = hours;
  } else if (regex_minutes.test(durationString)) {
    let minutes = duration_list[0].replace("min", "");
    minutes = Number(minutes);
    total_minutes = minutes;
  }
  return total_minutes;
};

converter("1h 30min");

let turnHoursToMinutes = array => {
  let new_array = array.map(movie => {
    return { ...movie };
  });

  new_array.forEach(movie => {
    movie.duration = converter(movie.duration);
  });

  new_array.sort((a, b) => {
    Number(a.duration) > Number(b.duration) ? 1 : -1;
  });

  return new_array;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average

/* let bestYearAvg = array => {
  if (array.length == 0) {
    return null;
  }
  let object_with_rating_per_year = {};
  let bestYear;
  let score;
  array.forEach(movie => {
    let year_of_movie = movie.year;
    if (
      Object.keys(object_with_rating_per_year).indexOf(year_of_movie) !== -1
    ) {
      object_with_rating_per_year.year_of_movie = [movie.rating, 1];
    } else {
      object_with_rating_per_year.year_of_movie[0] += movie.rating;
      object_with_rating_per_year.year_of_movie[1] += 1;
    }
  });
  let list_year_ratingtot_movtot = Object.entries(object_with_rating_per_year);
  let list_year_and_avg = list_year_ratingtot_movtot.map(year => {
    return [year[0], year[1][0] / year[1][1]];
  });
  list_year_and_avg.forEach(year => {
    if (year[1] > score) {
      score = year[1];
      bestYear = year[0];
    }
  });
  return bestYear;
}; */

let create_array_per_year = (array, year) => {
  console.log(array + year);
  let movies_of_year = array.filter(movie => {
    return movie.year == year;
  });
  console.log(movies_of_year);
  return movies_of_year;
};

let bestYearAvg = array => {
  if (array.length == 0) {
    return null;
  }
  console.log(array);
  const years = [...new Set(array.map(movie => movie.year))];
  let bestYear = "";
  let score = 0;
  years.forEach(year => {
    let array_of_year = create_array_per_year(array, year);
    console.log(array_of_year);
    if (ratesAverage(array_of_year) == score) {
      if (Number(year) < Number(bestYear)) {
        score = ratesAverage(array_of_year);
        bestYear = year;
      }
    } else if (ratesAverage(array_of_year) > score) {
      score = ratesAverage(array_of_year);
      bestYear = year;
    }
  });
  return `The best year was ${bestYear} with an average rate of ${score}`;
};
