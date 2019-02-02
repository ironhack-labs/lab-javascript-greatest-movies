/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const turnHoursToMinutes = (movies) => {
    return movies.map(m => ({
        title: m.title,
        year: m.year,
        director: m.director,
        duration: getDurationMinutes(m.duration),
        genre: m.genre,
        rate: m.rate
    }))
}

const getDurationMinutes = (duration) => {
    const durationItems = duration.split(" ");
    const minsStr = durationItems.find(i => i.indexOf("m") > 0);
    const hrsStr = durationItems.find(i => i.indexOf("h") > 0);
    
    const hrs = (hrsStr) ? hrsStr.match(/[^a-z]/g).reduce((out, h) => out+=h) : 0;
    const mins = (minsStr) ? minsStr.match(/[^a-z]/g).reduce((out, m) => out+=m) : 0; 
    return Number(mins) + (Number(hrs) * 60);
}

// Get the average of all rates with 2 decimals 
const ratesAverage = (movies) => {
    const decRates = movies.map(m => (m.rate) ? parseFloat(m.rate): 0);
    const totalRate =  decRates.reduce((total, r) => total += r);
    return parseFloat((totalRate / movies.length).toPrecision(3)); 
}

// Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    const dramaMovies = movies.filter(m => m.genre.includes("Drama"));
    return (dramaMovies.length) ? ratesAverage(dramaMovies) : undefined;
}

// Order by time duration, in growing order
const orderByDuration = (movies) => {
    return movies.sort((a, b) => {
        aMins = (typeof a.duration == "number") ? a.duration : getDurationMinutes(a.duration);
        bMins = (typeof b.duration == "number") ? b.duration : getDurationMinutes(b.duration);
        return (aMins == bMins) ? alphaCompare(a.title, b.title) : aMins - bMins;
    })
}

// How many movies did STEVEN SPIELBERG
const howManyMovies = (movies) => {
    if (movies.length == 0) {
        return undefined;
    } 
    const ssMovieCount = movies.filter(m => m.genre.includes("Drama")).reduce((count, m) => {
        return (m.director.indexOf("Spielberg") > 0) ? count+1: count;
    }, 0)
    return `Steven Spielberg directed ${ssMovieCount} drama movies!`;
}

// Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    const orderedAlpha = movies.map(m => m.title).sort((a, b) => alphaCompare(a, b));
    return (orderedAlpha.length > 20) ? orderedAlpha.slice(0, 20) : orderedAlpha;
}

const alphaCompare = (a, b) => {
    let aLower = a.toLowerCase();
    let bLower = b.toLowerCase();
    return aLower.localeCompare(bLower);    
}

// Best yearly rate average
const bestYearAvg = (movies) => {
    if (movies.length == 0) {
        return undefined;
    }     
    const rateByYear = {};
    const countByYear = {};
    movies.forEach(m => {
        if (m.year in rateByYear) {
            rateByYear[m.year] += Number(m.rate);
            countByYear[m.year] ++;
        } else {
            rateByYear[m.year] = Number(m.rate);
            countByYear[m.year] = 1;
        }
    })
    const bestYear = {
        year: "",
        avgRate: 0
    }
    Object.keys(rateByYear).forEach(year => {
        let average = (rateByYear[year] / countByYear[year]);
        if (average > bestYear.avgRate) {
            bestYear.year = year;
            bestYear.avgRate = average;
        }
    });
    bestYear.avgRate = (bestYear.avgRate%Math.floor(bestYear.avgRate) == 0) 
        ? Math.floor(bestYear.avgRate)
        : bestYear.avgRate.toPrecision(2);
    return `The best year was ${bestYear.year} with an average rate of ${bestYear.avgRate}`;
}