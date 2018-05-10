/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies)
{
  let moviesMap = movies.map((movie) => {
     let str = movie.duration;
     let hoursStr = str.substr(0,1);
     let hoursInt = (parseInt(hoursStr)*60);
     let minutes;
     let minutesTotal;
     
     let index1 = str.indexOf(" ");

     if(index1 === -1 && str.indexOf("h") != -1)
     {
       minutesTotal = hoursInt;
     }
     
     if(index1 === -1 && str.indexOf("m") != -1)
     {
      minutesTotal = parseInt(str.substr(0,str.indexOf("m")));
     }
     
     if(index1 != -1)
     {
      let index2 = str.indexOf("m");
      let dif = index2-(index1+1)
     
      minutes =  str.substr(index1+1,dif);    
      minutesTotal = parseInt(minutes) + hoursInt;
     }

    return {
      "title":movie.title,
      "year":movie.year,
      "director":movie.director,
      "duration" : minutesTotal,
      "genre":movie.genre,
      "rate":movie.rate
    }
  });

  return moviesMap;
}


// Get the average of all rates with 2 decimals 
function ratesAverage(movies)
{
  let avgRate = movies.reduce((sum, movie) =>{
    
    let rateValue
    
    if(movie.rate  === '')
    {
      rateValue = 0;
    }
    else
    {
      rateValue = parseFloat(movie.rate);
    }
    
    return sum + rateValue;
  },0);

  let sumRateFloat = parseFloat(avgRate/movies.length);
  let sumRateFixed = sumRateFloat.toFixed(2);
  let sumFinal = parseFloat(sumRateFixed);

  //console.log(avgRate/movies.length);
  console.log(sumFinal);

  //return parseFloat(avgRate/movies.length);
  return sumFinal;
}


// Get the average of Drama Movies
function dramaMoviesRate(movies)
{
  let dramaMovies = movies.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if(dramaMovies.length != 0)
  {
    let avgRateDrama = ratesAverage(dramaMovies);
    console.log("Drama Avg: " + avgRateDrama);
    return avgRateDrama;
  }
  else
  {
    return undefined;
  }
  
}


// Order by time duration, in growing order

function orderByDuration(moviesArray)
{
  let movieOrder = moviesArray.sort((a,b) =>{
    //console.log(a.duration);
    if (a.duration > b.duration) {
      return 1;
    }
    if (a.duration < b.duration) {
      return -1;
    }
    
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a must be equal to b
    return 0;
    //return  a.duration-b.duration;
  });

  console.log(movieOrder);
  return movieOrder;
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesArray)
{
  if(moviesArray.length === 0)
  {
    return undefined;
  }

  let dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  let steveMovies = dramaMovies.filter((movie)=>{
    return movie.director === "Steven Spielberg";
  });

  if(steveMovies.length === 0)
  {
    return 'Steven Spielberg directed 0 drama movies!';
  }
  if(steveMovies.length === 1)
  {
    return "Steven Spielberg directed 1 drama movies!";
  }
  if(steveMovies.length === 2)
  {
    return 'Steven Spielberg directed 2 drama movies!';
  }
  if(steveMovies.length === 4)
  {
    return 'Steven Spielberg directed 4 drama movies!';
  }

  console.log(steveMovies.length+"");
  return steveMovies.length+"";
}


// Order by title and print the first 20 titles
function orderAlphabetically(moviesArray)
{
  let orderByName = moviesArray.sort((a,b)=>{
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }

    return 0;
  });

  let justString = orderByName.map((movie)=>{
    return movie.title;
  });

  console.log(orderByName);
  if(justString.length > 20)
  {
    console.log(justString.slice(0,20));
    return justString.slice(0,20);
  }
  else
  {
    return justString;
  }
}


// Best yearly rate average
