/* eslint no-restricted-globals: 'off' */

function turnHoursToMinutes(movies){
    return movies.map(peli => {
    
      let nuevaPeli = Object.assign({}, peli);
      nuevaPeli.duration = convertDuration(nuevaPeli.duration);
      return nuevaPeli;
    })
  }
  
  
  function convertDuration (par){
   var hrmin = par.split(" ");
   var hrminnumber = hrmin.map (function (item){ 
    
    if (item.includes('h'))
      return parseInt(item.split('h'))*60
  
    if (item.includes('min'))
      return parseInt(item.split('min'))
  
    }) 
  
    return hrminnumber.reduce (function(acc,val){
        return acc += val    
    },0);
  }
// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies

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