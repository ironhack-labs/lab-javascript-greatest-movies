/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
    var newArr = [];
    arr.forEach(function(movie, index){
      var duration = movie.duration;
      var arrDur = duration.split(" ");
      var horas = parseInt(arrDur[0].split("h")[0]);
      var minutos = parseInt(arrDur[1].split("min")[0]);
      var hToMin = horas * 60;
      var totalMin = hToMin + minutos;
      newArr.push(movie);
      newArr[index].duration = totalMin;
    });
    return newArr;
   }
   
   turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    var sum = 0;
    var counter = 0;
    arr.forEach(function(movie){
      sum += parseFloat(movie.rate);
      counter += 1;
    });
    var average = Math.round((sum / counter) * 100) / 100;
    console.log(average);
   }
   
   ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(arr){
    var filteredArr = arr.filter(function(movie){
      var tieneDrama = false;
      movie.genre.forEach(function(genero){
        if(genero === "Drama") tieneDrama = true;
      });
      return tieneDrama;
    });
   
    ratesAverage(filteredArr);
   }
   
   dramaMoviesRate(movies);


// Order by time duration, in growing order
function orderByDuration(arr){
    var sortedArr = arr.sort(function(a, b){
      if(a.duration > b.duration){
        return a.duration - b.duration;
      } else if(a.duration === b.duration){
        return a.title - b.title
      }
    }).reverse();
   
    return sortedArr;
   }
   
   orderByDuration(movies);

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
    var filteredArr = arr.filter(function(movie){
      var tieneDramaYSpilberg = false;
      if(movie.director === 'Steven Spielberg' && movie.genre.indexOf("Drama") != -1){
        tieneDramaYSpilberg = true;
      }
      return tieneDramaYSpilberg;
    });
   
    return filteredArr;
   }
   
   howManyMovies(movies);

// Order by title and print the first 20 titles
function orderAlphabetically(arr){
    var counter = 20;
    if (arr.length < 20){
      counter = arr.length;
    }
    var finalArr = [];
    var orderedArr = arr.sort(function(a,b){
      if(a.title<b.title) return 1;
      if(a.title>b.title) return -1;
      if(a.title==b.title) return 0;
    }).reverse();
   
    for(var i=0; i <= counter - 1; i++){
      finalArr.push(orderedArr[i]);
    }
   
    return finalArr;
   }
   
   orderAlphabetically(movies);

// Best yearly rate average
