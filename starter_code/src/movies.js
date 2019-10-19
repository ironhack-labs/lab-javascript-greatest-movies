/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(array) {
    const average = array.reduce(function (accumulator, value) {
        return accumulator + parseFloat(value.rate);
    }, 0) / array.length;
    return average;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {

    // check to see if the movie is a drama
    let dramaMovies = array.filter(function (movie) {
        if (movie.genre.includes("Drama")) {
            return true;
        }
    })



    let dramaRates = dramaMovies.map(function (movie) {
        if (movie.rate === "") {
            return 0;
        } else
        if (movie.rate >= 0) {
            return movie.rate;
        }
        return dramaRates;
    })
    //console.log(dramaRates);


    if (dramaMovies.length === 0) {
        return 0;
    } else if (dramaMovies.length === 1) {
        return dramaMovies[0].rate
    }


    // calculate the average rate of the dramaMovies
    let dramaAverage = dramaRates.reduce((function (accumulator, value) {
        return accumulator + parseFloat(value.rate);
    }, 0), ) / movie.length;
    return dramaAverage;
    console.log(dramaAverage);



};







// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(movies) {
    let yearOrder = movies.sort(function (mov1, mov2) {
        if (mov1.year > mov2.year) {
            return 1;
        } else {
            return -1;
        }
    })
    return yearOrder;
}











// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(array) {

    if (array.length === 0) {
        return 0;
    }

    let stevieFlicks = array.filter(function (movies) {
        if (movies.director === "Steven Spielberg") {
            return 1;
        }
    })

    if (stevieFlicks.length === 0) {
        return 0;
    }

    let onlyDrama = stevieFlicks.filter(function (movies) {
        if (movies.genre.includes("Drama") === true) {
            return 1
        }
    })


    return onlyDrama.length;
}
















// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {


    let movieNames = movies.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        } else {
            return -1;
        }
    });


    let titles = movieNames.map(function (movie) {
        return movie.title;
    })

    // console.log(titles);


    if (titles.length < 20) {
        return titles;
    } else if (titles.length > 20) {
        return titles.slice(0, 20);
        // } else 
        // }
    }
}










// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(array) {


    let duration = movies.map(function (movie) {
        return movie.duration;
    })
    // console.log(duration);

    let numbers = duration.join();

    // console.log(numbers);

    let hoursAlmmostGone = numbers.replace(/h/g, " 60");
    let byeByeMins = hoursAlmmostGone.replace(/min/g, "");
    // let equation = byeByeMins.replace(/ /g, "+");
    let newArray = byeByeMins.split(",");
    // let times = newArray.forEach(function (string) {
    //     return eval(string);
    // })
    let numArray = newArray.map(eval(Number));




    console.log(newArray);


}














// BONUS Iteration: Best yearly rate average - Best yearly rate average