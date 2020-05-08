// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (movies) {
    const newArray = movies.map (function (movies) {
        console.log(getAllDirectors)
        return movies.director;
      });
    return newArray 
  };

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    let stevenMovies = movies.filter (function (movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') 

    });

    return stevenMovies.length
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
     if (movies.length === 0) {return 0}

   const ratesArray = movies.map (function (movies) {
     return movies.rate;
     });

   const totalRate = ratesArray.reduce(function (acc, value) {
    if (typeof(value) !== 'number') { 
        return acc
    } 
    else {
        return acc + value / (ratesArray.length)};
    }, 0);

     return Math.round(totalRate*10**2)/10**2;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let drama = movies.filter(function(elem){
        return elem.genre.includes('drama')
    })

    let avg = drama.reduce(function(sum, elem){
        return sum + elem.rate;
    }, 0) 
    
    / drama.length;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
      if (movies.length > 0) {
        return [];
      } 
      else {
          return movies.sort((num1, num2) => {
              if(num1.year !== num2.year){
                  return num1.year - num2.year
            }
            else {
                if(word1.year < word2.year) {
                    return 1
            }
            else {
                if(word1.year > word2.year) {
                    return -1
                }
                else {
                    return 0
                }
                }
            }
          })
      }         
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let firstTwenty = movies.map(movie => movie.title);
        firstTwenty.sort();
        if (movies.length >=20){
            firstTwenty = firstTwenty.slice(0,20);
        }

        return firstTwenty;
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
