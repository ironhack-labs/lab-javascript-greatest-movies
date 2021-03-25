// Iteration 1: All directors? - Get the array of all directors.

 function getAllDirectors(movies){
      let directors = movies.map((movie) =>  movie.director)
        return directors;
    }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?



function howManyMovies(array){
    let movieCounter = array.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        
        
    })
    
    return movieCounter.length;
    
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(){
    let finalAvg = movies.reduce((acc, el, index, arr) => {
    acc += el.rate / movies.length;
    
    return acc;
  }, 0)
  
  return finalAvg;
} 
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    let movieCounter = array.filter((movie) => {
        
        return movie.genre.includes("Drama")
    })

    let dramaAvg = movieCounter.reduce((acc, el, index, arr) => {
        acc += el.rate / movieCounter.length;
        
        return acc;
      }, 0)
    
    
    return (Number(dramaAvg.toFixed(2)));
    
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    let array2 = array.map((movie) => {
        return movie;
    });
     let sortedYears = array2.sort((el1, el2) => {
        if(el1.year < el2.year){
            return -1;
          } else if(el1.year > el2.year){
            return 1;
          } else {
            return 0;
          }
  });
  return sortedYears;
  }
  orderByYear(movies)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    let movArr = array.map((movie)=> {
        return movie.title;
    });
    
    let first20 = movArr.sort((mov1, mov2)=>{
        if(mov1<mov2){
            return -1;
        } else if (mov1>mov2){
            return 1;
        }
    })
    return first20.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
