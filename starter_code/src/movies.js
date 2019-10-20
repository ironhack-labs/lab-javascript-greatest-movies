/* eslint no-restricted-globals: 'off' */

let films = [{
        title: 'The Shawshank Redemption',
        year: '1994',
        director: 'Frank Darabont',
        duration: '38min',
        genre: ['Crime', 'Drama'],
        rate: '9.3'
    },
    {
        title: 'Back to the Future',
        year: '1985',
        director: 'Robert Zemeckis',
        duration: '2h',
        genre: ['Adventure', 'Comedy', 'Sci-Fi'],
        rate: '8.5'
    },
    {
        title: 'Whiplash',
        year: '2014',
        director: 'Damien Chazelle',
        duration: '1h 47min',
        genre: ['Drama', 'Music'],
        rate: '8.5'
    },
    {
        title: 'Gladiator',
        year: '2000',
        director: 'Ridley Scott',
        duration: '2h 35min',
        genre: ['Action', 'Adventure', 'Drama'],
        rate: '8.5'
    },
    {
        title: 'The Prestige',
        year: '1994',
        director: 'Christopher Nolan',
        duration: '2h 2min',
        genre: ['Drama', 'Mystery', 'Sci-Fi', 'Thriller'],
        rate: '8.5'
    },
];


//Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    // const rateNumbers = movies.map(function (movie) { //créer nouvel array avec juste les rates transformées en nombre
    //     movie.rate = Number(movie.rate);
    //     return movie.rate;
    // });
    let sum = movies.reduce((accumulator, currentMovie) => { // pas besoin lignes 40 à 43 parce que currentMovie est déjà un objet
        return accumulator += Number(currentMovie.rate); // ajoute (en additionnant) le rate du film à chaque position
    }, 0);
    // (accumulator, rate) => (accumulator + rate) / movies.length; //puis tu fais la moyenne de tous les rate dans ton tableau
    return Number((sum / movies.length).toFixed(2));
}

//console.log(`${ratesAverage(films)} is a ${typeof(ratesAverage(films))}`); //the result is well a number


// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let moviesDrama = movies.filter(movie => movie.genre.includes("Drama")); // take only movies with genre "Drama";
    if (moviesDrama == 0) { //if the created array is empty, means there is no drama movie
        return 0;
    }
    return ratesAverage(moviesDrama); // get the average of this drama movies array
}

//console.log(dramaMoviesRate(films));


// Iteration 3: Ordering by year- Order by time year, ascending (in growing order)

function orderByYear(movies) {
    movies.sort((movie1, movie2) => {
        if (movie1.year > movie2.year) {
            return 1; // then sort movie1.year to an index greater than movie2.year
        }
        if (movie1.year < movie2.year) {
            return -1; // then sort movie1.year to an index lower than movie2.year
        }
        // return 0; // then sort movie1.year to the same index than movie2.year ==> NO ==> SORT BY ALPHABETIC ORDER: so move on and continue in an other condition...
        if (movie1.title > movie2.title) {
            return 1; // then sort movie1.title to an index greater than movie2.title
        }
        if (movie1.title < movie2.title) {
            return -1; // then sort movie1.title to an index lower than movie2.title
        }
        return 0; //return 0; // then sort movie1.title to the same index than movie2.title
    });
    return movies;
}

//console.log(orderByYear(films));
// found help on : https://gomakethings.com/sorting-an-array-by-multiple-criteria-with-vanilla-javascript/


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct ?
//  create a howManyMovies() function that receives an array as a parameter 
//      and filter 👀 the array so we can have only the drama movies where Steven Spielberg is the director.
// 1) filter on Steven Spielberg
// 2) filter on Drama
// 3) return 0 if array is empty

function howManyMovies(movies) {
    let spielbergAndDramaMovies = movies.filter(movie => {
        return movie.director == "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return spielbergAndDramaMovies.length; // movies.length = number of movies in the new array get from filter with Steven Spielberg AND Drama
}
//console.log(howManyMovies(films)); //

// Try to re-do my code with 3 arguments : (movies, genre, director), to work with any director or movie genre.
// function howManyMovies(movies, director, genre) {
//     let directorAndGenreMovies = movies.filter(movie => {
//         return movie.director == director && movie.genre.includes(genre);
//     });
//     return directorAndGenreMovies.length;
// }



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
// sort them alphabetically using the title key
// Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them

function orderAlphabetically(movies) {
    let orderByTitle = movies.sort((movie1, movie2) => { // return movies array sorted by titles
        if (movie1.title > movie2.title) {
            return 1;
        }
        if (movie1.title < movie2.title) {
            return -1;
        }
        return 0;
    });
    // return orderByTitle;
    let onlyTitles = orderByTitle.map(movie => { // return in a new array "onlyTitles" , only the titles sorted alphabetically
        return movie.title; // can I return this new array with my 20 length condition in the same time ?
    });
    if (onlyTitles.length > 20) {
        return onlyTitles.slice(0, 20); // return the entire onlyTitles array (because its length < 20 titles)
    }
    return onlyTitles;
}
// console.log(films.length); // 
// console.log("---------------->");
// console.log(orderAlphabetically(films));


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//1) declare a function that convert string to minutes
function stringtoMin(timeString) {
    const durationSplit = timeString.split(" "); // transform {"2h 20min"} to ["2h","20min"]
    let duration = 0; // intialize duration to 0

    durationSplit.forEach(elementOfTime => { // elementOfTime = "2h", "20min",...
        if (elementOfTime.includes("h")) { //if an element includes hours,
            duration += parseFloat(elementOfTime) * 60; //then, take the number juste before and mutliply by 60 and add it to duration variable
        }
        if (elementOfTime.includes("min")) {
            duration += parseFloat(elementOfTime);
        }
    });
    return duration; // return the finale value of duration
}

// 2) declare our function that creates a copy of our original array and modify each movie-objects with a new duration key
function turnHoursToMinutes(movies) {
    let moviesCopy = movies.map(movie => { // in each movie object..
        let newMovie = Object.assign({}, movie, { // ..assign to a newMovie object: all the keys of movie and...
            duration: stringtoMin(movie.duration) // ...the duration key modified with our stringtoMin function
        });
        return newMovie; // return our newMovie modified
    });
    return moviesCopy; //return all the array
}

//console.log(turnHoursToMinutes(films));


// BONUS Iteration: Best yearly rate average - Best yearly rate average