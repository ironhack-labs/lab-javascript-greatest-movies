// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrMovies){
    let allDirectors = []
    allDirectors = arrMovies.map(movie => movie.director)
    return allDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
    
    
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovies){
    let movieSpielberg = arrMovies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    
    return movieSpielberg.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
    

    function ratesAverage(arrMovies){
       
        if(arrMovies.length === 0){
            return 0
   
       }

    let sumRates = arrMovies.reduce((acumulador, movie) => {
        if(movie.rate){
            return acumulador += movie.rate;
        }else{
            return acumulador;
        }
    },0)

    let totalRate = (sumRates / arrMovies.length).toFixed(2)  
        return parseFloat(totalRate) 

    }


// Iteration 4: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(arrMovies){

        let filtroDrama = arrMovies.filter(movie => movie.genre.includes("Drama"));
               
        if(filtroDrama.length === 0){
           return 0
        }
        return ratesAverage(filtroDrama)
        
}
    


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
