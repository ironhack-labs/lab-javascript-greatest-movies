/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let sortedByYear = [...array].sort((a, b) => {
            if(a.year < b.year) {
              return -1
            }
            else if(a.year > b.year) {
              return 1
            }
            else if(a.year === b.year) {
        
                    if(a.title < b.title) {
                        return -1
                      }
                      if(a.title > b.title) {
                        return 1
                }
            }
          });
    
          // console.log(sortedByYear);
    return sortedByYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
 function howManyMovies(array) {
    
    let filteredByDirector = array.filter(movie => {return movie.director === "Steven Spielberg"}).filter(movie => {return movie.genre.includes("Drama");});

    return filteredByDirector.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let newArray = [...array].sort((a, b) => {
        if(a.title < b.title) {
            return -1
        }
        if(a.title > b.title){
            return 1
        }
    })

    let titles = newArray.map((movie) => {return movie.title})
    //console.log(titles.slice(0,20));
    return titles.slice(0, 20)
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    if (array.length === 0) {
        return 0;
    } else {
        let total = array.reduce((accumulator, current) => {
            if(current.rate) {
                return accumulator + current.rate
            } else {
                return accumulator
            }
        }, 0);
        let average = total / array.length;
        return Math.round(average * 100) / 100;
        // return Number (average.toFixed(2));
        // return parseFloat(average.toFixed(2));
    }
}

console.log(ratesAverage(movie))
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    // const dramaMovies = array.filter(movie => {
    //     return movie.genre.includes('Drama');
    // });

    let dramaMovies = [];
    array.map(movie => {
        if (movie.genre.includes('Drama')) {
            dramaMovies.push(movie);
        }
    });

    return ratesAverage(dramaMovies);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    //====================CORRECTION===================
    return array.map(movie => {
      const durationAsString = movie.duration;
      let duration = 0;
      for (let value of durationAsString.split(" ")) {
        const number = parseInt(value);
        if (value.includes("h")) {
          duration += number * 60;
        } else if (value.includes("min")) {
          duration += number;
        }
      }
      return {
        ...movie,
        duration
      };
    });
  }
// BONUS Iteration: Best yearly rate average - Best yearly rate average

  function bestYearAvg(array) {
    if (!array.length){
       return null;
    }
    let bestAverageMovie = {}
    let averageRate = 0;
    array.forEach(movie => {  //The forEach loop let us go movie by movie and compare they're values 
  
        let counter = 0;
        rateOfTheYear = array.reduce((totalRateOfTheYear, yearOfTheMovie) => {
        if(movie.year === yearOfTheMovie.year) {
          totalRateOfTheYear += yearOfTheMovie.rate;  //sums all the movie ratings of the same year
          counter++;  //counts the number os sums per year
        } 
        return totalRateOfTheYear   //returns the sum
      }, 0);
  
        averageRateOfTheYear = rateOfTheYear / counter;   //Calculates the average rating of the year
  
        if (averageRate === averageRateOfTheYear) {   //set of conditions to break the tie of the ratings between years
          if (bestAverageMovie.year > movie.year) {
          bestAverageMovie = movie;
          averageRate = averageRateOfTheYear;
          }} else if (averageRate < averageRateOfTheYear) {
          bestAverageMovie = movie;
          averageRate = averageRateOfTheYear;
          }
        })

     return `The best year was ${bestAverageMovie.year} with an average rate of ${averageRate}`
     // The best year was <YEAR> with an average rate of <RATE>
   }