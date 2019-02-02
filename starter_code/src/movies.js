/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const turnHoursToMinutes = movies => {
    return movies.map(m => {
        const totalMins = getMins(m.duration);
        m.duration = `${totalMins}mins`;
        return m;
    })
}

const getMinutes = movie => {
    let [hrsStr, minsStr] = movie.duration.split(" ");
    const hrs = hrsStr.match(/[^a-z]/g).reduce((out, h) => out+=h);
    const mins = (minsStr) ? minsStr.match(/[^a-z]/g).reduce((out, m) => out+=m) : 0; 
    return Number(mins) + (Number(hrs) * 60);
}

// Get the average of all rates with 2 decimals 
const ratesAverage = movies => {
    const decRates = movies.map(m => parseFloat(m.rate));
    const totalRate =  decRates.reduce((total, r) => total += r);
    return (totalRate / movies.length).toPrecision(2); 
}

// Get the average of Drama Movies
const dramaMoviesRate = movies => {
    const dramaMovies = movies.filter(m => m.genre.includes("Drama"));
    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
const orderByDuration = movies => {
    return movies.sort((a, b) => {
        aMins = getMinutes(a);
        bMins = getMinutes(b);
        return aMins - bMins;
    })
}

// How many movies did STEVEN SPIELBERG
const howManyMovies = movies => {
    return movies.reduce((count, m) => {
        return (m.director.indexOf("Spielberg") > 0) ? count+1: count;
    }, 0) 
}

// Order by title and print the first 20 titles
const orderAlphabetically = movies => {
    return movies.sort((a, b) => {
        let aTitle = a.title.toLowerCase();
        let bTitle = b.title.toLowerCase();
        return aTitle.localeCompare(bTitle);
    })
}

// Best yearly rate average
const bestYearAvg = movies => {
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

    const bestRate = {
        year: "",
        avgRate: 0
    }
    const years = Object.keys(rateByYear);
    years.forEach(y => {
        average = (rateByYear[y] / countByYear[y]);
        if (average > bestRate.avgRate) {
            bestRate.year = y;
            bestRate.avgRate = average;
        }
    });

    return bestRate.year;
}