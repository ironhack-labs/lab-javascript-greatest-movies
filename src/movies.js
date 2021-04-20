//JAIME SEVILLANO
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
console.log(array);
    let newArray = array.map(function(number){
    return number["director"] //arreglo solo con el nombre de los directores
    })
    return newArray
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    let newarr = arr.filter(function(movie){
      
      return movie.genre.includes("Drama") && movie.director == "Steven Spielberg"
      });
      console.log(newarr);
    return newarr.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr1){
    if (arr1.length == 0){
        return 0
    }
    console.log(arr1)
    let sum = arr1.reduce((previous, current) => {
        if (current.rate == undefined || current.rate == ""){
            return previous +=0
        }
        return previous += current.rate},0);
    let avg = sum / arr1.length;
    return Number(avg.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average



