/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (arr) {
    var newMoviesArray = arr.map(function(e, i) {
        var totalMinutes = 0;
        var spliting = e.duration.split(" ");

        if (spliting.length === 1) {
            if (spliting[0].includes("h")){
                totalMinutes += parseInt(spliting[0].replace("h", "")) * 60;
            } else if (spliting[0].includes("min")) {
                totalMinutes += parseInt(spliting[0].replace("min", ""))
            }
        } else {
            totalMinutes += parseInt(spliting[0].replace("h", "")) * 60;
            totalMinutes += parseInt(spliting[1].replace("min", ""));
        }
        
        return {
            title: e.title,
            year: e.year,
            director: e.director,
            duration: totalMinutes,
            genre: e.genre,
            rate: e.genre
          };
        //return totalMinutes += minutes + spliting[1].replace("min", "");    
    });
     return newMoviesArray;
} 
// Get the average of all rates with 2 decimals 
function ratesAverage (arr) {
    if (arr.length === 0){
      return undefined;
    } else {
      var sum = arr.reduce(function(acc, e) {
            if (e.rate === "") {
            return acc;
            } else {
            return acc + parseInt(e.rate);}
        }, 0)
        var avg = sum / arr.length;
        return Math.round(avg *100) / 100;
    }
  }



// Get the average of Drama Movies
function dramaMoviesRate (arr) {
    var dramaMovies = arr.filter(function(e){
        return e.genre.includes("Drama"); 
    });
    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration (arr) {
    arr.sort(function(a,b){
       var durationOfThisMovie = transformToMinutes(a);
       var durationOfNextMovie = transformToMinutes(b);
       if (durationOfThisMovie > durationOfNextMovie){
         return 1;
       }
  
       if (durationOfThisMovie < durationOfNextMovie){
         return -1;
       } if (durationOfThisMovie = durationOfNextMovie){
         var moviesAlpha = [a.title, b.title]
         moviesAlpha.sort(function(x, y){
           if (x > y){
           return 1
           } else if (x < y){
           return -1
           }
         })
         if (a.title === moviesAlpha[0]){
           return -1
         } else {
           return 1
         }
       }
  
       return 0;
     });
    return arr;
  };
  
  function transformToMinutes(movie){
     var totalMinutes = 0;
     if (typeof movie.duration === "number"){
       return movie.duration
     } else {
       var spliting = movie.duration.split(" ");
       if (spliting.length === 1) {
           if (spliting[0].includes("h")){
               totalMinutes += parseInt(spliting[0].replace("h", "")) * 60;
           } else if (spliting[0].includes("min")) {
               totalMinutes += parseInt(spliting[0].replace("min", ""))
           }
       } else {
           totalMinutes += parseInt(spliting[0].replace("h", "")) * 60;
           totalMinutes += parseInt(spliting[1].replace("min", ""));
       }
       return totalMinutes;
     }
  };

// How many movies did STEVEN SPIELBERG

function directorSteven (arr) {
    var directorMovies = arr.filter(function(e){
        return e.director.includes("Steven Spielberg"); 
    });
    return directorMovies;
}

  function howManyMovies (arr)  {
    if (arr.length === 0) {
        return undefined;
    }
    var stevenFilter = directorSteven(arr);
    var filteredMovies = stevenFilter.filter(function(e){
            return e.genre.includes("Drama");    
        });
    
    if (filteredMovies.length === 0) {
        return "Steven Spielberg directed 0 drama movies!";
    } else if (filteredMovies.length !== 0) {
        return "Steven Spielberg directed " + filteredMovies.length + " drama movies!";
    }
     

  }


// Order by title and print the first 20 titles
function compare(a,b) {
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0;
  }

function orderAlphabetically (arr) {
    var orderedTitles = arr.sort(compare);
    var arrayAllTitles = orderedTitles.map(function(e){
        return e.title;
    })
    return arrayAllTitles.splice(0, 20);
}

// Best yearly rate average
function bestYearAvg () {

}