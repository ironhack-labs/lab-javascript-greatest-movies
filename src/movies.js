// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let allDirectors=moviesArray.map(x=>x.director)
   return allDirectors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  

function howManyMovies(moviesArray) {
  let result = 0
  if (moviesArray.length===0){
    return result
  }

  let moviesSpielberg = moviesArray.filter (movie => movie.director===`Steven Spielberg`)
  let onlyDrama =[]
  for ( let i = 0; i < moviesSpielberg.length; i ++){
    let genre = moviesSpielberg[i].genre

    for ( let j = 0; j < genre.length; j++ ) {
      const element = genre[j];
      
      if (element==="Drama") {
        result++
        onlyDrama.push(moviesSpielberg[i]) 
      }
      
    }
    
  }
  

 return result

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  let result = 0
  if (moviesArray.length === 0) {//if is empty = 0
    return result
  }

 let scores= moviesArray.map(scores=> scores.score) 
 let suma = 0
 for (let i = 0 ; i < scores.length; i ++){
  let element = scores[i];
  if (element === " " || element === "" || element === undefined ) {//if if one of the movies does not have score = 0
    element = 0
    
  }
  suma += element 
  
 }

let avg = suma / scores.length// average 
result = avg

 return parseFloat(result.toFixed(2))//number with two decimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
console.log("hola")


function dramaMoviesScore(moviesArray) {
  
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));console.log(typeof dramaMovies)//creamos un array con las pelis de drama
  if (dramaMovies.length === 0) {
    return 0
  }
  let average=scoresAverage(dramaMovies)
  return average
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {


  const copyMoviesArray=moviesArray.slice()//hacemos una copia del array para que no modifique el original
  
  copyMoviesArray.sort((a,b)=>{//primero ordenamos alfabeticamente
    if ( a.title < b.title){
      return -1
    }
    if ( a.title > b.title ){
      return 1
    }
    return 0
  })


  copyMoviesArray.sort((a,b)=> a.year - b.year)//despues ordenamos por año
  

 return copyMoviesArray

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  
  
    let onlyTwenty=moviesArray.slice()//hacemos una copia del array para que no modifique el original
    
    onlyTwenty=onlyTwenty.map (movie=>movie.title)//ahora hacemos un map para quedarnos cons titles
     onlyTwenty.sort ((a, b) => a.localeCompare(b));//los ordenamos alfabeticamente
     if (onlyTwenty.length >= 20){//si el leght de onlyTwenty es igual o mayor a 20 me devuelves los 20 primeros
  
      onlyTwenty= onlyTwenty.slice(0,20)
    }

  return onlyTwenty
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  let copyMoviesArray = JSON.parse(JSON.stringify(moviesArray));//para que me pasara el test tuve que hacer una copia profunda del array 
  let finalArray = JSON.parse(JSON.stringify(moviesArray));
copyMoviesArray = copyMoviesArray.map (durationMove=>durationMove.duration)//hacemos map que nos deje el array solo con duration
console.log(copyMoviesArray)
function change (arr){//creamos una funcion que convietra el formato 2H en 2h 00min y 30min en 00h y 30min
  if (arr.length ===8) {
    return arr
  }
  for (let i = 0; i < arr.length; i++) {//itera por el array  si encuentra una h y no enecuentra min le suma por detras 00min
    const element = arr[i];
    if (element.includes("h") && !element.includes("min")) {//si encuentra una h y no enecuentra min le suma por detras 00min
      arr[i] += " 00min"

      
    }else if(!element.includes("h")){//si no encuentra h le suma 00h
      arr[i] = `00h `+ arr[i]
    }
    
  }
  return arr//deveulve el formato correcto 

}

  copyMoviesArray=change(copyMoviesArray)//le doy el valor de la funcion anterior ya siempre tiene el formato correcto
  
  copyMoviesArray= copyMoviesArray.map(function chageForMin(str){//hacemos un map para iterar por cada duration con su formato correcto y le damos una funciion 
    let strParts = []//craeamos un array vacio para meter los duration 
    strParts = str.split(" ")//metemos los duration que vienen en un string y los partimos por e espacio vacio
  
    
       const horas = parseInt( strParts [0], 10); console.log(horas)//el primer espacio lo convertimos a numero y lo metemos a la variable horas
       const minutos = parseInt(strParts [1], 10) ; console.log(minutos)//el segundo espacio lo convertimos a numero y lo metemos ene variable minutos
       strParts= horas * 60 + minutos ;  // convertimos las horas a min y le sumamos los minutos que teniamos 
       return strParts//devuelve un numero que es el numero de min
      })
      for ( let i = 0 ; i < copyMoviesArray.length; i++){//iteramos por el rray copiado buscando las duration y le decimos que sustituya la duration que viene por la nuestra
        finalArray[i].duration=copyMoviesArray[i]//le pasamos el nuevo duration a otro array 

        
      }


  return finalArray//retornamos el array con duration cambiado
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  
}

