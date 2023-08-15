// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const allDirectors = movies.map((movie) => movie.director)
    return allDirectors;
}
//No duplicates
function noDuplicatesList(movies){
    let noDuplicatesList = (movies.map((movie) => movie.director)).reduce((acc, curr)=> {
     if (!acc.includes(curr))
        acc.push(curr);
        return acc;
      }, []);
      return noDuplicatesList;
    }
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length===0 ){ return 0}

const spilbergMovies = moviesArray.filter((movie)=> movie.director === 'Steven Spielberg' && movie.genre.includes("Drama"))
    return spilbergMovies.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length===0 ){ return 0}
  
    const sumScore = moviesArray.reduce((acc, curr) => {
        if (curr.score !== undefined && curr.score !== null) {
        return (acc+ curr.score) } else
        return acc},0)

    const avgScore = Number((sumScore/moviesArray.length).toFixed(2))
    return avgScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let getSumDramaScore = []
    const filteredDramasList = moviesArray.filter((movie)=> movie.genre.includes("Drama"))

    if (filteredDramasList.length === 0){
        return 0;
    }
    getSumDramaScore = filteredDramasList.reduce((acc, curr) => acc + curr.score,0)
    const dramaMoviesScore= Number((getSumDramaScore/ filteredDramasList.length).toFixed(2));
    return dramaMoviesScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newSortedArray = moviesArray.slice().sort((a,b)=> {
        if ( a.year=== b.year){  
            return a.title.localeCompare(b.title)
    }
    return a.year - b.year;
});
    return newSortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newOrderedArray = movies.slice().sort((a,b)=> a.title.localeCompare(b.title))
    // const moviesList = (newOrderedArray.map((movie)=>movie.title)).slice(0,20);
   const moviesList = newOrderedArray.map((movie)=>movie.title)

   const shortList = moviesList.slice(0,20);
    if (moviesList.length < 20) {
        return moviesList;
    } else {
        return shortList;
    } 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
