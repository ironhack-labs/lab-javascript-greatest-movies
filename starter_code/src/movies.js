/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
    var timing = array.map(function(e){
      text = e.duration;
      if (text.includes('h') && text.includes('min')){
        text = text.replace("h","").replace("min","").split(" ")
        hours = parseInt(text[0])*60;
        min = parseInt(text[1]);
        totalDuration = hours + min;
      } else if (text.includes('h')){
        text.replace("h","")
        hours = parseInt(text)*60;
        totalDuration = hours;
      } else {
        text.replace("min","")
        min = parseInt(text);
        totalDuration = min;
      }
    return Object.assign({},e,{duration:totalDuration});
    })
    return timing;
  }

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    var totalRate = array.reduce(function(acc,elem) {
        return acc + parseFloat(elem.rate);
    },0)
    
    averageRate = Math.round((totalRate/array.length)*100)/100;
    return averageRate;
}

// Get the average of Drama Movies

function dramaMoviesRate(array){
    var dramaMovies = array.filter(function(e){
        return e.genre.indexOf("Drama") >= 0;
       });
    if(dramaMovies.length == 0) return

    var average = ratesAverage(dramaMovies);
    return average;
}

// Order by time duration, in growing order


function orderByDuration(array){
    sortName = array.sort(function(a, b) {
        var movieA = a.title
        var movieB = b.title
        if (movieA < movieB) {
          return -1;
        }
        if (movieA > movieB) {
          return 1;
        }
        return 0;
    });

    sortDuration = array.sort(function (a, b) {
        return a.duration - b.duration;
    });

    return sortDuration;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
    if(!array.length) return
    var spielbergMovies = array.filter(function(e){
        return e.director === "Steven Spielberg";
    });

    var spielbergDramaMovies = spielbergMovies.filter(function(e){
        return e.genre.indexOf("Drama") >= 0;
       });
    var countSpielbergDramaMovies = spielbergDramaMovies.length;

    return "Steven Spielberg directed " + countSpielbergDramaMovies +" drama movies!" ;
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    
    sortTitle = array.sort(function(a, b) {
        var movieA = a.title.toString()
        var movieB = b.title.toString()
        console.log(movieB)
        if (movieA - movieB > 0)  {
        return -1;
        } else if (movieA - movieB < 0) {
        return 1;
        } else {
            return 0;
        } 
    });
    sortTitle = sortTitle.splice(0, 20)
   return sortTitle;
}



// Best yearly rate average
