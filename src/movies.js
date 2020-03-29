/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)



function orderByYear(arr) {


    const alpha = [...arr].sort(function compare(a, b) {
        if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
    });
    
    const byYear = alpha.sort(function compare(a, b) {
        return a.year - b.year;
    });

    return byYear;

};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {

    const steveMovies = arr.filter(function(movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")
    })
    return steveMovies.length;
};



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arr) {
    const alpha = [...arr].map(function(movie){
        return movie.title;
    }).sort();
    return alpha.slice(0, 20);

};


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {

    let newArr = [...arr]; //trying to not mutuate the original array, but unsucessful. 

    if (newArr.length === 0) return 0;

    newArr = newArr.map(function (movie){
    if (!movie.rate) movie.rate = 0;
    return movie;
    });
    
    /*Question: Why does the functoin on line 60 seem to mutate the original array, even though I created
    a new array at the beginning with spread?
    1. I thought spread could copy the array (I also tried .slice())
    2. I thought map did not mutate the array
    */

    const sumRating = newArr.reduce(function(sum, movie){
        return sum + movie.rate;
    }, 0)

    const avgRating = sumRating / newArr.length;

    return parseFloat(avgRating.toFixed(2));
};


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    

    const dramaMovies = arr.filter(function(movie){
        return movie.genre.includes("Drama")
    })


    if (dramaMovies.length === 0) return 0;

    const dramaSum = dramaMovies.reduce(function(sum, movie){
        return sum + movie.rate;
    }, 0)

    return Math.round((dramaSum / dramaMovies.length) * 100) / 100
    /*Not entirely sure what "It should return the average of the array, float!" means and how that
    differs from making sure that the answer is a Number. */
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes



function turnHoursToMinutes(arr) {

    let newArr = arr.slice();
    newArr = newArr.map(function(movie){
        let newDuration = 0;
        let splitDur = movie.duration.split(" ");

        for (let val of splitDur) {
        if(val.includes("h")) newDuration += parseInt(val)*60;       
        if(val.includes("min")) newDuration += parseInt(val); 
        }

        movie.duration = parseInt(newDuration);

        return movie;
   });
   return newArr;
}

/* Still having trouble not changing the initial array. 
For some reason Jasmine says that my duration is not a number. I am not sure why. */



// BONUS Iteration: Best yearly rate average - Best yearly rate average


