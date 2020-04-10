/* eslint no-restricted-globals: 'off' */
"use strict"
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(pelis) {
    let peliculas = Array.from(pelis);
    let ordenados = function (a,b){
        if(a.year === b.year){
           return a.title.localeCompare(b.title);
        };
        return a.year - b.year;
    };
    return peliculas.sort(ordenados);
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies (pelis){
    let cuantas = function(peli) {
        return peli.director === "Steven Spielberg" && peli.genre.includes('Drama');
    }
    return pelis.filter(cuantas).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (pelis){
    let lasVeinte = Array.from(pelis);
    lasVeinte.sort(function (a,b){
        if (a.title < b.title) {return -1};
        if (a.title > b.title) {return 1};
        return 0;
    });
    return lasVeinte.map(peli => peli.title).slice(0, 20);
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (pelis) {
    if (pelis.length === 0) {return 0};
    let peliculas = pelis.filter(movie => 'rate' in movie && movie.rate > 0);
    return parseFloat((peliculas.reduce((acc,elem) => acc + elem.rate, 0) / peliculas.length).toFixed(2));
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (pelis){
    let peliculas = pelis.filter(movie => movie.genre.includes('Drama'));
    if (peliculas.length === 0) {return 0};
    return parseFloat((peliculas.reduce((acc, elem) => acc + elem.rate, 0) / peliculas.length).toFixed(2));
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes (pelis){
    let pelisEnMinutos = JSON.parse(JSON.stringify(pelis));
    pelisEnMinutos.forEach(peli => {
        let timeArr = peli.duration.split(" ");
        let minutes = 0;
        for(let i = 0; i < timeArr.length; i++){
            if(timeArr[i].indexOf('h') != (-1)){
                minutes += parseInt(timeArr[i].substring(0, timeArr[i].indexOf('h'))) * 60;
            } else if (timeArr[i].indexOf('m') != (-1)) {
                minutes += parseInt(timeArr[i].substring(0, timeArr[i].indexOf('m')));
        } 
        }
        peli.duration = minutes;
    });
    return pelisEnMinutos;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
