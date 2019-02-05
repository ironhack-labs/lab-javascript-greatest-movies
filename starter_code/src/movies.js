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
      if (arr.length === 0) {
          return arr[0];
      } else {
        var stevenMovies = arr.filter(function(object){
            return object.director === "Steven Spielberg" && object.genre.includes("Drama") ;
          })
            /*var numberMovies =[];
            stevenMovies.forEach(function(element){
              return numberMovies.push(element.title);
          })*/
          return "Steven Spielberg directed " + stevenMovies.length + " drama movies!";
      }

  }

  function orderAlphabetically (arr) {
    var long = arr.length;
    if (long > 20) {
        long = 20;
    }
    var ordered = arr.sort (function(a,b) {
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        } else {
            return 0;
        }
    })
    var result =[];
    for (var i = 0; i <long; i++) {
        result.push(ordered[i].title);
    }
    return result;
  }

  function bestYearAvg (arr) {
    if (arr.length === 0) {
        return arr[0];
    } else {
        var object = {
            year: "",
            avgRate:""
        };
    
        var yearToRates = [object];
        yearToRates[0].year = arr[0].year;
    
        var yearOrdered = arr.sort(function (a,b) {
            return a.year-b.year;
        })
         
         for (var i=1; i<yearOrdered.length;i++) {
             if (yearOrdered[i].year !== yearToRates[yearToRates.length-1].year) {
                 yearToRates.push(Object.assign({},object));
                 yearToRates[yearToRates.length-1].year = yearOrdered[i].year;
             }
         }
    
         var eachYearAvgRate = yearToRates.map(function (object){
             var films = arr.filter(element=> element.year == object.year);
             object.avgRate = ratesAverage (films);
             return object;
         } )
    
         eachYearAvgRate.sort(function (a,b){
            if (b.avgRate === a.avgRate) {
                return a.year - b.year;
            } else {
                return b.avgRate-a.avgRate;
            }
         });
    
         return "The best year was " + eachYearAvgRate[0].year + " with an average rate of " + eachYearAvgRate[0].avgRate;
        
    }
    
  }

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
