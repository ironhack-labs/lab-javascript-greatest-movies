/* eslint no-restricted-globals: 'off' */
// Iteration 1: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = arr => {
  const sum = arr.reduce((acc, num) => acc + Number(num.rate), 0)
  const average = sum / arr.length
  return average
 }
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
  let dramaMovies = arr.filter(drama => {
      return drama.genre.find(element => {
          //return element == 'Drama';
          if(element == 'Drama')
              return element;
          else
              return 0;
      })
  });
  let sumAver = dramaMovies.reduce((sum, movie)=> sum + parseFloat(movie.rate),0);
let average = sumAver / dramaMovies.length;
return average;
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(arr){
  var filterValue = 'year' // using a dummy one for now
  arr.sort(function(a, b){
      if (a[filterValue] > b[filterValue]) return 1;
      if (a[filterValue] < b[filterValue]) return -1;
      //check your filters
      if (a.title < b.title ) return -1;
      if (a.title > b.title ) return 1;
      //then check their last names
      return 0;
  });
  return arr;
 }
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr){
  let dramaSpielbergMovies = arr.filter(drama => {
      if(drama.director == 'Steven Spielberg'){
   return drama.genre.find(element => {
          if(element == 'Drama')
              return element;
          else
              return 0;
      });
 } else {
   return 0;
 }
  });
  return dramaSpielbergMovies;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
  let newArrayTitles=[];
  if (arr.length > 20){
    for(let i = 0; i<20; i++){
    newArrayTitles.push(arr[i].title);
  }
    newArrayTitles.sort(function(a, b){
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  return newArrayTitles;
  } else {
    var filterValue = 'title';
    for(let i = 0; i<arr.length; i++){
    newArrayTitles.push(arr[i].title);
  }
  newArrayTitles.sort(function(a, b){
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
  });
  return newArrayTitles;
  }
 }
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
let horas="";
let minutos="";
let duration;
let newArray = arr;
for(let i = 0; i<arr.length; i++){
    if (arr[i].duration[1] == 'h') {
        horas = (parseInt(arr[i].duration[0]))*60;
    }
    if (arr[i].duration[5] == 'm') {
        minutos = parseInt(arr[i].duration[3] + arr[i].duration[4]);
    }
duration = horas + minutos;
newArray[i].duration = duration;
}
return newArray;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average