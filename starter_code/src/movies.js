/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const turnHoursToMinutes = (arr) => {
    let deepCopy = JSON.parse(JSON.stringify(arr));
    return deepCopy.map((item) => {
        let splitArray = item.duration.split(' ');
        let cleanTime = splitArray.map(time => {
            if (time.includes('h')) {
                let cleanHours = time.match(/[0-9]/g);
                time = parseInt(cleanHours * 60, 10);
            } else if (time.includes('min')) {
                let cleanMin = time.match(/[^a-z]/g).join('');
                time = parseInt(cleanMin, 10);
            }
            return time
        })
        item.duration = cleanTime.reduce((acc, currentValue) => acc + currentValue, 0);
        return item
    })

}


// Get the average of all rates with 2 decimals

const ratesAverage = (arr) => {
    let rateAverage = arr.map(item => parseInt(item.rate, 10)).filter(item => item > 0);
    let clean = rateAverage.reduce((acc, currentValue) => acc + currentValue / arr.length, 0);


    return parseFloat(clean.toFixed(2));

}


// Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
    let dramaFilter = arr.filter(item => item.genre.includes('Drama'));
    if (dramaFilter.length === 0) {
        return undefined
    }

    return ratesAverage(dramaFilter);

}



// Order by time duration, in growing order
const orderByDuration = (arr) => {
    let x = arr.sort((a, b) => {
        if (a.duration !== b.duration) {
            return a.duration - b.duration
        } else
            return a.title.localeCompare(b.title)
    })
    return x;

}


// How many movies did STEVEN SPIELBERG
const howManyMovies = (arr) => {
    if (arr.length === 0) {
        return undefined
    }
    let spielbergMovies = arr.filter(item => item.director.includes('Steven Spielberg') && item.genre.includes('Drama'));
    if (spielbergMovies.length === 0) {
        return 'Steven Spielberg directed 0 drama movies!'
    } else if (spielbergMovies.length > 0) {
        return `Steven Spielberg directed ${spielbergMovies.length} drama movies!`
    }

}

// Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
    let movieTitle = arr.map(item => item.title).sort();
    if (movieTitle .length < 20) {
        return movieTitle 
    }
    let onlyTwenty = [];
    for (let i = 0; i < 20; i++) {
        onlyTwenty.push(movieTitle [i]);
    }
    return onlyTwenty
}


// Best yearly rate average
const bestYearAvg = (arr) => {
    if (arr.length === 0) {
        return undefined;
    }
    
}