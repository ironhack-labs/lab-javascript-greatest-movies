/* eslint no-restricted-globals: 'off' */



// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(listOfMovies) { // open the function body

    //my steps:
    //return listOfMovies
    //    .reduce((total, singleElement) => {
    //        return total + parseFloat(singleElement.rate)
    //    }, 0);

    let sumOfRatings = listOfMovies.reduce((accu, element) => {
        let rating = element.rate || 0; // wenn false bspw. leerstring
        if (element.rate === '') rating = 0;
        return accu + parseFloat(rating);
    }, 0)
    return Math.round((sumOfRatings / listOfMovies.length) * 100) / 100;

};

ratesAverage(movies);

// Iteration 2: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(array) {

    if (array === []) return 0;

    let dramaMovies = array.filter(movie => {
        return movie.genre.includes('Drama');
    })
    if (!dramaMovies.length) return 0;
    return ratesAverage(dramaMovies);
}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

// indexOf liefert -1 zurück, wenn Leerstring => muss noch abgefangen werden, falls 0 minuten. 

 let array = Array.from(movies);

    array.forEach((element) => {
        let hour = parseFloat(element.duration.slice(0, element.duration.indexOf("h")));
        let min = parseFloat(element.duration.slice(element.duration.indexOf("h") + 2, element.duration.indexOf("m")));  
        let totalMinutes = hour * 60 + min;    //alles außer + wird auch Strings mit Zahlen implizit umwandeln 
        element.duration = totalMinutes;

        return;
    })

    /*
array.map(movie => )
    */
}

turnHoursToMinutes(movies);

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


function orderByDuration(array) {

    return array.sort((a, b)=> {

        if (a.duration === b.duration) {

            return a.title.localeCompare(b.title);

        } else return a.duration - b.duration;

    })

};

orderByDuration(movies);


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


function howManyMovies(array) {

    return array.filter((element) => {

        return element.director.includes('Spielberg') && element.genre.includes('Drama');

    }).length;

}

howManyMovies(movies);


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {

    let onlyTitles = array.map((element) => {
        return element.title;
    });

    let sortedArray = onlyTitles.sort(function (a, b) {
        return a.localeCompare(b);
    })

    if (sortedArray.length > 20) sortedArray = sortedArray.splice(0, 20);  //if braucht's nicht unbedingt, weniger werden trotzdem behalten.

    return sortedArray;
}

orderAlphabetically(movies);

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {

    let yearOfYoungestMovie = array
        .sort(function (a, b) {
            return a.year.localeCompare(b.year);
        })
        [array.length - 1].year;

    let yearOfOldestMovie = array
    .sort(function (a, b) {
        return a.year.localeCompare(b.year);
    })
    [0].year;


    for (let i = yearOfOldestMovie;i <= yearOfYoungestMovie;i++){
        console.log("Jahr: "+i);
        array.filter(function(element) {
            return element.year === i;
        });
        
    }


    //finish iterating through years ... filter and get ratesAverage(listOfMovies) 

}

bestYearAvg(movies);


/* movie variable example...

let movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },*/