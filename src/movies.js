// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    let answer1 = movies.map((movie) => {
        return movie.director;
    })
return answer1;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    let drama;
    let spiel = movies.filter((movie) => {
    for (let i=0; i < movie.genre.length; i++){
       drama = movie.genre[i] == "Drama" && movie.director == "Steven Spielberg";
       if(drama){break;}
    } 
    return drama
}) 
return spiel.length;
};


// Iteration 3: All rates average - Get the average of all rates with 2 decimals



function ratesAverage(arrMovies) {
    let sum = arrMovies.reduce(function(acc, elem){
        return acc + elem.rate
    }, 0)
  let avgRate = sum / arrMovies.length
  return avgRate
};

//return avgRate.toFixed(2);   breaks code


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let drama = array.filter((element) => {
    return element.genre == "drama";
    })
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArr) {
    moviesCopy = JSON.parse(JSON.stringify(movieArr));
    moviesCopy.sort (function(a,b){
             if (a.year > b.year){
                return 1;
              }
              else if(a.year < b.year) {
                 return -1;
              }
              else {
                return 0;
              }
        })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(titles) {
   for (let i=0; 1 <21 ; i++) {
    let order = titles.sort (function(a,b){
        if (a.title > b.title){
           return 1;
         }
         else if(a.title < b.title) {
            return -1;
         }
         else {
           return 0;
         }
   })
   }
}

// This is where Jasmine completely gave up on me. Kept loading and crashing

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
