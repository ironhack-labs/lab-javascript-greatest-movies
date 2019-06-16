/* eslint no-restricted-globals: 'off' */

// Data formation {
//   "title":"The Shawshank Redemption",
//   "year":"1994",
//   "director":"Frank Darabont",
//   "duration":"2h 22min",
//   "genre":["Crime","Drama"],
//   "rate":"9.3"
// }
// Turn duration of the movies from hours to minutes 
// Create a turnHoursToMinutes method that receive an array as parameter, 
// replace the duration info of each of the movies for it equivalent in minutes.
// convert to number and minutes only



function turnHoursToMinutes(movieArray){
  let movies = movieArray.map(function(oneMovieObject){
    let newMovieObjects = {...oneMovieObject};
    let durationArray = newMovieObjects.duration.match(/\d+/g);
    if(newMovieObjects.duration.includes("h")=== false){
      newMovieObjects.duration = parseInt(durationArray[0]);
      console.log(durationArray[0]);
    } else if(newMovieObjects.duration.includes("min") === false) {
      newMovieObjects.duration = parseInt(durationArray[0] * 60);
      console.log(durationArray[0]);
    }
    else {
      newMovieObjects.duration = parseInt(durationArray[0] * 60) + parseInt(durationArray[1]);
    }
    return newMovieObjects;

  });
    
return movies;

}


// Get the average of all rates with 2 decimals 


function ratesAverage(anArray)
{

// sum var holds value (starting from 0) adding each 
//rate value in each object in the array
let sum = anArray.reduce(function(accumulator, currentRating) {

    //convert rate to number in order to add 
    if(currentRating.rate === ""){
      currentRating.rate = "0";
      return parseFloat(accumulator) + parseFloat(currentRating.rate);
    } else{
      return parseFloat(accumulator) + parseFloat(currentRating.rate);
    }
    
},0)

//avg rounded to 2 decimal spaces
avg = parseFloat((sum/anArray.length).toFixed(2));
return avg;

}


// Get the average of Drama Movies


// Get the average of Drama Movies

function dramaMoviesRate(anArray) {

  const dramaMovies = anArray.filter((aMovie)=>{
    dramaArray = {...aMovie};
    return dramaArray.genre.includes("Drama");
    
  }) 
  if(dramaMovies.length === 0){
    return undefined
  } else{
    return ratesAverage(dramaMovies)
  }

}


// Order by time duration, in growing order
// We need to sort the movies in ascending order by their duration.
// This should be easy using one of the methods we just learn. 
// Create a method orderByDuration that receives an array as parameter and return the sorted array.
// If two movies have the same duration, order them in alphabeticall order by their title!

function orderByDuration(anArray)
  {

      // let updatedMovies = turnHoursToMinutes(anArray);
      let orderedArray = anArray.sort((a,b)=>{
        if(a.duration < b.duration){
            return -1
          } else if (b.duration < a.duration){
            return 1
          } else if(a.duration === b.duration) {
              if(a.title > b.title){
                return 1
              } else{
                return -1
              }
          }

        })

    return orderedArray;
  }

  orderByDuration(movies);




// How many movies did STEVEN SPIELBERG

function howManyMovies(anArray){
  const SpielbergMovies = anArray.filter((aMovie)=>{
    SpielbergArray = {...aMovie};
   if( SpielbergArray.director.includes("Steven Spielberg") && SpielbergArray.genre.includes("Drama") ){
     return SpielbergArray;
   }
   
 })
  if(anArray.length === 0){
    return undefined
  } else if(SpielbergMovies.length === 0) {
    return `Steven Spielberg directed 0 drama movies!`;
  }
  else{
    return `Steven Spielberg directed ${SpielbergMovies.length} drama movies!`;
  }
   

}


// Order by title and print the first 20 titles
function  orderAlphabetically(anArray){

    // sort by titles
    anArray.sort((a,b)=>{
    // if(a.title<b.title){
    //     return -1
    //   } else if (b.title<a.title){
    //     return 1
    //   } else {
    //     return 0
    //   }
    return a.title.localeCompare(b.title)

    })

    let titleArray = anArray.map(item =>
     {
      const aTitleObject = {};

      aTitleObject.title = item.title;

      return aTitleObject;
    })

    // cut after 20 titles
    if(titleArray.length > 20){
      return titleArray.length=20;
    } else {
      return titleArray;
    }
    

  
}


// Best yearly rate average
