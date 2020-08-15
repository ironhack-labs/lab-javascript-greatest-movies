// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    return movies.map(movie => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Filter property value of director and property of genre!

function howManyMovies(movies) {
    const spielbergDramas = movies.filter(movie => {
        return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    });
    return spielbergDramas.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// Step 1: Define a function
// Step 2: Use the reduce method to iterate over the array and create an average rate
// Step 3: Return the average rate with only two decimals using the toFixed method

function ratesAverage(movies) {
    let sumUnrated = 0;
    if (movies.length === 0) {
        return 0;
    }
    const sumRate = movies.reduce(function (allRates, movie) {
        if (!movie.rate) {
            //sumUnrated++; --> does not work with test, but I think unrated movies shouldn't count as 0
            return allRates;
        }
        return allRates + movie.rate;
    }, 0);

    return Math.round((sumRate / (movies.length - sumUnrated)) * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
// Step 1 filter the array
// Step 2 reduce the array

function dramaMoviesRate(movies) {

    const dramas = movies.filter(movie => {
        return movie.genre.includes('Drama');
    });

    if (dramas.length === 0) {
        return 0;
    }

    const sumRateDramas = dramas.reduce(function (allRates, movie) {
        if (!movie.rate) {
            return allRates;
        }
        return allRates + movie.rate;
    }, 0);

    return Math.round((sumRateDramas / dramas.length) * 100) / 100;
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// Step 1: declaring a function
// step 2: declaring a new array of the array received array
// Step 3: using the sort method to iterate over the array
// Step 4: sort array by year
// step 5: extra condition: if same year, sort by title


function orderByYear(movies) {
    let sortedMovies = movies.slice();
    const yearSortedMovies = sortedMovies.sort(function (a, b) {
        let newOrder = a.year - b.year;
        if (newOrder === 0) {
            if (a.title === b.title) {
                return 0;
            } else {

                return a.title > b.title ? 1 : -1;
            }
        }
        return newOrder;
    });

    return yearSortedMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// Step 1: declare a function
// Step 2: map the array to extract the titles to a new array 
// Step 3: iterate of the new array using the sort method and sort only the titles
// Step 4: slice the array of alphabetically sorted titles from index 0 to 20

function orderAlphabetically(movies) {
    let movieTitles = movies.map(movie => movie.title);
    let sortedTitles = movieTitles.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });


    return sortedTitles.slice(0, 20);

}

console.log(orderAlphabetically([{
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    },
    {
        title: 'aab'
    },
    {
        title: 'bab'
    },
    {
        title: 'acb'
    }
]));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average