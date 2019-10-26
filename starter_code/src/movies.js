/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = function(array){
    //Creando una copia del arreglo original (movies)
    let moviesYear = array.map(function (element){
        return element;
    });

   moviesYear.sort(function(a,b){
    if(a.year> b.year) return 1
    if (a.year< b.year) return -1
    if(a.title >b.title ) return  1

    });
  
    return moviesYear

};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
