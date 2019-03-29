/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// function turnHoursToMinutes(arr){
//   let convertedArr = arr.map((movie) =>{
//     const dato = `${movie.duration}`.split(' ')
//     const horas = []
//     const minutos = []
//     let sumHm = 0;
//     console.log(dato, horas, minutos)
//     if(parseInt(horas) > 0){
//       if(minutos > 0){
//         sumHm = (horas * 60) + minutos
//         movie.duration = sumHm
//       }else{
//         sumHm = (Number(horas[0])* 60)
//         movie.duration = sumHm
//       } 
//     }else if((Number(minutos) > 0)){
//       sumHm = ((Number(minutos[1])))
//       movie.duration = sumHm
//     }
//     return movie
//   })
//   return convertedArr
// }

function turnHoursToMinutes(arr){
  let newArr = arr.map(function(e){
    let hrs = e.duration.search('h')
    if(hrs !== -1){
      hrs = parseInt(e.duration) * 60
    }else{
      hrs = 0
    }
    let mins = e.duration.search("m")
    if(mins !== -1){
      mins = parseInt(e.duration.split(" ")[1])
    }else{
      mins = 0
    }
    e.duration = hrs + mins
    return e
  })
  return newArr
}
// function turnHoursToMinutes(arr){
//   console.log(arr)
//   return arr.map(function(movie){
//     return Object.assign({},movie)
//  });
// }

// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
  const avgRate = arr.reduce(function(sum,movie){
    return sum += parseFloat(movie.rate)
  }, 0)
  return avgRate/arr.length
}

// Get the average of Drama Movies
function dramaMoviesRate(arr){
  const avg = arr.filter(function(movie){
    
  })

  const avgDrama = arr.reduce(function(movie){

  })
}

// Order by time duration, in growing order
function orderByDuration(){

}

// How many movies did STEVEN SPIELBERG
function howManyMovies(){

}

// Order by title and print the first 20 titles
function orderAlphabetically(){

}

// Best yearly rate average
function bestYearAvg(){

}
