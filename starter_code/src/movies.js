/* eslint no-restricted-globals: 'off' */

//Iteration 1: All rates average - Get the average of all rates with 2 decimals

let films = [{
        title: 'The Shawshank Redemption',
        year: '1994',
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Drama'],
        rate: '9.3'
    },
    {
        title: 'The Godfather',
        year: '1972',
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Drama'],
        rate: '9.2'
    },
    {
        title: 'Il buono, il brutto, il cattivo',
        year: '1966',
        director: 'Sergio Leone',
        duration: '3h 2min',
        genre: ['Western'],
        rate: '8.9'
    },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: '2001',
        director: 'Peter Jackson',
        duration: '2h 58min',
        genre: ['Adventure', 'Drama', 'Fantasy'],
        rate: '8.8'
    },
];

function ratesAverage(movies) {
    // const rateNumbers = movies.map(function (movie) { //créer nouvel array avec juste les rates transformées en nombre
    //     movie.rate = Number(movie.rate);
    //     return movie.rate;
    // });
    let sum = movies.reduce((accumulator, current) => { // pas besoin lignes 40 à 43 parce que current est déjà un objet
        return accumulator += Number(current.rate);
    }, 0);
    // (accumulator, rate) => (accumulator + rate) / movies.length; //puis tu fais la moyenne de tous les rate dans ton tableau
    return Number((sum / movies.length).toFixed(2)); // toFixed(2) = permet d'arrondir à la 2nde décimale
}

//console.log(ratesAverage(films));


// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let moviesDrama = movies.filter(movie => movie.genre.includes("Drama")); // condition ?
    if (moviesDrama == 0) {
        return 0;
    }
    return ratesAverage(moviesDrama);
}

//console.log(dramaMoviesRate(films));


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(movies) {
    const yearsMovies = movies.map(function (movie) { //créer nouvel array avec juste les rates transformées en nombre
        movie.year = Number(movie.year);
        console.log(yearsMovies);
        return movie.year;
    });
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    arr.filter(movie =>[
        return movie.director === Steven Spielberg && movie.genre.includes("Drama")
    );
    ] ;
    return stevenDramaMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average