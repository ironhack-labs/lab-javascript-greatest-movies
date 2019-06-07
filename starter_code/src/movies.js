/* eslint no-restricted-globals: 'off' */
function horasF(str){
  let horas = 0
  let minutos = 0
  let total = 0
  let h = str.split("h")
  horas = parseInt(h)
  //si el array hora existe y no hay minutos retorna las horas en minutos
  //minutos
  if(h[1] == null){
    total = horas * 60
  } 
  //si hay horas y minutos
  else {
    let j = h[1].split("min")
    minutos = parseInt(j[0])
    //console.log("minutos: "+minutos)
    //console.log("horas: "+ horas)
    total = (horas*60)+minutos
   // console.log(typeOf(total))
    return (total)
  } //console.log("total:"+ total)
}

function turnHoursToMinutes (movies){
  return movies.map((e)=>{horasF(e.duration)})
}

function ratesAverage(arr) {
  let rate = arr.map((e) => {
    return e.rate
  })
  let prom = rate.reduce((cont, actValue) => {
    return cont + Number(actValue)
  }, 0)

  return parseFloat((prom / arr.length).toFixed(2))
}

ratesAverage(movies)

const dramaMoviesRate = arr => {
  


  let result = arr.filter(e => e.genre.includes('Drama'));

  let rateD =result.map((e) => {
    return e.rate
  })
  
  let prom = rateD.reduce((cont, actual) => {
    return cont + Number(actual)
  }, 0)
  
   //console.log(parseFloat((prom / arr.length).toFixed(2)))
   return (parseFloat((prom / rateD.length).toFixed(2)))
  }
  
  dramaMoviesRate(movies)

  function orderByDuration(arr){
    arr.duration
    let newArray=[]
    newArray= arr.sort((a, b) => a.duration.localeCompare(b.duration))
    console.log(newArray)
    return newArray.reverse()
  
  }

  function howManyMovies(arr){
    let result = arr.filter(e => e.genre.includes('Drama'))
    .filter(e => e.director.includes('Steven Spielberg'))
    console.log (result)
  }
  
  howManyMovies(movies)

// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
