// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let getAllDirectors = (movies) => movies.map((el) => {
    return el.director;


});
  
  //console.log(getAllDirectors);








// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(arr){

let arr1 = movies.filter((el) => {

    return  (el.director === "Steven Spilberg" && el.genre.includes("Drama"));
   
})
return arr1.length;
}




// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){

let moviesRate2 = arr.reduce((acc,el) => {
    acc += el.rate/ arr.length;
    return acc;
    
  }, 0)
 return moviesRate2;

}
 

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let arr1 = arr.filter ((el) => {
       return el.genre.includes("Drama")
    })

    let arr2 = arr1.reduce((acc,el) => {
        acc += el.rate/ arr1.length;
        return acc;

    }, 0)
    return (Number(arr2.toFixed(2)))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(aRray) {
    
    let maped = movies.map((el) => {
        return el.year;
    })

    let orderRate = maped.sort((a ,b) => {
    if (a.year === b.year){
        if (a.title === b.title){
        
        return 0;
     }   else if (a.title < b.title) {
         return -1;
     }   else {
         return 1;
     } 
       
}   else if (a.year < b.year) {
    return -1;
}   else {
    return 1;
}
});

return orderRate;
}
   

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

    let orMov = movies.sort(function (a, b) {
        if (a.title[0] < b.title[0]) return 1; //  1 here (instead of -1 for ASC)
        if (a.title[0] > b.title[0]) return -1; // -1 here (instead of  1 for ASC)
        if (a.title[0] === b.title[0]) return 0;
      }); 

      let twentyTi = orMov.slice(0,19);

      return twentyTi;
}






/*movies.sort(function (a, b) {
    if (a.title[0] < b.title[0]) return 1; //  1 here (instead of -1 for ASC)
    if (a.title[0] > b.title[0]) return -1; // -1 here (instead of  1 for ASC)
    if (a.title[0] === b.title[0]) return 0;
  }); 
  */
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
