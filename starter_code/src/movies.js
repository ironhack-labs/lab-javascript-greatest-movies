/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arrayMovies => {
    let newArray = [...arrayMovies].sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return newArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = dramaMovies => {
    return dramaMovies
        .filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg')
        .length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = titleMovies => {
    return [...titleMovies]
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(movie => movie.title)
        .slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = rateMovies => {
    if (rateMovies.length === 0) return 0;
    return + (rateMovies.reduce((result, movie) => {
        if (movie.rate && typeof movie.rate === 'number') {

            return result += movie.rate
        } else {
            return result;
        }
    }, 0) / rateMovies.length).toFixed(2);
}

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = rateDramaMovies => {
    if (rateDramaMovies.length === 0) return 0;
    let rateDramaMoviesFilter = rateDramaMovies.filter(movie => movie.genre.includes('Drama'));
    if (rateDramaMoviesFilter.length === 0) return 0;
    return + (rateDramaMoviesFilter.reduce((result, movie) => {
        if (movie.rate && typeof movie.rate === 'number') {

            return result += movie.rate
        } else {
            return result;
        }
    }, 0) / rateDramaMoviesFilter.length).toFixed(2);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


const turnHoursToMinutes = hoursIntoMinutesMovies => {
    return [...hoursIntoMinutesMovies].map(h);
}

let hours = '2h 55min';

let h  = movie => {
    let duration = movie;
    if (duration && duration.length === 0) {
        let newMovie = JSON.parse(JSON.stringify(movie));
    return newMovie;
    }
    let newArray = duration.split('');
    let hours = '';
    let foundHours = false;
    let minutes = '';
    let foundMinutes = false;
    let sum = 0;
    newArray.forEach(char => {
        if (char != 'h') {
            hours += char;
        } else {
            foundHours = true;
            return;
        }
    })
    newArray.forEach(char => {
        if (char != 'm') {
            minutes += char;
        } else {
            foundMinutes = true;
            return;
        }
    })
    if (foundHours) {
        sum += parseInt(hours) * 60;
    } 
    if (foundMinutes) {
        sum += parseInt(minutes.split('').splice(minutes.length -2, 2).join(''));
        // console.log(minutes);
        // console.log(parseInt(minutes.split('').splice(minutes.length -2, 2).join('')))

    }
    let newMovie = JSON.parse(JSON.stringify(movie));
    newMovie.duration = sum;
    return newMovie;
};

h(hours);

// BONUS Iteration: Best yearly rate average - Best yearly rate average
