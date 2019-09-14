/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage (movie) {
    sum=0;
    const avg = movie.reduce(function (acc,movie){
     sum+=Number(movie.rate)
    },0)
    sum/=movie.length
    
    return Number(sum.toFixed(2))
  }

// Iteration 2: Drama movies - Get the average of Drama Movies
dramaMoviesRate = (movie) =>{
    let sum=0;
    let acc=0;
    
    const moviesDrama = movie.map(movie =>{
      
      const movieDrama = movie.genre[movie.genre.indexOf("Drama")]==="Drama"
      
      if(movieDrama===true){
          sum+=Number(movie.rate)
          acc+=1;
        } 
    })
    
  return Number ((sum/acc).toFixed(2))
  }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

  function orderByDuration(arr){
    const result =  arr.sort((movie1, movie2) => {
      if (movie1.duration === movie2.duration){
        return movie1.title < movie2.title ? -1 : 1;
      }else{
       return movie1.duration - movie2.duration
      }     
     })
     
   return result    
 }

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
howManyMovies = (movie) =>{
  let num = 0
  const director = movie.filter(movie =>{
      return movie.director === 'Steven Spielberg'
    }).map(movie =>{
      const item = movie.genre[movie.genre.indexOf("Drama")]==="Drama"
      if (item===true){
        return num+=1
      }
    })
   
  return num


}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
orderAlphabetically=(movie)=>{

  const order = movie.sort((a , b) => {
    return (a.tittle) - (b.tittle)
  })
  return order
  }
  
  //console.log(orderAlphabetically(movies))


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (movie){
  let hours = 0
  let min = 0
  const durations = movie.map(movie=>{
    hour = Number(movie.duration.slice(0,movie.duration.indexOf("h")))
    min =  Number (movie.duration.slice(movie.duration.indexOf(" "), movie.duration.indexOf("m")))
    movie.duration = (hour*60)+min
    
})
return movie 
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

bestYearAvg =(movie)=>{
  if(movie===true){

  let arr = movie.map(function(list){
    list.rate
  })
  

  }else{
    
    return null
  }
}

