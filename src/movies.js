// Iteration 1: All directors? - Get the array of all directors.
  let getAllDirectors = (movies) => {
    let newArr =  movies.map((element)=>{
    return movies.director
  })
return newArr
  }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const style="drama"
let howManyMovies = (movies) =>
{
    let temp = movies.filter((movie,index) => movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg"))
    return temp.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

  const ratesAverage = (movies) => {
    if (!movies.length) return 0;
    let rates = movies.map(function(movie) {
        return movie.rate;
    })

    let sum = rates.reduce(function(accumulator, currentValue){
        if (typeof currentValue === "number") {
            return accumulator + currentValue;
          } else { 
            return accumulator + 0;
          }    
    })

    return Number((sum/rates.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
  if(!movies.length) return 0;
  let dramaMoviesCount = 0;
  const rateSum = movies.reduce(function(sum,element){
    if(typeof element.rate === "number" && element.genre.includes("Drama")){
        dramaMoviesCount++;
        return sum+element.rate;
    }
    return sum + 0;
  },0);
  if(!dramaMoviesCount) return 0;
  return Number((rateSum/dramaMoviesCount).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
  const sorted = [...movies].sort(function(movie1,movie2){
    if (movie1.year > movie2.year){
      return 1;
    } else {
      return -1;
    }
  })
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
  const titles = movies.map(function(movies){
    return movies.title;
  })
  const sort = titles.sort(function(movie1,movie2){
    if(movie1 > movie2){
      return 1
    } else {
      return -1
    }
  })
  return sort.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
