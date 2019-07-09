/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){

    let newArray = [];
    for (let i = 0; i < movies.length; i++){
    
    let timeArray = movies[i].duration.split(" ")
    let hours = timeArray[0].slice(0, -1)
    let min = timeArray[1].slice(0, -3)
    let time = 60*( parseInt(hours)) + parseInt(min)
    let newrecord = {
        title: movies[i].title,
        year: movies[i].year,
        director: movies[i].director,
        duration: time,
        genre: movies[i].genre,
        rate: movies[i].rate
    }
    newArray.push(newrecord)
    }
    console.log(newArray)
    return newArray
    } 
    
// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
const totalRates = movies.reduce((sum,elem) => {
    return sum += parseFloat(elem.rate);
  },0);
const averageRate = totalRates/movies.length;
return averageRate

}


// Get the average of Drama Movies


function dramaMoviesRate(movies){
    let dramaMovies = []
    for(let i = 0; i < movies.length; i++){
       if (movies[i].genre.includes('Drama'))
         dramaMovies.push(movies[i])
      };
      let dramaRate = ratesAverage(dramaMovies)
      return dramaRate 
    }

// Order by time duration, in growing order

function orderByDuration(movies){
    movies.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
    return  movies
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
    
        let spielbergMovies = []
        for(let i = 0; i < movies.length; i++){
           if (movies[i].director.includes('Steven Spielberg'))
             spielbergMovies.push(movies[i])
          };
          
          return spielbergMovies
        }

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
var byTitle = movies.slice(0);
byTitle.sort(function(a,b) {
    var x = a.title.toLowerCase();
    var y = b.title.toLowerCase();
    newArray = x < y ? -1 : x > y ? 1 : 0;
});
  return newArray;
}

// Best yearly rate average
