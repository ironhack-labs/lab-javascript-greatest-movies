/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(arr) {
    
    const moviesOrdered = [...arr].sort((a, b) => {
        if (a.year > b.year) {
         return 1;
        } else if (a.year < b.year) {
          
          return -1;
        }
    else if (a.year == b.year && a.title > b.title) {
        return 1;
      } 
      else if (a.year == b.year && a.title < b.title) {
          return -1;
        } 
    });
return moviesOrdered;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    let spielbergMovies = [...arr].filter(movie => movie.director === "Steven Spielberg");
    let spilbergDramaMovies = spielbergMovies.filter(movie => movie.genre.includes("Drama"));
    return spilbergDramaMovies.length;
  }
  

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    return arr
    // let orderTop20 = [...arr].sort((a, b) => {
    //     if (a.title > b.title) {
    //       return 1;
    //     } else if (a.title < b.title) {
    //       return -1;
    //     }
    //   })
      .map(movies => movies.title)
      .sort()
      .slice(0, 20);
    return orderTop20;
  }


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = (newArr) => {
    let result = 0;
    if (newArr.length) {
        result = newArr.reduce((accumulator, value) =>  {
            if (value.rate) {
                return accumulator + value.rate;
            }
            else {
                return accumulator;
            }
        }, 0)
    }
    else {
        return 0;
    }
    let final = parseFloat((result / newArr.length).toFixed(2));
    console.log(final);
    return final;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaMovies = [...arr].filter(movie => movie.genre.includes("Drama"));

    let result = 0;
    if (dramaMovies.length) {
        result = dramaMovies.reduce((accumulator, value) =>  {
            if (value.rate) {
                return accumulator + value.rate;
            }
            else {
                return accumulator;
            }
        }, 0)
    }
    else {
        return 0;
    }
    let final = parseFloat((result / dramaMovies.length).toFixed(2));
    //console.log(final);
    return final;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    return movies.map(movie => {const duration = movie.duration.split(" ");
    //console.log(movie.duration);
        let mins = 0;
        for (let time of duration) {
          if (time.includes("h")) {
            mins += parseFloat(time) * 60;
          } else {
            mins += parseFloat(time);
          }
        }
        return {duration: mins};
      });
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate avg

function bestYearAvg() {
    return movies.map(movie => {const releaseYear = movie.year});
        console.log(releaseYear);

}