/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average

function turnHoursToMinutes(arrayOfMovies){


    
  let newArray = arrayOfMovies.map((eachMovie)=>{


      if(typeof(eachMovie.duration)==="number"){
        return eachMovie
      }

          let total;

          let both = eachMovie.duration.includes('h') && eachMovie.duration.includes('min');

          let minutesOnly = eachMovie.duration.includes('min') && !eachMovie.duration.includes('h');

          let hoursOnly = !eachMovie.duration.includes('min') && eachMovie.duration.includes('h');


          let numbersOnly = eachMovie.duration.replace('h', '').replace('min', '');

          
          let durationArray = numbersOnly.split(' ');
          

          if(both){
          total = Number(durationArray[0]*60) + Number(durationArray[1])
          }

          if(minutesOnly){
            total = Number(durationArray[0]);
          }
          if(hoursOnly){
            total = Number(durationArray[0]*60);
          }

          let movieCopy = Object.assign({},eachMovie)
          movieCopy.duration = total;
          return movieCopy;

   })


    return newArray;

  }

  function ratesAverage (arrayOfMovies){

    let averageRate = arrayOfMovies.reduce((sum,movie)=>{
      return sum+movie.rate;
    },0)
    return averageRate/arrayOfMovies.length

  }

  function dramaMoviesRate (arrayOfMovies) {

    let dramaOnly = arrayOfMovies.filter((movie)=>{
      return movie.genre.includes('Drama')
    
  });
  

    return (Math.round(ratesAverage(dramaOnly) * 100) / 100);
  
  }

function orderByDuration (arrayOfMovies) {
  
  arrayOfMovies.sort((a,b)=>{
    if (a.duration > b.duration) {
      return 1;
    }else if (a.duration < b.duration){
      return -1;
    }else { (a.title < b.title)
      {
      return 1;
    }
    }
    });
    return arrayOfMovies;
    }

  function howManyMovies (arrayOfMovies) {
    let dramaOnly = arrayOfMovies.filter((movie)=>{
      return movie.genre.includes('Drama');
    });

    let spielDram = dramaOnly.filter((movie)=>{
      return movie.director.includes('Steven Spielberg')
    });
    return `Steven Spielberg directed ${spielDram.length} drama movies!`;
  }

  function orderAlphabetically (arrayOfMovies) {

    let alphaMov = [];

    let limit20 = 

  arrayOfMovies.sort((a,b)=>{
      if (a.title > b.title) {
        return 1;
      }else if (a.title < b.title){
        return -1;
      }else if  (a.title = b.title)
        {
        return 0;

  }
  let alphaMov = 
})
  };



//   var adjustedArray = movArray.map((randMov)=>{

//     var minDuration = movArray.map((randMov)=>{
      
//       if  (randMov.duration.includes('h')){
//   return (randMov.duration[0] * 60 + Number(randMov.duration.substr(
//     randMov.duration.indexOf('m') - 2,2))) ;
  
//   }
//   else {
//     return Number(randMov.duration.substr(
//       randMov.duration.indexOf('m') - 2,2)) ;
  
//   }
  
// })

// var adjustedMovie = {};
//   adjustedMovie.title = randMov.title;
//   adjustedMovie.year = randMov.year;
//   adjustedMovie.director = randMov.director;
//   adjustedMovie.duration = minDuration;
//   adjustedMovie.genre = randMov.genre;
//   adjustedMovie.rate = randMov.rate;

//   return adjustedMovie;
//   })

//   adjustedArray.push(adjustedMovie);
//   return adjustedArray;
//   }
  

;
