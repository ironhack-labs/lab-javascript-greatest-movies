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

const orderByYear = arr => {
  let newArr = [...arr];
  newArr.sort((a,b) => {
    if (a.year - b.year === 0) {
      return a.title.localeCompare(b.title);
      console.log("entrei!");
    }
    return a.year - b.year;
  });
  return newArr;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = arr => {
  let newArr = arr.filter(movie => movie.director === "Steven Spielberg")
  .filter(movie => movie.genre.indexOf("Drama") >= 0);
  return newArr.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr => {
  let newArr = [...arr];
  newArr.sort((a,b) => a.title.localeCompare(b.title));
  let titlesArray = newArr.map(movie => movie.title);
  if (titlesArray.length > 20) {
      titlesArray.splice(20);
  }
  return titlesArray;
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr => {
  let averageRating = 0;

  if (arr.length === 0) {
    return 0;
  } else {
    averageRating = arr.reduce((rateSum, movie) => {
      console.log(movie.rate);
      if (typeof movie.rate === 'number' && movie.hasOwnProperty('rate')) {
        rateSum += movie.rate;
      }
      return rateSum;
    }, 0);
    averageRating /= arr.length;
    return Math.round(averageRating*100)/100;
  }
};

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr => {
  let filterDramas = arr.filter((movie) => movie.genre.indexOf('Drama') >= 0);

  return ratesAverage(filterDramas);
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {
  let durationAdjusted = arr.map(movie => JSON.parse(JSON.stringify(movie)));

  durationAdjusted = durationAdjusted.map((movie) => {
    let durationHours = 0;
    let durationMinutes = 0;
    let totalDuration = 0;
    
    // considering when a movie's duration is only about some minutes
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

const bestYearAvg = arr => {

  if (arr.length === 0) {
    return null;
  } else {
    let yearlyRating = [];
  
    // create an array with all the years from the movies available in the array and remove duplicated years
    let years = arr.map(movie => movie.year);
    years = years.filter((year, idx) => years.indexOf(year) === idx);
    // console.log(years);
  
    // sort the array by ascending order
    years.sort((a,b) => a - b);
    // console.log(years);
  
    let orderedArr = orderByYear(arr);
    // console.log(orderedArr);
  
    years.forEach(year => {
      let ratings = [];
  
      let avgRating = orderedArr.filter(movie => movie.year === year).reduce((rateSum, movie) => {
        if (typeof movie.rate === 'number' && movie.hasOwnProperty('rate')) {
          rateSum += movie.rate;
        }
        return rateSum;
      }, 0) / orderedArr.filter(movie => movie.year === year).length;
      // console.log(avgRating);
  
      yearlyRating.push({year: year, rating: avgRating});
    });
  
    console.log(yearlyRating);
  
    let maxRate = 0;
  
    maxRate = yearlyRating.reduce((previous, current) => previous.rating < current.rating ? current : previous.rating < current.rating
    previous);
    console.log(maxRate);
  
    return `The best year was ${maxRate.year} with an average rate of ${maxRate.rating}`;
  }
}

console.log(bestYearAvg(myMovies));

    // const bestYearAvg = arr => {
    //   let averageRate = 0;
    
    //   avgRateYear = arr.
    
    //   averageRate = ratesAverage(arr.filter(movies => movies.year === 1995));
    
    //   // return `The best year was ${} with an average rate of ${averageRate}`;
    // }