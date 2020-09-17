// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
    // array is the array of movies
    // your code in here!
    // return a value
    let directorsArr = array.map((movie) => {
        return movie.director
    })
    return directorsArr
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {

let filterArray=array.filter ((movie)=>{
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
}) 
        return filterArray.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {  

    if (movies.length === 0) {
        return 0
    }

    let total = movies.reduce ((acc,elem) => {  
        return acc+elem.rate 
    },0)

    let avgRate=total/movies.length 

     return Number(avgRate.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

    
    function dramaMoviesRate(array){

        if(array.length===0 && array.movie.genre !="Drama")

        {return 0};

        let totalRate=array.reduce((acc,elem)=>{
            return acc+elem.rate
        },0)

        let avgRate=totalRate/array.length

        return Number(avgRate.toFixed(2))
    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (arr) {

    let secondArr = JSON.parse(JSON.stringify(arr))    

     secondArr.sort ((a,b) => {
       if (a.year > b.year) {
           return 1;
       } else if (a.year<b.year) {
           return -1
       } else {
        if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          } else {
            return 0;
          }
        }
      })
      return secondArr
} 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {

    let secondArr = JSON.parse(JSON.stringify(arr))

        secondArr = movies.map ((movies) => {
        return movies.title;
    })

    secondArr.sort ((a,b) =>{
        if (a.secondArr > b.secondArr) {
            return 1;
        } else if (a.secondArr < b.secondArr) {
            return -1;
        } else {
            return 0
        }
    })

    if (secondArr.length >= 20) {
        return secondArr.splice (0, 20) 
        } else {
        return secondArr;
        }
}
  


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
