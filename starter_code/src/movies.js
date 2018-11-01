/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
let turnHoursToMinutes = (movies) => {
    let newMov = movies.map((movie) => {
        let hours =movie.duration[movie.duration.indexOf('h')-1]*60;
        let minutes = parseInt(movie.duration[movie.duration.indexOf('m')-2] + movie.duration[movie.duration.indexOf('m')-1]);
        movie.duration = hours + minutes;
        console.log(movie);
        return movie;
    });
    //console.log(newMov);
    return newMov;
}

// Get the average of all rates with 2 decimals 
let ratesAverage = (movies) => {
    var acc = 0;
    for(movie of movies){
        acc += parseInt(movie.rate);
    }
    return (acc/movies.length).toFixed(2);
}

// Get the average of Drama Movies
let dramaMoviesRate = (movies) => {
    let avgDrama = 0;
    for(movie of movies){
        if(movie.genre.indexOf('Drama')!== -1){
            avgDrama+= parseInt(movie.rate);
        }
    }
    return parseInt((avgDrama/movies.length).toFixed(2));
}

// Order by time duration, in growing order
let orderByDuration = (movies) => {
    let JaviEsCool = turnHoursToMinutes(movies);
    JaviEsCool.sort((item1,item2)=>{
        return item1.duration - item2.duration;
    });
    return JaviEsCool;
}

// How many movies did STEVEN SPIELBERG
let howManyMovies = (movies) =>{
    if(movies.length === 0){
        return undefined;
    }
    let acc= 0;
    for (movie of movies){
        if(movie.director.indexOf('Steven Spielberg')){
            acc++;
        }
    }
    if(acc===0){
        return 'Steven Spielberg directed 0 drama movies!';
    }else {
        return toString(acc);
    }
}



// Order by title and print the first 20 titles
let orderAlphabetically = (movies) => {
    let orderArray = [];
    let twentyArray = [];

    for(movie of movies){
        orderArray.push({
            title: movie.title
        });
    }
    orderArray.sort((a,b) => {
        var nameA = a.title.toUpperCase();
        var nameB = b.title.toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    for(let i=0; i<21;i++){
        twentyArray.push(orderArray[i]);
    }
    return twentyArray;
}

// Best yearly rate average
let bestYearAvg = (movies) => {

    let avgBestYear = [];
    for(let i=1895; i<2020; i++){
        let acc = 0;
        let count= 0;
        for(movie of movies){
            if(movie.year === i){
                acc+= movie.rate;
                count++;
            }
        }
        avgBestYear.push({
            year: i,
            rate: acc/count
        });
    }
    avgBestYear.sort((a,b) => {
        if(a.rate < b.rate){
            return -1;
        }
        if(a.rate > b.rate){
            return 1;
        }
        return 0;
    });
    return `The best year was ${avgBestYear[0].year} with an average rate of ${avgBestYear[0].rate} `;
}