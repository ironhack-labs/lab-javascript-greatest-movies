/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//Iteración 1
function turnHoursToMinutes(array){
    var nuevoArray = array.map(peli=>{
         var horas = peli.duration.split (' ')[0].split('h')[0]
         var min = peli.duration.split (' ')[1].split('min')[0]
         var tot = (horas*60)+min*1
         //console.log(horas)
         //console.log(min)
         //console.log(tot)
         peli.duration = tot
 
         return peli
         
    })
   return nuevoArray
 }
 console.log(turnHoursToMinutes(movies))

// Get the average of all rates with 2 decimals 
//Iteración 2
function ratesAverage(array2){
    var sum = 0
     var nuevoArray = array2.map(peli=>{
          sum = peli.rate*1 + sum
          
          return peli
     })
    console.log((sum/nuevoArray.length).toFixed(2))
    return nuevoArray
  }
  //console.log(movies)
  console.log(ratesAverage(movies))

// Get the average of Drama Movies
function dramaMoviesRate(array3){
    var sum=0
    var p =0
    var ave=0
    var nuevoDrama = array3.map(peli=>{
      //console.log(peli.genre)
      if(peli.genre.indexOf("Drama")!=-1){
        sum = sum + peli.rate*1
        p++
      }
      ave = sum / p
      
  })
    
    console.log(ave)
  }
  
  console.log(dramaMoviesRate(movies))

// Order by time duration, in growing order
//Iteración 4
function orderByDuration(array4){
    var nuevo = array4.sort(function(a, b){
        if(a.duration > b.duration) return 1; 
        if(a.duration < b.duration) return -1;
        if(a.duration === b.duration) {
          if(a.title > b.title){
            return 1;
        } else return -1;
      }});
      return nuevo;
    }
     console.log(orderByDuration(movies));

     var numeritos = [7,3,8,2]

     numeritos.sort((a,b)=>a-b)
     console.log(numeritos)

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
