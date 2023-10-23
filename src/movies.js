// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies2 = [
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
        duration: '1h 36min',
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
        director: 'Peter Jackson',
        duration: '3h 21min',
        genre: ['Adventure', 'Drama', 'Fantasy'],
        score: 8.9
      },
      {
        title: 'Il buono, il brutto, il cattivo',
        year: 1966,
        director: 'Sergio Leone',
        duration: '3h 2min',
        genre: ['Western'],
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
        duration: '2h 59min',
        genre: ['Adventure', 'Drama', 'Fantasy'],
        score: 8.7
      },
      {
        title: 'One Flew Over the Cuckoo"s Nest',
        year: 1975,
        director: 'Milos Forman',
        duration: '2h 13min',
        genre: ['Drama'],
        score: 8.7
      },
      {
        title: 'Goodfellas',
        year: 1990,
        director: 'Martin Scorsese',
        duration: '2h 26min',
        genre: ['Crime', 'Drama'],
        score: 8.7
      },
      {
        title: 'The Matrix',
        year: 1999,
        director: 'Lana Wachowski',
        duration: '2h 16min',
        genre: ['Action', 'Sci-Fi'],
        score: 8.7
      },
      {
        title: 'Shichinin no samurai',
        year: 1954,
        director: 'Akira Kurosawa',
        duration: '3h 27min',
        genre: ['Adventure', 'Drama'],
        score: 8.7
      },
      {
        title: 'Star Wars',
        year: 1977,
        director: 'George Lucas',
        duration: '2h 1min',
        genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        score: 8.7
      },
      {
        title: 'Cidade de Deus',
        year: 2002,
        director: 'Fernando Meirelles',
        duration: '2h 10min',
        genre: ['Crime', 'Drama'],
        score: 8.7
      },
      {
        title: 'Se7en',
        year: 1995,
        director: 'David Fincher',
        duration: '2h 7min',
        genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        score: 8.6
      },
      {
        title: 'The Silence of the Lambs',
        year: 1991,
        director: 'Jonathan Demme',
        duration: '1h 58min',
        genre: ['Crime', 'Drama', 'Thriller'],
        score: 8.6
      },
      {
        title: 'It"s a Wonderful Life',
        year: 1946,
        director: 'Frank Capra',
        duration: '2h 10min',
        genre: ['Drama', 'Family', 'Fantasy'],
        score: 8.6
      },
      {
        title: 'The Dark Knight Rises',
        year: 2012,
        director: 'Christopher Nolan',
        duration: '2h 44min',
        genre: ['Action', 'Thriller'],
        score: 8.4
      },
      {
        title: 'Mononoke-hime',
        year: 1997,
        director: 'Hayao Miyazaki',
        duration: '2h 14min',
        genre: ['Animation', 'Adventure', 'Fantasy'],
        score: 8.4
      },
      {
        title: 'Oldeuboi',
        year: 2003,
        director: 'Chan-wook Park',
        duration: '2h',
        genre: ['Action', 'Drama', 'Mystery', 'Thriller'],
        score: 8.4
      },
      {
        title: 'Aliens',
        year: 1986,
        director: 'James Cameron',
        duration: '2h 17min',
        genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
        score: 8.4
      },
      {
        title: 'Witness for the Prosecution',
        year: 1957,
        director: 'Billy Wilder',
        duration: '1h 56min',
        genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
        score: 8.4
      },
]


function getAllDirectors(moviesArray) {
    return moviesArray.map((item) => item.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((item) => item.director === "Steven Spielberg" && item.genre.includes("Drama")).length
}


// Average Function

function averageOfScore(array) {
   if (!array.length) {
        return 0
    } 
    
    const scoreSum = array.reduce((acc, curr) => {
        if (curr.score !== undefined) {
            return acc + curr.score;
        } else {
            return acc
        }
    }, 0);
        
    const number = array.length;
    const scoreAverage = scoreSum / number;
    const roundedAverage = Math.round(scoreAverage * 100) / 100;
    return roundedAverage;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    /* if (!moviesArray.length) {
        return 0
    } 
    
    const scoreSum = moviesArray.reduce((acc, curr) => {
        if (curr.score !== undefined) {
            return acc + curr.score;
        } else {
            return acc
        }
    }, 0);
        
    const number = moviesArray.length;
    const scoreAverage = scoreSum / number;
    const roundedAverage = Math.round(scoreAverage * 100) / 100;
    return roundedAverage; */

    return averageOfScore(moviesArray);

    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const allDramaMovies = moviesArray.filter((item) => item.genre.includes("Drama"))

   /*  if (!allDramaMovies.length) {
        return 0
    } 

    const sumAll = allDramaMovies.reduce((acc, curr) => {
        return acc + curr.score
    }, 0)

    const number = allDramaMovies.length;
    const scoreAverage = sumAll / number;
    const roundedAverage = Math.round(scoreAverage * 100) / 100;
    return roundedAverage; */

    return averageOfScore(allDramaMovies)

    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedByYear = moviesArray.slice().sort((a,b) => {
        if(a.year !== b.year) {
        return a.year - b.year
        } 
        else {
            return a.title.localeCompare(b.title)
        }
    }
    )
    return sortedByYear
}

// console.log(orderByYear(movies2))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const allMoviesSorted = moviesArray.sort((a,b) => a.title.localeCompare(b.title))
    const allMoviesSorted20 = allMoviesSorted.splice(0,20)
    const movieTitleList = allMoviesSorted20.map((item) => item.title);
    return movieTitleList
}

console.log(orderAlphabetically(movies2))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    moviesArray.forEach((movie) => {
        const extractedNumbersArray = movie.duration.split(" ").split("m").
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
