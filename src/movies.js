// Iteration 1: All directors? - Get the array of all directors.

// function getAllDirectors(movies) {

//     return movies.map(function(movie){

//         return movie.director

//     })

// }


const getAllDirectors = (movies) => movies.map((movie) => movie.director);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    
    let shortlist = movies.filter( function (movie) {

         return movie.director === "Steven Spielberg"  && movie.genre.includes("Drama")
        
    })
    
    return shortlist.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (!movies.length){
        return 0;
    } 

    let totalRates = movies.reduce( function (a,b) {
        if (!b.rate){
            b.rate=0
        }

        return a+=b.rate; 
    },0);

    return Math.round((totalRates/movies.length)*100)/100;
};


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let shortlist = movies.filter( function (movie) {

    return movie.genre.includes("Drama")
   
})

return ratesAverage(shortlist);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  if (movies.length === 1) {
    return movies;
  }
    
  const clone = [...movies];
  let yearOrdering = clone.sort(function (a, b) {
      return a.year - b.year;
    });


    for (let i = 0; i < yearOrdering.length; i++) {
      if (yearOrdering[i].year === yearOrdering[i+1].year) {

        for(index = 0; index < yearOrdering[i].title.length ; index++ ){
          if (yearOrdering[i].title[index] > yearOrdering[i+1].title[index]){
              
            [yearOrdering[i], yearOrdering[i+1]] = [yearOrdering[i+1], yearOrdering[i]];
              break
          } else if (yearOrdering[i].title < yearOrdering[i+1].title){
              
        
              break
          }else {
              continue;
          }

      }
    }

    
    
    return clone;
  }
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr) {

  const moviesClone = [...moviesArr];

  moviesClone.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);

  const titlesArr = moviesClone.map(function(movie) {
    return movie.title;
  });

   if (titlesArr.length < 20) {
    console.log(titlesArr);
    return titlesArr;
  } else {
    console.log(titlesArr.slice(0, 20));
    return titlesArr.slice(0, 20);
  }  

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average