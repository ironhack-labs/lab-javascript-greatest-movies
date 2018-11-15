/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

var movies = [
    {
        title: 'Ahe Shawshank Redemption',
        year: '1994',
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        rate: '9.3'
    },
    {
        title: 'Bchindler\'s List',
        year: '1993',
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        rate: '8.9'
    },
    {
        title: 'Che Godfather',
        year: '1972',
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime', 'Drama'],
        rate: '9.2'
    },
    {
        title: 'Dhe Godfather: Part II',
        year: '1974',
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
        rate: '9.0'
    },
    {
        title: 'Echindler\'s List',
        year: '1993',
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        rate: '8.9'
    }
]

// var arraysTime = movies.map(function (movie) {
//     var hourInMinutes = movie.duration[0] * 60;
//     var totalMinutes = movie.duration.split(' ');
//     var minutes;

//     if (totalMinutes.length === 1) {
//         minutes = 0;
//     }
//     if (totalMinutes.length > 1) {
//         if (totalMinutes[1].length === 5) {
//             minutes = totalMinutes[1].slice(0, 2);
//         }
//     }
//     if (totalMinutes.length > 1) {
//         if (totalMinutes[1].length === 4) {
//             minutes = totalMinutes[1].slice(0, 1);
//         }
//     }
//     return (hourInMinutes + parseInt(minutes));
// });

// // Get the average of all rates with 2 decimals 
// console.log(arraysTime);
// console.log('------------------')
// console.log('')
// function turnHoursToMinutes(movies, arraysTime) {
//     for (let i = 0; i < movies.length; i++) {
//         movies[i].duration = arraysTime[i];
//     }
//     console.log(movies)
//     return movies;
// }
// turnHoursToMinutes(movies, arraysTime);

// // Get the average of Drama Movies
// function ratesAverage(moviesArray) {
//     var totalRate = moviesArray.reduce(function (total, elem, index) {
//         return total + parseFloat(elem.rate);
//     }, 0)
//     return (totalRate / moviesArray.length).toFixed(2);
// }
// console.log('------------------')
// console.log('')
// // console.log(ratesAverage(movies));
// function dramaMoviesRate(moviesArray) {
//     var dramaAverage = movies.filter(function (item) {
//         return item.genre.includes('Drama')
//     });
//     return ratesAverage(dramaAverage)
// }
// console.log(dramaMoviesRate(movies));
// console.log('------------------')
// console.log('')

// // Order by time duration, in growing order
// function orderByDuration(moviesArray) {
//     moviesArray.sort(function (a, b) {
//         return a.duration - b.duration;
//     })
//     return moviesArray;
// }

// console.log(orderByDuration(movies));
// console.log('------------------')
// console.log('')

// // How many movies did STEVEN SPIELBERG
// function howManyMovies(moviesArray) {
//     var moviesSteven = moviesArray.filter(function (item) {
//         return (item.genre.includes('Drama') && item.director.includes('Steven Spielberg'))
//     });
//     return moviesSteven
// }
// console.log(howManyMovies(movies));
// console.log('------------------')
// console.log('')

// Order by title and print the first 20 titles

movies.sort(function (a, b) {
    if (a.title < b.title) {
        return -1
    }
    if (a.title > b.title) {
        return 1
    }
    return 0;
})

console.log(movies);

// Best yearly rate average
