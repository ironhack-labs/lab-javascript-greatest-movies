// Iteration 1: All directors? - Get the array of all directors.

/*
function getAllDirectors(arr){
    var arrOfDirectors = arr.map(function(oneMovie){
        return oneMovie.director
    })
   return arrOfDirectors
}
*/

function getAllDirectors(arr){
  var arrOfDirectors = arr.map(function(oneMovie){
      return oneMovie.director
  })
 return arrOfDirectors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// la verificacion de este bonus no aparece, almenos yo no la encuentro, en Jasmine.

let arrDirector = getAllDirectors(movies)

function clearRepeats (arr) {
  let ArrayClear = []
  arr.filter(function(name) {       
    if (!ArrayClear.includes(name)) {
      ArrayClear.push(name)
    }
  })
  return ArrayClear
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    let stevenMovies = 0
    arr.filter(function(type) {       
      if (type.genre.includes("Drama") && type.director == "Steven Spielberg") {
        stevenMovies++
      }
    });
    return stevenMovies
  }
  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


  
function ratesAverage(arr) {
    if(arr.length == 0) {
      return 0;
    }
    let newArr = arr.reduce(function(acumulador, valorActual) {
      var rate = 0
      if(valorActual.rate > 0){
        rate = valorActual.rate;
      }
      return acumulador + rate
    }, 0);
    let average = newArr / arr.length
    return Math.round(average * 100) / 100
  }
  

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(arr) {
  var countDramaFilms = 0;
  let newArr = arr.reduce(function(acumulador, valorActual) {
    var rate = 0
    if(valorActual.rate > 0 && valorActual.genre.includes("Drama")){
      rate = valorActual.rate;
      countDramaFilms++;
    }
    return acumulador + rate
  }, 0);
  if(countDramaFilms == 0) {
    return 0;
  }
  let average = newArr / countDramaFilms
  return Math.round(average * 100) / 100
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


// let newArray no crea un nuevo array? Jasmine no me lo acepta como un nuevo array

function orderByYear(arr) {
  let newArray = arr.sort(function(a, b) {
    return a.year - b.year;
  });
  
  return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(arr) {
  var arrayTittle = arr.map(function(name) {
    return name.title
  })

  let newArray = arrayTittle.sort()

  for (let i = newArray.length; newArray.length > 20; i++) {
    newArray.pop()
  }return newArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
