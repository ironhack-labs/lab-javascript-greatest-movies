/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){

    var newArray = array.map(function(eachMovie){

      var hours = 0;
      var minutes =0;
      var temp = [];

      if(eachMovie.duration.indexOf("h") !== -1){
        hours = eachMovie.duration.substring(0,eachMovie.duration.indexOf("h"));
      };

      if(eachMovie.duration.indexOf("m") !== -1){
        minutes = eachMovie.duration.substring(eachMovie.duration.indexOf("m")-2,eachMovie.duration.indexOf("m"));
      }
      
      var totalTimeInMinutes = Number((hours*60)) + Number(minutes);
      temp.title = eachMovie.title;
      temp.year = eachMovie.year;
      temp.director = eachMovie.director;
      temp.duration = Number(totalTimeInMinutes);      
      temp.genre = eachMovie.genre;
      temp.rate = eachMovie.rate;
      return temp;

    });

    
    return newArray;
};

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  var SumOfRates = 0;
  SumOfRates = array.reduce(function(sum,eachMovie){
    return sum + Number(eachMovie.rate);
  },0);

return parseFloat((SumOfRates / array.length).toFixed(2));

};

// Get the average of Drama Movies

function dramaMoviesRate(array){
  var SumOfRates = 0;

  var filterdArray = array.filter(function(eachMovie){
    return eachMovie.genre === 'Drama';
  });

  SumOfRates = filterdArray.reduce(function(sum,eachMovie){
    return sum + Number(eachMovie.rate);
  },0);

return parseFloat((SumOfRates / array.length).toFixed(2));

};


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
