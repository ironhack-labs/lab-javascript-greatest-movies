/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
  
   var durationArray = array.map(function(movie) {
 
        var tempArray = movie.duration.toString().split(" ");

        var tempHours = 0;
        var tempMin = 0;
        var tempDuration = 0;
          
          if (tempArray.length > 1) {
            tempHours = Number(tempArray[0].charAt(0)) * 60;
              if (tempArray[1].charAt(1) === "m") {
                  tempMin = Number(tempArray[1].charAt(0));
                } else {
                  tempMin = Number(tempArray[1].charAt(0) + tempArray[1].charAt(1));
              }
          } else {
                if (tempArray[0].includes("min")) {
                    if (tempArray[0].charAt(1) === "m") {
                        tempMin = Number(tempArray[0].charAt(0));
                    } else {
                        tempMin = Number(tempArray[0].charAt(0) + tempArray[0].charAt(1));
                    }
                } if (tempArray[0].includes("h")) {
                      tempHours = Number(tempArray[0].charAt(0)) * 60;
                }
          }
        tempDuration = Number(tempHours + tempMin);

        var newMovie = Object.create(movie);
        movie.duration = tempDuration;
        return newMovie;

      });

  console.log(durationArray);
  return durationArray;
};

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

function ratesAverage (array) {
    if (array.length === 0) {
      return undefined;
    } else {
        var totalRating = 0;
        for (var i = 0; i < array.length; i++) {
          var num = Number.parseFloat(array[i].rate);
          totalRating += num;
        }
        var avg = Number.parseFloat(totalRating / array.length).toFixed(2); // Important de pas mettre le ToFixed dans le return
        //console.log(avg);
        if (Number.isInteger(avg)) {
          //console.log(avg);
          return Number(avg);
        } else {
          //console.log(avg);
          return Number.parseFloat(avg);
        }
    }
};
ratesAverage(movies);

// Get the average of Drama Movies
var dramaMovies;
function dramaMoviesRate (array) {
    dramaMovies = 
    array.filter(function(theub) {
      return (theub.genre.includes("Drama") || theub.genre.includes("drama"));
    });
    console.log(dramaMovies);
        if (dramaMovies.length === 0) {
          return undefined;
        } else {
          var totalRating = 0;
            for (var i = 0; i < dramaMovies.length; i++) {
                if ((dramaMovies[i].rate !== null) && (dramaMovies[i].rate !== "")) {
                  var num = Number.parseFloat(dramaMovies[i].rate);
                  totalRating += num;
                  console.log("Drama rating" + dramaMovies[i]);
                  console.log(" Drama num " + num);
                  console.log(" Drama totalRating : " + totalRating);
                }
            }
        }
    var avg = (totalRating / dramaMovies.length).toFixed(2); // Important de ne pas mettre toFixed dans le return (string)
    console.log(avg);
    return Number.parseFloat(avg);
};

dramaMoviesRate(movies);


// Order by time duration, in growing order
function orderByDuration(array) {
  //turnHoursToMinutes(array);
  var durationSortedArray = 
  array.sort(function (itemA, itemB) {
    // if "itemA" comes before "itemB" return NEGATIVE (order is good)
      if (Number(itemA.duration) < Number(itemB.duration)) {
          return -1;
      } else {
          // if "itemB" comes before "itemA" return positive (they need to be switched)
          return 1;
      }
  });

 return durationSortedArray;
};

orderByDuration(movies);

// How many movies did STEVEN SPIELBERG

var spielbergDramaMovies;
function howManyMovies (array) {
    dramaMovies = 
    array.filter(function(theub) {
        return (theub.genre.includes("Drama") || theub.genre.includes("drama"));
    });

    if (dramaMovies.length === 0) {
      return undefined;

    } else {
        spielbergDramaMovies = 
        dramaMovies.filter(function(theub) {
            return (theub.director.toLowerCase().includes("steven spielberg") && theub.director.toLowerCase().includes("spielberg"));
        });

        return "Steven Spielberg directed " + spielbergDramaMovies.length + " drama movies!";
    }
};

howManyMovies(movies);


// Order by title and print the first 20 titles


function orderAlphabetically(array) {
    var alphaMovies = 
    array.sort(function (itemA, itemB) {
      // if "itemA" comes before "itemB" return NEGATIVE (order is good)
        if (itemA.title.toLowerCase() < itemB.title.toLowerCase()) {
            return -1;
        } else {
            // if "itemB" comes before "itemA" return positive (they need to be switched)
            return 1;
        }
    });

    var alphaTitles = [];
    if (alphaMovies.length <= 20) {
        for (var i = 0 ; i < alphaMovies.length; i++) {
              alphaTitles.push(alphaMovies[i].title);
        }

    } else {   
        for (var i = 0 ; i < 20; i++) {
            alphaTitles.push(alphaMovies[i].title);
        }
    }
    return alphaTitles;
};

orderAlphabetically(movies);
// Best yearly rate average


function bestYearAvg(array) {

    var yearArray = []
    array.forEach(function(theub) {
      yearArray.push(theub.year);
      console.log(yearArray);
    });

    if(yearArray.length === 0) {
        return undefined;
    } else {
        var skimmedYearArray = [];
        for (var i = 0; i < yearArray.length; i++) {
            if (skimmedYearArray.includes(yearArray[i]) === false) {
                skimmedYearArray.push(yearArray[i]);  
            }
        }
        console.log(skimmedYearArray);
    }  

    var sortedSkimmedYearArray = 
    skimmedYearArray.sort(function (itemA, itemB) {
      // if "itemA" comes before "itemB" return NEGATIVE (order is good)
        if (itemA < itemB) {
            return -1;
        } else {
            // if "itemB" comes before "itemA" return positive (they need to be switched)
            return 1;
        }
        
    });
    console.log(sortedSkimmedYearArray);

;}


bestYearAvg(movies);



