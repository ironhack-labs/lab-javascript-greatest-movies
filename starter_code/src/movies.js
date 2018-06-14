/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
  var ratesTotal = movies.reduce(function(accumulator, item){
    return accumulator + item.rate;
  }, 0)
  return ratesTotal / movies.length;
}


// Get the average of Drama Movies

function dramaMoviesRate(movies) {

  var dramaMovies = movies.filter(function(item){

    return item.genre.find(function(item){
    return item === "Drama";
    });

  });

  if (dramaMovies.length){

    var averageOfDrameMovies = ratesAverage(dramaMovies);
    return Math.round(averageOfDrameMovies * 100) / 100
  }
  
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {

  if(movies.length){
  var dramaMovies = movies.filter(function(item){

      return item.genre.find(function(item){
      return item === "Drama";
    });

  });

    var spielbergMovies = dramaMovies.filter(function(item){
    return item.director === "Steven Spielberg";
  
  });

  if(spielbergMovies.length){

    var numberOfSpielbergMovies = spielbergMovies.length;
    return "Steven Spielberg directed " + numberOfSpielbergMovies  + " drama movies!";

  }
  
  return "Steven Spielberg directed 0 drama movies!"

  }
}



// Order by title and print the first 20 titles

function orderAlphabetically(movies){

    var orderedMovies = movies.sort(function(item1, item2){
    return item1.title - item2.title;

  })
  
  var orderedTitles = orderedMovies.map(function(item){
   return item.title;

  })

  if(orderedTitles.length > 20){
    
    return orderedTitles.splice(0, 20);
 
   } 

   
  return orderedTitles;

}


// Best yearly rate average
