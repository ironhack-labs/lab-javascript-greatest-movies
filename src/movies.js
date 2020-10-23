// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){
    const directors = array.map(function(el){
      return el.director
    })
    return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    let counter = 0;
    let steve = array.filter(function (el){
      if (el.director === 'Steven Spielberg' && el.genre.includes('Drama')){
      counter = counter + 1
      }
    })
    return counter
    }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    if (array.length === 0){
    return 0
    }
    const rate = array.reduce(function(acc, val){
      // console.log(acc.rate)
      if (val.rate == ''){
      val.rate = 0
      }
      // console.log(val)
      return acc + val.rate
    },0)
    return Math.round((rate/array.length) * 100) / 100
    }
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    const drama = array.filter(function (el){
      if (el.genre.includes('Drama')){
        return true;
    }})
    return ratesAverage(drama)
    return Math.round((rate/array.length) * 100) / 100
  }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    let copy = JSON.parse(JSON.stringify(array));
    const alphabetical = copy.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
  })
    const ordered = alphabetical.sort(function(a, b){
      return a.year-b.year;
    }) 
    return ordered
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let copy = JSON.parse(JSON.stringify(array));
    if (array.length > 20){
    let shorter = copy.splice(20, copy.length)
    let alphabetical = shorter.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
  }) }
    let alphabetical = copy.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    })
    let solution = alphabetical.map(function(value){
      return value.title
    })
    return solution
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
