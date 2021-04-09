// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) { 
    const onlyDirectors = movies.map((movie) => {
      return movie.director
    })
    return onlyDirectors
 }

console.log(getAllDirectors(movies))


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


function getUniqueDirectors() {
    const unique =  getAllDirectors(movies).filter((current, index ) => {
      return getAllDirectors(movies).indexOf(current) === index;
    })
    return unique
  }
 
  console.log(getUniqueDirectors());


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const value = movies.filter((element ) => {
        return element.director === 'Steven Spielberg' && element.genre.includes('Drama');
    })
    return value.length;
 }
 
 console.log(howManyMovies(movies));
 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    const onlyRates = movies.map((elem) => {
            return elem.rate
        })
    const result = onlyRates.reduce((a,b) => {
          return a + b / movies.length;
        })
     
        return result.toFixed(2);
      }
      
console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(rating) {
    const drama = movies.filter((type) => {
        return type.genre.includes('Drama');
    })
    const avg = drama.reduce((a,b) => {
        return a + b / drama.length;
    })

    return avg.toFixed(2);
}

console.log(dramaMoviesRate(rating));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const dates = movies.map((movie) => {
      return movie.year
    })
    const order = dates.sort((a, b) => {
  return b - a;
    })
    return order.reverse()
  }
  
  console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically() {
    const titles = movies.map((movie) => {
        return movie.title
      })
    const place = titles.sort((a, b) => {
      return a - b;
    })
    const ascend = place.reverse()
    const print = ascend.slice(0,20);
      return print
    } 
  
    console.log(orderAlphabetically());



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes() {
  const time = movies.map((movie) => {
    return movie.duration
  })
  const only = time.replace(/h|min/gi, "");
  const rem = only.split('');
  return minutes[0] * 60 + minutes[2] + minutes[3]
}

console.log(turnHoursToMinutes());


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg() {
  const start = movies.map((movie) => {
    return movie.year
  })
 return start
}

console.log(bestYearAvg());