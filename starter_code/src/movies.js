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
    totalRate = totalRate + parseFloat(elem.rate);
    //console.log(totalRate);
  });
  return Math.round((totalRate / dramaArray.length) * 100) / 100;
  }
  // Order by time duration, in growing order
  function orderByDuration(newMovies){
    let orderedArray =
      newMovies.sort(function(a, b) {
        if (b.duration - a.duration === 0){
          return b.title - a.title;
        }else {
            return a.duration - b.duration;
        }
    });
    return orderedArray;
  }
  

// How many movies did STEVEN SPIELBERG
function howManyMovies(newMovies){
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
      if (stevenArray.length === 0 ) return undefined;
      return 'Steven Spielberg directed ' + (stevenArray.length + 1) + ' drama movies!';
}


// Order by title and print the first 20 titles


// Best yearly rate average
