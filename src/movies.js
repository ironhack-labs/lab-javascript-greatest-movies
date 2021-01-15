// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {

    const directorsArr = movies.map((movie) => movie.director);

    //note/ if index of "director" in the arr = index, filter those out into a new array with the name uniqueDirector
    const uniqueDirector = directorsArr.filter((director,index) => directorsArr.indexOf(director) === index)
 
    return uniqueDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    const filteredSpielbergMovies = movies.filter(function(movie){
        if (movie.director == "Steven Spielberg" && movie.genre.indexOf('Drama') !== -1) {
            return true;
        }
    })
    
    return filteredSpielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (movies.length < 1) {
        return 0;
    }

   const ratesArr = movies.map((movie) => movie.rate);

   const totalRates = ratesArr.reduce(function(arr,val){

    if (val !== '' && val !== undefined) {
      return arr + val;
    } else {
      return arr + 0;
    }

   },0);

   return Number((totalRates/movies.length).toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    if (movies.length < 1) {
        return 0;
    }
    
  const dramaMovies = movies.filter( movie => movie.genre.indexOf('Drama') != -1);
  
  const ratesArr = dramaMovies.map((movie) => movie.rate);
  
  const totalRates = ratesArr.reduce(function(arr,val){

    if (val !== '' && val !== undefined) {
      return arr + val;
    } else {
      return arr + 0;
    }

  },0);

  if (dramaMovies.length < 1) {
       return 0;
  }

  return Number((totalRates/dramaMovies.length).toFixed(2))
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const sortedMovies = JSON.parse(JSON.stringify(movies.sort(function (a,b){
        if(a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            } else {
                return 0;
            }
        } else {
            return a.year - b.year;
        }
    })));

    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
 
    const alfSortedMovies = [...movies].sort(function (a,b){
        
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            } else {
                return 0;
            }
        
    });
 
    const first20 = alfSortedMovies.slice(0,20);
  
    const first20Titles = first20.map((movie) => movie.title );
    
    return first20Titles;
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

    const moviesCopy = JSON.parse(JSON.stringify(movies));

    for (i = 0; i < moviesCopy.length; i++) {
      
      if (moviesCopy[i].duration.length === 8 || moviesCopy[i].duration.length === 7) {
        let splitHours = (moviesCopy[i].duration.split('h')[0])*60;
        let splitMinutes = moviesCopy[i].duration.split('min')[0].split(' ')[1];
        let totalMin = Number(splitHours) + Number(splitMinutes);
        moviesCopy[i].duration = totalMin;
      } else if (moviesCopy[i].duration.length === 2) {
        let totalMin = (moviesCopy[i].duration.split('h')[0])*60;
        moviesCopy[i].duration = totalMin;
      } else if (moviesCopy[i].duration.length === 5) {
        let totalMin = moviesCopy[i].duration.split('min')[0];
        moviesCopy[i].duration = Number(totalMin);
      } 
    }

   return moviesCopy;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {

    if (movies.length < 1) {
        return null;
    }
  
    let counter = 0;
    const avgArr = [];
    const avgYears = [];
    
 
   for (i = 1915; i < 2020; i++) {
     for (j = 0; j < movies.length; j++) {
      if (i == movies[j].year && avgYears.indexOf(i) === -1) {
        
         const filterAllYears = movies.filter(function(movie){
         if (movie.year === i) {
         return true;}}).reduce(function(a,b){
           return a + b.rate;
         },0);
         
         const arrLength = movies.filter(function(movie){
         if (movie.year === i) {
         return true;}}).length
         
         avgYears.push(i)
        
         avgArr.push(filterAllYears/arrLength)
        
      } 
     }
   }
   
   let posHighestNum = avgArr.indexOf(Math.max.apply(Math, avgArr));
   
   return `The best year was ${avgYears[posHighestNum]} with an average rate of ${avgArr[posHighestNum]}`
     
 }