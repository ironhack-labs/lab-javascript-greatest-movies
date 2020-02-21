/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const newarray = [...array]
    newarray.sort(function(a, b) {
    if (a.year === b.year) {
      if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          } else {
            return 0;
          }
        } else {return a.year - b.year}
    })
     
      
      return newarray;
    
    }
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
    if(array == 0){
      return 0;
    }
    const movi = array.filter(function(pelicula){
      if(pelicula.director === "Steven Spielberg" && pelicula.genre.includes("Drama"))
        return pelicula;
    })
    return movi.length
     
     }
   howManyMovies(movies);
      
          
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
  const nuevoArr = array.map(pelicula => pelicula.title );
    nuevoArr.sort();
    const top20 = nuevoArr.slice(0,20);
    return top20;
 
   }
  orderAlphabetically(movies);
  
  // Iteration 4: All rates average - Get the average of all rates with 2 decimals
 
     
  function ratesAverage(array){
    const corte = [...array]
    let sli = corte.slice(0,8);
    let numeros = array.slice(1, 8);
  let total = sli.reduce(function(a, b){return "total elementos" + sli.length});
  
  return 1;
   
  
   
  }
  ratesAverage(movies)

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
