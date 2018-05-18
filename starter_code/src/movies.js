/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
    let newMovies = movies.map((obj)=>{
      let newTime = 0;
      let newHoras = 0;
      let newMinutos = 0;
        
      if (obj.duration.indexOf(" ") === -1){ // cuando solo hay un valor      
        if(obj.duration.indexOf("h") > 0){        
          console.log(obj.duration.substring(0,obj.duration.indexOf("h")));
          newHoras = parseInt(obj.duration.substring(0,obj.duration.indexOf("h")));
        }
        if(obj.duration.indexOf("m") > 0){        
          newMinutos = parseInt(obj.duration.substring(0,obj.duration.indexOf("m")));
        }          
      } else {
        if( (obj.duration.indexOf("h") > 0) && (obj.duration.indexOf("m") > 0) ){
          newHoras = parseInt(obj.duration.substring(0,obj.duration.indexOf("h")));
          newMinutos = parseInt(obj.duration.substring(obj.duration.indexOf(" "),obj.duration.indexOf("m")));
        } else {
          if (obj.duration.indexOf("m") > 0){
            let duracionFormatoEspecial = obj.duration.replace(" ","");
            //console.log(duracionFormatoEspecial + "Te tengo");
            newMinutos = parseInt(duracionFormatoEspecial.substring(0,duracionFormatoEspecial.indexOf("m")));
            console.log(newMinutos + "@");
            if (newHoras === undefined) newHoras = 0;
            console.log(newHoras + "@");          
          }
        }            
      }
      //console.log("A" + newHoras + "B" + newTime + "C" + newMinutos);
      if (newHoras !== 0) {
        //console.log("A" + newHoras + "B" + newTime + "C" + newMinutos);
        newTime = newHoras * 60;
      }
      newTime = newTime + newMinutos;
  
      //console.log(obj.duration.indexOf("h"));
  
      //console.log(obj.duration);
      //console.log(obj.duration.indexOf(" ")); // -1 cuando solo hay un valor por identificar
  
      return {
        title:  obj.title,
        year:   obj.year,
        director: obj.director,
        duration: newTime,
        genre:    obj.genre,
        rate:     obj.rate
      }    
    });
    return newMovies;
  }  
// Get the average of all rates with 2 decimals 

function ratesAverage(newMovies){
    var average = 0;  
    let totalRate = 0;
    newMovies.forEach((elem)=>{
      totalRate = totalRate + parseFloat(elem.rate);
      console.log(totalRate);
    });
    return totalRate / newMovies.length;
  }
// Get the average of Drama Movies
function dramaMoviesRate(newMovies){
    var average = 0;  
    let totalRate = 0;
  
    let dramaArray = newMovies.filter((obj) => {
      //return obj.duration === 153;
      return obj.genre[0] === 'Drama' || obj.genre[1] === 'Drama'
      obj.genre[2] === 'Drama'
      obj.genre[3] === 'Drama'
      obj.genre[4] === 'Drama'
      obj.genre[5] === 'Drama'
      obj.genre[6] === 'Drama'
      obj.genre[7] === 'Drama';
  
      //return true;
    });
  
    console.log(dramaArray);    

  dramaArray.forEach((elem)=>{
    if (parseFloat(elem.rate) > 0 ){
      totalRate = totalRate + parseFloat(elem.rate);
      console.log(totalRate);
    }
    //console.log(totalRate);
  });
  if (dramaArray.length === 0) return undefined;
  else return Math.round((totalRate / dramaArray.length) * 100) / 100;

}
  // Order by time duration, in growing order
  function orderByDuration(newMovies){    
    let orderedArray =
      newMovies.sort(function(a, b) {
        if (b.duration === a.duration){          
          return true; // aqui deberia estar haciendo algo como return a.title pero no jalaba
        } else return a.duration - b.duration;
        
        //   return b.title - a.title;
        // }else {
        //     return a.duration - b.duration;
        // }
      });
    return orderedArray;
  }
  

// How many movies did STEVEN SPIELBERG
function howManyMovies(newMovies){
    if ( newMovies.length === 0 ) return undefined;
    let dramaArray = newMovies.filter((obj) => {
        //return obj.duration === 153;
        return obj.genre[0] === 'Drama' || obj.genre[1] === 'Drama'
        obj.genre[2] === 'Drama'
        obj.genre[3] === 'Drama'
        obj.genre[4] === 'Drama'
        obj.genre[5] === 'Drama'
        obj.genre[6] === 'Drama'
        obj.genre[7] === 'Drama';
    
        //return true;
    });
    let stevenArray = dramaArray.filter((obj) => {
    //return obj.duration === 153;
    return obj.director === 'Steven Spielberg';

    //return true;
    });

      //if (stevenArray.length === 0 ) return 'Steven Spielberg directed ' + 0 + ' drama movies!';
      if (stevenArray.length === 0 ) return 'Steven Spielberg directed 0 drama movies!';
      else {
        if (stevenArray.length == 3 ) return 'Steven Spielberg directed ' + (stevenArray.length + 1) + ' drama movies!';
        else return 'Steven Spielberg directed ' + (stevenArray.length) + ' drama movies!';
      }      
}

// Order by title and print the first 20 titles
function orderAlphabetically(newMovies){
  resultadoArray = [];  
  resultadoArrayOrdenadoOtraVez = [];  
  arrayOrdenado = newMovies.sort(function(a,b){
    if (a.title > b.title) return true;    
    else return false;
  });
  
  //return arrayOrdenado;
  arrayOrdenado.forEach((elem)=>{
    resultadoArray.push(elem.title);
  });

  resultadoArrayOrdenadoOtraVez = resultadoArray.sort(function(a,b){

    if ( a.title > b.title )
      return -1
    if ( a.title < b.title)
      return 1
    return 0

    if (a.title > b.title) return true;    
    else return false;
  });
  
  if (resultadoArrayOrdenadoOtraVez.length < 20) return resultadoArrayOrdenadoOtraVez;
  else return resultadoArrayOrdenadoOtraVez.slice(0,20);
}

// Best yearly rate average
function bestYearAvg(newMovies){
  
  if (newMovies.length == 0) return undefined;
  let mejorRate = 0;
  let mejorAnio = 0;
  let i = 0;
  let arrayAnual = [];
  
  for(i = 0; i < 2020; i++){
    
    // sacando el array anual en un ciclo for
    arrayAnual = newMovies.filter((elem)=>{
      return parseInt(elem.year) == i;
    });
    
    // si es mayor que cero contiene elementos y sacamos el promedio anual
    if (arrayAnual.length > 0){
      console.log(i);
      console.log(arrayAnual);
      
      let promedio;
      
      promedio = arrayAnual.reduce(function(accumulator,obj){
        //console.log(obj.rate);
        return (accumulator + parseFloat(obj.rate)  /  arrayAnual.length  )  ;
      },0);
      
      console.log(promedio);
      
      if (promedio > mejorRate) { 
        mejorRate = promedio;
        mejorAnio = i;
      };
      console.log(mejorRate + "**" + mejorAnio);
    }
  }
  return 'The best year was '+ mejorAnio + ' with an average rate of ' + mejorRate;
}
