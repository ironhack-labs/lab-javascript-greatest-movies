// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    let directors = movies.map(function(elem){
        return elem.director;
    });
    return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let count = 0;
    let list = movies.filter(function(movie){
      if (movie.director == "Steven Spielberg"){
        for (let i=0 ; i< movie.genre.length ; i++){
          if (movie.genre[i]=="Drama"){
            return count += 1;
          }
        }
      }
    })
    return count;
  }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    let rates = array.map(movie => movie.rate);
    let sumRates = rates.reduce((acc, elem) => {
        if (typeof (elem) !== 'number'){
            return acc;
        }else{
            return acc + elem;
        }
    },0)
    if (array.length === 0){
        return 0; 
    } else {
        return +(sumRates/array.length).toFixed(2);
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    let dramaMovies = array.filter(movie => movie.genre.includes('Drama'));
    return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    if (array.length ===0){
        return []; 
    }else{
        return array.sort((num1, num2) => {
            if (num1.year !== num2.year){
                return num1.year - num2.year
            } else {
                if (num1.year > num2.year){
                    return 1; 
                }else if (num1.year < num2.year){
                    return -1
                }else {
                    return 0
                }
            }
        })
    }
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    let title = array.map(movie => movie.title); 
    title.sort();
    if (array.length >=20){
        title = title.slice(0,20)
    }
    return title
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
