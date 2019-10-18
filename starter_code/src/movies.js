var film = [{
        title: 'Dog Day Afternoon',
        year: '1975',
        director: 'Sidney Lumet',
        duration: '2h 5min',
        genre: ['Biography', 'Crime', 'Drama', 'Thriller'],
        rate: '8.0'
    },
    {
        title: 'Dead Poets Society',
        year: '1989',
        director: 'Peter Weir',
        duration: '2h 8min',
        genre: ['Drama'],
        rate: '8.0'
    }
];

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    var totalRate = movies.map(movie => Number(movie.rate))

    const sum = totalRate.reduce((accumulateur, rate) => {
        accumulateur += rate;
        return accumulateur
    }, 0);

    if (!movies.length) return 0
    return Number((sum / movies.length).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    var drama = movies.filter((movie) => movie.genre.includes("Drama"));
    return ratesAverage(drama)

}

console.log(dramaMoviesRate(film))



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes