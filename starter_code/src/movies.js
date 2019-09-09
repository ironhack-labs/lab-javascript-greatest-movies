/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    if(arr.length === 0) return 0
    const rates = arr.reduce((acc, movie) => (acc + Number(movie.rate)),0)
    return Number((rates / arr.length).toFixed(2))
}

 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    const dramaMovies = arr.filter(movie => movie.genre.find(gen => gen === 'Drama'))
    console.log(dramaMovies[45])
    const avg = ratesAverage(dramaMovies)
    return avg
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(arr){
   const result =  arr.sort((movie1, movie2) => {
     if (movie1.duration === movie2.duration){
       return movie1.title - movie2.title
     }else{
      return movie1.duration - movie2.duration
     }     
    })
  return result    
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
  
  let count = arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.find(gen => gen === 'Drama')).length
   
  return count
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
  let arrOrder = arr.map(movie => movie.title).sort()
  if (arrOrder.length <= 20){
    return arrOrder
  }else{
    return arrOrder.slice(0,20)
  }
  
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function hourInMinutes(duration){
  let hour = duration.slice(0,1)
  let min = duration.slice(3, -3)
  let result = Number(hour)*60 + Number(min)
  return result
}


function turnHoursToMinutes(arr){
  const movies = [...arr]

  arr.map(movie => {
    movie.duration = hourInMinutes(movie.duration)
  }) 
  
  return movies
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average




// function with minutes

/*const minsDuration = arr.map(movie => {
        let hourString = ''
        let minsString = ''
        let mins = 0;
       let duration =  movie.duration.split('')
      
       //concatenar horas y convetirlas en minutos
       for(i=0; i < duration.indexOf('h');i++){
         hourString += duration[i]
       }
       for(i=duration.indexOf(' '); i < duration.indexOf('m');i++){
         minsString += duration[i]
       }
       mins += (Number(hourString * 60) + Number(minsString))
       movie.durationMins = mins

       return movie
      })*/
