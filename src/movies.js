// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors =(movies) => {
const directorlist= movies.map((getAllDirectors)=>{
  return getAllDirectors.director;
})
  return directorlist
 }
      
      
      
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
      
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
const listOfSteveDramaMovies = movies.filter((directorNameList) => {
   return directorNameList.director === "Steven Spielberg" && directorNameList.genre.includes("Drama")
});
    
  return listOfSteveDramaMovies.length;
 }
      

 // Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (movies) {
  if (movies === null || movies.length == 0) {
    return 0;
    }
const ratesSum = movies.reduce(function (acc, movie) {
  if (movie.rate)
    return acc + movie.rate; 
       else return acc
  }, 0);

const averageRate = ratesSum/movies.length;
  const roundedAverage = Number(averageRate).toFixed(2);
     return roundedAverage;
} 
      


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const drama = movies.filter((movie) => {
      return movie.genre.includes("Drama");
  });

  return ratesAverage(drama);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const year = movies.sort(function(a,b){
      if (a.year > b.year){
          return 1
      }else if(a.year < b.year){
          return -1
      }else{
         return 0
      }
  })
  return year;
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
  const titles = movies.map(movie => {
      return movie.title})

 const alphaSort = titles.sort();
  return alphaSort.slice(0, 20);
  }



      // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
      
      // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
  