/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray){
    return  moviesArray.map((eachMovie)=>{
        let newMovie = {...eachMovie}; // spread 
        let regexHours = /[0-9]+h/g; //regex to find hours
        let regexMinutes = /([0-9]+min)/g; //regex to find minutes

        let hoursArray = newMovie.duration.toString().match(regexHours); //find hours
        let minutesArray = newMovie.duration.toString().match(regexMinutes); //find minutes
        
        let durationInMin = 0;
        
        if(hoursArray !== null){
            let hours = parseInt(hoursArray[0].replace(/\D/g, "")); //remove the h in hours
            durationInMin += hours*60;
        }

        if(minutesArray !== null){
            let minutes = parseInt(minutesArray[0].replace(/\D/g, "")); //remove the h in hours
            durationInMin += minutes;   
        }

        newMovie.duration = durationInMin;
        return newMovie;
    });

}

// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray) {

    let averageRate = moviesArray.reduce((accumulator, eachMovie)=>{
         return accumulator + eachMovie.rate;      
    },0) / moviesArray.length;

    return Number(averageRate.toFixed(2))
}

// Get the average of Drama Movies
function dramaMoviesRate(moviesArray){
    let dramaMovies = moviesArray.filter((eachMovie)=>{
        return eachMovie.genre.includes("Drama");
    });
    if(dramaMovies.length === 0){return undefined;}
    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(moviesArray) {
    let newMoviesArray = [...moviesArray];
    if(typeof moviesArray[0] === 'string'){
        newMoviesArray = turnHoursToMinutes(newMoviesArray);
    }
    return newMoviesArray.sort((a, b)=>{
        if (a.duration < b.duration){
            return -1;
        }
        if (a.duration > b.duration){
            return 1;
        }else{
            if(a.title < b.title){
                return -1;
            }else if(a.title > b.title){
                return 1;
            }
            return 0;
        }
    });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0){return undefined;}
    let stevenDramaMovies = moviesArray.filter((eachMovie)=>{
        return (eachMovie.genre.includes("Drama")) && (eachMovie.director === 'Steven Spielberg');
    });

    return `Steven Spielberg directed ${stevenDramaMovies.length} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newMoviesArray = [...moviesArray];

    let sortedMoviesArray = newMoviesArray.sort((a, b)=>{
        if (a.title < b.title){
            return -1;
        }
        if (a.title > b.title){
            return 1;
        }else{
            return 0;
        }
    });
    let sortedMoviesTitlesOnly = sortedMoviesArray.map((eachMovie)=>{
        return eachMovie.title;
    });
    return  sortedMoviesTitlesOnly.splice(0, 20);

}

// Best yearly rate average
function bestYearAvg(moviesArray) {
    if(moviesArray.length===0){return undefined}
    let moviesByYear = [];

    moviesArray.forEach(eachMovie => {
        
    });
    // let moviesByYear = [];
    // moviesArray.forEach(eachMovie => {
    //     let year = {};
    //    if(!moviesByYear.includes(eachMovie.year)){
    //        year = {eachMovie.year : {numOfMovies: 1, totalRate: number(eachMovie.rate)};
    //         moviesByYear.push(year);
    //    } else{
    //         moviesByYear[eachMovie]
    //    }
    // });
    // let allYears = moviesArray.map((eachMovie)=>{
    //     return eachMovie.year;
    // });

    
}