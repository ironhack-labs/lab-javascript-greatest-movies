/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
 
  let newArr = array.map(function(oldMovie){
    let movie = {...oldMovie};
    var strDuration = movie.duration + '';
      if(strDuration.includes("h") && strDuration.includes("min")){
          var durSplit = strDuration.split(' ');
          var hrsMins = parseInt(durSplit[0],10);
          hrsMins = hrsMins * 60;
          var mins = parseInt(durSplit[1],10);
          var totalMins = hrsMins + mins;
          movie.duration = totalMins;
      }
      else if(strDuration.includes("h")){
        var hrsMins = parseInt(strDuration,10);
        totalMins = hrsMins * 60;
        movie.duration = totalMins;
      }
      else if(strDuration.includes("min")){
        var mins = parseInt(strDuration,10);
        totalMins = mins;
        movie.duration = totalMins;
      }
    return movie;
});
  return newArr;
};
//console.log('new',newArray)
let newArray = turnHoursToMinutes(movies);


// Get the average of all rates with 2 decimals 

var initalSum = 0;
function ratesAverage(array){
var rateSum = array.reduce(function(acc, curr){
  return parseFloat(acc) + parseFloat(curr.rate);
}, initalSum);

avgRate = (rateSum / array.length).toFixed(2);
return parseFloat(avgRate);
//console.log(avgRate);
};

ratesAverage(movies);



// Get the average of Drama Movies
function dramaMoviesRate(array){
  var dramaGenreArr = array.filter(function(movie){
    //console.log(movie, movie.rate, isNaN(movie.rate), movie.rate !== '')
    if (movie.genre.includes("Drama")){
      return movie
    }
  });
 // console.log(dramaGenreArr)
    if(dramaGenreArr.length == 0){
      return;
    }
    
    var dramaRateSum = dramaGenreArr.reduce(function(acc, curr){
      console.log(curr)
      let rate = 0
      if(curr.rate == ''){
        rate = 0;
      }else{
        rate = curr.rate;
      }
    return parseFloat(acc) + parseFloat(rate);
  },0);
    return parseFloat((dramaRateSum / dramaGenreArr.length).toFixed(2));
  };
  
  dramaMoviesRate(movies);
  


// Order by time duration, in growing order


function orderByDuration(array){
  sortedArray = array.sort(function(a,b){
    if(a.duration === b.duration){
      var aTitSplit = a.title.split(' ');
      var aTitJoin = aTitSplit.join('').toLowerCase();

      var bTitSplit = b.title.split(' ');
      var bTitJoin = bTitSplit.join('').toLowerCase();
      
     if(aTitJoin < bTitJoin) { return -1; }
      if(aTitJoin > bTitJoin) { return 1; }
    return 0;
      
    }
    return a.duration - b.duration;
  });
  return sortedArray;
}
orderByDuration(newArray);
console.log(sortedArray);


// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
  if (array.length == 0){
    return;
  }
  steven = array.filter(function(movie){
  return movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg');
});

return "Steven Spielberg directed " + steven.length + " drama movies!";
};

howManyMovies(movies);


// Order by title and print the first 20 titles
function orderAlphabetically(array){
  let titles = array.map(a => a.title);
sortedTitles = titles.sort(function(a,b){
      var aTitSplit = a.split(' ');
      var aTitJoin = aTitSplit.join('').toLowerCase();
      var bTitSplit = b.split(' ');
      var bTitJoin = bTitSplit.join('').toLowerCase();
      
     if(aTitJoin < bTitJoin) { return -1; }
      if(aTitJoin > bTitJoin) { return 1; }
    return 0;
      
    });
   
    sliced = sortedTitles.slice(0,20);
    return sliced;
};

   orderAlphabetically(movies);


// Best yearly rate average
