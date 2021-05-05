// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors= function(moviesArray) {
    const directors = moviesArray.map (function (element){
    return element.director
  }
  )
    return directors
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

  
const howManyMovies= function(movies) {
    const directorAndGenre = movies.filter( function (movies){
     if (movies.director ==="Steven Spielberg" && movies.genre.includes("Drama"))
     return movies
  })
    return directorAndGenre.length
  }



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {
    const ratesAvg=  movies.reduce(function(accumulator, movie) {
      if (movies.length<0){ 
      return 0
      } else {
     return (accumulator+ movie.rate)
      }
   },0)
    return Math.round((ratesAvg/movies.length)*100)/100 ;
   }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies){
    const ratingDramaMovies = movies.filter(function(movie) {
        if (movie.genre.includes('Drama')){
            return movie
        } else {
            return 0
        }
    })
    const sumRatingDramaMovies= ratingDramaMovies.reduce(function(acc, movie){
      return acc+ movie.rate;
    },0);
   const division = (sumRatingDramaMovies/ratingDramaMovies.length).toFixed(2);
    return parseFloat(division);
 } 
 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
    const orderedByYear = [...movies]
    orderedByYear.sort(function(v1,v2){
        if (v1.year<v2.year) {
        return -1
      } else if (v1.year > v2.year) {
        return 1
      } else {
          return v1.title.toUpperCase() - v2.title.toUpperCase();
      }  
  });
    return orderedByYear
  }
             

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (peliculas) {
    const arrTitles= peliculas.map(function(pelicula){
      return pelicula.title
    });
    arrTitles.sort(function(title1,title2){
    
      if(title1<title2){
        return -1
      } else if (title1>title2) {
        return 1
      } else {
        return 0
      }
      
    })
    
    const twentyTitles= [];
    for (i=0; i<arrTitles.length; i++ ){
      twentyTitles.push(arrTitles[i]);
      if (i=== 19){
        break;
      }
    }
    return twentyTitles
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes= movies.map(function(movie){
    const arrDuration = movie.duration;
    return arrDuration;
  })
  
  const conversor = turnHoursToMinutes.map(function(duration){
  let arrDuration = duration.split(' ');
  let minutes=parseInt(arrDuration[1].slice(-4));
  let hoursToMinutes= (parseInt(arrDuration[0].slice(-2)))*60;
  let totalMinutes= minutes+ hoursToMinutes;
    
    return totalMinutes;
  });
  
  function convertedFilms (movies) {
  for (let i=0; i<movies.length;i++) {
  movies[i].duration= conversor[i];
  }
  }
  convertedFilms (movies);
  
  

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
