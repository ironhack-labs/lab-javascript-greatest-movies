// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(captains){
    const getcaptains = captains.map(function(arr){return arr.director});
    return getcaptains
  }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(oneDirector){
    const spielberg = oneDirector.filter(function(elem){
    return elem.director === "Steven Spielberg" && elem.genre.indexOf("Drama") !== -1})
    return spielberg.length
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(rates){
    const promedio = rates.map(function(elem){
    return elem.rate});
  
    const promedio2 = promedio.reduce(function(acc, elem){ return acc + elem},)/ promedio.length 
    return parseFloat(promedio2.toFixed(2)) 
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(params) {
    const result = params.filter(function(movie){return movie.genre == "Drama"}).map(function(dramaR){return dramaR.rate})  
    const total = result.reduce(function(acumuladoDr, totalDr) {return acumuladoDr + totalDr})/ result.length;         
  
    return parseFloat(total.toFixed(2)) 
      
  }
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(ascending) {
    const years = ascending.sort(function(order1,order2){ 
    if (order1.title < order2.title) return -1;
    if (order1.title > order2.title) return 1;
    return 0;})
    
    const years2 = years.sort(function(a,b) {return a.year - b.year;}) 
    
    
    return years2 

  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(alfabeto) {
    const resultado = alfabeto.map(a => a.title);
    const resultado2 = resultado.sort().slice(0,19)
    

    return resultado2
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
