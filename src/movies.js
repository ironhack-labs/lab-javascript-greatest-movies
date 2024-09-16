// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors= moviesArray.map((movie)=>movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergDrama= moviesArray.filter((movie)=> {
        return movie.director===`Steven Spielberg` && movie.genre.includes("Drama");
    }   )
    return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    const total = moviesArray.filter (movieArray => movieArray.score!=="" && movieArray.score).reduce((accumulator, movies) => {
       
        return accumulator + movies.score;
      },0); 
      console.log(total);
      return parseFloat((total/moviesArray.length).toFixed(2));
     
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let length=0;
    if (!moviesArray.length) return 0;
    const total = moviesArray.filter (movieArray => movieArray.score!=="" && movieArray.score && movieArray.genre.includes("Drama")).reduce((accumulator, movies) => {
        length++;
         return accumulator + movies.score;
      },0); 
      console.log(total);
      console.log(length);
      if (length===0) return 0;
      return parseFloat((total/length).toFixed(2));
     
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesSorted= [...moviesArray];

    moviesSorted.sort(function (a, b) {
        if (a.year < b.year) return -1; 
        if (a.year > b.year) return 1; 
        if (a.year === b.year)
            if (a.title<b.title) return -1;
            else return 1;
      });
      return moviesSorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    //const moviesSorted= [...moviesArray];
    
   let moviesSorted= moviesArray.map((movie)=>movie.title).sort(function (a, b) {
        if (a< b) return -1; 
        if (a > b) return 1; 
        else return 0;
    });
    let firstTwentySorted= moviesSorted.slice(0,20);
    return firstTwentySorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
    
        const moviesMinutes = moviesArray.map((movie) => {
          let minutosPelicula = 0;
          if (movie.duration.indexOf("h", [0]) !== -1) {
            minutosPelicula = parseInt(movie.duration.charAt(0) * 60);
          }
          if (movie.duration.indexOf("min", [0]) !== -1) {
            minutosPelicula += parseInt(movie.duration.slice(-5, -3))
          };
          const newMovieObject = {};
          for (data in movie) {
            newMovieObject.data = movie[data];
          }
          newMovieObject.duration = minutosPelicula;
          return newMovieObject;
        });
        return moviesMinutes;
      }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
let totalPerYear=0;
let length=0; 
if (!moviesArray.length) return null;
const sortedArray=[];
for (let i=1900; i<=2022;i++){  
    totalPerYear = moviesArray.filter (movieArray => movieArray.score!=="" && movieArray.score && movieArray.year===i).reduce((accumulator, movies) => {
        length++;
         return accumulator + movies.score;
      },0);
      if (length!==0){
      sortedArray.push({"year":i, "averageScore":(totalPerYear/length)})}
      length=0;
    }
    
    sortedArray.sort(function (a, b) {
        if (a.averageScore< b.averageScore) return 1; 
        if (a.averageScore > b.averageScore) return -1; 
        else return 0;
    });
    
return (`The best year was ${sortedArray[0].year} with an average score of ${sortedArray[0].averageScore}`);
}
