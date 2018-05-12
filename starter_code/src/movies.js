/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(a) {
  let out = a.map((e) => {
    let newElement = Object.assign({}, e);

    if (e.duration.length < 3) {
      newElement.duration = parseInt(e.duration[0] * 60);
    } else if (e.duration.length < 6) {
      newElement.duration = parseInt(e.duration.split("min")[0]);
    } else {
      newElement.duration = e.duration[0] * 60 + parseInt(e.duration.split(" ")[1].split("min")[0]);
    }
    return newElement;
  });
  console.log(out)
  return out;
}


// Get the average of all rates with 2 decimals 

function ratesAverage(movie) {
  return movie.reduce((inc, e, i) => {
    let media = e.rate / movie.length + inc;
    return Number(media.toFixed(2));
  }, 0);
}



// Get the average of Drama Movies
function dramaMoviesRate(a) {
  let dramaFilter = a.filter((e) => { 
    return e.genre.includes("Drama");
  });
  let averageDrama = ratesAverage(dramaFilter);
  if (averageDrama == 0) {
    return undefined;
  } else {
    return averageDrama;
  }
}


// Order by time duration, in growing order
   
function orderByDuration(array){
  array.sort((movie1, movie2) =>{
    
    if(movie1.duration - movie2.duration){
      return movie1.duration - movie2.duration;
    }
    if(movie1.title < movie2.title){
      return -1;
    }
    if(movie1.title > movie2.title){
      return 1;
    } 
    return 0;
  });
    return array;
    
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(arrayIn) {
  if (arrayIn.length===0){
      return undefined;
  }
  var dramaFilter = arrayIn.filter((movie) =>{
      return movie.genre.includes("Drama");
    });
  var spielbergFilter = dramaFilter.filter((movie) => {
      return movie.director.includes("Spielberg");
  });
  return ('Steven Spielberg directed '+spielbergFilter.length+' drama movies!');
}




// Order by title and print the first 20 titles
function orderAlphabetically (array){
  var mapped=[];
  array.sort((b, c) => {
      if  (b.title > c.title) {
        return 1;
      }
      if (b.title < c.title){
        return -1;
      }
      return 0;
    });
  array.map((element) => {
      var title = element.title;
      mapped.push(title);
  }) 
  return mapped.slice(0,20);
}

// Best yearly rate average

