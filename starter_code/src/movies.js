/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (elem) {
      var hours = 0;
      var minutes = 0;
      if (elem.duration.indexOf('h') !== -1) {
        hours = parseInt(elem.duration[0], 10) * 60;
      }
      if (elem.duration.indexOf('min') !== -1) {
        minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
      }
      return Object.assign({}, elem, { duration: hours + minutes });
    });
  }
  turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var average=array.reduce(function(accumulator, current){
      return (accumulator+parseInt(current.rate));
    },0)
    return average/array.length;
  }

// Get the average of Drama Movies
function dramaMoviesRate(array){
    var dramaArr= array.filter(function(elem){
        if (elem.genre.indexOf('Drama') !== -1){
          counter=+1;
          return elem;
        }
    });
    if(dramaArr.length===0){
        return undefined;
    }
    var sum=dramaArr.reduce(function(accumulator, current){
      //if current rate exists, then continue, else only return accumulator
        return current.rate ? (accumulator+parseInt(current.rate)) : accumulator
    },0)
    average=+(sum/dramaArr.length).toFixed(2);
    return average;
  }

  console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order
function orderByDuration(movies){
    var moviesSort= movies.sort(function(a,b) {
        if(a.duration-b.duration===0){
            if(a.title>b.title){
                return a.duration;
            }
            else{
                return b.duration;
            }
        }
   return a.duration - b.duration;
 });
 
 return moviesSort;
 }

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  if (movies.length===0)
    return undefined;

    var counter=0;
    var dramaArr= movies.filter(function(elem){
 
    if ((elem.genre.indexOf('Drama')) && (elem.director.indexOf('Steven Spielberg')) !== -1){
      counter= counter + 1;
      return elem;
    }
    });
    if(dramaArr.length===0){
    return "Steven Spielberg directed 0 drama movies!";
    }
return "Steven Spielberg directed " + counter + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically (movies){
  var arr= movies.title.sort();
  var smallArr=[];
  for(var i=0; i<20; i++){
    smallArr=arr[i].title;
  }
  return smallArr;
}

// Best yearly rate average
