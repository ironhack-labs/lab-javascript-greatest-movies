




  // Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arrMovies) => {
const allDirectors = arrMovies.map((movie) => {
  return movie.director
})

return allDirectors}
getAllDirectors(movies)


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arrMovies) => {
const manyMovies = arrMovies.filter((elem) => {
  return (elem.director === "Steven Spielberg" && elem.genre.includes("Drama"))
})
console.log(manyMovies)
return manyMovies.length }



// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arrMovies) => {
    const sum = arrMovies.map((e)=>{
        if(!e.rate) {
          return {
            ...e,
            rate: 0
          }
        } else {
           return e
        }
        
    });
    console.log(sum)
    const ratesAvg = sum.reduce((a,b) => {
      const totalPeliculas=sum.length
      const totalRate = a + b.rate/totalPeliculas      
      return totalRate
    },0)
    console.log("rates",((ratesAvg)).toFixed(2) )
return Number((ratesAvg).toFixed(2)) }

/*if(!arr.length){
  return 0;
}

const sum = arr.map(a=> !a.rate ? 0 : a.rate);
const sumRates = sum.reduce((a,c) =>{
  return a + c;
});
const avgRates = sumRates / sum.length;
return Number(avgRates.toFixed(2));   */


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arrMovies) => {

  const allDramaMovies = arrMovies.filter((elem) => {
  return elem.genre.includes("Drama")
})

const dramaRate = allDramaMovies.reduce((a,b) => {
  const totalDramaMovies = allDramaMovies.length
  const totalDramaRate = a + b.rate/totalDramaMovies
  return totalDramaRate
},0)
 return Number(dramaRate.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

/*const orderByYear = () => {
  
  const byYear = movies.sort((a,b) =>  {
    moviesSorted = a.year - b.year ||  a.title.localeCompare(b.title) ;
    return moviesSorted
  }) 


return byYear
}*/
let newMoviesArr = []
const orderByYear = (moviesArr) => {
  newMoviesArr = [...moviesArr]
  
  return newMoviesArr.sort((a,b) =>  {
    return a.year - b.year ||  a.title.localeCompare(b.title)
    
  }) 
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let newMoviesAlpha = []
const orderAlphabetically = (moviesArr) => {

let movieByTitle = []
newMoviesAlpha = [...moviesArr]
  newMoviesAlpha.sort((a,b) =>  {
    return a.title.localeCompare(b.title) ;
  }).forEach((movie) => {
      if(newMoviesAlpha.length <= 20) { 
        movieByTitle.push(movie.title) 
  } else {    
        movieByTitle.push(movie.title)
  }
})
    return movieByTitle.slice(0,20)  
  } 
  
  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let moviesNewDuration = []

const turnHoursToMinutes = (arrMovies) => {
moviesNewDuration = [...arrMovies]
  //moviesNewDuration = arrMovies.slice(0)

  let newArr = moviesNewDuration.forEach((movie) => {
    const hour = Number(movie.duration.substring(movie.duration.indexOf("h")-1,1)*60)
    const minutes = Number(movie.duration.substring(movie.duration.indexOf("i")-1,2))
    const newDuration = (hour + minutes)
      return movie.duration = parseFloat(newDuration)
  })

 return newArr
}
console.log(turnHoursToMinutes())



 
    //console.log(movies)
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate*/

let rateByYear = {}

const bestYearAvg = (moviesArr) => {
  if(!moviesArr.length) {
    return null
  } else {
  moviesArr.forEach((movie) => {

  moviesRateYear = rateByYear[movie.year]

  rateByYear[movie.year] =  moviesArr.filter(movie.year).reduce((a,b)=>{
      return a + b.rate
  },0)

  })
  return rateByYear}
}