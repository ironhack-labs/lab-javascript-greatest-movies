// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    let directorsArr = array.map((elem)=>{
    return elem.director
    })
    return directorsArr
    }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    
    let filterArray = array.filter((elem)=>{
        return (elem.director==="Steven Spielberg" && elem.genre.indexOf("Drama") != -1)
      })
      return filterArray.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if(array.length === 0){
        return 0
    }
    let average = array.reduce((acc, elem)=>{
      return acc + elem.rate
    }, 0)
    return average / array.length
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    let dramaMovies = array.reduce((acc, elem)=>{
      if(elem.genre.includes("Drama")){
        return acc + elem.rate
      } else{
        return acc
      }
    }, 0)
    return dramaMovies / dramaMovies.length
  }
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    let yearSort = array.sort((a,b)=>{
              if(a.year > b.year){
                  return 1
              } else if(a.year < b.year){
                  return -1
              } else {
                  if (a.title > b.title) {
                      return 1;
                  }
                  else if (a.title < b.title) {
                      return -1;
                  }
                  else {
                      return 0;
                  }
              }
          })
    return yearSort
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let oredered = array.sort((a,b)=>{
      if(a.title > b.title){
        return 1
      } else if(a.title < b.title){
        return 1
      }else {
        return 0
      }
    })
    if(array.length > 20){
      array.splice(20)
    }
    return oredered
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
