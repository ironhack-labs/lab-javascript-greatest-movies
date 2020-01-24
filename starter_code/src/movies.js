/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const newArray = [...arr];
  const orderMovies = newArray.sort(function(movie1, movie2) {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.year < movie2.year) {
      return -1;
    } else {
      if (movie1.title > movie2.title) {
        return 1;
      } else if (movie1.title < movie2.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  

  return orderMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) =>{
  const newArray = [...arr];
  const compareDirectors = newArray.filter(function(movie,index,originalArray){
    return movie.director === 'Steven Spielberg' && movie.genre.indexOf("Drama") >= 0;
  });

  return compareDirectors.length;

};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const newArray = [...arr];
  const moviesTitle = newArray.map(function(movie,index,originalArray){
    return movie.title;
  });

  
  const orderAlphabetically = moviesTitle.sort(function(movie1, movie2) {
    if (movie1 > movie2) {
      return 1;
    } else if (movie1 < movie2) {
      return -1;
    } else {
      return 0;
    }
  });

  

 const first20 = orderAlphabetically.splice(20,orderAlphabetically.length-19);

  return moviesTitle;
  
};


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
  const newArray = [...arr];
  if(newArray.length != 0){
    const moviesRate = newArray.map(function(movie,index,originalArray){
      if(typeof movie.rate === 'number'){
        return movie.rate;
      }else{
        return 0;
      }
      
    }).filter(function(rate){
      return rate >= 0;
    });

  
    const sumOfNumbers = moviesRate.reduce(function( accumulator,value,index, originalArray){
    return accumulator+value;
  },0);

    
    const Average =  sumOfNumbers / (moviesRate.length);

    return Math.round(Average * 100)/100;
    
    
  }else{
    return 0;
  }
};


// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
  const newArray = [...arr];
  
  if(newArray.length != 0){
    const moviesRate = newArray.filter(function(movie,index,originalArray){
      return movie.genre.indexOf("Drama") >= 0
    }).map(function(movie,index,originalArray){
      if(typeof movie.rate === 'number'){
        return movie.rate;
      }else{
        return 0;
      }
      });
    
    if(moviesRate.length === 0){
      return 0;
    }else{
      const sumOfNumbers =moviesRate.reduce(function( accumulator,value,index, originalArray){
    return accumulator+value;
  },0);

    
    const Average =  sumOfNumbers / (moviesRate.length);

    return Math.round(Average * 100)/100;
    
    };
    
  }else{
    return 0;
  }
};


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

/*
const turnHoursToMinutes = (arr) =>{

  const newArray = [...arr];

  const moviesDuration = newArray.filter(function(movie,index,originalArray){
    movie.duration = movie.duration.split(' ');
    movie.duration[0]= parseFloat(movie.duration[0])*60;
    movie.duration[1] =parseFloat(movie.duration[1]);

    const sumOfNumbers = movie.duration.reduce(function( accumulator,value,index, originalArray){
      return accumulator+value;
    },0);
    
    return movie.duration = sumOfNumbers;
  });

  
  return moviesDuration;

}*/

const turnHoursToMinutes = (arr) =>{

  const newArray = [...arr];

  const moviesDuration = newArray.filter(function(movie,index,originalArray){
    if(movie.duration.length >= 8){
      movie.duration = movie.duration.split(' ');
      movie.duration[0]= parseFloat(movie.duration[0])*60;
      movie.duration[1] =parseFloat(movie.duration[1]);

      const sumOfNumbers = movie.duration[1] + movie.duration[0];

      return movie.duration = sumOfNumbers;
    } else if(movie.duration.length > 3 && movie.duration.length < 8){
      movie.duration = movie.duration.split('min');
      
      return movie.duration = parseInt(movie.duration[0]);
    }else if(movie.duration.length < 3){
      movie.duration = movie.duration.split('h');
      
      return movie.duration = parseFloat(movie.duration[0])*60;
    }
   
  });

  
  return moviesDuration;

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
