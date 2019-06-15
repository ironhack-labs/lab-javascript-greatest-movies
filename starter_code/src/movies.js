/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (array){
    let newArray = array.map((movieContent)=>{
      let newMovieContent = {...movieContent};

      let hour = movieContent.duration.match(/[0-9]h/g);
      let min = movieContent.duration.match(/[0-9]+min/g);
      if(hour === null){
        hour = 0;
      }else{
        hour = parseInt(hour) * 60;
      }
      if(min === null){
        min = 0;
      }else{
        min = parseInt(min)
      }
      newMovieContent.duration = hour + min;
      return newMovieContent;
    });
    return newArray;  
  }
turnHoursToMinutes(movies);
// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    let floatArray = array.map((eachMovie) => {
      return parseFloat(eachMovie.rate);    
    });
    let averageArray = floatArray.reduce((accumulator,currentValue) =>{
      return accumulator + currentValue;
    });
    return parseFloat((averageArray/floatArray.length).toFixed(2));
  }

// Get the average of Drama Movies
function dramaMoviesRate(array){
    let dramaArray = array.filter((movie)=>{
      return movie.genre.includes("Drama");
    });
    return ratesAverage(dramaArray);
  }
  let dramaAverage = dramaMoviesRate(movies);

// Order by time duration, in growing order

// function compareMinutes(movieContent){
//     let time = 0;
//     let hour = movieContent.duration.match(/[0-9]h/g);
//     let min = movieContent.duration.match(/[0-9]+min/g);
//        if(hour === null){
//        hour = 0;
//       }else{
//         hour = parseInt(hour) * 60;
//       }
//       if(min === null){
//         min = 0;
//       }else{
//         min = parseInt(min)
//       }
//       time = hour + min;
//       return time;
//   }
//   function orderByDuration(array){
//       array.sort((a, b) => {
//         a = compareMinutes(a);
//         b = compareMinutes(b);
//         if (a > b){
//             return -1;
//         }
//         if (a < b){
//             return 1;
//         }
//         return 0;
//     });
//    return array;
//   }
function compareMinutes(movieContent){
    let time = 0;
    let hour = movieContent.duration.match(/[0-9]h/g);
    let min = movieContent.duration.match(/[0-9]+min/g);
       if(hour === null){
       hour = 0;
      }else{
        hour = parseInt(hour) * 60;
      }
      if(min === null){
        min = 0;
      }else{
        min = parseInt(min)
      }
      time = hour + min;
      return time;
  }
  function orderByDuration(array){
      array.sort((a, b) => {
        timeA = compareMinutes(a);
        timeB = compareMinutes(b);
        if (timeA > timeB){
            return -1;
        }
        if (timeA < timeB){
            return 1;
        }else if(a.title > b.title){
          return 1;
        }else{
          return -1;
        }
        // return 0;
    });
   return array;
  }
// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
