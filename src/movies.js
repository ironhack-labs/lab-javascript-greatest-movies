// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
    return arr.map(function(movie){
        return movie.director
    })
    
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
   
    let spielbergMovies = arr.filter(function(movie){
        return movie.director === 'Steven Spielberg'
    })
    return spielbergMovies.length 
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    
    if (arr.length ==0){
        return 0
    }
    else{
    var ratesSum = arr.reduce(function(accumulator,movie){
        return accumulator + movie.rate
    },0);
    return Math.round(ratesSum/arr.length*100)/100
}
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    let dramaMovies =arr.filter(function(movie){
        return movie.genre === 'Drama'
    })
    var ratesSum =arr.reduce(function(accumulator,movie){
        return accumulator +movie.rate
    },0)
    return Math.round(ratesSum/arr.length*100)/100
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    let orderedMovies = arr.sort(function(a, b) {
        return a.year - b.year;
      });
return orderedMovies
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    let titlesArray=[]
    let moviesSorted = arr.sort(function(a, b) {
        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        
        return 0;
      });
    for (i=0;i<moviesSorted.length;i++){
        titlesArray.push(moviesSorted[i].title)
        if(titlesArray.length>=20){
            break
        }
    }
    return titlesArray

}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
