// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = arr => {
  const directors = arr.map(movie => movie.director); // get all directors
  return directors.filter((director, index) => directors.indexOf(director) === index); // if director is already in the list, filter out the duplicate value
};



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = arr => {
  const spielbergMovies = arr.filter(movie => { // create new array
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama"); // get all drama movies from Steven Spielberg 
  }).length; // how many movies are stored in new array?

  return spielbergMovies; // return result of new array 
};

// // ES6 shorthand notation
// const howManyMovies = arr =>  arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;




// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr => {
  if (!arr.length) { // if array us empty
    return 0; // return 0
  }

  const calcTotal = arr.reduce((sum, movie) => { // create variable to store total of ratings
    if(!movie.rate) { // if movie doesn't have a rating
      return sum += 0; // add 0 to sum
    }

    return sum += movie.rate; // add rating number to sum
  }, 0);

  const calcAvg = calcTotal / arr.length; // calculate average rating by dividing total by length of array 
  return parseFloat(calcAvg.toFixed(2)); // returns a floating point number of 2 decimals
}; 




// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr, callback) =>{
  const dramaMovies = arr.filter(movie => { // create new array
    return movie.genre.includes("Drama"); // filters only drama movies
  }); 
  return callback(dramaMovies); // use ratesAverage as callback function to get average of drama movies array
};




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arr => {
  const sortByYear = arr.slice().sort((a, b) => { // use slice to create new array and sort to compare
    if (a.year > b.year) return 1; // order by year, oldest to newest
    if (a.year < b.year) return -1;
  
    if(a.year === b.year) { // if year is the same
      if(a.title > b.title) return 1; // order title alphabetical
      if(a.title < b.title) return -1;
    }
  });
  
  return sortByYear; // return result of new array
};



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr => {
  const sortByTitle = arr.slice().sort((a, b) => { // use slice to create new array and sort to compare
    if (a.title > b.title) return 1; // order title alphabetical
    if (a.title < b.title) return -1;
  });
  
  const firstTwentyTitles = sortByTitle.map(movie => movie.title); // filter new array by title and store them in a new array
  return firstTwentyTitles.slice(0, 20); // use slice to get first 20 results of new array and return result
}





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



const turnHoursToMinutes = (arr) => {
  const movieDuration = arr.map(movie => {

    let hours = movie.duration.slice(0,1);
    hours = Number(hours *= 60);
    
    let minutes = Number(movie.duration.slice(3,5));
    
    let newDuration = hours + minutes; 

    return {
      ...movie,
      duration: newDuration
    }
  })
  return movieDuration;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


const bestYearAvg = (arr) => {
  if (!arr.length){
      return null
  };
  const yearList = arr.map(movie => movie.year);

  return yearList;
};