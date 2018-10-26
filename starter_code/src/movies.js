/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function giveMeHours(time) {
  
  let hours = time.slice(0, time.indexOf("h"))
  
  let minutes = time.slice(time.indexOf(" ") + 1, time.indexOf("min"))

  minutes = parseInt(minutes)
  hours = parseInt(hours)

  return minutes + hours * 60 
}

function getNewArray (array){
  let newArray = array.map(movie => {
    return movie = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: giveMeHours(movie.duration),
      genre: movie.genre,
      rate: movie.rate
    }
  },0)
return newArray;
}

console.log(getNewArray(movies));
  
// Get the average of all rates with 2 decimals 

const newArray2 = movies.map(movie => parseFloat(movie.rate), 0);
const sum =  newArray2.reduce((a,b) => a + b , 0);

function ratesAverage (array,total){
return (total/array.length).toFixed(2);
}

console.log(ratesAverage(newArray2,sum));



// Get the average of Drama Movies
let dramaArray = movies.filter(movie => movie.genre.includes('Drama'));
let dramaAverageArray = dramaArray.map(movie => parseFloat(movie.rate));
let dramaSum =  dramaAverageArray.reduce((a,b) => a + b , 0);

function dramaAverage (array,total){
return (total/array.length).toFixed(2);
}

console.log(dramaAverage(dramaAverageArray,dramaSum));


// Order by time duration, in growing order
let durationArray = getNewArray(movies).map( movie => movie.duration);

console.log(durationArray.sort((a,b) => a - b));

// How many movies did STEVEN SPIELBERG

let stevensArray = dramaArray.filter(movie => movie.director == "Steven Spielberg");
console.log(stevensArray);

// Order by title and print the first 20 titles
let titleArray = movies.map(movie => movie.title);
let orderAlphabetically = titleArray.splice(0,20).sort();;
console.log(orderAlphabetically);

// Best yearly rate average

var array = [5,6,7,8,9,0];

movies.forEach(movie => {
  return 
})



var bestMovieArray = ""
