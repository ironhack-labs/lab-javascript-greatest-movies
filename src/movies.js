// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(movies){
    const directorsNames = movies.map(function(movie){
        return movie.director
    }) 
    return directorsNames 
}

console.log(getAllDirectors(movies));


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


/*

const clean = directorsNames.filter(function(uniquify){
  
})


function uniquifyArray(words) {
    let newArray = [];
    if (words.length === 0) {
      return null;
    } else {
      for (i=0; i<words.length; i++) {
        if (newArray.indexOf(words[i]) === -1){
          newArray.push(words[i]);
        }
      }
    }
    return newArray; 
    }*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    const StevenSpielberg = array.filter(function(movie){
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    }) 
    return StevenSpielberg.length 
}

console.log(howManyMovies(movies));


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    const totalRate = movies.reduce(function(total,rates){
    return total + rates.rate
  },0)
  let rounded = Math.round(totalRate); 
  let average = rounded / (array.length);
  let roundedAverage = Math.round(average);
  return roundedAverage;
  }
  
  ratesAverage(movies)

  // error message Get the average rate - 
  //ratesAverage You should return the average rate of 2 movies with rate 8 each!
  // I don't understand because the result is 8!!

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){

    return ratesAverage(array.filter(function(movie){
        return movie.genre.includes("Drama")
    }));
}

//not sure 



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Take the array and order by year 
// if same year oder by title 


function orderByYear(movies){}

const yearOrder = movies.sort(function(a,b){
  return a.year - b.year
})

console.log(yearOrder)

// + find if year = year, how order by title + put everything in the function 


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
