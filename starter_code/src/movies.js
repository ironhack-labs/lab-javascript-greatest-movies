/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

var movies = [
    {
        title: 'The Shawshank Redemption',
        year: '1994',
        director: 'Frank Darabont',
        duration: '2h 9min',
        genre: ['Crime', 'Drama'],
        rate: '9.3'
    },
    {
        title: 'Schindler\'s List',
        year: '1993',
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        rate: '8.9'
    }
]

var arraysTime = movies.map(function (movie) {
    var hourInMinutes = movie.duration[0] * 60;
    var totalMinutes = movie.duration.split(' ');
    var minutes;

    if (totalMinutes.length === 1) {
        minutes = 0;
    }
    if (totalMinutes.length > 1) {
        if (totalMinutes[1].length === 5) {
            minutes = totalMinutes[1].slice(0, 2);
        }
    }
    if (totalMinutes.length > 1) {
        if (totalMinutes[1].length === 4) {
            minutes = totalMinutes[1].slice(0, 1);
        }
    }
    return (hourInMinutes + parseInt(minutes)).toString();
});

console.log(arraysTime);
console.log('------------------')
console.log('')
function turnHoursToMinutes(movies, arraysTime) {
    for (let i = 0; i < movies.length; i++) {
        movies[i].duration = arraysTime[i];
    }
    console.log(movies)
    return movies;
}
turnHoursToMinutes(movies, arraysTime);

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
