/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
/*function formatAverage(longAverage) {
  return +longAverage.toFixed(2)
}*/
function ratesAverage(movies) {

  let output = (movies.reduce((ac, movie) => ac + (+movie.rate), 0) / movies.length
  );
  
  return parseFloat(output.toFixed(2));
}



// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  let dramaOut = (dramaMovies.reduce((ac,dramaMovie) => ac + (+dramaMovie.rate),0 )/dramaMovies.length
  );
  if (dramaMovies.length === 0){
    return 0;
  }
  return parseFloat(dramaOut.toFixed(2));

};





// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies){

  let moviesOrder = movies.sort(function(movieA,movieB) {
    if(movieA.duration>movieB.duration){
      return 1
    }
    if (movieA.duration===movieB.duration){
      if  (movieA.title >movieB.title){
        return 1
      }
      if (movieA.title<movieB.title){
        return -1
      }
    }
    else {
      return -1
    }
  });
  
  
return moviesOrder;
} 


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
  let stevenMovies = movies.filter(movie => movie.genre.includes('Drama')&& movie.director=== "Steven Spielberg");
  let nSteven = stevenMovies.length;
  return nSteven;

}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
/*function orderAlphabetically(movies) {
 let lexiOrder = movies.sort((movA,movB) =>
 movA.localeCompare(movB,"es", { sensitivity: "base"} )
 ).reverse();
 return lexiOrder;
};*/
/*let movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },*/
function orderAlphabetically(movies){

 let orderMov = movies.sort(function(a, b) {
   if(a.title>b.title){return 1}
   else if(a.title<b.title){return -1}
   else {return 0}
  
});
let newMov = orderMov.map(item => item.title);
console.log(newMov)
let twentyFirstb = newMov.slice(0,20);
return twentyFirstb;



}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){ 
  movies.map(movie =>movie.duration)

  let copyMovies = {...movies,duration:newDuration};
  newDuration = movies.duration.split(" ")
  //parseint?
  return copyMovies
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
