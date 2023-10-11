// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies2 = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Steven Spielberg',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Steven Spielberg',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Comedy'],
    },
    {
        title: 'My First Movie',
        year: 1974,
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Comedy'],  
    }
]

function getAllDirectors(moviesArray) {
    const getDirectors = moviesArray.map((item) => {
        let directors = [];
        item.director.toString();
        directors += item.director;
        return directors;
    });
    // console.log(getDirectors);
    return getDirectors;
}

getAllDirectors(movies2);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
        
    if(moviesArray === 0 || !moviesArray.director === 'Steven Spielberg') {
        return 0;
    } else {
        const spielbergMovies = moviesArray.filter((item) => {
        return item.director === 'Steven Spielberg' && item.genre.includes('Drama');
        }).map((item) => item.director);
        return spielbergMovies.length;
    }
}

// howManyMovies(movies2);
// console.log(howManyMovies(movies2));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    } else {
        const sumAvg = moviesArray.reduce((acc, currentValue) => {
            if (typeof currentValue.score === 'number') {
                return acc + currentValue.score;
            } else {
                return acc;
            }
        }, 0);
        const average = sumAvg / moviesArray.length;
        const avgMathTwoDec = Math.round(average * 100) / 100;
        return avgMathTwoDec;
    }
}

// scoresAverage(movies2);
// console.log(scoresAverage(movies2));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaObjects = moviesArray.filter((item) => {
        return item.genre.includes('Drama');
    });

    if (dramaObjects.length === 0) {
        return 0;
    }
    
    const sumAllScore = dramaObjects.reduce((acc, currentValue) => {
        if (typeof currentValue.score === 'number') {
            return acc + currentValue.score;
        } else {
            return acc;
        }
    }, 0);
    const average = sumAllScore / dramaObjects.length;
    const avgMathTwoDec = Math.round(average * 100) / 100;
    return avgMathTwoDec;
}

dramaMoviesScore(movies2);
// console.log(dramaMoviesScore(movies2));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let arrOrderByYear = moviesArray.slice().sort((a, b) => {
        if(a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    });
    console.log(arrOrderByYear);
    let arrOrderByTitle = arrOrderByYear;
    return arrOrderByTitle;
}

// orderByYear(movies2);
// console.log(orderByYear(movies2));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let arrAlphabeticTitles = moviesArray.map((item) => {
        return item.title;
    }).sort().slice(0, 20);
    
    return arrAlphabeticTitles;
}

orderAlphabetically(movies2);
console.log(orderAlphabetically(movies2));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
