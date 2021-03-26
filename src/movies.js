// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {
    return movies.map(mappedArray => mappedArray.director); 
};


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const set = new Set([...getAllDirectors(movies)])
const cleanDirectorArray =[...set];

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


const howManyMovies = (array) => {
    let stevensList = array.filter(movieitem=> movieitem.genre.includes('Drama') && movieitem.director === 'Steven Spielberg')
    return stevensList.length
};




// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (array) => {
    if(array.length === 0)
        return 0;
    const numbers = array.map(function(movie) {
    if(!('rate' in movie) || Number.isNaN(movie.rate))
        return 0; 
    else 
        return Number(movie.rate);
    } );
    const sum = numbers.reduce((acc, cur) => {
    return acc + cur
    },0);
    return Math.round(sum / numbers.length*100)/100;
};


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (array) => {
    const dramamovies = array.filter(drama=> drama.genre.includes('Drama'))
    return ratesAverage(dramamovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// const orderByYear = (array) => {
//     if (array.length === 0){return [];}
//     newOrder = array.sort((a,b)=> { 
//     return a.year - b.year 
// })
// return newOrder
// };

const orderByYear = (array) => {
    if (array.length === 0){return [];}
    let orderByAlpha = array.sort(function(a, b) {
      if (a.title === b.title) {return 0 }
      else if (a.title < b.title){ return -1 }
      else {return 1};
      });
    let newOrder = array.sort((a,b)=> { 
    return a.year - b.year 
  })
  return newOrder
  };
  
  console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let titles = arr.map(item => item.title)
    let movieTitlesAlp = titles.sort(function(a, b) {
    if (a === b) {return 0 }
    else if (a < b){ return -1 }
    else {return 1};
    });
    return movieTitlesAlp.slice(0,20)
    
}

console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
