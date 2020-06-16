// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies){

  return movies.map( (eachMovie, index) => {
         return eachMovie.director;
  });
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
  if(movies.length === 0 ) {
       return 0;
  }
  return (movies.filter( (eachmovie,index) =>{
       return ( (eachmovie.director === "Steven Spielberg") &&
       (eachmovie.genre.includes( "Drama")))
  })).length;
};



// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage (movies) {
  if ( movies.length == 1){
    return movies.map( (eachMovie, index) => {
         return eachMovie.director;
  })}; if ( movies.length == 0){
         return 0;
  };
    if (movies.length > 1){
    const average = movies.reduce(function(acc,value){
      if (typeof value.rate === 'undefined') {
        return value.rate = acc;
      };
    return acc + value.rate/movies.length
 },0);
    return Math.round(average * 100) / 100
  } else {
      return 0
  }
};




// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
  const newArr = arr.filter(movies=>movies.genre.includes('Drama'));
      if (newArr.length > 0){
          const average = newArr.reduce(function(acc,value){
              return acc + value.rate/newArr.length
  },0)
              return Math.round(average * 100) / 100
      } else {
              return 0
      }
};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear2 = movies.slice().sort(function(a, b){
 
  if (a.year < b.year){
      return -1;
  }

  if (a.year > b.year){
      return 1;
    }

  return 0;
}); 

function orderByYear (movies) {
 return orderByYear2.map( (orderByYear2, index) => {
       return orderByYear2.title;
    });
 };
console.log(orderByYear (movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
  const top20 = [];
 
  const titles = arr.map(function(namesArr){
      return namesArr.title 
  })

  const alphabetical = titles.slice().sort((a,b) => {
      if (a < b){
          return -1;
      } 
      if (a > b){
          return 1;
      }
          return 0;
      })

  if (alphabetical.length > 20) {
      for(i=0;i<20;i++){
          top20.push(alphabetical[i])
      }

  return top20
  }

  return alphabetical
};



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
