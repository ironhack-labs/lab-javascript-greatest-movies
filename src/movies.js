// Iteration 1: All directors? - Get the array of all directors.
//.map

function getAllDirectors(arr){
    const allDirectors = arr.map(function (movie) {
        return movie.director;
    });    
    return allDirectors;
}
//getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//.filter
function howManyMovies(arr) {
    const dramas = arr.filter(function(movie){
        //console.log(movie.director + ':' + movie.genre) 
        console.log(movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama")!==-1)
       return (movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama")!==-1)    
       
    });
    
    return dramas.length;
}

//howManyMovies(movies);


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
//.reduce

function ratesAverage(arr) {
    const total = arr.reduce(function (acc, movie) {
        
        let new_total = acc + movie.rate;
        console.log("acc = " + acc + " current_movie_rate = " +
         movie.rate + ", new total = " + new_total);
        
        return new_total;
      },0);
  
      console.log("Total: " + total);
      
      let avg = total / arr.length;
      avg = avg.toFixed(2);
      return Number(avg);
  }
  
  ratesAverage(movies);


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const dramas = arr.filter(function(movie){
        //console.log(movie.director + ':' + movie.genre) 
       return (movie.genre.indexOf("Drama")!==-1);
       
    });
    
    let avg_dramas = ratesAverage(dramas);
    return avg_dramas;
}

dramaMoviesRate(movies);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

    function compare( a, b ) {
        if ( a.year < b.year ){
          return -1;
        }
        if ( a.year > b.year ){
          return 1;
        }
        return 0;
      }
      
    let sorted_array = arr.sort( compare );
    
    return sorted_array;
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){ //orders a given array in alphabetical order
    let titles = [];//creates an empty array
    for (let i = 0; i < arr.length; i++){ // loops through the array and finds the first 20
        titles[i] = arr[i].title;
        if(i == 19){
          break;//stops the loop after 20 iterations
        }
    }
    titles = titles.sort();//sorts the arrayof 20 alphabetically - () is default for this (also for increasing in number)
    console.log(titles);//logs the titles
    return 0;
}

orderAlphabetically(movies);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
