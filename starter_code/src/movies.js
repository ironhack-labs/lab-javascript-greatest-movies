/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);






// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray){
  var total = moviesArray.reduce(function(accumulator, current){
    if (current.rate == "") {
      current.rate = 0;
    }
    return accumulator + parseFloat(current.rate);
 }, 0);

  return Math.round((total/moviesArray.length)*100)/100;  
}
ratesAverage(movies);


// Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  
  var dramaList = moviesArray.filter(function(drama){
    for (i = 0; i<drama.genre.length;i++){
       return drama.genre[i] == "Drama";         
    }   
  });
  if (dramaList.length == 0) {
    return;
  }  
  return ratesAverage(dramaList);
}



// Order by time duration, in growing order

function orderByDuration(moviesArray) {
  moviesArray.sort(function (a, b) {
    if (a.duration === b.duration) {
        if (a.title > b.title) {
            return 1;
        }
    }
    return a.duration - b.duration;
});
return moviesArray;
}


  



// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray) {
  if (moviesArray.length == 0) {
    return undefined
  }
  var dramaList = moviesArray.filter(function(drama){
    for (i = 0; i<drama.genre.length;i++){
      if (drama.genre[i] == "Drama") {
        return drama.director == 'Steven Spielberg' 
       }          
    }      
  });

return ("Steven Spielberg directed "+ dramaList.length + " drama movies!");
}



// Order by title and print the first 20 titles


function orderAlphabetically(moviesArray) {
  var orderedList = moviesArray.map(function(elemento){
    return elemento.title;
  });
  orderedList.sort();
  if (orderedList.length<20){
    return orderedList;
  }
  else {
    headerList = [];
    for (i=0; i< 20; i++) {
    headerList.push(orderedList[i]);
    } 
  }
  return headerList;
}

// Best yearly rate average






/*function orderByDuration (moviesArray) {
    moviesArray.sort(function (a, b) {
        if (a.duration === b.duration) {
            if (a.title > b.title) {
                return 1;
            }
        }
        return a.duration - b.duration;
    });
    return moviesArray;
} */