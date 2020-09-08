// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(movies)
  {
  return movies.map(obj => obj.director);
  }

// let getAllDirectors = (movies) => {return movies.map(obj => obj.director);}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies)
  {
  return movies.filter(movie => movie.director == "Steven Spielberg" && movie.genre.includes("Drama")).length;

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    let total = movies.reduce(function (sum, movie) {
        // console.log("accumulator", accumulator) 
        // console.log("movie.rate", movie.rate)
        if (movie.rate){
            return sum + movie.rate / movies.length;
        } else {
            return sum;
        }
      }, 0);

    return Math.round(total *100) / 100;
    
}

/*

let rates Averrage = (movies) => {


    if (movies.length === 0) {
        return 0;
    }

    let sum = 0;
    movies.forEach(movie => {
        sum += movie.rate;
    })

    return Math.round((sum / movies.length) * 100) / 100;
}



*/

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    let dramaMovies =  movies.filter(movies => movies.genre.includes("Drama"));
    return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {


    let newArray = movies.slice(); 

    return  newArray.sort(function (a, b) {
    
    if (a.year === b.year)    {

        return a.title.toLowerCase() > b.title.toLowerCase();

    } else {
        return a.year - b.year;
    }
    
    });
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {

    let arrayCopy = movies.slice();

    arrayCopy.sort(function(a, b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
    })

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
