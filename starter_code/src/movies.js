/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



// Get the average of all rates with 2 decimals 


function ratesAverage (movies) {

    /*var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);*/

  var ratesAverage =  movies.reduce(function(accumulator, currentValue){
        if(currentValue.rate === ''){
            currentValue.rate = 0;
        }
        return  accumulator + parseFloat(currentValue.rate)

    },0)
    
    var averageMovieRating = (ratesAverage/ movies.length)
    return Math.round(averageMovieRating * 100) / 100
}



// Get the average of Drama Movies

function dramaMoviesRate(movies){

    var dramaMovies =  movies.filter(function(item){
        return item.genre.includes("Drama")
    }) 
    
    if(dramaMovies.length > 0){
    return ratesAverage(dramaMovies)
    }else{
    return undefined;
   }
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){

    /*
    Return "Steven Spielberg directed 0 drama movies!" if he does not directed none of the movies in the array
    Only drama movies! Should return "Steven Spielberg directed 1 drama movies!"
    Only Steven Spielberg movies! Should return "Steven Spielberg directed 2 drama movies!"
    Should return "Steven Spielberg directed 4 drama movies!"
    */


    var spielbergMovies =  movies.filter(function(item){
        return item.director.includes("Steven Spielberg") && item.genre.includes("Drama");
    })
    
    var spielbergDramaMovies = spielbergMovies.filter(function(item){
        return item.genre.includes("Drama");
    })

    if(spielbergMovies.length === 0){
        return undefined;
    }else if( spielbergDramaMovies === 0){
        return "Steven Spielberg directed 0 drama movies!";         
    }
    {
        return "Steven Spielberg directed "+ spielbergMovies.length + " drama movies!";
    }
    
}

// Order by title and print the first 20 titles


// Best yearly rate average
