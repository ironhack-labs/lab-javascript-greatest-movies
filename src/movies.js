// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
    const directors = arr.map(function (movie) {
        return movie.director
    });
    return directors
};
console.log(getAllDirectors(movies))


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {

    const SpielbergDramaMovies = arr.filter(function (movie) {
        //return director === spiel && genre of director spiel === drama 

        const director = movie.director
        const genre = movie.genre
        // && genre.includes('drama')
        // console.log(genre.includes('drama'))

        return director === 'Steven Spielberg' && genre.includes('Drama')
    }).length;
    return SpielbergDramaMovies
};
console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(arr) {
    if (!arr.length) return 0
    const averageRating = arr.reduce(function (total, el) {
        // console.log(el.rate)
        const movieRating = total + el.rate;
        return movieRating
    }, 0)
    return Math.round(averageRating / arr.length * 100) / 100;
};

console.log(ratesAverage(movies));

// // Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const dramaMovies = arr.filter(function (movie) {
        return movie.genre.includes('Drama');
    });
    return ratesAverage(dramaMovies)
}
// console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {

    let newArr = [...arr].sort(function (a, b) {
        return a.year - b.year;
    });
    return newArr

};
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(arr) {
    const movieTitles = arr.map(function (movie) {
        return movie.title
    });
    movieTitles.sort();

    // let i = 0;
    // let listOfMovies = []
    // while (i < 20) {
    //     listOfMovies.push(movieTitles[i]);
    //     i++
    // }
    // return listOfMovies


    let twentyMovies = movieTitles.splice(0, 20)
    return twentyMovies
}
console.log(orderAlphabetically(movies));
// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(arr) {
    const movieDuration = arr.map(function (movie) {
        let hours = Number(movie.duration[0] * 60);
        let mins = Number(movie.duration.slice(3, 6).match(/(\d+)/)[0]);
        let sum = hours + mins;
        console.log(movie.duration)

    })

    return movieDuration

}
console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
