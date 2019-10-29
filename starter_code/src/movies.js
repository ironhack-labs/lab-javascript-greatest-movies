/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let moviesCopy = [...movies];
  moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      return 0;
    } else {
      return a.year - b.year;
    }
  });
  return moviesCopy;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  let copyArr = [...movies];
  let mappedArr = copyArr.filter(
    elm => elm.genre.includes("Drama") && elm.director === "Steven Spielberg"
  );

//   console.log(mappedArr);
  return mappedArr.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let newCopyMovies = [...movies];

  newCopyMovies.sort((a, b) => { //sorting de la copy dell'array
    if (a.title > b.title) {
      return 1;
    } if (b.title > a.title) {
      return -1;
    } 
  });
    
    let moviesAlpha = newCopyMovies.map(elm => elm.title).slice(0, 20) // copy dell'array solo con title
   
   

    
     
    return moviesAlpha;

}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    console.log(movies.length)
    

    if (movies.length === 0) {  
        // /// ---> non intiendo, non deberia usar un method sobre cada objecto  de l'array 
        // para averiguar se non està vacio ? asì non funciona solo por l'array intero ?                             
        
        return 0
    }

    let moviesAvr = movies.map(ele => ele.rate).filter(ele => ele.rate = 8)
    console.log(moviesAvr)
    let averageMedia = moviesAvr.reduce(acc, ele => {
        return acc + ele.rate 
    }, 0)

    
    return moviesAvr

    
    
}
        


// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
