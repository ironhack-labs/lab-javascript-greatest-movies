/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
 
  let newArr = array.map(function(oldmovie){
    let movie ={...oldmovie};
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







function dramaMoviesRate(movies){
  // Get the average of Drama Movies
  let rating = 0; 
  let dramaMovies = 0;
  for(var i = 0 ; i < movies.length ; i++){
    if(movies[i].genre.includes("Drama")){ //This movie is a drama, so I want to find the rating
      rating = rating + Number(movies[i].rate) 
      dramaMovies++;
    }
  }
  let averageRating = rating / dramaMovies;
  if(!averageRating){
    return undefined; 
  }
  return Number(averageRating.toFixed(2))
}





// Order by time duration, in growing order



// function orderByDuration(Arr){

// var arr = Arr.sort(function(a,b){

//           var aSplit = a.title.split(' ');
//           var ajoin = aSplit.split('').toLowerCase();

//           var bSplit = b.title.split(' ');
//           var bjoin = bSplit.split('').toLowerCase();
//   if (a.duration === b.duration ){
          

//     if(ajoin < bjoin) { return -1; }
//     if(bjoin < ajoin) { return 1; }
//   return 0;


//   }else{
//      return a.duration - b.duration 
//   }  

     
// })
// return arr;

// }
// orderByDuration(newArray)




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








// How many movies did STEVEN SPIELBERG
// function howManyMovies(movies){
//   // Get the average of Drama Movies
//   let rating = 0; 
//   let numMovies = [];
//   for(var i = 0 ; i < movies.length ; i++){
//     if(movies[i].genre.includes("Drama")){ //This movie is a drama, so I want to find the rating
//       rating = rating + Number(movies[i].rate) 
//       numMovies.title;
//     }
//   }
  
// }


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


var orderAlphabetically = function(array){
  
    var allMoviesTitle = [];
    var sort20Title = [];

    for (var i =0; i < array.length; i++){
      allMoviesTitle.push(array[i].title)
    }
    allMoviesTitle.sort();
    for (var i =0; i < 20; i++){
      if (allMoviesTitle.length < 20){
        return allMoviesTitle
      }else{
      sort20Title.push(allMoviesTitle[i])
      
      }
  }
  return sort20Title;

}






// Best yearly rate average

var bestYearAvg = function(arrMovies){

  var allyears = [];
  var sameYears = [];
 
  

  for (var i = 0; i  < allyears.length; i++){
    return allyears.filter(function(a){
      a = allyears[i];
      if (allyears.indexOf(a) === allyears.lastIndexOf(a)){
        
        return sameYears
      }

    });
  };

  }



  
 
  console.log(allyears)
  

