const moviesArray = [
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
        score: 8

    }];




// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let result = moviesArray.map((element => element.director));
    return result;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let stevenMovies = moviesArray.filter((movie) => movie.genre.includes("Drama") && movie.director === 'Steven Spielberg');
    return stevenMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let moviesWithScoresArray = moviesArray.filter((movies) => movies.score);
    const Sum = moviesWithScoresArray.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
    return Math.round((Sum / moviesArray.length) * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let moviesWithDrama = moviesArray.filter((movies) => movies.genre.includes("Drama") && movies.score);
    if (moviesWithDrama.length === 0) { return 0; }
    const SumDrama = moviesWithDrama.reduce((total, movie) => total + movie.score, 0);
    return Math.round((SumDrama / moviesWithDrama.length) * 100) / 100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let deepCopy = JSON.parse(JSON.stringify(moviesArray));
    let sorted = deepCopy.sort((a, b) => {
        if (a.year !== b.year) { return a.year - b.year }
        else { return a.title.localeCompare(b.title) };
    });
    return sorted;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let deepCopy = JSON.parse(JSON.stringify(moviesArray));

    let sortedByTitle = deepCopy.sort((a, b) => a.title.localeCompare(b.title));
    let firstTwenty = sortedByTitle.slice(0, 20);
    let titleArray = firstTwenty.map((element) => element.title);


    return titleArray;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let deepCopy = JSON.parse(JSON.stringify(moviesArray));
    let durationArray = deepCopy.map((element) => {

        let hoursString = element.duration.slice(0, 1);
        let minutesString = element.duration.slice(3, 5);
        let hours = +hoursString;
        let minutes = +minutesString;

        let totalhours = hours * 60 + minutes;

        element.duration = totalhours;
        return element.duration;

    });

    return deepCopy;
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if (moviesArray.length === 0) {
        return null; 
    }
    
    let myObj = {};
    moviesArray.forEach(movie => {
        if (!myObj[movie.year]) {
            myObj[movie.year] = { totalScore: 0, count: 0 };
        }
        myObj[movie.year].totalScore += movie.score;
        myObj[movie.year].count++;
    });

    let averages = {};
    for (let year in myObj) {
        averages[year] = myObj[year].totalScore / myObj[year].count;
    }

    let bestYear = 0;
    let highestAverage = 0;

    for (let year in averages) {
        if (averages[year] > highestAverage) {
            bestYear = year;
            highestAverage = averages[year];
        }
    }

    return `The best year was ${bestYear} with an average score of ${highestAverage}`;
}

console.log(bestYearAvg(moviesArray)); 