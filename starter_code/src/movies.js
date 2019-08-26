/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage (movies)  {
  let avg = movies.reduce((ac, cur) => ac + (+cur.rate), 0)/movies.length
    return parseFloat(avg.toFixed(2))
 }
 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies) {
  let onlyDrama = movies.filter(movies => {
    return movies.genre.includes(`Drama`)
  })
  if (onlyDrama.length > 0) {
    return ratesAverage(onlyDrama)
    
  } else  {
    return 0
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration (movies) {
	
  if(movies.length>1){
 
 
 return movies.sort ((a,b)=>{
 
 if(a.duration==b.duration){
   if(a.title<b.title) return -1
  if(a.title>b.title) return 1
  
 
 }
   return a.duration-b.duration
 })
  }
 return movies
   }


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies (movies) {
  if(movies.length===0){
    return 0
  }
	let steven = movies.filter(data => data.director.includes('Steven Spielberg'))
  let titles = steven.map(data => data.title)
  let onlyDrama = steven.filter(data => data.genre.includes('Drama'))

	return onlyDrama.length
  
}

howManyMovies(movies)


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {
  let titles = movies.map(data => data.title)
  titles.sort()
   
    if(titles.length <=20) {
      return titles
    } 
    else if (titles.length>=20){
    let alphabOrder=titles.slice(0,20)
  
      return alphabOrder
      }
    }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (movies) {
  
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average
