/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
    let moviesByOrder = [...arr]; 
    moviesByOrder.sort((a, b) => {
if (a.year === b.year){
    return a.title.localeCompare(b.title);
}
  return a.year - b.year;
})
return moviesByOrder;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (dramaMovies) =>{
    let drama = [];
    drama = dramaMovies
    .filter(e => e.director === 'Steven Spielberg' && e.genre.includes('Drama'));
    
    return drama.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


const orderAlphabetically = (arr) => {
    let arrMovies20 = arr.map(e => e.title).sort((a, b) => {
      return a.localeCompare(b)
    }).filter((e, i) => {
      
        return i < 20;
    })
  
    return arrMovies20;
  }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

    
const ratesAverage = (arr) => {
    if(arr.length === 0) return 0;
    let rates = arr.reduce((ac, movie) => (ac + Number(movie.rate)),0);
    return Number((rates / arr.length).toFixed(2));
}


// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
