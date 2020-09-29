// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (array){
   let newArray = array.map((e) => { 
    return e.director
   })
   console.log(newArray) 
   return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (array){
    let newArray = array.filter((e) =>{
        return e.director === "Steven Spielberg"&&e.genre.includes("Drama")
    })
    return newArray.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (array){
    let newArray = array.reduce((accumulativo, e) => {
        return accumulativo + (e.rate || 0 )
    },0)
    
    return (Math.round(newArray/array.length*100)/100 || 0)
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array){
    let newArray = array.filter(function (e) { 
        return e.genre.includes("Drama") 
       })
    return ratesAverage (newArray)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

orderByYear = (array) => {
    let newArray = array.map(item=> item).sort((a,b)=>
     {
         if(a.year === b.year){
            if (a.title > b.title) {
                return 1;
              }
              if (a.title < b.title) {
                return -1;
              }
              return 0;
         }else{
             return a.year - b.year
         }
     }
)
    return newArray
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array){
    let newArray = array.map ((e) => e.title).sort((a, b) =>{
        if (a > b) {
            return 1;
          }
          if (a < b) {
            return -1;
          }
          return 0;});
    if (array.length >= 20){
        return newArray.slice(0,20)
    }
    return newArray


    
}













// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
