// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
    newarray = arr.map(myFunction)
    return newarray
  }
  
  function myFunction(val) {
    return val.director ;
  }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
let dirs = getAllDirectors(movies)
let directors = new Set(dirs)
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
  if(arr.length < 1) return 0
    let b = movies.filter( function(item){return (item.director == 'Steven Spielberg' && item.genre.indexOf("Drama") != -1 )})
    if(b.length > 0){
     return b.length}
     else{ return 0}
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if(arr.length < 1) return 0
    let d = arr.reduce((a, b) => ({rate: a.rate + b.rate}))
    let all = arr.length
    return Number((d.rate/all).toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
  let genreString = arr.map(function(movie){
    return movie.genre;
});
  let all = arr.length;
  let count = 0;
  for(i in genreString){
    if(genreString[i].indexOf("Drama") > -1 )
    count += 1
  }
  return count/all
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
  function compare( a, b ) {
  if( a.year == b.year && a.title < b.title){
    return -1;
  }
  if( a.year == b.year && a.title > b.title){
    return 1;
  }
  if ( a.year < b.year ){
    return -1;
  }
  if ( a.year > b.year ){
    return 1;
  }
  return 0;
}

let sorted = JSON.parse(JSON.stringify(arr))
sorted = sorted.sort( compare )
return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
  function compare( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}

let sorted = JSON.parse(JSON.stringify(arr))
sorted = sorted.sort( compare )
let newarray = sorted.map(function (val) {
  return val.title
  });
return newarray.slice(0 , 20) 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
  let list = JSON.parse(JSON.stringify(arr))
  let time = ''
  let min = 0
  for(i in list){
    time = list[i].duration.split(' ')
    let hr = Number(time[0][0])*60
    if(time.length == 2){
      min = Number((time[1].split('m'))[0])
    }
    list[i].duration = (hr + min)
    
  }
  return list
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
