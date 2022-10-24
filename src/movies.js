
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movi = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        duration: '2h 32min',
        genre: ['Action', 'Crime', 'Drama', 'Thriller'],
        score: 9
      },
      {
        title: '12 Angry Men',
        year: 1957,
        director: 'Sidney Lumet',
        duration: '1h 39min',
        genre: ['Crime', 'Drama'],
        score: 8.9
      },
      {
        title: 'Schindler"s List',
        year: 1993,
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        score: 8.9
      },
      {
        title: 'Pulp Fiction',
        year: 1994,
        director: 'Quentin Tarantino',
        duration: '2h 34min',
        genre: ['Crime', 'Drama'],
        score: 8.9
      },
      {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
        director: 'Steven Spielberg',
        duration: '3h 21min',
        genre: ['Adventure', 'Drama', 'Fantasy'],
        score: 8.9
      },
      {
        title: 'Fight Club',
        year: 1999,
        director: 'David Fincher',
        duration: '2h 19min',
        genre: ['Drama'],
        score: 8.8
      },
      {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
        director: 'Peter Jackson',
        duration: '2h 58min',
        genre: ['Adventure', 'Drama', 'Fantasy'],
        score: 8.8
      },
      {
        title: 'Forrest Gump',
        year: 1994,
        director: 'Robert Zemeckis',
        duration: '2h 22min',
        genre: ['Comedy', 'Drama', 'Romance'],
        score: 8.8
      },
      {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
        director: 'Irvin Kershner',
        duration: '2h 4min',
        genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        score: 8.8
      },
      {
        title: 'Inception',
        year: 2010,
        director: 'Christopher Nolan',
        duration: '2h 28min',
        genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
        score: 8.8
      },
      {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
        director: 'Peter Jackson',
        duration: '2h',
        genre: ['Adventure', 'Drama', 'Fantasy'],
        score: 8.7
      }
    
]

//const movies = require ("./data.js");
console.log(getAllDirectors(movi));
console.log(howManyMovies(movi));

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movies => movies.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const sSDramas = moviesArray.filter(movies => (movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')));
    return sSDramas.length;
}
 
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const sumScore = moviesArray.reduce(((el, val) => el + (val.score || 0)), 0);
    const avv = sumScore / moviesArray.length;
    return Number(avv.toFixed(2));
}
console.log(scoresAverage(movi));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(movies => movies.genre.includes('Drama'));

    const sumDrama = drama.reduce((el, val) => el + (val.score || 0), 0);

    const avvDrama =  sumDrama / drama.length;
    return drama.length === 0 ? 0 : Number(avvDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArray = [...moviesArray];
    const resultByYearOrAlpha = newMoviesArray.sort((a, b) => a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year);
    return resultByYearOrAlpha;    
}
console.log(orderByYear(movi));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movies => movies.title).sort();
    const orderedTitles = titles.sort();
    return orderedTitles.slice(0, 20);
}
console.log(orderAlphabetically(movi));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesMinutes = moviesArray.map((movie) => {
        // "2h 39min"
        let onlyDigitsOfTime = movie.duration.split(' ').map(timeComponent => {
            // "2h" o "39min", now discard all no digits, make results numbers
            const number = Number(timeComponent.replace(/[^0-9]/g, ''));
            return timeComponent.includes('h') ? (number * 60) : number;
        });
        // [120, 39]
        return { ...movie, duration: onlyDigitsOfTime.reduce((totalDuration, minComponent) => totalDuration + minComponent, 0)};
        //return { ...movie, duration: numberOfMinutes }; // return the copy of your arr, modify only duration
    })
    return moviesMinutes;
}
console.log(turnHoursToMinutes(movi));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average 
//NOT DONE YET
function bestYearAvg(moviesArray) {
    const grouppedMovies = moviesArray.reduce((groups, el) => {
        if (el.year in groups) {
            // groups: {2010: [{...}, {...}], 1999: [...], ...}
            groups[el.year].push(el);
        }
        else {
            groups[el.year] = [el];
        }
        return groups;
    },
    {});
    return grouppedMovies;
}
console.log(bestYearAvg(movi));
