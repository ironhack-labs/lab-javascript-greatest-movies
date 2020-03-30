/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    let arrYear=[...arr];
    let yearList = arrYear.sort(function(a, b){
        if (a.year < b.year) {
            return -1;
          }
          if (a.year > b.year) {
            return 1;
          }
          if(a.title > b.title){
              return 1
          }
          return -1;
    })
    return yearList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr){
    let movies = arr.filter(function(dir){
        if(dir.director == "Steven Spielberg" && dir.genre.includes("Drama")){ 
        return dir.director.length;
    } return 0
    })
   return movies.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    let newArr=[...arr]
    return newArr = arr.map(function(movie){
        title = movie.title;
        return title
    }).sort().slice(0,20)
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if(arr.length == 0){return 0 } 
  let avg = arr.map(function(avgMovieRate){
    if(!avgMovieRate.rate){
      return 0
    }  
    return avgMovieRate.rate 
    }).reduce(function (acc, cur){    
  return  (acc + cur)
 })
 let val = parseFloat((avg/arr.length).toFixed(2));
 return val
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    if(arr.length == 0){return 0 } 
  let avg = arr.map(function(avgMovieRate){
    if(!avgMovieRate.rate){
      return 0
    }  
    return avgMovieRate.rate 
    }).reduce(function (acc, cur){    
  return  (acc + cur)
 })
 let val = parseFloat((avg/arr.length).toFixed(2));
 return val
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function dramaMoviesRate(arr){
    if(arr.length == 0){return 0 } 
    let avg = arr.map(function(avgMovieRate){
    if(avgMovieRate.genre == 'Drama'){
      console.log(avgMovieRate.rate)
      return avgMovieRate.rate
    }
  }).reduce(function (acc, cur){    
  return  (acc + cur)
  })
   let val = parseFloat((avg/arr.length).toFixed(2));
return val
}

dramaMoviesRate([
        { genre: ['Drama'], rate: 8 },
        { genre: ['Romance'], rate: 9 },
        { genre: ['Drama'], rate: 7 }
      ])
      //expected 7.5
      /* 
        let avg = arr.map(function(avgMovieRate){
    if(!avgMovieRate.rate){
      return 0
    }
    console.log(avgMovieRate.genre)  
    return avgMovieRate.rate 
    }).reduce(function (acc, cur){    
  return  (acc + cur)
 })
 let val = parseFloat((avg/arr.length).toFixed(2));
 return val
      */