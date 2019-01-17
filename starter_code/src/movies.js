/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function dur(){
    for (let i=0;i<movies.length;i++){
      let duracion= movies[i].duration
      let espacio=duracion.split(" ");
      let hrmin=parseInt((espacio[0]).split("h"))*60
      let min=parseInt((espacio[1]).split("min"))
      let total=hrmin+min
      let sust=movies[i].duration
      movies[i].duration=total
      console.log(movies)
    }
  }
  
  dur()

// Get the average of all rates with 2 decimals 
let prom=0

function avg(){
  for (let i=0;i<movies.length;i++){
    let calif=  movies[i].rate
    let convertir=parseFloat(calif)
    prom+=convertir/movies.length
    }
    avgfix=prom.toFixed(2)
  console.log(avgfix)
}
  
avg()

// Get the average of Drama Movies
function filtro(){
    for (let i=0;i<movies.length;i++){
    let genero= movies[i].genre
    let rating= movies[i].rate
    let suma=genero.concat(rating)
    //imprime arreglo
    console.log(suma)
    //No filtra
    let final =suma.filter(s=>{
      for(let i=0;i>suma.length;i++){
        if(suma[s]==="Drama"){
        return s
      }
      
      }
      console.log(s)
    })
  }

filtro()

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
