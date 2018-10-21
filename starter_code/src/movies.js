/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (movieArray) {
    var newMovieArray = movieArray.map(function(elem) {
      var arr = elem.duration.toString().split('h');    
      if (arr.length < 2) {
          arr.unshift("0");        
      }    
      var hours = Number(arr[0]);
      var minutes = Number(arr[1].toString().split("min")[0]);
      elem.duration=hours*60+minutes;
      return elem;
  })
return newMovieArray.reverse();
}
// console.log(turnHoursToMinutes(movies));


// Get the average of all rates with 2 decimals 

function ratesAverage(movieArray) {
  return Math.round(movieArray.reduce(function(sum,elem){
    return sum+Number(elem.rate);
  },0)/movieArray.length*100)/100;
}
// console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate (movieArray) {
  var dramaMovies=movieArray.filter(function(elem){
    //if (elem.genre.indexOf("Drama")>=0) console.log(elem.genre);
    return elem.genre.indexOf("Drama")>=0;
  });
  console.log(dramaMovies.length);
  if (dramaMovies.length===0) return undefined;
  return ratesAverage(dramaMovies);
}
//console.log(dramaMoviesRate(movies));


// Order by time duration, in growing order

function orderByDuration (movieArray) {
  movieArray=turnHoursToMinutes(movieArray);
  movieArray.sort(function (movie1, movie2){
    if (movie1.duration === movie2.duration) return movie1.title.localeCompare(movie2.title,"en");
    else return movie1.duration-movie2.duration; 
  });
  return movieArray;
}
//console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG
function howManyMovies (movieArray) {
  if (movieArray.length===0) return undefined;
  var dramaMovies=movieArray.filter(function(elem){
    //if (elem.genre.indexOf("Drama")>=0) console.log(elem.genre);
    return elem.genre.includes("Drama") && elem.director.includes("Steven Spielberg") ;
  });
  //console.log(dramaMovies.length);
  return "Steven Spielberg directed "+ dramaMovies.length+" drama movies!";
}


// Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
  var movieTitles=[];
  movieArray.forEach(function(elem){
    movieTitles.push(elem.title);
  });
  movieTitles.sort(function (movie1, movie2){
    return movie1.localeCompare(movie2,"en");
  });
  return movieTitles.splice(0,20);
}

// Best yearly rate average
function bestYearAvg(movieArray) {
  if (movieArray.length===0) return undefined;

  //Define a new array with two rows: first row holds the years, second row holds the ratings
  var years=[[],[]];

  //push individual years from the movies array to the first row of the "years" array
  movieArray.forEach(function (elem){
    if (!years[0].includes(elem.year)) years[0].push(elem.year);
  });

  //sort the years in ascending order
  years[0].sort(function (year1,year2){
    return year1-year2;
  });

  //loop through the individual years and calculate the average rating --> store in the second row of the "years" array
  years[0].forEach(function(elem){
    //filter the movies array to only get the movies for the year we're currently calculating for
    var yearMovieList=movieArray.filter(function(movieElem){
      return movieElem.year===elem;
    });
    //calculate the average rating of the filtered array --> store in the second row of the "years" array
    years[1].push(yearMovieList.reduce(function(sum,movieElem){
      return sum+=Number(movieElem.rate);
    },0)/yearMovieList.length);
  })

  //loop through the array one more time to find the year with the best average rating 
  var maxYear=[0,0];
  for (i=0;i<years[0].length;i++){
    if (years[1][i]>maxYear[1]) maxYear=[years[0][i],years[1][i]];
}

//return maxYear;
return "The best year was "+maxYear[0]+" with an average rate of "+maxYear[1];
}

//console.log(bestYearAvg(movies));