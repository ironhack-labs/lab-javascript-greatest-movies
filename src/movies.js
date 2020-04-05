/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrayMovies) {

    let newArrayMovies = Array.from(arrayMovies);


    newArrayMovies.sort((a, b) => a.year === b.year ? (a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1) : a.year - b.year);


    return newArrayMovies

}

orderByYear(movies);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function drama_steven(movie) {

    if (movie.genre.indexOf("Drama") >= 0 && movie.director.indexOf("Steven Spielberg") >= 0) {
        return true
    } else {
        return false
    }
}

function howManyMovies(arrayMovies) {

    let newArray = arrayMovies.filter(drama_steven);
 
    return newArray.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arrayMovies){

    let newArrayMovies = Array.from(arrayMovies);


    newArrayMovies.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1);

    return newArrayMovies.splice(0,20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrayMovies){

    if (arrayMovies.length == 0){
        return 0; 
    }

    let sumaRate = arrayMovies.reduce((acc,movie)=> acc+movie.rate, 0);

    let promedio= sumaRate / arrayMovies.length;

    return Math.round(promedio*100)/100; 

}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrayMovies){

    let dramaMovies = arrayMovies.filter(movie => movie.genre.indexOf("Drama") >= 0);

    let sumaDramaMovies= dramaMovies.reduce((acc,movie)=> acc+movie.rate, 0);

    let promedioDramaMovies= sumaDramaMovies / dramaMovies.length;

    return Math.round(promedioDramaMovies * 100) / 100;

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function get_minutes(duration){
    let newduration = duration.split(" ");
    let hours=parseInt(newduration[0]);
    let minutes= parseInt(newduration[1]);
    let durationMinutes= hours*60+minutes; 
    return durationMinutes; 
}


function transform(item){
    let newItem = JSON.parse(JSON.stringify(item));
    newItem.duration = get_minutes(item.duration);
    return newItem;
}


function turnHoursToMinutes(arrayMovies) {

    let newArrayMovies = arrayMovies.map(transform);

    return newArrayMovies
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
