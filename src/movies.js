// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map(element => element.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function uniqueDirector(movies) {
    var directors = getAllDirectors(movies);
    directors = [...new Set(directors)];
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    var titleList = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return titleList.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) return 0;

    allRates = [ ...movies ]
    allRates = allRates.map(element => {
        if (element.rate === undefined) {
          element.rate = '';
        }
        return element;
      });

    var avg = allRates.reduce((a, element) => {
        a += element.rate;
        return a;
    }, 0);
    avg = avg / movies.length;
    avg = Math.round(avg * 100) / 100;

    return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    var drama = [ ...movies ];
    drama = drama.filter(movie => movie.genre.includes("Drama"));
    
    return ratesAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    var orderedMovies = [ ...movies ];
    orderedMovies.sort((a,b) => {
        if (a.year < b.year) {
            return -1;
        }
        
        if (a.title < b.title) {
            return -1;
        } else {
            return 1;
        }

        return 0;
    });
    
    return orderedMovies;
}
// https://stackoverflow.com/questions/21857647/javascript-sort-array-twice


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    var movieArray = movies.map(element => element.title);
    movieArray.sort((a,b) => a.localeCompare(b));
    if (movieArray.length > 20) movieArray.splice(19, movieArray.length - 20);
    return movieArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function duration(time) {
    // time = "xh ymin"
    var splitTime = time.toString().split(' ');
    //splitTime = ["xh", "ymin"]
    var hour = 0;
    var min = 0;

    if (splitTime.length === 2) {
      hour = Number(splitTime[0].replace('h',''));
      // hour = x
      min = Number(splitTime[1].replace('min', '')) + 60 * hour;
      // min = y + 60 * x
    } else {
      if (splitTime[0].includes('h')) {
        hour = Number(splitTime[0].replace('h',''));
        min = 60 * hour
      } else {
        min = Number(splitTime[0].replace('min', ''))
      }
    }
    return min;
}

function turnHoursToMinutes(movies) {
    var timedMovies = [ ...movies ];
    timedMovies.map(movie => {
        movie.duration = duration(movie.duration)
        return movie;
    });
    return timedMovies;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    // returns null if the array is empty
    if (movies.length === 0) {
        return null;
    }
    // create an array with all the years for which we have a movie in the movies list
    let yearList = movies.map(movies => movies.year);
    yearList = [ ...new Set(yearList)];

    // create un array of objects with a year per object
    let yearRateArray = [];
    for (let i = 0; i < yearList.length; i++) {
      let obj = {};
      obj["year"] = yearList[i];
      obj["rate"] = [];
      yearRateArray.push(obj);
    }

    // add the ratings to the array of objects
    for (let i = 0; i < yearRateArray.length; i++) {
      for (let j = 0; j < movies.length; j++) {
        if (movies[j].year === yearRateArray[i].year) {
          yearRateArray[i].rate.push(movies[j].rate);
        }
      }
    }

    // calculate the average rating per yearRateArray
    yearRateArray.map(rates => {
      rates.rate = rates.rate.reduce((a, b) => a + b) / rates.rate.length;
      rates.rate = Math.round(rates.rate * 100) / 100;
    });

    // sort yearRateArray per descending rate
    yearRateArray.sort((a, b) => b.rate - a.rate);

    // create an array with only the years with the best rate and find the oldest year
    let years = yearRateArray.filter(a => a.rate === yearRateArray[0].rate);
    years.sort((a, b) => a.year - b.year);

    return `The best year was ${years[0].year} with an average rate of ${years[0].rate}`;
}
