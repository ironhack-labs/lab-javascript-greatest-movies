/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
    
    let resultArray = array.map ( movie => {
        let stringDuration = movie.duration;
        let numberDuration;

        if ( stringDuration.length === "Xh XXmin".length ) {
            numberDuration = stringDuration[0]*60 + stringDuration[3]*10 + stringDuration[4]*1;
        } else if ( stringDuration.length === "Xh Xmin".length ) {
            numberDuration = stringDuration[0]*60 + stringDuration[3]*1;
        } else if ( stringDuration.length === "XXmin".length ) { 
            numberDuration = stringDuration[0]*10 + stringDuration[1]*1;
        } else if ( stringDuration.length === "Xh".length) { 
            numberDuration = stringDuration[0]*60;
        }
        return {    
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: numberDuration,
            genre: movie.genre,
            rate: movie.rate
            }  
    });

    return resultArray;
}

// Get the average of all rates with 2 decimals 
function ratesAverage (array) {
    return  array.reduce( (sum, elem) => sum + Number(elem.rate), 0) / array.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
        let dramaMovies = array.filter( movie => movie.genre.includes('Drama') );
        if (dramaMovies.length < 1) {
            return undefined;
        } else {
            let result = ratesAverage (dramaMovies).toFixed(2);
            return Number(result);
        }
}


// Order by time duration, in growing order
function orderByDuration (array) {
    let convertedArray = array;
    if(typeof array[0].duration == String) {
        convertedArray = turnHoursToMinutes(array);
    }
    console.log('this is the pre ordered array:', convertedArray);

    convertedArray.sort( (movie1, movie2) => {
    if (movie1.duration === movie2.duration) {

        if (movie1.title > movie2.title) {
            return 1;
        } else {
            return -1;
        }

        
        } else {  
        return movie1.duration - movie2.duration;
        }
    });
    console.log('this is the  ordered array:', convertedArray);
    return convertedArray;
    
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
    
    let ssDramaMovies = array.filter( movie => movie.genre.includes('Drama') && movie.director == 'Steven Spielberg');

    if (array.length < 1) {
        return undefined;
    } 
    else {
        return `Steven Spielberg directed ${ssDramaMovies.length} drama movies!`;
    }
}


// Order by title and print the first 20 titles
function orderAlphabetically (array) {
    let orderedArray = array.sort((movie1, movie2) => {
        if (movie1.title > movie2.title) {
            return 1;
        } else {
            return -1;
        }
    }).slice(0,20);

    return orderedArray.map(movie => movie.title);;

}


// Best yearly rate average
