// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    const directors = array.map(elm => elm.director);
    return directors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    const spielbergDrama = array.filter(elm => elm.genre.includes('Drama') && elm.director === "Steven Spielberg")
    return spielbergDrama.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimalsç
function ratesAverage(array) {
    if (array.length === 0) {
        return 0
        }      
    const sumRates = array.reduce((acc, elm) => {
        if (elm.rate){
            return acc + elm.rate
        } 
        else {
            return acc
        }   
    }, 0)
   const avg = (sumRates/array.length).toFixed(2)
   return Number(avg)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (array) {
    const dramaMovies= array.filter(elm => elm.genre.includes('Drama'))
    
     if (dramaMovies.length === 0) {
         return 0
            }  
   
    const dramaRates = dramaMovies.reduce((acc,elm)=> {if (elm.rate){
        return acc + elm.rate
    } 
    else {
        return acc
    }   
}, 0)
    const avgDrama = (dramaRates/dramaMovies.length).toFixed(2)      
    return parseFloat(avgDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let newArray = [...array];
    newArray.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } 
      else if (b.year > a.year) {
        return -1;
      } 
      
      else {
        if (a.title > b.title) {
          return 1;
        } 
        else if (b.title > a.title) {
          return -1;
        }
        return 0;
      }
    })
    console.log(newArray)
    return newArray;
    
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
   
    const arrayCopy = JSON.parse(JSON.stringify(array))
    arrayCopy.sort((a, b)=>{
        if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
    })
    if (arrayCopy.length > 20) { return arrayCopy.slice(0, 20).map(elm => elm.title) }
    return arrayCopy.map(elm => elm.title)
 
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
