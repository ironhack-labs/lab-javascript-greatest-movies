// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (arr){ 
    let allDirectors = arr.map((item)=>{ 
        return item.director
    })
    return allDirectors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (array) => {
    let stevensList = array.filter(item=> item.genre.includes('Drama') 
    && item.director === 'Steven Spielberg')
    return stevensList.length
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arg) {
  const totalRate = (params) => {
    if (!params.rate) {
      return 0;
    }
    return params.rate;
  };
  let Avg = arg.reduce((acc, el) => {
    acc += totalRate(el) / arg.length;
    return acc;
  }, 0);
  return Number(Avg.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
 
 function dramaMoviesRate(drama){
  let total = 0
  let result =  drama.map(item => total += item.rate);
  return parseFloat (total/drama.length)  
}

 const dramaRate = (movielist) => {
  const drama = movielist.filter(item.genre.includes('Drama'))
    return drama.length
 };

 
  
 // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (arr){ 
    let prem = arr.map((item)=>{ 
        return item.year
    })
    return prem
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(abc) {
  let alpha = abc.map((item)=>{ 
    return item.title
})
return alpha
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
