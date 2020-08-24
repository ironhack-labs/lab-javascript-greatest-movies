
// let movies = [
//     {
//         "title": "The Shawshank Redemption",
//         "year": 1994,
//         "director": "Frank Darabont",
//         "duration": "2h 22min",
//         "genre": [
//             "Crime",
//             "Drama"
//         ],
//         "rate": 9.3
//     },
//     {
//         "title": "The Godfather",
//         "year": 1972,
//         "director": "Francis Ford Coppola",
//         "duration": "2h 55min",
//         "genre": [
//             "Crime",
//             "Drama"
//         ],
//         "rate": 9.2
//     },
//     {
//         "title": "The Godfather: Part II",
//         "year": 1974,
//         "director": "Francis Ford Coppola",
//         "duration": "3h 22min",
//         "genre": [
//             "Crime",
//             "Drama"
//         ],
//         "rate": 9
//     },
//     {
//         "title": "The Dark Knight",
//         "year": 2008,
//         "director": "Christopher Nolan",
//         "duration": "2h 32min",
//         "genre": [
//             "Action",
//             "Crime",
//             "Drama",
//             "Thriller"
//         ],
//         "rate": 9
//     },
//     {
//         "title": "12 Angry Men",
//         "year": 1957,
//         "director": "Sidney Lumet",
//         "duration": "1h 36min",
//         "genre": [
//             "Crime",
//             "Drama"
//         ],
//         "rate": 8.9
//     },
//     {
//         "title": "Schindler\"s List",
//         "year": 1993,
//         "director": "Steven Spielberg",
//         "duration": "3h 15min",
//         "genre": [
//             "Biography",
//             "Drama",
//             "History"
//         ],
//         "rate": 8.9
//     },
//     {
//         "title": "Pulp Fiction",
//         "year": 1994,
//         "director": "Quentin Tarantino",
//         "duration": "2h 34min",
//         "genre": [
//             "Crime",
//             "Drama"
//         ],
//         "rate": 8.9
//     },
//     {
//         "title": "The Lord of the Rings: The Return of the King",
//         "year": 2003,
//         "director": "Peter Jackson",
//         "duration": "3h 21min",
//         "genre": [
//             "Adventure",
//             "Drama",
//             "Fantasy"
//         ],
//         "rate": 8.9
//     },
//     {
//         "title": "Il buono, il brutto, il cattivo",
//         "year": 1966,
//         "director": "Sergio Leone",
//         "duration": "3h 2min",
//         "genre": [
//             "Western"
//         ],
//         "rate": 8.9
//     },
//     {
//         "title": "Fight Club",
//         "year": 1999,
//         "director": "David Fincher",
//         "duration": "2h 19min",
//         "genre": [
//             "Drama"
//         ],
//         "rate": 8.8
//     },
//     {
//         "title": "The Lord of the Rings: The Fellowship of the Ring",
//         "year": 2001,
//         "director": "Peter Jackson",
//         "duration": "2h 58min",
//         "genre": [
//             "Adventure",
//             "Drama",
//             "Fantasy"
//         ],
//         "rate": 8.8
//     },]


// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = movies => movies.map(theMovies => theMovies.director)


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getDirectors = movies => {
    const directors = []
    movies.map(theMovies => !directors.includes(theMovies.director) ? directors.push(theMovies.director) : undefined)
    return directors
}
// console.log(getDirectors(movies))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = movies => movies.filter(theMovies => theMovies.director === 'Steven Spielberg' && theMovies.genre.includes('Drama')).length


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = movies => {
    if (!movies.length) {
        return 0
    }
    const sumRateMovies = movies.reduce((acc, movie) => movie.rate ? acc + movie.rate : acc, 0)
    return parseFloat((sumRateMovies / movies.length).toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = movies => {
    const dramaMovies = movies.filter(theMovies => theMovies.genre.includes('Drama'))
    return ratesAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = movies => {
    const copyMovies = [...movies]
    return copyMovies.sort((a, b) => a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies => movies.map(theMovies => theMovies.title).sort().slice(0, 20)


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = movies => {

    return movies.map(theMovies => {
        const copy = { ...theMovies }
        switch (copy.duration.length) {
            case 8:
                copy.duration = copy.duration[0] * 60 + parseFloat(`${copy.duration[3]}${copy.duration[4]}`)
                break;
            case 7:
                copy.duration = copy.duration[0] * 60 + parseFloat(copy.duration[3])
                break;
            case 2:
                copy.duration = copy.duration[0] * 60
                break;
            case 5:
                copy.duration = parseFloat(`${copy.duration[0]}${copy.duration[1]}`)
        }
        return copy
    })

}
console.log(turnHoursToMinutes(movies))
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = movies => {
    if (!movies.length) {
        return null
    }

    const yearRate = movies.map(mov => {
        const copy = { ...mov }
        return { [copy.year]: copy.rate }
    })

    return yearRate
}

// console.log(bestYearAvg(movies))
