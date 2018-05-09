/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


let turnHoursToMinutes = (array) => {
  return array.map((element) => {
      let durationOfficial = element.duration;
      if (isNaN(durationOfficial) === false){
        return durationOfficial;
      }
      
      let minutesWithoutLetters = durationOfficial.split(" ");
      
      if (minutesWithoutLetters[0].includes("min")){
        let finalDuration = parseInt(minutesWithoutLetters[0].replace(/\D/g,''));
        element = Object.assign({},element);
        element.duration = finalDuration;
        return element;
        
      } else if(minutesWithoutLetters[0].includes("h")){
          let hoursToMinutes = parseInt((minutesWithoutLetters[0].replace(/\D/g,'')) * 60);
          let secondMinuteString = minutesWithoutLetters[1];
            if (secondMinuteString === undefined) {
            secondMinuteString = '0';
          }
      
          let minutes = parseInt(secondMinuteString.replace(/\D/g,''));

          let finalDuration = hoursToMinutes + minutes;
      
          element = Object.assign({},element);
          element.duration = finalDuration;
          return element;
        } 
      
        else {
        let hoursToMinutes = parseInt((minutesWithoutLetters[0].replace(/\D/g,'')));
        let secondMinuteString = minutesWithoutLetters[1];
          if (secondMinuteString === undefined) {
            secondMinuteString = '0';
          }
      
        let minutes = parseInt(secondMinuteString.replace(/\D/g,''));

        let finalDuration = hoursToMinutes + minutes;
      
        element = Object.assign({},element);
        element.duration = finalDuration;
        return element;
        
        }
    })
  }
  
let ratesAverage = (array) => {
  let sum = array.reduce(function (accumulator, current) {
    
  if(current.rate === ''){
    current.rate = 0;
  }
  let rate = (current.rate) * 1;
  accumulator = accumulator + rate;
  return accumulator;
},0);

  let average = sum / array.length;
  return average;
  
}


let dramaMoviesRate = (array) => {
  let dramaMovies = array.filter(function(element){
    
    let yes = element.genre.find(function(word){
        return word == 'Drama'
      });
      return yes === "Drama";
    });
  
  dramaAverage = parseFloat(ratesAverage(dramaMovies).toFixed(2));
  
  if (isNaN(dramaAverage)){
    return undefined;
  } else {
    return dramaAverage;  
  }
  
}



let orderByDuration = (array) => {
  let moviesMinutes = turnHoursToMinutes(array);

  return array.sort(function(movieA, movieB){
    if (movieA.duration === movieB.duration) {
      if (movieA.title < movieB.title){
        return -1
      } else {
        return 1;
      }
    }
    return movieA.duration - movieB.duration;
  });
}





let howManyMovies = (array) => {
  
  if(array.length === 0){
    return undefined;
  }

  let dramaMoviesSpielberg = array.filter(function(movie){
  
    let drama = movie.genre.find(function(word){
      return word == 'Drama'
      });
    
    let steven = movie.director;
    
    return drama === "Drama" && steven == 'Steven Spielberg';
  });

  if (dramaMoviesSpielberg === []){
      return undefined;
  } else {
      howMany = dramaMoviesSpielberg.length;
      return "Steven Spielberg directed " + howMany + " drama movies!";
    } 
  
  }


let orderAlphabetically = (array) => {
      let ordered =  array.sort(function(movieA, movieB){
        
        if (movieA.title > movieB.title){
          return -1;
        } else if ("Else IF" + movieA.title < movieB.title){
          return 1;
        }
        return 0;  
      })
    
    let listOrdered =  ordered.reverse();
    let size = 20;
    let firstItems = listOrdered.slice(0,size);
    
    
    let finalArray = firstItems.map(function(element){
      return element.title;
    })
    
    return finalArray;
    
  };
    

  let bestYearAvg = (array) => {
  
    if (array.length == 0) {
      return undefined;
    }
    
      
      let allYears = (array) => {
        let years = array.map(function(element){
          return element.year;
        });
        return years;
      } 
    
    
      let allYearsMovies = allYears(array);
      
      let allYearsMoviesNoDuplicates =   [...new Set(allYearsMovies)].sort();
      
      let hola = allYearsMoviesNoDuplicates.map(function(valueYear){
        
          let arrayFiltrado = array.filter(function(element){
              return element.year == valueYear
          });
          
          return arrayFiltrado;
      });
  
      let finalResulting = []
  
      for (i=0;i<hola.length;i++){
        let thisYear = hola[i][0].year;
        let promedio = ratesAverage(hola[i]);
        let promedioFixed = promedio.toFixed(1);
        finalResulting.push({'year':thisYear, 'avg': promedioFixed});
      }
  
  
      let finalfinalfinal = finalResulting.sort(function(a,b){
        return b.avg - a.avg;
      })
  
    
    if (finalfinalfinal[0].avg % 1 == 0) {
        let frase = 'The best year was ' + finalfinalfinal[0].year + ' with an average rate of ' + parseInt(finalfinalfinal[0].avg);  
      console.log("hola");
      return frase  
      
    } 
  
      let frase = 'The best year was ' + finalfinalfinal[0].year + ' with an average rate of ' + finalfinalfinal[0].avg;  
      
      return frase
  }