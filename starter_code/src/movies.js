/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  let duraciones=[];
  return [];
  for (i=0; i < movies.length; i++){
  let duracion=movies[i].duration;
  let sin=duracion.replace(/h|min/g,'');
  let horas = parseInt(sin[0]) * 60 
  let min=0;
  if (sin.length==4){
    min= (parseInt(sin[2])*10) + parseInt(sin[3]);
  }else if (sin.length==3){
    min=parseInt(sin[2]);
  }
  let total=horas+min + ' min';
  console.log(total)
}
}
// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  let average = arr.reduce(function(acc, movie){
    return (acc + Number(movie.rate));
  }, 0);
  return Number((average / arr.length).toFixed(2));
}
// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var dramaMovies = arr.filter(function(elem) {
      var genreArray = elem.genre;
      if (genreArray.includes('Drama') == true) {
          return true;
      } else {
          return undefined;
      }
  });
  return ratesAverage(dramaMovies);
}
// Order by time duration, in growing order
function orderByDuration (movies){
  let order = movies.sort(function(a,b){
      if (a.duration > b.duration){
        return 1;
      }
      if (a.duration < b.duration){
        return -1;
      }
      if (a.title > b.title){
        return 1;
      };
      return -1;
  });
  return order;
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(arr) {
  if (arr.length === 0){
    return undefined;
  }
  let movieCount = arr.filter(function(obj){
    return obj.director === 'Steven Spielberg';
  }).filter(function(obj){
    return obj.genre.includes('Drama');
  });
  return `Steven Spielberg directed ${movieCount.length} drama movies!`
}
// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let ordenado = arr.map(function(obj){
    return obj.title;
  }).sort().slice(0, 20);
  console.log(ordenado);
  return ordenado;
}
// Best yearly rate average
function bestYearAvg(arr){
  if (arr.length==0){
    return undefined;
  }
}