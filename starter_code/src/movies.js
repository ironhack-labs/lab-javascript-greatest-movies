var movies = [
    {
      title: 'The Shawshank Redemption',
      year: '1994',
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.3'
    },
    {
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      rate: '9.2'
    },
    {
      title: 'The Godfather: Part II',
      year: '1974',
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.0'
    },
    {
      title: 'The Dark Knight',
      year: '2008',
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      rate: '9.0'
    },
    {
      title: '12 Angry Men',
      year: '1957',
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      rate: '8.9'
    },
    {
      title: 'Schindler\'s List',
      year: '1993',
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: ['Biography', 'Drama', 'History'],
      rate: '8.9'
    },
    {
      title: 'Pulp Fiction',
      year: '1994',
      director: 'Quentin Tarantino',
      duration: '2h 34min',
      genre: ['Crime', 'Drama'],
      rate: '8.9'
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: '2003',
      director: 'Peter Jackson',
      duration: '3h 21min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      rate: '8.9'
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
      title: 'Fight Club',
      year: '1999',
      director: 'David Fincher',
      duration: '2h 19min',
      genre: ['Drama'],
      rate: '8.8'
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: '2001',
      director: 'Peter Jackson',
      duration: '2h 58min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      rate: '8.8'
    },
    {
      title: 'Forrest Gump',
      year: '1994',
      director: 'Robert Zemeckis',
      duration: '2h 22min',
      genre: ['Comedy', 'Drama', 'Romance'],
      rate: '8.8'
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: '1980',
      director: 'Irvin Kershner',
      duration: '2h 4min',
      genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      rate: '8.8'
    },
    {
      title: 'Inception',
      year: '2010',
      director: 'Christopher Nolan',
      duration: '2h 28min',
      genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
      rate: '8.8'
    },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: '2002',
      director: 'Peter Jackson',
      duration: '2h 59min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      rate: '8.7'
    }
];


/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    return movies.map(function(movie) {
        var nbOfHours = 0
        var nbOfMins = 0
        var splitValues = movie.duration.split(' ')
        if (splitValues.length === 2) {
            nbOfHours = parseInt(splitValues[0])
            nbOfMins = parseInt(splitValues[1])
        }
        else if (splitValues[0].includes('min')) {
            nbOfMins = parseInt(splitValues[0])
        }
        else if (splitValues[0].includes('h')) {
            nbOfHours = parseInt(splitValues[0])
        }

        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: nbOfHours*60 + nbOfMins,
            genre: movie.genre,
            rate: movie.rate,
        }
    })
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    return movies.reduce(function(acc, val, i, arr) {
        return (acc + val.rate/arr.length)/*.toFixed(2)*/ //warum nicht mit () um acc + val?
    },0)
} 

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
    var dramaMovies = 
    movies
    .filter(function(movie) {
        return movie.genre.includes('Drama')
    });

    if (dramaMovies != 0)
    return dramaMovies
    .reduce(function(acc, val, i, arr) {
        console.log(acc)
        console.log(arr.length)
        var sumRate = (acc + parseFloat(val.rate))
        console.log(sumRate)
        var avgRate = sumRate/arr.length
        return avgRate
        /*/arr.length /*.toFixed(2)*/ //warum nicht mit () um acc + val? */
 
        // return avgRate.toFixed(2)
    },0)
    else return undefined
} 



console.log(dramaMoviesRate(movies))

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
