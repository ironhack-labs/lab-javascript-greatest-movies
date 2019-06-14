/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (movieArray){

    let newArray = movieArray.map((mov)=>{

        let movie = {...mov};

        if(movie.duration.includes("h") && movie.duration.includes("min")){

        let hourLength = movie.duration.split("h");
        let hours = parseInt(hourLength[0]) * 60;
        let mins =  parseInt(hourLength[1].slice(0, -3));
        movie.duration = hours + mins;
        return movie;
        }else if(movie.duration.includes("h") && !movie.duration.includes("min")){

        let hourLength = movie.duration.split("h");
        let hours = parseInt(hourLength[0]) * 60;
        movie.duration = hours;
        return movie;
        }else{

        let mins =  parseInt(movie.duration.slice(0, -3));
        movie.duration = mins;
        return movie;
        }

    });

    return newArray;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movieArray){

    let rates = movieArray.map((movie)=>{
        return parseFloat(movie.rate);
    });

    let averageRating = rates.reduce((rate, accumulator)=>{
        return parseFloat(rate) + accumulator;
    });

    return parseFloat((averageRating / rates.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movieArray){

    let dramaMovies = movieArray.filter((movie)=>{
        if(movie.genre.includes('Drama')){
            return movie;
        }else{
            return undefined;
        }
    });

    let rates = dramaMovies.map((movie)=>{
        if(movie.rate === '')return 0;
        return parseFloat(movie.rate);
    });

    let averageRating ;

    if(dramaMovies.length > 0){
        averageRating = rates.reduce((rate, accumulator)=>{
            if(rate) return rate + accumulator;
        });
    }

    if(dramaMovies.length === 0) return undefined;
    else return parseFloat((averageRating / rates.length).toFixed(2));

}

// Order by time duration, in growing order
function orderByDuration(movieArray){

    let sortedByDuration = movieArray.sort((a, b)=>{
        if(a.duration < b.duration) return -1;
        else if( a.duration > b.duration) return 1
        else return 1;
    });

    return sortedByDuration; 
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movieArray){

    if(movieArray.length === 0) return undefined;

    let movies = movieArray.filter((movie)=>{
        if(movie.director.includes('Steven Spielberg')) return movie;
        else return 
    });

    let countDramas = movies.filter((movie)=>{
        if(movie.genre.includes('Drama'))return movie;
    });

    let movieCount = countDramas.length;
    let movieCountString = movieCount.toString();

    return `Steven Spielberg directed ${movieCountString} drama movies!`;

}

// Order by title and print the first 20 titles
function orderAlphabetically(movieArray){

    let titles = movieArray.map((movie, index)=>{
        return movie.title;
    });

    let sorted = titles.sort();
    let finalTitlesList = sorted.slice(0, 20);

    return finalTitlesList;
}

// Best yearly rate average
function bestYearAvg(movieArray){

    let yearsAndRates = movieArray.map((movie)=>{
        return {year:movie.year, rate:movie.rate};
    });

    let sortedYearsAndRates = yearsAndRates.sort((a, b)=>{
        if(a.year < b.year) return -1;
        else if( a.year > b.year) return 1
        else return 0;
    });

    let years = sortedYearsAndRates.map((yearAndRate)=>{
        return yearAndRate.year;
    });

    //loop through array and get average of rates by the year
    //I will come back to it after some sleep.

}
