// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movieArr){
    const listDirectors = movieArr.map(item =>  `${item.director}`)
    return listDirectors
  } 

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (arr) {
    const steven = arr.filter (movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    return steven.length 
  }
  howManyMovies(movies)


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (arr) {
    if (arr.length === 0){
      return 0
    } 
    
    else {
    const rateArr = arr.map(item => item.rate)
    console.log(rateArr)

    const onlyActualRatesArr = rateArr.filter(element => typeof element === 'number')
      
    const sumOfRates = onlyActualRatesArr.reduce((acc, c) =>  acc + c);
    const averageRates = sumOfRates/rateArr.length;
    return Number(averageRates.toFixed(2));
  }
  }
  
  ratesAverage(movies)


// Iteration 4: Drama movies - Get the average of Drama Movies

// function dramaMoviesRate(arr){
//     const listGenre = arr.filter(movie => movie.genre.includes("Drama"))
//     return listGenre   
//   }
// ratesAverage(dramaMoviesRate(movies))


function dramaMoviesRate(arr){
  
    const listGenre = arr.filter(movie => movie.genre.includes("Drama"))
    //return listGenre  
    if (listGenre.length == 0){
        return 0;
    }
    
  
    const rateArr = listGenre.map(item => item.rate)
    console.log(rateArr)
    
    const sumOfRates = rateArr.reduce((acc, c) =>  acc + c);
  
    return Number((sumOfRates/rateArr.length).toFixed(2));
  }
  
  dramaMoviesRate(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (arr){
    let byYear = []
    const sortedYears = arr.sort((a, b) => {
      let alpha = a.year - b.year 
      if (alpha === 0){
        return a.title.localeCompare(b.title)
      }
      return alpha
     }) 
     byYear = sortedYears
    return byYear
}
    
orderByYear(movies)


// failed attempt to fix error (should return new array) in Jasmine
/*function orderByYear (arr){
    let byYear = []
    const sortedYears = arr.sort((a, b) => {
      let alpha = a.year - b.year 
      if (alpha === 0){
        return a.title.localeCompare(b.title)
      }
      return alpha
     }) 
     byYear = ssortedYears.map(item => {
        return {
            'title': item.title, 
            'year': item.year
        }
    }) 
    return byYear
}
    
orderByYear(movies) */


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



// function orderAlphabetically(arr){


function orderAlphabetically(arr){
    let alphabetically = []
    const arrMapped = arr.map(item => item)
    
    arrMapped.sort((a, b) => {
      return a.title.localeCompare(b.title)
    })
    
    const titleAlpha = arrMapped.map(item => item.title)
    
    if (titleAlpha.length === 20) {
      return titleAlpha
    } else {
      return titleAlpha.slice(0, 20)
    } 
  }
  
  orderAlphabetically(movies)


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
