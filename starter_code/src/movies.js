/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
        //function turnHoursToMinutes(movies){

        //let durationMovies =movies.map(movies.duration.split)
     
        // console.log(durationMovies)
        //}

//turnHoursToMinutes(movies)
function turnHoursToMinutes (movies){
  let findingMinutes = movies.map(movie=>{
    let movieDuration =movie.duration.split(" ");
    let result;
    if (movieDuration.length===1){
      if(movieDuration[0].includes("h")){
        result = parseInt(movieDuration) *60

      } else {
        result = parseInt(movieDuration);
      }
    } else {
      result = parsInt(movieDuration[0].replace("h", " " )) *60 + parseInt(movieDuration[1].replace ("min", ""));

    }
    return {...movie, duration: result}
  })
return durationArray
}



// Get the average of all rates with 2 decimals 


function ratesAverage (movies){
  let ratesAverage =  movies.reduce((prev, current) =>{
  return prev + current.rate

},0)/ movies.length
//console.log(ratesAverage)
return parseFloat(ratesAverage.toFixed(2))

}

ratesAverage(movies)






// Get the average of Drama Movies

function dramaMoviesRate (movies){
let findingDrama = movies.filter(movie=>movie.genre.includes("Drama"))

if (findingDrama.length===0){
  return undefined;
}


return ratesAverage(findingDrama)
}
  



// Order by time duration, in growing order


function orderByDuration (movies) {
  let findingMovies = movies.sort((a, b) => {
    if (a.duration === b.duration) {
      if (a.title < b.title) return -1
      if (a.title > b.title) return 1
    } 
    return a.duration - b.duration
  }) 
  return findingMovies
}



// How many movies did STEVEN SPIELBERG

function howManyMovies (movies){
 

  let ssMovies = movies.filter(movie=>movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg"))
  console.log(ssMovies)

  let numberOfMovies = ssMovies.length
  
  if(movies.length === 0) return undefined

  else{
  
  return   `Steven Spielberg directed ${numberOfMovies} drama movies!`}
}



// Order by title and print the first 20 titles
function orderAlphabetically(movies){




let alphaOrder = movies.map(movie => movie.title)
  .sort()
  .splice(0, 20)



return alphaOrder

}

// Best yearly rate average
