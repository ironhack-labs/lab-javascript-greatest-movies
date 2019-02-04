/* eslint no-restricted-globals: 'off' */

// 1.  Turn duration of the movies from hours to minutes 

function convertToMin(duration) {
    var hours = duration.split(" ")[0];
    var hoursClean = parseInt (hours, 10);
    var min = duration.split(" ")[1];
    var minClean = parseInt (min, 10);
    var transformed = (hoursClean)*60 + minClean;
    return transformed;
}

var turnHoursToMinutes = movies.map(function(movie) {
    movie.duration = convertToMin(movie.duration)
    return movie
})

console.log(turnHoursToMinutes);



//2.  Get the average of all rates with 2 decimals 
 
// function allRates(movies) {
//     var justRates = []
//     for (i = 0; i< movies.length; i++){
//         justRates.push(movies[i].rate)
//     } 
//     return justRates;
// } 

let allRates = movies.map( movie => {
    return parseFloat(movie.rate);
})

console.log(allRates);
 
var totalRates = allRates.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  });

var ratesAverage = totalRates / movies.length;

console.log(ratesAverage.toFixed(2))

// 3. Get the average of Drama Movies


var justDrama = movies.filter(function(movie) {
    if (movie.genre.includes('Drama')) {
    return movie;
    }
});


let dramaRates = justDrama.map( movie => {
    return parseFloat(movie.rate);
})


var totalRatesDrama = dramaRates.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  });

var ratesAverageDrama = totalRatesDrama/justDrama.length;

console.log(ratesAverageDrama.toFixed(2))


// 4.  Order by time duration, in growing order



//  var ordered = movies.sort(function(a, b) {
//      return a.duration - b.duration ;
//  });


//    console.log(ordered); 


// 5. How many movies did STEVEN SPIELBERG

 var howManyMovies = movies.filter(function(movie) {
    if (movie.director.includes('Steven Spielberg')) {
    return movie;
    }
});

console.log(howManyMovies.length);


// 6. Order by title and print the first 20 titles


var orderedTitle = movies.sort(function(a, b) {
    return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
});

console.log(orderedTitle);

var justTwenty = orderedTitle.slice(0, 20);

console.log(justTwenty);


//Bonus.  Best yearly rate average

// var perYear = movies.filter(function(film) {
//     return film.year
// });

// const pets = [
//     {type:"Dog", name:"Spot"},
//     {type:"Cat", name:"Tiger"},
//     {type:"Dog", name:"Rover"}, 
//     {type:"Cat", name:"Leo"}
// ];

const grouped = groupBy(movies, movie => movie.year);

console.log(grouped);

