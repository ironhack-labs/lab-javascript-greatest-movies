/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = function orderByYear(movieArr) {

    return movieArr.map(movie => movie).sort((a, b) => {

        if (a.year === b.year) {

            if (a.title < b.title) {

                return -1

            } else if (a.title > b.title) {

                return 1

            } else {

                return 0;

            }

        }

        return a.year - b.year;

    })

}

console.log(`Iteration 1 | The order by year is: ${JSON.stringify(orderByYear(movies))}`);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movArr) {

    return movArr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;


}


console.log(`Iteration 2 | Steven Spielberg made ${howManyMovies(movies)} drama movies`);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderTitlesAlphabetically(a, b) {

    if (a.title < b.title) {

        return -1

    } else if (a.title > b.title) {

        return 1

    } else {

        return 0;

    }


}

const orderAlphabetically = function orderAlphabetically(movieArr) {

    return movieArr.map(movie => movie).sort(orderTitlesAlphabetically)
        .filter((element, index) => index < 20 ? element.title : null)
        .map(element => element.title)

}

console.log(`Iteration 3 | These are the first 20 movies ordered alphabetically: ${orderAlphabetically(movies)}`);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals


function calculateAverageRating(sumAverage, currentvalue, index, arr) {

    if (currentvalue.rate === undefined || currentvalue.rate === null) {

        return sumAverage;

    }

    return sumAverage + currentvalue.rate / arr.length;

}

const ratesAverage = function ratesAverage(movieArr) {


    let averageNumber;
    averageNumber = movieArr.reduce(calculateAverageRating, 0)
    return Number(averageNumber.toFixed(2));

}

console.log(`Iteration 4 | The average rating of all movies is: ${ratesAverage(movies)}`);


// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = function dramaMoviesRate(movieArr) {

    let averageNumber;
    averageNumber = movieArr.filter(element => element.genre.includes('Drama') ? element : null)
        .reduce(calculateAverageRating, 0).toFixed(2);
    return Number(averageNumber);


}

console.log(`Iteration 5: | The average rating of all drama movies is: ${dramaMoviesRate(movies)}`);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


const turnHoursToMinutes = function turnHoursToMinutes(movieArr) {

    movieArrCopy = JSON.parse(JSON.stringify(movieArr));

    return movieArrCopy.map(element => {
        let hours;
        let minutes;
        let duration = element.duration

        hours = Number(duration.slice(0, duration.indexOf("h")) * 60);
        minutes = Number(duration.slice(duration.indexOf(" ") + 1, duration.indexOf('min')));
        if (duration.indexOf('min') === -1) {
            duration = hours;
            element.duration = duration;
            return element;
        } else if (duration.indexOf('h') === -1) {
            duration = minutes;
            element.duration = duration;
            return element;
        }

        duration = hours + minutes;
        element.duration = duration;
        return element;

    })


}

console.log(`Iteration 6 | New movie list with hours turned to minutes ${JSON.stringify(turnHoursToMinutes(movies))}`);


// BONUS Iteration: Best yearly rate average - Best yearly rate average

// Check if the year already exist in the array

function checkYear(value, yearArr) {

    return yearArr.some(element => {

        return element.year === value.year

    })
}

// Create an new array and deduplicate the years

function createUniqueArr(movArr) {

    const uniqueArr = [];

    movArr.map(element => {

        if (!checkYear(element, uniqueArr)) {

            uniqueArr.push({
                year: element.year
            });

        }
    })

    return uniqueArr;

}

function sortTheArray(avRatingArr) {

    return avRatingArr.sort((a, b) => {

        if (a.averageRating === b.averageRating) {

            return a.year - b.year;

        }

        return b.averageRating - a.averageRating;

    })


}



// Calculate average rating , sort the array and return the year with the highest rating

function bestYearAvg(movArr) {

    console.log(movArr.length)

    // Return null if no array
    if (movArr === null || movArr === undefined || movArr.length === 0) {

        return null;

    }

    // Calculate if there is only 1 element in the array and return it
    else if (movArr.length === 1) {

        return `The best year was ${movArr[0].year} with an average rate of ${movArr[0].rate}`

    } else {

        // Calculate average if there are multiple elements in the array
        const uniqueArr = createUniqueArr(movArr);
        uniqueArr.forEach(value => {
            let total = 0;
            let counter = 0;

            movArr.forEach(element => {

                if (value.year === element.year) {

                    total += element.rate;
                    counter++;
                    value['averageRating'] = total / counter;

                }

            })

        });



        const sortedArr = sortTheArray(uniqueArr);
        console.log(sortedArr)
        return `The best year was ${sortedArr[0].year} with an average rate of ${sortedArr[0].averageRating}`

    }
}


console.log(bestYearAvg(movies));