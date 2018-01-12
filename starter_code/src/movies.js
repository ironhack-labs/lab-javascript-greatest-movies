/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
    var long;
    return array.map(function(e) {
      if(e.duration.length < 3){
        long = parseInt(e.duration.slice(0,1) * 60);
        return Object.assign({}, e, { duration: long });
      } else if (e.duration.length < 6){
        long = parseInt(e.duration.slice(0,2));
        return Object.assign({}, e, { duration: long });
      } else {
        long = parseInt(e.duration.slice(0,1) * 60) + parseInt(e.duration.slice(3,-3));
        return Object.assign({}, e, { duration: long });
      }
    })
  }
// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
    var sum = array.reduce(function (acc, i) {
        return acc + Number(i.rate);
    }, 0);
    return parseFloat((sum / array.length).toFixed(2));
};

// Get the average of Drama Movies
function dramaMoviesRate(array) {
    var dramaMovies = array.filter(function (i) {
        return i.genre.find(function (a) {return a === "Drama";}) 
        === "Drama";
    });
    if (dramaMovies.length > 0) {
        return ratesAverage(dramaMovies);
    }
}

// Order by time duration, in growing order
function orderByDuration(array) {
        return array.sort(function(a,b) {
            if (a.duration > b.duration) {
                return 1;
            }
            else if (b.duration > a.duration) {
                return -1;
            } 
            else {
                if (a.title > b.title) {
                    return 1;
                } else if (b.title > a.title) {
                    return -1;
                } else {
                    return 0;
                }
            }
        });
    }

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
        var directedMovies = array.filter(function(e) {
            return (e.director === 'Steven Spielberg' && e.genre.indexOf('Drama') > -1);
        })
        if (array.length > 0) {
            return 'Steven Spielberg directed ' + directedMovies.length + ' drama movies!';
        }
        
    }

// Order by title and print the first 20 titles
// function orderAlphabetically(array){
   
//     var newArr = [];
 
//       array.sort(function(a,b){
//          if(a.title>b.title){
//              return 1;
//          }else if(a.title<b.title){
//              return -1;
//          }else{
//            return 0;
//          }
         
//      })
   
//      array.reduce(function(acc, e, i){
//         if(i<20){
//           return newArr.push(e.title);
//         }
//       })
    
//     return newArr;
     
//  }

function orderAlphabetically(array){
   
    var newArr = [];
 
      array.sort(function(a,b){
        
         if(a.title>b.title){
             return 1;
         }else if(a.title<b.title){
             return -1;
         }else{
           return 0;
         }
         
     })
    array.map(function( e){
      var title = e.title;
      newArr.push(title)
    })
    
    return newArr.slice(0,20);
     
 }

// Best yearly rate average
function bestYearAvg(array){
    
}