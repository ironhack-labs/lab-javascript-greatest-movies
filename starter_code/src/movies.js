/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    return movies.reduce((accumulator, currentValue) => {
      return parseFloat(accumulator) + parseFloat(currentValue.rate);
    }, 0) / movies.length;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(movies) {
        const dramaMovies = movies.filter((f) => {
            return f.genre.includes ("Drama") == true;
        });
        if(!dramaMovies.length){
            return 0;
        }
        dramaMovies.forEach ((f, i) => {
            if (f.rate == "") {
                f.rate = 0;
            }
        });
        return Math.round(ratesAverage(dramaMovies)*100)/100;
    }

    // Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
    
    function compare (a,b){
        if (a.duration - b.duration < 0) {
            return -1;
    }

        else if (a.duration - b.duration > 0){
            return 1;
        }

        else if (a.duration - b.duration == 0) {
            if (a.title < b.title){
                return -1;
            }
            else if (a.title > b.title) {
                return 1;
            }
         }};

     function orderByDuration (movies){
         const durationOrderMovies = movies.sort(compare);
            return durationOrderMovies;
     };

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
    const spielbergMovies = movies.filter((f) => {
        return f.genre.includes ("Drama") && f.director.includes ("Steven Spielberg");
    });
    return spielbergMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function compareTitle (a,b) {
    if (a.title < b.title) {
        return -1;
    }
    else if (a.title > b.title){
        return 1;
    }
    else {
        return 0;
    }
}

function orderAlphabetically(movies) {
    const titleMoviesOrder = movies.sort(compareTitle);
    const theTwentyFirst = [];
    if (titleMoviesOrder.length < 20){
        titleMoviesOrder.forEach((item) => {
            theTwentyFirst.push(item.title)
        })}
    else {
        for (let i=0; i < 20; i ++) {
            theTwentyFirst[i] = titleMoviesOrder[i].title
        }
    }   
    return theTwentyFirst;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    var minuteMovies = [];
    movies.forEach(m => {
      const newObj = Object.assign({}, m);
      minuteMovies.push(newObj)
    })
    minuteMovies.forEach((item) => {
      var convertedDuration = 0;
      if (item.duration.includes("h") && item.duration.includes("min")) {
        convertedDuration = parseFloat(item.duration[0]*60) +parseFloat(item.duration[3]*10) +parseFloat(item.duration[4]);
      }
      else if (item.duration.includes("h") && !item.duration.includes("min")) {
        convertedDuration = parseFloat(item.duration[0]*60);
      }
      else if (item.duration.includes("min") && !item.duration.includes("h")) {
        convertedDuration = parseFloat(item.duration[0]*10)+parseFloat(item.duration[1])
      }
      item.duration = convertedDuration;
    })
    return minuteMovies;
   }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies){
    var year = [];
    movies.forEach (m => {
        if (years.indexOf(m) == -1) {
        years.push(m.year)
        }
    })
    return years;
}


// map
