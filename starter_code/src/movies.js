/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = function(array){
    //Creando una copia del arreglo original (movies)
    let moviesYear = array.map(function (element){
        return element;
    });

   moviesYear.sort(function(a,b){
    if(a.year> b.year) return 1;
    if (a.year< b.year) return -1;
    if(a.title >b.title ) return  1;

    });
  
    return moviesYear;

};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
let howManyMovies = function(array){
    let arrayHowMany =array.filter(element => {
       return element.director === "Steven Spielberg" && element.genre.includes("Drama");
     
      });
    
     return arrayHowMany.length;
 }
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = function (array){
    let firstElements=[];

     if(array.length < 20){
       
        firstElements = array.map(function(element){
       
          return element.title;
       });
       return firstElements.sort();
       
     }else if(array.length > 20){
           
        firstElements =array.slice(0,20);
        return firstElements.sort();

    }
  
};
orderAlphabetically(movies);
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = function(array){
   
    const average = array.reduce((total, element) => {
       // console.log(amount.rate)
       if(element.rate === ""){
           total +=0;
       }else{
        let totalRates = array.reduce((acc, current) => acc + (current.rate === '' ? 0 : parseFloat(current.rate)), 0)
        return parseFloat((totalRates / array.length).toFixed(2));
       }
       
    
      }, 0);
    
    return average;

};
// Iteration 5: Drama movies - Get the average of Drama Movies
let dramaMoviesRate = function(array){
   

   let averageDramaMovies=  array.filter (element =>{
        return element.genre.includes("Drama");
    });

    if(averageDramaMovies.length === 0){

        return 0;
    }
    
    return ratesAverage(averageDramaMovies);
   // console.log(averageDramaMovies);
    
  
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (array) => {
    let newArray = array.map((currentMovie) => {
      let newDuration = currentMovie.duration.split(' ')
        .map((element) => {
          if (element.indexOf('h') !== -1) {
            return parseInt(element.match(/[0-9]/g).join('')) * 60;
          } else {
            return parseInt(element.match(/[0-9]/g).join(''));
          }
        })
        .reduce((accum, currentNumber) => accum + currentNumber);
  
      return {
        ...currentMovie,
        duration: newDuration
      }
    })
  
    return newArray;
  }
// BONUS Iteration: Best yearly rate average - Best yearly rate average
