/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 







function ratesAverage (movies) {
    var sumMo = movies.reduce(function(sum,item){
        return sum + parseFloat(item.rate);
    }, 0);
    var average = Math.round(sumMo/movies.length*100)/100;
    return average;
}


// Get the average of Drama Movies


// var dramaFi = movies.filter(function (item) {
//     if (item.genre === 'Drama') {
//         return true;
//     } else {
//         return false;
//     }   
// } );

// function dramaMoviesRate (){

// }






function dramaMoviesRate (movies){

    var dramaFi = movies.filter(function(movies) { 
        return movies.genre.includes('Drama');      
  });
    var sumMo = dramaFi.reduce(function(sum,item){
        item.rate = item.rate || 0
        return sum + parseFloat(item.rate);
  }, 0);
    var average = Math.round(sumMo/dramaFi.length*100)/100;
        return average;

}




// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
