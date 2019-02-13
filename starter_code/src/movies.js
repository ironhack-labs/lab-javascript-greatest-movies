/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(array){


  let minutesMovies = array.map(function(e){
   
    let minutes = 0;
    if(e.duration.length>6){
      minutes = Number(e.duration[0]) * 60;
      minutes = minutes + Number(e.duration[3]*10 + Number(e.duration[4]));
    }else if (e.duration.length === 6){
      minutes = Number(e.duration[0]) * 60;
      minutes = minutes + Number(e.duration[3]);
    }else if(e.duration.length ===5){
      minutes = minutes + Number(e.duration[0]*10 + Number(e.duration[1]));
    }else if(e.duration.length ===4){
      minutes = minutes + Number(e.duration[0]);
    }else if (e.duration.length ===3){
      minutes = Number(e.duration[0]) * 600 + Number(e.duration[1]*60);
    }else{
      minutes = Number(e.duration[0]) * 60;
    }

  
    let movie = {};
    movie.title = e.title;
    movie.year = e.year;
    movie.director = e.director;
    movie.duration = minutes;
    movie.genre = e.genre;
    movie.rate = e.rate;
    return movie;
  
  });

  return minutesMovies;
}


function passToMinutes(array){


  let minutesMovies = array.map(function(e){
   
    let minutes = 0;
    if(e.duration.length>6){
      minutes = Number(e.duration[0]) * 60;
      minutes = minutes + Number(e.duration[3]*10 + Number(e.duration[4]));
    }else if (e.duration.length === 6){
      minutes = Number(e.duration[0]) * 60;
      minutes = minutes + Number(e.duration[3]);
    }else if(e.duration.length ===5){
      minutes = minutes + Number(e.duration[0]*10 + Number(e.duration[1]));
    }else if(e.duration.length ===4){
      minutes = minutes + Number(e.duration[0]);
    }else if (e.duration.length ===3){
      minutes = Number(e.duration[0]) * 600 + Number(e.duration[1]*60);
    }else{
      minutes = Number(e.duration[0]) * 60;
    }

  
    let movie = {};
    movie.title = e.title;
    movie.duration = minutes;
  
    return movie;
  
  });

  return minutesMovies;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  //let addRate = array.reduce((x,y)=> x + parseFloat(y.rate),0);
  let withRate = array.filter(function(e){
    if (e.rate !==""){
      return e;
    }
  });
  
  let addRate = withRate.reduce((x,y)=> x + parseFloat(y.rate),0);
  addRate = addRate / array.length;
  addRate = Math.round(addRate * 100) / 100;
  return addRate;
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
  let dramaMovies = array.filter(function(e){
    for (let i= 0; i<e.genre.length;i++){
      if (e.genre[i] ==="Drama"){
        return e;
      }
    }
  });

  if (dramaMovies.length === 0){
    return undefined;
  }

  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(array){

  if (array.length === 0){
    return undefined;
  }

  if (array.length === 1){
    return array;
  }
  console.log(array);
  let minutesArr = turnHoursToMinutes(array);
  let bigger = minutesArr[0].duration;
  console.log(minutesArr);
  let finalArr = [];

  for (let i = 0; i<minutesArr.length; i++){
    let biggerDuration = minutesArr.filter(function(e){
   
      if (e.duration >bigger){
        return e;
      }
    });

    if (biggerDuration === 1){
      finalArr.push(biggerDuration[0]);
    } else if (biggerDuration > 1){
      let alphaArr = [];
      let firstTitle = biggerDuration[0].title;
      for (let i = 0; i<biggerDuration.length; i++){
        if(biggerDuration[i].title < firstTitle){
          firstTitle = biggerDuration[i].title;
        }  
      }

      for (let i=0; i<alphaArr.length; i++){
        finalArr.push(alphaArr[i]);
      }
    }
  }


  return finalArr;
  // let minutesArr = turnHoursToMinutes(array);
  // console.log(minutesArr);
  // // let sortedMovies = minutesArr.map(function(e){
  // //   let bigger = e;
  // //   for(let i = 0; i<minutesArr.length;i++){
  // //     if(minutesArr[i].duration > bigger.duration){
  // //       bigger = minutesArr[i];
  // //     }
  // //   }
  // // });
  
  // let sortedMovies = [];
  // for (let j = 0; j<minutesArr.length;j++){
  //   let bigger = j;
  //   for(let i = j; i<minutesArr.length;i++){
  //     if(minutesArr[i].duration > bigger.duration){
  //       bigger = i;
  //     } else if (minutesArr[i].duration === bigger.duration){
  //       if(minutesArr[i].title > bigger){
  //         bigger = i;
  //       }
  //     }
  //   }

  //   let movie = {};
  //   movie.title = minutesArr[bigger].title;
  //   movie.year = minutesArr[bigger].year;
  //   movie.director = minutesArr[bigger].director;
  //   movie.duration = minutesArr[bigger].duration;
  //   movie.genre = minutesArr[bigger].genre;
  //   movie.rate = minutesArr[bigger].rate;
  //   sortedMovies.push(movie);
  // }
  // console.log(sortedMovies);
  // return sortedMovies;
   
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(array){

  if (array.length == 0){
    return undefined;
  }

  let dramaMovies = array.filter(function(e){
    for (let i= 0; i<e.genre.length;i++){
      if (e.genre[i] ==="Drama"){
        return e;
      }
    }
  });

  let steveMovies = dramaMovies.filter(function(e){
   
    if (e.director ==="Steven Spielberg"){
      return e;
    }
    
  });
  
  return "Steven Spielberg directed " + steveMovies.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  
}


// Best yearly rate average
function bestYearAvg(array){

  if (array.length === 0){
    return undefined;
  }
  let minYear= array[0].year;
  let maxYear = array[0].year;

  let maxAverage = 0;
  let bestYear = 0;

  for (let i = 0; i<array.length; i++){
    if (array[i].year > maxYear){
      maxYear = array[i].year;
    }
    if (array[i].year < minYear){
      minYear = array[i].year;
    }
  }

  for(let i = minYear; i<=maxYear; i++){
    let arrayYear = array.filter(function(e){
      if (e.year == i){
        console.log(e.year, i);
        return e;
      }
    });
    let averageYear = ratesAverage(arrayYear);
    if (averageYear > maxAverage){
      maxAverage = averageYear;   
      bestYear = i;   
    }
    
  }

  return `The best year was ${bestYear} with an average rate of ${maxAverage}`;
}