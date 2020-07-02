// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    var newMovie = movies.map(function(movie){
    return movie.director;
});
return newMovie;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (movies){
    var drama = movies.filter(function(movie){
     return movie.genre.includes("Drama") && (movie.director === "Steven Spielberg")
    });
   
    return drama.length
   }
   
   howManyMovies(movies)
   
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if(movies.length == 0){
        return 0;
    }  
    var avg = movies.reduce(function(a , b){
        
        if(typeof a && typeof b.rate === 'number'){
            return a += b.rate;
        }else{
            return a+= 0;
        }

    },0)
        var average = avg/movies.length; 
    return Number(average.toFixed(2)) ;

    
    
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    if(movies.length == 0){
        return 0;
    }  
    var avgDrama = movies.filter(function(movie){
        return movie.genre.includes("Drama");

    })
    return ratesAverage(avgDrama) ;

}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const order = [...array].sort(function(a, b) {
        if(a.year === b.year){
           return  a.title.localeCompare(b.title)
        }
    return a.year - b.year;
        });
        return order;
      }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies){

    const array = [...movies].map(function(movie){

       return movie.title;
})  
    var finalArray = array.sort();
    var top = finalArray.slice(0,20) 

    return top;
}
console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

 /*   const array = [...movies].map(function(movie){
        
       return movie.title;
})  

    return array;
}*/