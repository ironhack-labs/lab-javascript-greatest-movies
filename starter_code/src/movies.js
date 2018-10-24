/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
    var ratesAverage = movies.reduce(function(sum,oneMovies){
    
      return sum + Number(oneMovies.rate);
    
    },0);
    return ratesAverage/movies.length
    
    };


// Get the average of Drama Movies


// function drama (movies){
//     movies.filter (function (oneMovies){
      
//     if (oneMovies.genre.includes('Drama')) {
      
//       return oneMovies
//     };
       
//     });
//     };
    
    
   // drama(movies)
    //console.log(drama(movies));
    
    function dramaMoviesRate (array) {
      var drama = array.filter (function (oneMovies){
           return (oneMovies.genre.includes('Drama'))
        }) 
        
      var dramaMoviesRate = drama.reduce (function(sum,oneDrama){


        console.log(drama)
        return sum + Number(oneDrama.rate)
      },0);
    console.log(dramaMoviesRate)

    if (dramaMoviesRate === 0){
        return undefined;
    }
      return Math.round(dramaMoviesRate/drama.length *100)/100
    };
    
    (dramaMoviesRate(movies))


// Order by time duration, in growing order




// How many movies did STEVEN SPIELBERG



function howManyMovies (listMovies) {

    if (listMovies.length === 0){
        return undefined;
    }
    else{
    var dramaSp= 
    listMovies.filter (function (array){
        return array.genre.includes('Drama') && array.director.includes ('Steven Spielberg')
     });

     } 
     return "Steven Spielberg directed "+ dramaSp.length + " drama movies!";

};

howManyMovies ()



// Order by title and print the first 20 titles

function orderAlphabetically () {
    movies.sort(function (itemA,itemB){
        if (itemA.title<itemB.title){
          //if itemA comes before itemB return negative
          //(the order is good)
          return -1;
        }
        else{
          //if itemB comes before itemA return positive
          //they need to switch
          return 50;
        }
      })
      
      console.log(movies);
}


// Best yearly rate average
