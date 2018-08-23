/* eslint no-restricted-globals: 'off' */
// map, reduce, filter, sort
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
    
    var inMinutes2 = array.map(function(movie) {
        
         var re = /[^0-9]/g;
        var durationSep = movie.duration.split(" ");
        //console.log(durationSep);
        for (i = 0; i < durationSep.length; i++){
            durationSep[i] = parseInt(durationSep[i].replace(re, ""));
        }
        //console.log(durationSep);
        var newDuration;
        if (durationSep.length > 1) {
            newDuration =  durationSep[0] * 60 + durationSep[1];
        } else  if (durationSep[0] < 10) {
            newDuration = durationSep[0] * 60;
        } else {newDuration = durationSep[0];}

        return Object.assign({}, movie, {duration: newDuration});
        
    });
    return inMinutes2;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var total = array.reduce(function(accum, e){
        return accum +e.rate;  
    },0)

    var average = Math.round((total/array.length)*100) /100;
    return average;

}
// Get the average of Drama Movies
function dramaMoviesRate(array) {
    var filtered = array.filter(function(e) {      
      return e.genre.includes('Drama');
    })
    if (filtered.length == 0){
       return;
    } else {return ratesAverage(filtered);}
      
}

// Order by time duration, in growing order
function orderByDuration(array) {

    return array.sort(function (a, b){
        if (parseInt(a.duration - b.duration) == 0){
            return a.title > b.title;
        } else {
            return a.duration - b.duration;
        }
    });
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
    if (array.length == 0 ){return;}
    var filtered = array.filter(function(e) {
        if (e.director == "Steven Spielberg"){        
            return e.genre.includes('Drama');
        }
      });
  
    return "Steven Spielberg directed "+ filtered.length +" drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
    var ordered = array.sort(function (a, b){
            
        if (a.title > b.title){
            return 1;
        } else {return -1;}
    }); 
    var orderedTitles = [];
    for (i=0; i<ordered.length; i++){
        if (i<20) {
            orderedTitles.push(ordered[i].title);
        }
    }
    return orderedTitles;

}

// Best yearly rate average
