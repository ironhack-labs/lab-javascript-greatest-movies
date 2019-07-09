/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHourstoMinutes(movies) {

}



// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    
    const todo_rates = movies.reduce((acc, elm) => acc + parseFloat(elm.rate),0)

    console.log(todo_rates)

    var avgrates = parseFloat((todo_rates/movies.length).toFixed(2))
    return avgrates; 
} 

// const newStudents = students.map(elm => {
//     const projectsAvg = (elm.firstProject + elm.secondProject) / 2
//     const finalGrade = elm.finalExam * 0.6 + projectsAvg * 0.4
//     return {
//         ...elm,     // El operador de propagación (spread operator) crea copias de objetos
//         finalGrade: Math.round(finalGrade)
//     }
// })

// Get the average of Drama Movies
//const rangeMovies = movies.rate.length;
//const finalRates = parsefloat(rates)
// function ratesAverage(producto) {
    
//     const todo_rates = movies.reduce((acc, elm) => acc + parseFloat//metodo para devolver un numero no una string del rate del array(elm.rate),0)

//     console.log(avg) imprsion en consola de antes

//     var avgrates = parseFloat((avg/movies.length).toFixed(2)) ^dividir todo_rates entre la longitud de la array^ 
//toFixed sirve para formatear un numero usando la notacion de punto fijo, lo que va entre parentesis acota los decimales y redondea^ 
//     return avgrates; 
    
// }
// Order by time duration, in growing order

function orderByDuration(movies){
    let peliculas_orden = [...movies]
   
   
      peliculas_orden.sort((a, b) => {
   
        if(a.duration === b.duration){
          return a.title.localeCompare(b.title);       
        }
        return a.duration - b.duration               
   
      })
      return peliculas_orden
    }
//function dramaMoviesRate(movies)

 
  // if (drama_movies.length === 0) {return undefined}
  // else {
  //   drama_average = ratesAverage(drama_movies)
  //   return drama_average
  //   //console.log(drama_average)
  // }



  function dramaMoviesRate(movies){
    let drama_p = [] //array peliculas drama
    let drama_m = 0 // media rate peliculas drama

    drama_p = movies.filter(elem => elem.genre.includes('Drama')) 
   
    if (drama_p.length === 0) {return undefined}
    else {
      drama_m = ratesAverage(drama_p)
      return drama_m
    }
   
   }




// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) { 

        const filteredMovies = movies.filter(elm => {
            if (elm.director == 'Steven Spielberg' && elm.genre.includes("Drama")) {
                 return true
            } 
          })   
          if (filteredMovies.length === 0){                                             
            return undefined
          }
          console.log (filteredMovies)
         return   `Steven Spielberg directed ${filteredMovies.length} drama movies!`   //cuidado (`) no 
}
 
