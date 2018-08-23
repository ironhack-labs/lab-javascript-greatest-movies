/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

  function turnHoursToMinutes(movies){
      return movies.map(function (e) {
        var minutes = 0;
        for (var i = 0; i < e.duration.length; i++) {
          if (e.duration[i] == "h") {
            minutes = parseInt(e.duration[i - 1]) * 60;
          }
          if (e.duration[i] == "m") {
            if (e.duration[i - 2] === " ") {
              minutes += parseInt(e.duration[i - 1]);
            }
            else {
              minutes += parseInt(e.duration[i - 2]) * 10 + parseInt(e.duration[i - 1]);
            }
          }
        }
        return Object.assign({}, e, { duration: minutes });
      });;
  }

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
    var total=movies.reduce(function(acc,current){
      return acc+parseFloat(current.rate);
      },0);
      return total.toFixed(2)/movies.length;
    }




// Get the average of Drama Movies

function dramaMoviesRate(movies){
    var newArray=[];
    for(var i=0;i<movies.length;i++){
      if(movies[i].genre.indexOf("Drama")!=-1){
        newArray.push(movies[i]);
      }
    }
    if(newArray.length==0){
        return;
      }
      var total=newArray.reduce(function(acc,current){
        return acc+parseFloat(current.rate);
        },0);
        return (total/newArray.length).toFixed(2);
      }




// Order by time duration, in growing order


function orderByDuration(movies){
    return turnHoursToMinutes(movies).sort(function(a,b){
        return a.duration-b.duration;
    });
    }


// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){
    return movies.filter(function(i){
      return i.director==="Steven Spielberg" && i.genre.indexOf("Drama")!=-1;
    });
  };

// Order by title and print the first 20 titles

function orderAlphabetically(movies){
    var x =  movies.sort(function(a,b){
        var nameA=a.title.toLowerCase();
        var nameB=b.title.toLowerCase();
        if(nameA<nameB){
          return -1;
        }
        if(nameA>nameB){
          return 1
        }
        return 0;
    });
    var newArray=[];
    if(x.length<=20){
      for (var i=0;i<x.length;i++){
        newArray.push(x[i].title);
      }
    }
    else{
      for (var i=0;i<=20;i++){
        newArray.push(x[i].title);
      }
    }
    return newArray;
    }
    
// Best yearly rate average
