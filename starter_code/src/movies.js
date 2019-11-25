/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    return movies.slice().sort(
        function(firstPos, secondPos) {
            if (firstPos.year < secondPos.year) {
                return -1;
            } else if (firstPos.year > secondPos.year) {
                return 1;
            } else {
                if (firstPos.title > secondPos.title) {
                    return 1;
                } else {
                    return -1;
                }
            }
            //return firstPos.year - secondPos.year;
        },
        0
    )
}

console.log(sorted);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    return movies.slice().filter(
        function(name) {
            if (name.director === "Steven Spielberg")
                if (name.genre.indexOf("Drama") >= 0)
                    return 1;
        }
    ).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const movieArr = movies.slice().sort(
        function(firstPos, secondPos) {
            if (firstPos.title < secondPos.title) {
                return -1;
            } else if (firstPos.title > secondPos.title) {
                return 1;

            }

        }, 0)

    let finalMovieArr = [];
    for (let i = 0; i < 20 && i < movieArr.length; i++) {
        finalMovieArr.push(movieArr[i].title);
    };
    return finalMovieArr;
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    const sum = movies.reduce(
        function(accumulator, currVal) {
            if (currVal.rate) return accumulator += currVal.rate;
            else return accumulator += 0;
        }, 0
    );
    if (movies.length > 0) return Math.round(sum / movies.length * 100) / 100;
    else return 0;
}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    let dramaArr = movies.slice().filter(function(name) {
        if (name.genre.indexOf("Drama") >= 0)
            return 1;
    })
    return ratesAverage(dramaArr);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let minutesArr = movies.slice().map(function(hourMin) {
        let mins = parseInt(hourMin.duration.split(" ")[1], 10);
        let hours = (parseInt(hourMin.duration, 10) * 60);
    }, 0)
    return (hours + mins);
}

/*let stringMins = movies[i].duration.split(" ");
  let mins = parseInt(stringMins[1], 10);
  let hours = parseInt(movies[i].duration, 10);
  return(transformToMinutes+mins);*/
// BONUS Iteration: Best yearly rate average - Best yearly rate average