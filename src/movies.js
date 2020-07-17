// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){

    const newArray = array.map(function(item){
        return item.director; 
     });

    return newArray;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. 
//How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    //var numbers = [1, 2, 3, 4, 5, 6];
 
    const newArray = array.filter(function(item){
      return item.director === 'Steven Spielberg' && item.genre.indexOf('Drama')>=0 ;
    });
     
    numMovie = newArray.length;

    return numMovie;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){

    const total = array.reduce(function (sum, item) {
        if (typeof item.rate === 'number')
        {
            return sum + item.rate;
        }else {
            return sum + 0;
        }
        
      },0);
    
    let avgTotal = 0;
    
    if (array.length === 0){
        return 0
    }

    avgTotal = total / array.length;
      
    return parseFloat(avgTotal.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){

    const somaTotal = array.reduce(function (sum, item) {
        if (item.genre.indexOf('Drama')>=0){

            if (typeof item.rate === 'number')
            {
                return sum + item.rate;
            }else {
                return sum + 0;
            }

        }else{
            return sum + 0;
        }
      },0);

      const contDrama = array.reduce(function (cont, item) {
        if (item.genre.indexOf('Drama')>=0){
            return cont + 1;
        }else{
            return cont + 0;
        }
      },0);      
    
    let avgTotal = 0;
    
    if (contDrama === 0){
        return 0
    }

    avgTotal = somaTotal / contDrama;
      
    return parseFloat(avgTotal.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
