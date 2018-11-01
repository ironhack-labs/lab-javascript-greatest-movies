/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//iteracion 1
function turnHoursToMinutes(array){
    var nuevo = array.map((elem)=>{
        var horas = elem.duration.search("h");
        if (horas !== -1){
            horas = elem.duration.substring(0,horas)
        }else{
            horas = 0
        }
        var minutos = elem.duration.search("m");
        if (minutos !== -1){
            minutos = elem.duration.substring(elem.duration.search("h")+2,minutos)
        }else{
            minutos = 0
        }
        horas = Number(horas)
        minutos = Number(minutos)
        elem.duration = (horas*60) + minutos
        return elem
    });
    return nuevo
    
}


//iteracion 2 Average movies rate
function ratesAverage(array){
    var total= array.reduce((acum,movie)=>{
        var rate = Number(movie.rate)
        return acum + rate
    },0)
    return (total/array.length).toFixed(2)
}
 


// Get the average of Drama Movies
//iteracion 3
function dramaMoviesRate(array){
    var dramas =  array.filter(elem=>elem.genre.indexOf("Drama") !== -1)
    return ratesAverage(dramas)
  }


// Order by time duration, in growing order
function orderByDuration(array){
    return array.sort(function(a,b){
        var arr = [a,b]
        arr.sort((a,b)=>{
          return a.title - b.title
        })
        a = arr[0]
        b = arr[1]
        return a.duration - b.duration
      })
     }

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    var dramas =  array.filter(elem=>elem.genre.indexOf("Drama") !== -1)
    return dramas.filter(elem=>elem.director.indexOf("Steven Spielberg") !== -1)
}


// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var titles = array.map(function(elem){
      return elem.title
    })
    var aux=[]
    titles.sort()
    if(titles.length > 20)
    {
      for(var i=0; i<20; i++){
        aux.push(titles[i])
      }
      titles = aux
    }
    return titles
   }
// Best yearly rate average
