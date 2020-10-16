// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors =(movies) => {
    const directorlist= movies.map((getAllDirectors)=>{
    return getAllDirectors.director;
    })
    return directorlist
    }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
const listOfSteveDramaMovies = movies.filter((directorNameList) => {
return directorNameList.director === "Steven Spielberg" && directorNameList.genre.includes("Drama")
});
return listOfSteveDramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage =(movies) => {
    if (!Array.isArray(movies) || !movies.length) {
        return 0;
    }
    var rates = movies.reduce(function (avg, movie) {
      if(movie.hasOwnProperty('rate')){
         avg += (movie.rate);
      }
      return avg;
     }, 0);

     var average = rates / movies.length;
     return parseFloat(parseFloat(average).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate =(movies) => {
    const dramaMovieList = movies.filter((movie) => {
        return movie.genre.includes("Drama");
        
    });
    if (!Array.isArray(dramaMovieList) || !dramaMovieList.length) {
        return 0;
    }
 
 var average = dramaMovieList.reduce(function (avg, item) {
   return avg + ((item.rate) / dramaMovieList.length);
}, 0);
return parseFloat(parseFloat(average).toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)  
const orderByYear =(movies) => {
    if (!Array.isArray(movies) || !movies.length) {
        return 0;
    }
    let ascendingOrder = movies.year

    movies.year.sort((a, b) => a - b);
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let moviesTitle = movies.map(function (title) {
        return title.title;
      });
    let moviesTitleSort = moviesTitle.sort();
    return moviesTitleSort.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
