/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

movies.forEach(item => {
    if (item.duration.length > 5){
    var list = item.duration.split("h ");
    item.duration = list[0] * 60 + parseInt(list[1].split("min"));
    }
  });



// Get the average of all rates with 2 decimals 

let rates = movies.map((item) =>  Number(item.rate));
let sumRates = rates.reduce((guardador, elemento) => guardador + elemento);
let average = sumRates / movies.length;



// Get the average of Drama Movies

let dramaMovies = movies.filter(i => i.genre.indexOf("Drama") !== -1);
let ratesDrama = dramaMovies.map((item) =>  Number(item.rate));
let sumRatesDrama = ratesDrama.reduce((guardador, elemento) => guardador + elemento);
let averageDrama = sumRatesDrama / dramaMovies.length;
averageDrama;




// Order by time duration, in growing order

let timeDuration = movies.map(i => i.duration);
console.log(timeDuration.sort(function(a, b){return a-b}));



// How many movies did STEVEN SPIELBERG

let steven = movies.filter(stev=> stev.director === "Steven Spielberg");
 console.log(steven.length);


// Order by title and print the first 20 titles


// Best yearly rate average
