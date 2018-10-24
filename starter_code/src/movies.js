/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage (a) {
    var sum = a.reduce (function (acc, cur){
       return acc + Number(cur.rate);   
    },0);
    var average = sum / movies.length;   
    return average.toFixed(2); 
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(a){
    var dramaMovies = a.filter(item =>{
        return item.genre.includes("Drama");
    })

    var dramaRate = [];
    dramaMovies.forEach( movie =>{
        dramaRate.push(movie.rate);
    })

    var sumDramaRate = dramaRate.reduce(function (acc, cur){
        return acc + Number(cur);
    },0)

    var avgRateDrama = sumDramaRate / dramaMovies.length;
    return avgRateDrama.toFixed(2);
    };

    console.log (dramaMoviesRate(movies));


// How many movies did STEVEN SPIELBERG

function howManyMovies (movieArray){
    var dramaMovies = movieArray.filter(item =>{
        return item.genre.includes("Drama") && item.director.includes("Spielberg");
    })
    return dramaMovies.length;
};

    console.log(howManyMovies(movies));

// Order by title and print the first 20 titles




// Best yearly rate average
