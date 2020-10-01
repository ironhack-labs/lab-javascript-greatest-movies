// Iteration 1: All directors? - Get the array of all directors.
    
function getAllDirectors(arr){
    let AllDirectors=arr.map(function(movie)
        {return movie.director;})
    return AllDirectors
    };
    

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
    let stevenMovies=arr.filter(function(movie){
    return movie.director==="Steven Spielberg" && movie.genre.includes("Drama")
    })
    return stevenMovies.length
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    if(arr.length===0){
        return 0;
    }else{
    let filmsWithRate=arr.filter(function(movie){
    return movie.rate>=0;
    })
    let totalRate=filmsWithRate.reduce(function(rate, curr){
     return rate+curr.rate
    },0);
    let avgRate=Math.round(totalRate/arr.length*100)/100;
    return avgRate}
    };

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){

    let dramaMovies=arr.filter(function(movie){
    return movie.genre.includes("Drama");
    });
    if(dramaMovies.length===0){return 0;}
    else{
      let totalRateDM=dramaMovies.reduce(function(rate, curr){
         return rate+curr.rate
        },0);
    
    let avgRateDM=Math.round(totalRateDM/dramaMovies.length*100)/100;
    
    return avgRateDM; }
      
    };

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    let myArr = JSON.parse(JSON.stringify(arr))
    let pelisOrdenadas=myArr.sort(function(a,b){
    if(a.year===b.year){
    return a.title.localeCompare(b.title);
    }
    return a.year - b.year});
    return pelisOrdenadas
    };
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    let myArr = JSON.parse(JSON.stringify(arr));
    let alphabetical=myArr.sort(function(a,b){
    return a.title.localeCompare(b.title);
    }); 
      let first20=alphabetical.filter(function(a,b){
      return a, b<20;
      })
      let first20Title=first20.map(function(movie){
      return movie.title
      })
      return first20Title;
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
