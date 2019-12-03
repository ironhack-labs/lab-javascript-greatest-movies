/* eslint no-restricted-globals: 'off' */
let myMovies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        director: "Frank Darabont",
        duration: "2h 22min",
        genre: [
          "Crime",
          "Drama"
        ],
        rate: 9.3
      },
      {
        title: "The Godfather",
        year: 1972,
        director: "Francis Ford Coppola",
        duration: "2h 55min",
        genre: [
          "Crime",
          "Drama"
        ],
        rate: 9.2
      },
      {
        title: "The Godfather: Part II",
        year: 1974,
        director: "Steven Spielberg",
        duration: "3h 22min",
        genre: [
          "Crime",
          "Drama"
        ],
      },
      {
        title: "The Dark Knight",
        year: 1957,
        director: "Christopher Nolan",
        duration: "2h 32min",
        genre: [
          "Action",
          "Crime",
          "Thriller"
        ],
        rate: 9
      },
      {
        title: "Angry Men",
        year: 1957,
        director: "Steven Spielberg",
        duration: "1h 36min",
        genre: [
          "Crime",
          "Drama"
        ],
        rate: 8.9
      }
]

var newMoviesArr = [
  { year: 2000, rate: 9 },
  { year: 2000, rate: 8 },
  { year: 1978, rate: 10 },
  { year: 1978, rate: 7 }
]

const orderByYear = movies => {
  let moviesCopy = [...movies];
  moviesCopy.sort((movieA, movieB) => {
    // do not forget to check if the title does exist
    if (movieA.year - movieB.year === 0 && movieA.title && movieB.title) {
      return movieA.title.localeCompare(movieB.title);
    }
    return movieA.year - movieB.year;
  });
  return moviesCopy;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = movies => {
  let dramaMovies = movies.filter(movie => movie.director === 'Steven Spielberg')
  .filter(movie => movie.genre.indexOf("Drama") >= 0);
  return dramaMovies.length;
};

// there is another way of doing with just one filter:
// movie.directior === 'Steven Spielberg' && movie.genre.includes('Drama')
// another way faster:
// movies.filter((movie) => movie.director = 'Steven Spielberg' && drama).length -> return this length

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies => {
  let orderedMovies = [...movies];
  orderedMovies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));
  let titlesArray = orderedMovies.map(movie => movie.title);
  if (titlesArray.length > 20) {
      titlesArray.splice(20);
  }
  return titlesArray;
};

// another way using slice:
// sortedMovies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));
// return sortedMovies.slice(0,20).map(el => el.title);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = movies => {
  let averageRating = 0;

  if (movies.length === 0) {
    return 0;
  } else {
    averageRating = movies.reduce((rateSum, movie) => {
      // instead of checking if it is a number and if it does exist => just check if (movie.rate);
      // retorna undefined => truthy value (is not 0, empty string, ...)
      if (typeof movie.rate === 'number' && movie.hasOwnProperty('rate')) {
        rateSum += movie.rate;
      }
      return rateSum;
    }, 0);
    averageRating /= movies.length;
    return Math.round(averageRating*100)/100;
    // you could do return parseFloat((totalRate / movies.length).toFixed(2));
    // movies.reduce((total, movie) => (movie.rate) ? total + movie.rate : total, 0);
    // or +(totalRate / movies.length).toFixed(2);
  }
};

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = movies => {
  let filterDramas = movies.filter((movie) => movie.genre.indexOf('Drama') >= 0);
  // we could also use includes instead of indexOf

  return ratesAverage(filterDramas);
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = movies => {
  let durationAdjusted = movies.map(movie => JSON.parse(JSON.stringify(movie)));
  // could be done const moviesClone = JSON.parse(JSON.stringify(movies));
  // you don't need to go through the array to do the deep clone

  // destructuring object
  // const { duration } = movie; -> as there is a property with this name
  // it will receive the value of the property
  // that way you can just call duration everytime you need to refer to it (instead of movie.duration)

  durationAdjusted = durationAdjusted.map((movie) => {
    let durationHours = 0;
    let durationMinutes = 0;
    let totalDuration = 0;
    
    // considering when a movie's duration is only about some minutes
    // should too consider using .toLowerCase()
    // should consider too the existance of minutes, not just hours...
    // Heitor's solution:
    // Getting all Indexes that we need
    // const hIndex = duration.toLowerCase().indexOf('h');
    // const minIndex = duration.toLowerCase().indexOf('min');
    // cont spaceIndex = duration.indexOf(' ');
    // time manipulation if duration has Hour and Minutes
    // if (hIndex >= 0 && minIndex >=0) {
    //  const hour = duration.slice(0, hIndex) * 60;
    // const minutes = duration.slice(spaceIndex + 1, minIndex);
    // time = hour + parseInt(minutes);
    // if duration has only Hours
    // } else if (minIndex < 0) {
    //  time = duration.slice(0, hIndex) * 60;
    // if duration has only minutes
    //} else if(hIndex < 0) {
    // time = parseInt(duration.slice(spaceIndex + 1, minIndex)); 
    //}
    // reassigning duration value inside the object
    // movie.duration = time;
    // if applied in the desconstructed object -> would not work, it had to be in movie.duration
    // return of Map Loop: returning entire object modified. Not just the duration
    // return movie;
    // });
    // return of function: returning the clone with the object modified
    // return moviesInMinutes;
    // };

    if (movie.duration.includes('h')) {
      durationHours = movie.duration.slice(0, movie.duration.indexOf('h'));
    } else {
      durationHours = 0;
    }
    
    // just to make sure that all follow the same formatting with a space between hour and minutes
    let hasSpace = movie.duration.includes(' ');

    if (hasSpace) {
      durationMinutes = movie.duration.slice(movie.duration.indexOf('h') + 2, movie.duration.indexOf('m'));
    } else {
      durationMinutes = movie.duration.slice(movie.duration.indexOf('h') + 1, movie.duration.indexOf('m'));
    }

    // calculating the total duration of the movie in minutes
    totalDuration = Number(durationHours) * 60 + Number(durationMinutes);

    // manipulating the new array to show the info the way we want them to be
    movie.duration = totalDuration;

    return movie;
  });
  return durationAdjusted;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = movies => {

  if (movies.length === 0) {
    return null;
  } else {
    let yearlyRating = [];
  
    // create an array with all the years from the movies available in the array and remove duplicated years
    let years = movies.map(movie => movie.year);
    // console.log(years);
    years = years.filter((year, idx) => years.indexOf(year) === idx);
    // console.log(years);
  
    // sort the array by ascending order
    years.sort((movieA, movieB) => movieA - movieB);
    // console.log(years);

    let orderedArr = orderByYear(movies);
    // console.log(orderedArr);
  
    years.forEach(year => {
      let ratings = [];
      let numberOfMoviesBYYear = orderedArr.filter(movie => movie.year === year).length;
  
      let avgRating = orderedArr.filter(movie => movie.year === year).reduce((rateSum, movie) => {
        if (typeof movie.rate === 'number' && movie.hasOwnProperty('rate')) {
          rateSum += movie.rate;
        }
        return rateSum;
      }, 0) / numberOfMoviesBYYear;
      // console.log(avgRating);
  
      yearlyRating.push({year: year, rating: avgRating});
    });
  
    // console.log(yearlyRating);
  
    let maxRate = 0;
  
    maxRate = yearlyRating.reduce((previous, current) => previous.rating < current.rating ? current : previous);
    console.log(maxRate);
  
    return `The best year was ${maxRate.year} with an average rate of ${maxRate.rating}`;
  }
}

console.log(bestYearAvg(newMoviesArr));
// console.log(bestYearAvg(myMovies));


//heitor's solution:
// const bestYearAvg = (movies) => {
// if(movies.length === 0) {
  // return null;
  // const sortedMovies = [...movies];
  // const byTheYear = {};
  // sortedMovies.forEach((movie) => {
  //   const { year } = movie;
  //   if(year in byTheYear) {
  //     byTheYear[year].push(movie);
  //   } else {
  //     byTheYear[year] = [movie];
  //   }
  // });
//   let maxAvg = 0;
//   let year = 0;
//   for (key in byTheYear) {
//     let average = ratesAverage(byTheYear[key]);
//     if (maxAvg < average) {
//       maxAvg = average;
//       year = key;
//     }
//   }
// return `text...`
// }






// um dos testes da jasmine mandava sem titulo para odernar

// ajustar nomes utilizados
// chegar no tie