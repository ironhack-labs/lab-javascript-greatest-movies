/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
 
function turnHoursToMinutes (arr) {
    var newArray = arr.map(function(object){
      var newObject = Object.assign({},object);
      var duration1 = newObject.duration.split(" ");
      var minutesDuration = 0;
      for (var i =0; i<duration1.length;i++){
        if (duration1[i].includes("h")) {
          var woHours = parseInt(duration1[i].replace("h",""))* 60;
          minutesDuration += woHours;
        } else {
          var woMinutes = parseInt(duration1[i].replace("min",""));
          minutesDuration += woMinutes;
        }
      }
      newObject.duration = minutesDuration;
      return newObject;
    })
    return newArray;
  }

  function ratesAverage (arr) {
      var sumRate = arr.reduce(function(sum,element){
              return sum + parseFloat(element.rate);  
      },0)
    return (sumRate/arr.length);
  }

  function dramaMoviesRate (arr) {
      var drama = arr.filter(function(object){
          return object.genre.includes("Drama");
      })

      if (drama.length === 0){
          return undefined;
      } else {
        for (var i = 0; i<drama.length;i++) {
            if (!drama[i].rate || drama[i].rate == "undefined") {
                drama[i].rate = "0";
            }
        }
        var dramaAvgRate = ratesAverage(drama);
        return parseFloat((dramaAvgRate).toFixed(2));
        console.log (parseFloat((dramaAvgRate).toFixed(2)));
      }
  }

  function orderByDuration (arr) { 
      return arr.sort(function(a,b){
          if (a.duration == b.duration) {
              if (a.title.toLowerCase() < b.title.toLowerCase()) {
                  return -1;
              } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                  return 1;
              } else {
                  return 0;
              }
          } else {
            return a.duration - b.duration;
          }
      })
  }

  function howManyMovies (arr) {
      var stevenMovies = arr.filter(function(object){
        return object.director === "Steven Spielberg" && object.genre.includes("Drama") ;
      })
        var numberMovies =[];
        stevenMovies.forEach(function(element){
          return numberMovies.push(element.title);
      })
      return numberMovies;
  }

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
