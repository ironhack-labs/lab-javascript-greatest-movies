// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    let directorsArr = [];
    for (let i = 0; i < movies.length; i++){
      if (movies[i].director == ""){
        directorsArr.push("not found")
      }
  directorsArr.push(movies[i].director)
     
    }
    console.log(movies.length)
    console.log(directorsArr.length)
 return directorsArr
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    let  dramaStevn = [];
    for (let i = 0; i < movies.length; i++){
      if (movies[i].director == "Steven Spielberg" && movies[i].genre.includes('Drama')){
        dramaStevn.push(movies[i].title)
      }
    }
    return dramaStevn.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (!arr.length){
        return 0
    }
    let ratesAvg = arr.reduce(function(accumulator, currentValue) {
        if (currentValue.rate){
            return accumulator + currentValue.rate;
        } else {
            return accumulator
        }
        
    }, 0)
    
    return Number((ratesAvg / arr.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
   if (!arr.length){
       return 0
   }
    let dramaAvg = arr.reduce(function(accumulator, currentValue) {
        if (currentValue.genre.includes('Drama')){
            return accumulator + currentValue.rate;
        } else {
            return accumulator
        }
        
    }, 0)
    
    let  queDrama = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].genre.includes('Drama')){
        queDrama.push(arr[i].genre)
        } 
    }

    if (queDrama.length == 0) {
        return 0;
    } else {
        return Number((dramaAvg / queDrama.length).toFixed(2))
    }
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let copyArr = JSON.parse(JSON.stringify(arr))
       
      let orderCopy = copyArr.sort(function(a, b){
        return a.year-b.year
      });
      return orderCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arr) {
    // let copyArr = JSON.parse(JSON.stringify(arr))
       
    //   let orderCopy = copyArr.sort(function(a, b){
    //   return a.title-b.title
    //   });

      let titleArr = [];
      for (let i = 0; i < arr.length; i++){
        if (arr[i].title == ""){
          titleArr.push("not found")
        }
    titleArr.push(arr[i].title)
       
      }
    
   return titleArr.sort().slice(0,20)
}

//        return orderCopy.slice(0,20)
//  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
