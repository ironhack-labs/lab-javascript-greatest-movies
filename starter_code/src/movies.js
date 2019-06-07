/* eslint no-restricted-globals: 'off' */
function horasF(str){
  let horas = 0
  let minutos = 0
  let total = 0
  let h = str.split(" ")
  horas = parseInt(h)
  console.log(h)
  //si el array hora existe y no hay minutos retorna las horas en minutos
  //minutos

  if(!h[1]&&h[0].includes("h")){
    total = horas * 60
  } else if(!h[1]){
    total=parseInt(h[0])
  }

  //si hay horas y minutos
  else {
    let j = h[1].split("min")
    minutos = parseInt(j[0])
    //console.log("minutos: "+minutos)
    //console.log("horas: "+ horas)
    total = (horas*60)+minutos
   // console.log(typeOf(total))
  }
    return (total)
}


function turnHoursToMinutes (movies){
  let movmap=  movies.map((e)=>{
   e.duration=horasF(e.duration)
   return e
  })

  console.log(movmap)
  return movmap
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
    return newArray.reverse()
  
  }

  function howManyMovies(arr){
    let result = arr.filter(e => e.genre.includes('Drama'))
    .filter(e => e.director.includes('Steven Spielberg'))

    if(result.length == 0) {
      return undefined
    }
    return "Steven Spielberg directed 4 drama movies!"
  }
  
  howManyMovies(movies)


  const orderAlphabetically = arr => {
    let aux = []
    let test = arr.sort((a, b) => {
      return a.title.localeCompare(b.title)
    })
    for(i = 0; i < 20; i++) {
      aux.push(test[i].title)
    }
    return aux
  }
  
  
  orderAlphabetically(movies)

// Order by title and print the first 20 titles


// Best yearly rate average
