/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let newArray = [];
  newArray = movies.map(movie => movie);

  newArray.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


function howManyMovies(movies){
    let filteredArray = [];
     filteredArray = movies.filter(movie => {
        let bool = false; 
        if (movie.director === "Steven Spielberg") {
             movie.genre.forEach(genre1 => {
             console.log(genre1);
             if (genre1 === "Drama"){
                 bool =true;
                }
             }
             )  
             return bool;
         } 
         return false; 
        }
     )
     console.log(filteredArray);
    return filteredArray.length;
   }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {
    let newArray = [];
    newArray = movies.map(movie => movie.title);

    newArray.sort((a, b) => {
        if (a < b ) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      });
    
    if (newArray.length > 20) {
       return (newArray.slice(0,20)) ;
    } else {
      return newArray;
    }
  }


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
 
function ratesAverage(movies) {
    let avg = 0;
    if (movies.length === 0) {
        return avg;
    }
    avg = movies.reduce((accu,curr) => {
        if (curr.rate){
          accu = accu + curr.rate;
        }
       return accu;
    }, 0) 

    avg = avg / movies.length;
    return (Number(avg.toFixed(2)));
}
 
// Iteration 5: Drama movies - Get the average of Drama Movies

const getDramaMovies = (movies) => {
    let newArray= [];
    newArray = movies.filter(movie => {
        if (movie.genre.includes("Drama")) {
         return true; 
        } else {
            return false;
        }
    })
    return newArray;
   }

const dramaMoviesRate = (movies) => {
  let dramaArray =[];
  let avg = 0;
   dramaArray = getDramaMovies(movies);
   avg = ratesAverage(dramaArray);
   return avg;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

 const turnHoursToMinutes = (movies) => {
  let newArray = [];
  let hours = [0];
  let mins = [0];
  let splitArray;
  
   newArray = movies.map( movie => {   
        let newObj = {};
        newObj.title = movie.title;
        newObj.year = movie.year;
        newObj.director = movie.director;
        newObj.genre = movie.genre;
        newObj.rate = movie.rate;
        newObj.duration = movie.duration;

        splitArray = newObj.duration.split(' ');

        if (splitArray[0].search(/min/g) > 0 ) {
           mins = (splitArray[0].split('min'));
        } else if (splitArray[0].search(/h/g) > 0){
           hours = (splitArray[0].split('h')); 
        } 
        if (splitArray.length === 2) {
            if (splitArray[1].search(/min/g) > 0 ) {
                mins = (splitArray[1].split('min'));
            } 
        }     
        newObj.duration = ((Number(hours[0])  * 60) + Number(mins[0]) );
     return newObj;
      });
 return newArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = (movies) => {
  let newArray = []; 
  if (movies.length === 0 ) {
    return null;
  }
  newArray = movies.map ( movie => {
    let newObj = {};
    newObj.year = movie.year;
    newObj.rate = movie.rate;
    return newObj;
  } )
   newArray.sort( (movie1,movie2) => {
     if (movie1.year < movie2.year) {
       return -1;
     } else if(movie1.year > movie2.year) {
       return 1;
     } else {
       return 0;
     }
   }) 

   let yearBestAvg;
   let bestAvg = 0;
   let currYear = 0;
   let avgRatingPerYear = 0;
   let totalRatingPerYear = 0;
   let noOfMoviesInYear = 0;

   newArray.forEach(movie => {   
    if (currYear !== 0 && currYear !== movie.year){
      avgRatingPerYear = totalRatingPerYear/ noOfMoviesInYear;
      if (bestAvg < avgRatingPerYear) {
        bestAvg = avgRatingPerYear;
        yearBestAvg = currYear;
      }
      avgRatingPerYear = 0;
      totalRatingPerYear = 0;
      noOfMoviesInYear = 0;      
    }
     currYear = movie.year;

     noOfMoviesInYear++;
     totalRatingPerYear = totalRatingPerYear + movie.rate;
   } )
   avgRatingPerYear = totalRatingPerYear/ noOfMoviesInYear;
   if (bestAvg < avgRatingPerYear) {
     bestAvg = avgRatingPerYear;
     yearBestAvg = currYear;
   }
  return `The best year was ${yearBestAvg} with an average rate of ${bestAvg}`; 
}

