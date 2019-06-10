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

  let newArr = movies
      .filter((e  =>  e.rate[i] == 'Drama'))
      console.log(newArr)
  }
  
  dramaMoviesRate(movies)


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
