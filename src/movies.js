// Iteration 1: All directors? - Get the array of all directors.


const getAllDirectors = (movies) => {
const directorList = movies.map((names) => {
    return names.director;
  });
return directorList
}
 
 //console.log(getAllDirectors);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//const howManyMovies = movies.filter((directorNameList) => directorNameList.director === "Steven Spielberg" && directorNameList.genre.includes("Drama"));

const howManyMovies = (movies) => {
    const listOfSteveDramaMovies = movies.filter((directorNameList) => {
        return directorNameList.director === "Steven Spielberg" && directorNameList.genre.includes("Drama")
        
      
    });
    return listOfSteveDramaMovies.length;
  } 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (!movies.length){
    return 0
  }
  const extractRateList = movies.map((items) => {
    
    return items.rate
    
  })
  
    
 
  let calculateAverageRate = extractRateList.reduce((acc,currentValue) => {
    
    
    return acc + currentValue
      
  })
  
  return Math.round((calculateAverageRate/extractRateList.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    const filterMoviesDrama = movies.filter((item) => {
  
     return item.genre.includes("Drama")
    });
    

    const dramaAverage = ratesAverage(filterMoviesDrama)
    return dramaAverage
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    let sortedMovies = [...movies].sort((a,b) => {
     
        return compare(a,b);
        
        
    });
    return sortedMovies;
};
function compare(a,b){
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year){
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    }
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    const titleOrderList = movies.map((titleList) => {
      return titleList.title;
    })
    let orderOfList = titleOrderList.sort();
   return orderOfList.slice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
