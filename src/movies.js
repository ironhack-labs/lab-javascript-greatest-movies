// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(mov){
    let directors = mov.map(ele => ele.director);
    return directors
} 
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function cleanDirectorsDuplicates(array){
    let cleanArray = array.filter((item,index) => {//iterates through the array comparing each element's index with the index that the function generates. If it's different, it means that it has already been called out previously hence will return false and be filtered out
      return (array.indexOf(item) === index);
    })
    return cleanArray
}
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    if(array.length === 0){return 0}
    else{
    let cleanDirectorArray = array.filter(function(element){
    return element.director === "Steven Spielberg" && element.genre.includes('Drama');
    });
    return cleanDirectorArray.length;
 }
}
  
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
