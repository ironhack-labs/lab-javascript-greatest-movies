/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesCopy = [...movies];

    moviesCopy.sort((movie1, movie2) => {
        if (movie1.year === movie2.year) {
            const movie1TitleLowerCase = movie1.title.toLowerCase();
            const movie2TitleLowerCase = movie2.title.toLowerCase();

            return movie1TitleLowerCase < movie2TitleLowerCase ? -1 : movie1TitleLowerCase > movie2TitleLowerCase ? 1 : 0;
        }

        return movie1.year - movie2.year});

    return moviesCopy;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    const spielbergDramaMovies = movies.filter(movie => (movie.director === 'Steven Spielberg') && (movie.genre.includes('Drama')));

    return spielbergDramaMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const moviesOrderedByTitle = movies.slice();
    const MAX_NUMBER_OF_TITLES = 20;
    let i = 0;
    const titles = [];

    moviesOrderedByTitle.sort((movie1, movie2) => {
        const movie1TitleLowerCase = movie1.title.toLowerCase();
        const movie2TitleLowerCase = movie2.title.toLowerCase();

        return movie1TitleLowerCase < movie2TitleLowerCase ? -1 : movie1TitleLowerCase > movie2TitleLowerCase ? 1 : 0;
    });

    while (i < MAX_NUMBER_OF_TITLES && i < moviesOrderedByTitle.length) {
        titles.push(moviesOrderedByTitle[i].title);
        i++;
    }

    console.log(titles);

    return titles;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }

    const sumRates = movies.reduce((accumulator, movie) => accumulator + (movie.rate ? movie.rate : 0), 0);
    const average = Math.round((sumRates / movies.length) * 100) / 100;

    return average;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

    return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const newMovies = JSON.parse(JSON.stringify(movies));

    let hPos;
    let minPos;
    let newDuration;

    newMovies.forEach(movie => {
        hPos = movie.duration.indexOf('h');

        if (hPos === -1) {
            hPos = 0;
        }

        minPos = movie.duration.indexOf('min');
        newDuration = movie.duration.slice(0, hPos) * 60;

        if (hPos !== 0) {
            newDuration += movie.duration.slice(hPos + 2, minPos) * 1;
        } else {
            newDuration = movie.duration.slice(0, minPos) * 1;
        }

        movie.duration = newDuration;
    });

    return newMovies;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    // I order the movies by years.
    const moviesOrdered = orderByYear(movies);
    let maxAverage = 0;
    let bestYear;

    if (movies.length === 0) {
        return null;
    }
    else {
        moviesOrdered.forEach(movie => {
            let year = movie.year;
            let averagePerYear = 0;
            let yearPreviousMovie = 0;
    
            if (year > yearPreviousMovie) {
                // I get an array with the movies per year.
                const moviesPerYear = moviesOrdered.filter(movie => movie.year === year);
    
                // Calculate the average per year.
                averagePerYear = ratesAverage(moviesPerYear);
    
                if (averagePerYear > maxAverage) {
                    maxAverage = averagePerYear;
                    bestYear = year;
                }
            }
    
            yearPreviousMovie = year;
        })
    
        return `The best year was ${bestYear} with an average rate of ${maxAverage}`;
    }
}