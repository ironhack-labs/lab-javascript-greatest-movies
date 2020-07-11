
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


// movies

//1

function getAllDirectors(array) {
    const directorArray = array.map(movie => {
      return movie.director
    })
    return directorArray;
  }
  
  //console.log(getAllDirectors(movies)) 
  
  //2
  function howManyMovies (array) {
    const directorSpielberg = array.filter((movie) => {
      if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
        return movie
      }
    })//.map(movie => movie.title)
    const onlyTitle = directorSpielberg.map(movie => movie.title)
    return onlyTitle
    
  }
  //console.log(howManyMovies(movies))
  
  //3
  function ratesAverage(array) {
    const sumRatingFunc = array.reduce((total, movie) => {
      let sumRating =  total + movie.rate
      return sumRating
    }, 0)
    let averRating = 0
    if (array.length) {
      if (array.length === 1) {
        averRating = sumRatingFunc.toFixed(2);
      } else {
        averRating = (sumRatingFunc / array.length).toFixed(2);
      }
    } else (
      averRating = 0
    )
    return Number(averRating);
      
  } 
  //console.log(ratesAverage(movies));
  
  //4
  function dramaMoviesRate(array) {
    const dramaList = array.filter(movie => {
      if (movie.genre.includes('Drama')) {
        return movie;
      }
    })
    const dramaSumRating = dramaList.reduce((totalSum, dramaMovieRating) => {
      let sum = totalSum + dramaMovieRating.rate;
      return sum;
    }, 0)
    let dramaRatingAverage = 0;
    if(array.length) {
      if (array.length === 1) {
        dramaRatingAverage = dramaSumRating.toFixed(2)
      } else {
        dramaRatingAverage = (dramaSumRating / array.length).toFixed(2)
      }
    } else {
      dramaRatingAverage = 0
    }
  
    
    
    return Number(dramaRatingAverage);
  }
  //console.log(dramaMoviesRate(movies))
  
  //5
  function orderByYear(array) {
   
  
    
    const moviesSortedByYears = array.sort((a, b) => {
  
      if (a.year > b.year) {
        return 1
      } else if (a.year < b.year) {
        return -1
      } else {
        if (a.title > b.title)  {
          return 1
        } else  if (a.title < b.title){
          return -1
        } else {
          return 0
        }
      }
    })
    return moviesSortedByYears
  }
  
  
  console.log(orderByYear(movies))
  