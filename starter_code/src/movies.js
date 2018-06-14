/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
  var result = [];
  result = arr.slice(0);
  for(var i=0;i<result.length;i++){
    if(typeof result[i].duration == "number"){
      return result;
    }else {
      if(result[i].duration.includes('min')){
        duration = result[i].duration.split(' ');
      } else {
        duration = [result[i].duration];
      }
        duration = duration.map(function(e){
          if(e.includes('h')){
            var h = e.replace('h', '');
            return parseInt(h)*60;
          } else {
            var m = e.replace('min', '');
            return parseInt(m);
          }
        });
        result[i].duration = duration.reduce(function(acumulator, e){
          return acumulator+e;
        }, 0);
      }
  }
  return result;
}
// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
  rates = [];
  arr.forEach(function(e){
    rates.push(e.rate);  
  });
  var avg = rates.reduce(function(accumulator, cur){
    return accumulator+cur;
  }, 0);
  avg = avg/rates.length;
  return Math.round(avg*100)/100;
}

// Get the average of Drama Movies
function dramaMoviesRate(arr){
  dramaMovies = [];
  arr.forEach(function(e){
    e.genre.forEach(function(g){
      if(g === "Drama"){
        dramaMovies.push(e);
      }
    });
  });
  if(dramaMovies.length == 0){
    return undefined;
  }
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(arr){
  return arr.sort(function(a, b){
    if(a.duration < b.duration){
      return 1;
    } else if(b.duration < a.duration) {
      return -1;
    } else{
      arr.sort(function(a, b){
        if(a.title > b.title){
          return 1;
        } else if(b.title > a.title){
          return -1;
        } else {
          return 0;
        }
      });
    }
    });
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
  var director = arr.filter(function(d){
    return d.director == 'Steven Spielberg';
  });
  var dramaDirector = director.filter(function(m){
    return m.genre.includes("Drama");
  });
  if(director.length==0){
    return 'Steven Spielberg directed 0 drama movies!';
  }
    return 'Steven Spielberg directed '+dramaDirector.length+' drama movies!';
}

// Order by title and print the first 20 titles

function orderAlphabetically(arr){
  arr.sort(function(a,b){
    if(a.title > b.title){
      return 1;
    } else if (a.title < b.title){
      return -1;
    } else return 0;
  });
  var title = [];
  if(arr.length > 20){
    for(var i = 0; i<20;i++){
      title.push(arr[i].title);
    }
  } else {
    for(var j = 0; j<arr.length;j++){
      title.push(arr[j].title);
    }
  }
  console.log(title);
  return title;
}

// Best yearly rate average
