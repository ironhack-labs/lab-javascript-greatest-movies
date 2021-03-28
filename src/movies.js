
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {

  if (arr.length === 0) return null;

  return arr.map(movie => movie.director);;

}
// console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let directors = getAllDirectors(movies);
  //console.log(directors)

function cleanUp (arr) {
  
  return   [...new Set(directors)]  // or arr.filter((a,index) => arr.indexOf(a) ===index )
  
}
//console.log(cleanUp(directors));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  if (arr.length === 0) return 0;

  let filtered = arr.filter(movie => movie.director === "Steven Spielberg")

  if (filtered.length === 0) return 0

  return arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

//console.log(howManyMovies(movies));


// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(arr) {
  if (arr.length === 0) return 0;

  if (arr.length === 1) return arr[0].rate;

  //fix falsies && count average

  let sum = arr.reduce(function (acc, movie) {
    if (!movie.rate) {
      return acc;
    }
    return (acc + movie.rate);
  }, 0);

  let avg = sum / arr.length;

  //console.log(avg);

  return avg.toString() > 1 ? parseFloat(avg.toFixed(2)) : avg;

}

console.log(ratesAverage([{
  rate: 6
}, {
  rate: ''
}, {}]))

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {

  let dramaMovies = arr.filter(movie => movie.genre.includes("Drama"))

  return ratesAverage(dramaMovies)

}
//console.log(dramaMoviesRate(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {

  if (arr.length === 0) return null;
  if (arr.length === 1) return arr;

  return arr.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
}

/*console.log(orderByYear([{
    title: 'abc',
    year: 2002
  },
  {
    title: 'bac',
    year: 1982
  },
  {
    title: 'aab',
    year: 1982
  }
]))*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

  let newArr = JSON.parse(JSON.stringify(arr))  // is this ok or it is betterr to use stringify?

  let sortedTitles = newArr.sort( (a,b) => 
                              {if (a.title < b.title) { return -1;}
                               if (a.title > b.title) { return 1;}
                              return 0; })
                        .map( a=> a.title);
                                            

  return sortedTitles.slice(0,20)

}

orderAlphabetically( [
  { title: 'aab' },
  { title: 'aaa' },
  { title: 'abc' },
  { title: 'acb' },
  { title: 'abb' }
] )  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function convertTime (str) {
  let hours = 0;
  let min = 0;
  if (str.includes('min' && ' ')) { 
    min = parseInt(str.split(' ')[1].split('min')[0]) }
                // split in half and remove 'min'
  if ( str.includes('h'))  { hours = parseInt(str.split('h')[0]); }
  
  else { min = parseInt(str.split('min')[0]) }
  

  let total = hours*60 + min
  return  total
}

//console.log(convertTime(movies[0].duration));

function turnHoursToMinutes(arr) {
  let newArray = JSON.parse(JSON.stringify(arr)) ;
   
  newArray.map(movie => movie.duration = convertTime(movie.duration));

  return newArray;
}

//console.log(typeof turnHoursToMinutes(movies)[2].duration);

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {

  if (arr.length === 0) return null;

  if (arr.length === 1) return 'The best year was ' + arr[0].year + ' with an average rate of ' + arr[0].rate;

  let years = arr.map( a => a.year)  // extract years

  let uniqueYears = [...new Set(years)].sort((a, b) => a - b)   //clean up duplicates and sort
  //console.log(uniqueYears)  
  //console.log('test') 

  let highestAvg = 0; // result
  let bestYear = 0;    // result
  
    // loop through the main array as well as the array with the unique years
    //  sum average for each year and add to the result

  for (let i=0; i<uniqueYears.length; i++) {

    let currentYearMovies = arr.filter(movie => movie.year === uniqueYears[i]);

    let currentSum = currentYearMovies.reduce((acc, movie) =>  acc + movie.rate, 0);

    let currentAvg = currentSum/currentYearMovies.length

    if ( currentAvg > highestAvg) { highestAvg = currentAvg; bestYear = uniqueYears[i]}; 
    
  }

  return `The best year was ${bestYear} with an average rate of ${highestAvg}.`


}

console.log(bestYearAvg(movies));

