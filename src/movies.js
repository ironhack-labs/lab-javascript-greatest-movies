// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
    const newArray = arr.map((movies) => movies.director);
    return newArray;
  }
  console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {
    const dramaMovies = movies.filter(movies => {
        return (movies['director'] === 'Steven Spielberg' && movies["genre"].includes('Drama'));
    });
    return dramaMovies.length;
}




// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let avrg = movies.filter(movie => movie.rate).reduce(function(total, value) {
    return total + value.rate / movies.length
  }, 0)

  return Number(avrg.toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
  let dramaAvrg = movies.filter(i => i.genre.includes("Drama"))
let avrg = dramaAvrg.reduce(function(total, value) {
return total + value.rate / dramaAvrg.length
}, 0)

return Number(avrg.toFixed(2))
} 


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
  const sorted = arr.sort((a, b) => (a["year"] > b["year"]) ? 1 : -1)
  return sorted
}


console.log(orderByYear(movies));



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const titles = arr.map((x) => x.title);
  const sortedAlphabetically = titles.sort();
  if (sortedAlphabetically.length > 20) {
    return sortedAlphabetically.slice(0, 20);
  } else {
    return sortedAlphabetically;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
