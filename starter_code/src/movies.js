/* eslint no-restricted-globals: 'off' */
function turnHoursToMinutes(str){
  let horas = 0
  let minutos = 0
  let total = 0
  let h = str.split("h")
  horas = parseInt(h)
  //minutos
  if(h[1] == null){
    console.log('true')
    total = horas * 60
  } 
  else {
    let j = h[1].split("min")
    minutos = parseInt(j[0])
    //console.log("minutos: "+minutos)
    //console.log("horas: "+ horas)
    total = (horas*60)+minutos
    return total
  } //console.log("total:"+ total)
}

movies.forEach((e)=>{
  turnHoursToMinutes(e.duration)
})
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
