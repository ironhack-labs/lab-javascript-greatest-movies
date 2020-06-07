// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    return movies.map(function (movie){
        return movie.director;});
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){

    let dramaMovies = movies.filter(function(movie){
    return movie.genre.includes("Drama");});
  
    let dramaMoviesSpielberg = dramaMovies.filter(function(dramaMovie){
    return dramaMovie.director === "Steven Spielberg";
    })
    
    let howManyMoviesDramaSpielberg = dramaMoviesSpielberg.length;
    
  return howManyMoviesDramaSpielberg;
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
  if (movies.length === 0)  
   return 0;

  //newArray is created to validate objects without rate:
   let newArray =  movies.map(function (movie){
        if(!movie.rate){
          movie.rate = 0;
        }
        return movie;});
    
    const ratesSum = newArray.reduce(function (acc, value){
    return acc + value.rate;
    },0);
    
    let avgRate = (ratesSum/movies.length).toFixed(2);
    let avgRateNumber = Number (avgRate);
  
  return avgRateNumber;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
  
  let dramaMovies = movies.filter(function(movie){
    return movie.genre == "Drama";});

  let dramaMoviesLength = dramaMovies.length;

  if(dramaMoviesLength == 0)
return 0;
    
  else {
         let ratesDramaSum = dramaMovies.reduce(function (acc, value){
              return acc + value.rate;
               },0);

    let avgDramaRate = (ratesDramaSum/dramaMovies.length).toFixed(2);
    let avgDramaRateNumber = Number (avgDramaRate);
    return avgDramaRateNumber;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
  let newMoviesArr = movies.map(function (movie){
        return movie});
 
  return newMoviesArr.sort(function(a, b){
       if(a.year === b.year){
         return a.title - b.title;
       } else 
         return a.year - b.year;
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
  let newMoviesArr = movies.map(function (movie){
      return movie});
      newMoviesArr.sort(function (a, b) {
        if(a.title < b.title){
            return -1
          }});
  let newArr = newMoviesArr.map(function (movie){
      return {
        title: movie.title
      }});
  function getMoviesTitles(newArr){
    let moviesTitles = [];
    if (newArr.length < 20){
    for (let i=0; i < newArr.length; i++){
          moviesTitles.push(newArr[i].title);
        }
    return moviesTitles;
    } else {
    for (let j=0; j < 20; j++){
          moviesTitles.push(newArr[j].title);
        }
    return moviesTitles;
    }
}

return  getMoviesTitles(newArr);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
  let moviesTimeinMinuts = movies.map(function (movie){
      let hours = Number (movie.duration.charAt(0));
      let minutes = '0';
      if(movie.duration.length === 8){
        minutes = Number (movie.duration.charAt(3) + movie.duration.charAt(4));
      } else {
        minutes = Number (movie.duration.charAt(3));
      }
      let totalTime = (hours*60) + minutes;
      movie.duration = totalTime;
    ;});
  return movies;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
