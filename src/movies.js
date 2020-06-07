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
    //if (movies === []) return 0;
    const ratesSum = movies.reduce(function (acc, value){
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
  //return newMoviesArr
  let newArr = newMoviesArr.map(function (movie){
      return {
        title: movie.title
      }});
  //return newArr;
  
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



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
