

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(dir){
    let newDir = dir.map(function(movie){
        return movie.director;
    })
    return newDir;
}
//Version courte
// function getAllDirectors(array){
//     let dir = array.map( =>toto toto.director);
//     return dir;
// }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(cinema) {
    let cinemaSpiel = cinema.filter(function (film) {
      return film.director == "Steven Spielberg" && film.genre.includes("Drama");
    }).length;
    return cinemaSpiel;
  }
  console.log(howManyMovies(cinema));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    let findRate = array.reduce(function(acc, val){
        acc += val.rate;
        return acc;
    }, 0) / array.length;
    return array.length === 0 ? 0 : Number(findRate.toFixed(2));
}
// console.log(rateAverage(movies));

//testing average reduce with a random array 
// let vals = [5, 4, 1, 2, 9];
// let sum = vals.reduce((acc, val) => (acc + val)/vals.length);
// console.log(sum.toFixed(2));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    let isDrama = array.filter(function(movie){
        return movie.genre.includes("Drama")
    });
    let accumulator = isDrama.reduce(function(acc, val){
        acc += val.rate;
        return acc;
    }, 0) / array.length;
    return array.length === 0 ? 0 : Number(accumulator.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    let newArray = array.sort((firstYear, secondYear) => firstYear.year - secondYear.year || firstYear.title.localeCompare(secondYear.title));
    let arr2 = [...newArray];
    return arr2;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    let titles = array.map((movie) => movie.title);
    let sortedTitles = titles.sort();
    let only20 = sortedTitles.slice(0, 20);
    return only20;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
