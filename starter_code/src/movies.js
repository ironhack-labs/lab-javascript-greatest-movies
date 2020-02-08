/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

let copy = movies.slice(0, 250);
let orderByYear = copy.sort(function(a,b) {return a.year - b.year})


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

let howManyMovies = movies.filter(function(movie){
   if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
       return true;
   }else {return false;}
})


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
// 1st map title property : 

let mapTitle = movies.map(function(movie){return movie.title});

let orderAlphabetically = mapTitle.sort()  //the array of movies sorted alphabetically. Now we extract only the first 20.

let twentyFirst = orderAlphabetically.slice(0, 20);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

let mapRatings = movies.map(function(movie){return movie.rate});
let ratesAverage = (mapRatings.reduce(function(sum, el) { return sum + el })) / (movies.length)
ratesAverage = Math.round((ratesAverage + Number.EPSILON) * 100) / 100; // rounds up to 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies
//map the ratings of the drama movies
//first filter the drama movies :
let filterDrama = movies.filter(function(movie){
    if(movie.genre.includes("Drama")){
        return true;
    }else {return false;}
 })
 // then map the ratings of the filtered drama array :

 let mapDramaRatings = filterDrama.map(function(drama){return drama.rate});

 //Reduce the mapped drama rating array : 
 let dramaMoviesRate = (mapDramaRatings.reduce(function(sum, el) { return sum + el })) / (mapDramaRatings.length)
 dramaMoviesRate = Math.round((dramaMoviesRate + Number.EPSILON) * 100) / 100;

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//work on the copy, 1st map the durations :

let mapDurations = copy.map(function(movie){return movie.duration});

"2h 22min".split(" ")


// BONUS Iteration: Best yearly rate average - Best yearly rate average
