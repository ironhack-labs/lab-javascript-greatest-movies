// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const finalMovies = movies.map(function (elm) {
        return elm.director;
    });

    return finalMovies

}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    const directorSpielberg = array.filter(elm => elm.director.toLowerCase() == "steven spielberg" && elm.genre.includes('Drama'));
    const total = directorSpielberg.length;

    return total;


}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length != 0) {
        const sumRates = array.filter(elm => elm.rate !== undefined)array.reduce((acc, elm) => acc + elm.rate, 0);
        const totalArray = parseFloat(array.length)
        const total = parseFloat((sumRates / totalArray).toFixed(2));
         return total;
    } else {
        return 0;
    }
   
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const director = array.filter(elm => elm.genre.includes('Drama'));

    if (director.length != 0) {
        const directorNumber = director.length;

        const sumRates = director.reduce((acc, elm) => acc + elm.rate, 0);

        const total = Number((sumRates / directorNumber).toFixed(2));

        return total;
    } else if (director.length === 0) {
        return 0;
    } 

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(array) {
    const copyMovies = [...array];
    const ordenMoviesYear = copyMovies.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    const ordenMoviesTitle = ordenMoviesYear.sort(function (a, b) {
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        }
    })

    return ordenMoviesTitle;

};
orderByYear()

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    const copyMovies = [...array];

    const ordenMoviesTitle = copyMovies.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    })
    const onlyTitle = ordenMoviesTitle.map(elm => elm.title)

    const total = onlyTitle.splice(0, 20)

    return total;

};

orderByYear(movies)


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
