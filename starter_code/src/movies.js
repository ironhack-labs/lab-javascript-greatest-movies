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
    let time = array.map(movie => movie.duration);

    let minutes =[];
    
    for(let i = 0; i < time.length; i++) {
        if (time[i].indexOf("min") === false) {
            minutes.push(parseInt(time[i]) * 60);
        } else {
            minutes.push(parseInt(time[i].split(" ")[0]) * 60 + parseInt(time[i].split(" ")[1]));
        }
        

        console.log('duration:', minutes[i], 'minutes');
    }

    
    return minutes
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
