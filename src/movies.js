// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {
    const directors =  movies.map(movie => movie.director);

    // return directors;
    const uniqueDirectors = directors.reduce((directorsList, directorName) => {
        if(!directorsList.includes(directorName))
            directorsList.push(directorName);

        return directorsList;
    }, []);

    return uniqueDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
    const spielbergMovies = movies.filter(movie => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama'));
    return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    const rates = movies.map(function(movie) {
        if(!('rate' in movie) || Number.isNaN(movie.rate))
            return 0;
        else 
            return Number(movie.rate);
    } );
    if(rates.length == 0) return 0;
    const ratesTotal = rates.reduce((total, rate) => {
        total += rate;

        return total;
    }, 0)
    const averageRate = ratesTotal / rates.length;
    return Math.round(averageRate*100)/100;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
    if(movies.length === 0)
        return [];

    let movieMap = [];
    if(!(movies[0].title))
        movieMap = movies.map(movie => ({year: movie.year}));
    else
        movieMap = movies.map(movie => ({title: movie.title, year: movie.year}));

    const ordered = movieMap.sort(function(movie1, movie2) {
        if(movie1.year == movie2.year) {
            if(movie1.title <= movie2.title)
                return -1;
            else
                return 1;
        } else
            return movie1.year - movie2.year;
    });
    
    return ordered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    const movieTitles = movies.map(movie => movie.title);
    const movieTitlesSorted = movieTitles.sort(function(movieTitle1, movieTitle2) {
        if(movieTitle1 <= movieTitle2)
                return -1;
            else
                return 1;
    });

    const first20movieTitles =  movieTitlesSorted.slice(0, 20);

    return first20movieTitles;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies) => {
    const moviesWithNewDurationFormat = movies.map(movie => ({
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: durationParser(movie.duration),
        genre: movie.genre,
        rate: movie.rate
    }));

    return moviesWithNewDurationFormat;
}

const durationParser = (timeString) => {
    let hoursInMinutes = 0;
    let minutes = 0;

    if(timeString.indexOf('h') == -1)
        minutes = parseInt(timeString.substring(0, timeString.indexOf('min')));
    else {
        hoursInMinutes = parseInt(timeString.substring(0, timeString.indexOf('h'))) * 60;
        if(timeString.indexOf('min') != -1)
            minutes = parseInt(timeString.substring(timeString.indexOf(' ') + 1, timeString.indexOf('min')));
    }    
    
    return hoursInMinutes + minutes;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (movies) => {
    if(movies.length === 0)
        return null;
    if(movies.length === 1)
        return `The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`

    let bestYear = 0;
    let bestAvg = 0;

    const years = movies.map(movie => movie.year).reduce((yearList, year) => {
        if(!yearList.includes(year))
            yearList.push(year);

        return yearList;
    }, []);

    years.forEach(year => {
        let yearAvg = ratesAverage(movies.filter(movie => movie.year == year))
        if(yearAvg >= bestAvg) {
            bestYear = year;
            bestAvg = ratesAverage(movies.filter(movie => movie.year == year))
        }
    });

    return `The best year was ${bestYear} with an average rate of ${bestAvg}`
}