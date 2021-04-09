// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const directors = movies.map((movie) =>{
        return movie.director;
    })
    return directors;
}
console.log(getAllDirectors(data))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectorsUniquify(movies){
    const directorsUnique = movies.map((movie) =>{
    if (movie.director === -1){
        return movie.director};
    })
    return directorsUnique;
}
console.log(getAllDirectorsUniquify(data))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies){
    const spielbergMovies = movies.filter(movie => movie.director === `Steven Spielberg` && movie.genre.includes('Drama'));
    
        return spielbergMovies.length
             
    }
    console.log(howManyMovies(data))
  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
let rateMovies = movies.reduce(function(rate, movie) { 
    //let noMovie = 0;     
    if(!movie.rate){        
        //noMovie ++ 
         } 
    return rate + movie.rate;
}, 0);
if (movies.length === 0){return 0}
else {let averageRate = rateMovies / movies.length //-noMovie
    return Math.round(averageRate * 100) / 100}
}

console.log(ratesAverage(data))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    if(dramaMovies.length === 0){return 0}
    
    let rateDramaMovies = dramaMovies.reduce(function(rate, movie) {  
        return rate + movie.rate;
    }, 0);
    let averageRate = rateDramaMovies / dramaMovies.length
        return Math.round(averageRate * 100) / 100
    
    }
    
    console.log (dramaMoviesRate(data))
    


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){

    const moviesToOrder = [...movies];
    const orderByYears = moviesToOrder.sort(function (a, b) {
        
        if (a.year > b.year) {
          return 1;
        }
        if (a.year < b.year) {
          return -1;
        }
       if(a.year === b.year){
           if (a.title > b.title){
               return 1;
           }
           if (a.title < b.title){
               return -1
           }
       }
      });

      return orderByYears
      }
      console.log(orderByYear(data))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    
    const getTitles = movies.map((movie) =>{
      return movie.title;
    })
      const orderByTitle = getTitles.sort();
      return orderByTitle.slice(0, 20)
      }
    console.log (orderAlphabetically(data))

// BONUS - Iºteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    const moviesWithMinutes = movies.map((movie) => {
      let newTime = 0;
   if(movie.duration.includes("h")){    
    let times = movie.duration.split("h"); 
     
        newTime = Number(times[0]*60) + Number(times[1].replace("min",""))
      }
      else{
        newTime = Number(movie.duration.replace("min", ""))
      }
      return {...movie, duration:newTime}
    })
   return[...moviesWithMinutes]
   
   
   }
   
   console.log(turnHoursToMinutes(data)) 
  
   

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies){

    const movieYears = movies.map((movie) =>
    {let moviesByYears = []; 
     movieYears.sort(function (a, b) {         
     if(a.year === b.year){      
      moviesByYears.push(movieYears.rate).reduce(function(rate, movie) {  
        return rate + movie.rate;
    }, 0);
     }
     let average = movieYears/movieYears.length
     })    
    })
    return average.slice(0,1)
}
       console.log(bestYearAvg(data))


