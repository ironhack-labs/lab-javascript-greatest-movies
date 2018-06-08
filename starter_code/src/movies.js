//eslint no-restricted-globals: 'off' 

// ITERATION 1: CHANGE THE TIME FORMAT FOR THE DURATION PROPERTY--------------------

function turnHoursToMinutes(movies){
  var moviesInMinutes = movies.map(function(movie){
    var newDuration = movie.duration.replace("h", "").replace("min", "").split(" ");
    
    if (newDuration[1] != null) {
      newDuration= parseInt(newDuration[0]) * 60 + parseInt(newDuration[1]);
        movie.duration = newDuration;
      } 

    else {
      newDuration= parseInt(newDuration[0]*60);
        movie.duration = newDuration;
  }
  
    return movie;

  });
  return moviesInMinutes;
}

console.log(turnHoursToMinutes(movies));



// ITERATION 2: Get the average of all rates with 2 decimals--------------------

function ratesAverage(movies){
  var average = movies.reduce(function (sum, movie) {
      sum += movie.rate / movies.length;
      return sum;
      },0);
      return average.toFixed(2);
  }

  console.log(ratesAverage(movies));


// ITERATION 3: Get the average of Drama Movies--------------------

function dramaMoviesRate(movies) {
  var arrayDrama = movies.filter(function(movies) {
    return movies.genre.includes("Drama");
  });
  
  var averageDrama=ratesAverage(arrayDrama);
  
  return arrayDrama.length===0 ? undefined : averageDrama;
 
 }
 
 console.log(dramaMoviesRate(movies));




// ITERATION 4: We need to sort the movies in ascending order by their duration.-------------------- 
// Create a method orderByDuration that receives an array as parameter and return the sorted array.

function orderByDuration(movies){
  var orderedMovies=turnHoursToMinutes(movies);
  
  function compare(a,b) {
    if (a.duration < b.duration){
     return -1;}
    if (a.duration> b.duration){
      return 1;}
  
    if (a.duration===b.duration){
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        return 0;}
  }
     return orderedMovies.sort(compare);
}

console.log(orderByDuration(movies));

  

  // ITERATION 5:howManyMovies method that receives an array as a parameter and filter 👀 --------------------
  //he array so we can have only the drama movies where Steven Spielberg is the director.

  function howManyMovies(movies){
    spielbergMovies = movies.filter(function (movie){
      return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
    });
    return spielbergMovies.length;
  }
  
  console.log(howManyMovies(movies));


  // ITERATION 6: Create a orderAlphabetically method, that receive an array and 
  //return an array of first 20 titles, alphabetically ordered. 


  function orderAlphabetically(movies){
    orderedMovies = movies.sort(function(a, b){
      if (a.title < b.title){
          return -1;
      }
    
      if (a.title > b.title){
          return 1;
      }
    
      return 0;
    });
    
    var top20 = orderedMovies.map(function(movie){
      return movie.title;
    })
    top20.splice(20);
    
    return top20;
    }
    
    console.log(orderAlphabetically(movies));



    