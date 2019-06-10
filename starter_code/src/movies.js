/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
let turnHoursToMinutes = (movies) =>{
  recorrido = movies.map((elemento,index,array)=>{
    stringToArray= movies[index].duration.split(" ")
   duration_Array= stringToArray
   if(duration_Array.length == 0){
     console.log('No tiene valor')
   }
    else if(  duration_Array.length == 1){
    let horas_A_Int=  parseInt(duration_Array)
    horas_A_Int*=60
    movies[index].duration = horas_A_Int
  } else{
     let horas_A_Int=  parseInt(duration_Array)
     let minutos_A_Int= parseInt(duration_Array[1])
    horas_A_Int *=60 
  
    minutos_Totales= horas_A_Int + minutos_A_Int
    movies[index].duration = minutos_Totales
   }
   return elemento
   })
  }
  
  turnHoursToMinutes(movies)
  
  

// Get the average of all rates with 2 decimals 

let ratesAverage = movies.reduce((acc, currentValue) =>{
  
  promedio =acc + parseFloat(currentValue.rate)
  
   return promedio
},0) / movies.length
  


console.log(ratesAverage.toFixed(2))




// Get the average of Drama Movies
let dramaMoviesRate  = (movies) => {
  let mov =movies.filter((e,i ) => e.genre.includes('Drama'))
   
let ratesDramaAverage = mov.reduce((acc, currentValue) =>{
  
    promedio =acc + parseFloat(currentValue.rate)
    
     return promedio
},0) / mov.length
    


console.log(ratesDramaAverage.toFixed(2))


}

dramaMoviesRate(movies)


// Order by time duration, in growing order

let orderByDuration= (movies) => {

  let mov  = movies.sort((a,b) => a.duration.localeCompare(b.duration)
  )
  return console.log(mov)
  }
  
  orderByDuration(movies) 
  

// How many movies did STEVEN SPIELBERG
let howManyTimes = (movies) => {
  let movie_Steve = movies.filter((e => e.director == 'Steven Spielberg'))
 
 return console.log(movie_Steve)
}
howManyTimes(movies)
let howManyTimes = (movies) => {
  let movie_Steve = movies.filter((e => e.director == 'Steven Spielberg'))
 
 return console.log(movie_Steve)
}
howManyTimes(movies)

// Order by title and print the first 20 titles
let orderAlphabetically= (movies) => {

  let mov  = movies.sort((a,b) => a.title.localeCompare(b.title))
  hola= new Array()
  for(let i=0; i<20;i++){
   hola.push(mov[i].title)
  }
  console.log(hola)
  }
  
  orderAlphabetically(movies)

// Best yearly rate average
