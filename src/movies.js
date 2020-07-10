// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){

const directorF =  movies.map(function(movie){
        return movie.director
    })

return directorF
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    let drama;
    let spiel = movies.filter((movie) => {
    for (let i=0; i < movie.genre.length; i++){
       drama = movie.genre[i] == "Drama" && movie.director == "Steven Spielberg";
       if(drama){break;}
    } 
    return drama
}) 
return spiel.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    let averageRate = 0;
    movies.reduce(function(acc,value){
        for(var i=0; i<movie.rate.length; i++){
          averagerRate =  acc + value(movie.rate[i])  
        }
        return averageRate 
    },0)
    return averageRate.length;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let averageDramaRate = 0;
    movies.map(function(ele){
        if(ele.genre == "drama"){

        }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

