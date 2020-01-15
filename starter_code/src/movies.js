/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){

    let copiedArray = [...movies]

    copiedArray.sort((a,b) => {
     if(a.year === b.year){
         if(a.title > b.title) return 1
         if(a.title < b.title) return -1
         return 0
     } else return a.year - b.year

    })

    return copiedArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){

    let dramaFilter = movies.filter(movie => movie.genre.includes("Drama") && movie.director === "Steven Spielberg")

    return dramaFilter.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies){
    
    let newArray = movies.map(m => m.title)

    const sorted = newArray.sort(function(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    })

    return newArray.splice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){

    if (movies.length === 0) return 0;

    /* for (let i=0; i<movies.length; i++){
        if (isNaN(movies[i].rate)){
            movies[i].rate === 0
        }

        */
   
    let moviesRates = movies.reduce(function(sum, movies){
        return sum + movies.rate
   }, 0);

    let result = moviesRates/movies.length;

    return Number(result.toFixed(2));

}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){

    let dramaFilter = movies.filter(movie => movie.genre.includes("Drama"));

    const avg = ratesAverage(dramaFilter)
    
    console.log(avg)
    return avg;
}


/*Option 2: 

function dramaMoviesRate(movies){
    return ratesAverage(movies.filter(movie => movie.genre.includes("Drama")))
}

*/



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    
    let movieDuration = movies.map(movie => movie.duration.split(' '));
    let timeInMinutes = [];
  
    for (let i = 0 ; i < movieDuration.length ; i++) {
  
      let hours = 0;
      let minutes = 0;
  
      if (movieDuration[i][0].includes("h")) {
        hours = (movieDuration[i][0]).substring(0, movieDuration[i][0].length-1);
      }
  
      if (!movieDuration[i][0].includes("h")) {  
        minutes = (movieDuration[i][0]).substring(0, movieDuration[i][0].length-3);
  
      } else if (movieDuration[i].length > 1) {
        minutes = movieDuration[i][1].substring(0, movieDuration[i][1].length-3)
      };
  
      timeInMinutes.push(Number(hours * 60 + Number(minutes)));
    }
  
    let moviesInMinutes = [...movies];
  
    for (let i=0; i< moviesInMinutes.length; i++) {
      moviesInMinutes[i].duration = Number(timeInMinutes[i]);
    }
  
    console.log(typeof moviesInMinutes[0].duration)
    return moviesInMinutes;
  }



// BONUS Iteration: Best yearly rate average - Best yearly rate average
