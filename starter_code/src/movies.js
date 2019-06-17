/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  const moviesClone = JSON.parse(JSON.stringify(movies))

  const movieHour = moviesClone.map(hour =>{
    let movieTotal = 0;
   
    if(hour.duration.length > 7){
    let movieHour = parseInt(hour.duration.slice(0,1) * 60);
    let min = parseInt(hour.duration.slice(3,5));
      movieTotal = movieHour + min;
    } else if(hour.duration.length === 2){
    let movieHour = parseInt(hour.duration.slice(0,1) * 60);
    movieTotal = movieHour;
    }else if(hour.duration.length === 5){
    let min = parseInt(hour.duration.slice(0,2));
      movieTotal = min;
    }

   hour.duration = movieTotal;
   return hour;
  });
  return movieHour;
  
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
  const avgRates = movies.reduce((total, nota) => {
    return total + parseFloat(nota.rate);},0)
  return (avgRates / movies.length);
}

// Get the average of Drama Movies

function dramaMoviesRate(movies){
  const dramaRate = movies.filter(drama => drama.genre.includes('Drama'));
 
  if(dramaRate.length === 0){
    return undefined;
  }
  const avgDrama = dramaRate.reduce((total, drama) => {
   if(drama.rate === ''){
      drama.rate = 0;
    }
    return total + parseFloat(drama.rate);},0)
    return parseFloat((avgDrama / dramaRate.length).toFixed(2));
}

// Order by time duration, in growing order
function orderByDuration(movies){
  const orderMovies = movies.map(order => order);

  return orderMovies.sort((a, b) => {
    if(a.duration === b.duration){
      return a.title.localeCompare(b.title);
    }else{return a.duration - b.duration}
  })
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){

  if(movies.length === 0){
    return undefined;
  }
  const dramaSteve = movies.filter(drama => drama.genre.includes('Drama') && drama.director === 'Steven Spielberg');
  if(dramaSteve.length === 0){
    return ('Steven Spielberg directed 0 drama movies!');
  }  
  return (`Steven Spielberg directed ${dramaSteve.length} drama movies!`);
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  const orderTitle = movies.map(order => order.title.toLowerCase());
  const orderFinal = orderTitle.sort().slice(0, 20);

  return orderFinal;
}

// Best yearly rate average
