/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {

    //map: create array with just the rates
    //parseFloat: turn all strings into numbers.
    let ratesArr = movies.map(function (obj) {
        return parseFloat(obj.rate);
    })

    //reduce: calculate the sum of the rate-array with 
    let sumRatesArr = ratesArr.reduce(function (accumulator, value) {
        return accumulator + value;
    }, 0)

    //calculate the average of the rates
    //toFixed: round average to 2 decimals
    let average = (sumRatesArr / movies.length).toFixed(2);
    return (average);
};




// Iteration 2: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies) {

    //filter: create new array with all movies of the genre drama
    let dramaArray = movies.filter(function (obj) {
            if (obj.genre.includes('Drama') === true) {
                return obj;
            }
        })
        //map: create array with just the rates of the drama movies
        //parse float: turn the strings in the rates array into  numbers
        .map(function (obj) {
            obj.rate = (parseFloat(obj.rate) || 0);
            return obj;
        })
    //reduce: sum up all the ratings of the drama movies
    let sumDramaArray = dramaArray.reduce(function (accumulator, value) {
        return accumulator + value.rate;
    }, 0)

    // calculate average drama rating
    // toFixed: round average of drama rating to 2 decimals
    return dramaArray.length === 0 ? 0 : (sumDramaArray / dramaArray.length).toFixed(2);
};




// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {

    let durationArray = movies.sort(function (a, b) {
        if (a.duration > b.duration) {
            return 1;
        }
        if (a.duration < b.duration) {
            return -1;
        }
        if (a.duration === b.duration) {
            let titleArray = movies.sort(function (a, b) {
                if (a.title > b.title) {
                    return 1;
                }
                if (a.title < b.title) {
                    return -1;
                }
                return titleArray;
            });
        }
    });
    return durationArray;
}




// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    let spielbergArray = movies.filter(function (obj) {
        if (obj.director === 'Steven Spielberg' && obj.genre.includes('Drama')) {
            return obj;
        }
    });
    return spielbergArray;
}



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    //sort: order by title
    let titleArray = movies.title.sort(function (a, b) {
        return a - b;
    });
    //slice: cut array to only show first 20 entries
    return titleArray.slice(0, 20);
}




// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

    let newDurationArray = movies.map(function (obj) {

            //slice: cut out the number for hour (and multiply times 60 to get the correct number) and the number for the minutes. Turn the values into numbers with parsefloat and add them together. Overwrite obj.duration with the new duration.
            obj.duration = (parseFloat(obj.duration.slice(0, 1)) * 60 + parseFloat(obj.duration.slice(3, 2));
                return obj;
            });
        return newDurationArray;
    }


    // BONUS Iteration: Best yearly rate average - Best yearly rate average

    // function bestYearAvg()