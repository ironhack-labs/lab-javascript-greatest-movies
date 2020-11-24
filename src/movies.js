
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let directores = []
    directores = movies.map(function (movie) {
        return directores = movie.director
    })
    return directores
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(dramaMovies) {
    return dramaMovies.length !== 0 ? dramaMovies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length : 0;
};



// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies) {

    if (movies.length === 0) {
        return 0.00;
    };

    // accumulate the rates of all movies
    const sumRates = movies.reduce(function (totalRate, movie) {

        // check if movie rate exits
        if ("rate" in movie) {

            // check if movie rate is a number
            if (typeof movie.rate === "number") {
                return totalRate + movie.rate
            } else { return totalRate }

        } else {
            return totalRate
        }
    }, 0.00);

    //calulate de averages dividing by the length of movies array

    return Math.round(((sumRates / movies.length) * 100)) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const dramaMovies = movies.filter(function (movie) {
        return movie.genre.includes('Drama')
    });

    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let yearsSorted = movies.slice();
    if (yearsSorted.length === 0) {
        return yearsSorted;
    };

    


    // sort new array by years and if is the same year by title
    return yearsSorted.sort(function (movie1, movie2) {
        if (movie1.year < movie2.year) {
            return -1;
        } else if (movie1.year > movie2.year) {
            return 1;
            } else {
                if (movie1.title < movie2.title) {
                      return -1;
                } else if (movie1.title > movie2.title) {
                        return 1;
                }
                return 0;
              }
            

    });

};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

    // select the first 20 titles
    if (movies.length === 0) {
        return []
    }

    let moviesTitles = movies.map(function (movie) {
        return movie.title;
    })
    //  console.log(moviesTitles);
    let moviesTitlesSorted = moviesTitles.sort();

    if (moviesTitlesSorted.length >= 20) {

        return moviesTitlesSorted.slice(0, 20);

    } else {
        return moviesTitlesSorted.slice();
    }
    //   console.log(first20Movies);
};
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
