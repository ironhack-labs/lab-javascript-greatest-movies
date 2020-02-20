
/* eslint no-restricted-globals: 'off' */




// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    const newArr = [...array];
      newArr.sort((a,b) => {
  if(a.year == b.year){
    if(a.title > b.title){
      return -1
    }else if(a.title < b.title){
      return 1
    }else{
      return 0
    }
  }else{
      return a.year - b.year
    }
  });
  return newArr
  }
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
    let spielbergMovies = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1 );
     return spielbergMovies
     }
     howManyMovies(movies);


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    const newArr2 = [...array]
      newArr2.sort((a,b) => {
    if(a.title > b.title){
      return -1
    }else if(a.title < b.title){
      return 1
    }
  });
  
  return newArr2.slice(0,19); 
  
  }
  
  orderAlphabetically(movies);
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    const rateAv = array.map(movie => movie.rate );
    let sum = rateAv.reduce(function(previousValue, currentValue,)  {return previousValue + currentValue});
    
    return Math.round( sum / rateAv.length * 100 ) / 100
}

ratesAverage(movies)
// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
