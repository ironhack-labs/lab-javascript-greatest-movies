/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

console.log('hello')
// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average


var movies = {
    
       title: ‘The Shawshank Redemption’,
       year: ‘1994’,
       director: ‘Frank Darabont’,
       duration: ‘2h 22min’,
       genre: [‘Crime’, ‘Drama’],
       rate: ‘9.3’
     },
     {
       title: ‘The Godfather’,
       year: ‘1972’,
       director: ‘Francis Ford Coppola’,
       duration: ‘2h 55min’,
       genre: [‘Crime’, ‘Drama’],
       rate: ‘9.2’
     },
     {
       title: ‘The Godfather: Part II’,
       year: ‘1974’,
       director: ‘Francis Ford Coppola’,
       duration: ‘3h 22min’,
       genre: [‘Crime’, ‘Drama’],
       rate: ‘9.0’
     }];
     console.log(movies)
    
    
    
     function ratesAverage (movies){
                          
       var sum = movies.reduce(function(sum,movie){
           return sum + Number(movie.rate);
       },0);
       return Number(sum / movies.length).toFixed(2)
    }
    console.log(ratesAverage (movies))
    
    //--------------------average Drama
    function dramaMoviesRate (movies){
       var drama = movies.filter(function(onemovie){
         return  onemovie.genre.includes(‘Drama’)
       });
         var ratesDramaAvg = ratesAverage(drama);
        return ratesDramaAvg;
    }
    
    console.log(dramaMoviesRate(movies))
    //------------------------------
    
    var movies = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II']
    
    months.sort();
    console.log(months);
    