/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

/*var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
*/


function turnHoursToMinutes(movies){
  const moviesToMinutes = movies.map(original => {
    let movie = {...original}
    if(movie.duration.length<=3){
      let hora = movie.duration.replace(/[^0-9]/g, '');
      hora = hora.split("", 1);
      hora = parseInt(hora, 10);
      hora = (hora * 60);
      movie.duration = hora;
    }
    else if(movie.duration.length>3 &&movie.duration.length<6){
      let soloMinutos = movie.duration
             soloMinutos = parseInt(soloMinutos, 10);
             movie.duration = soloMinutos;
           
    }
    else if(movie.duration.length>5){
      let hora = movie.duration.replace(/[^0-9]/g, '');
      hora = hora.split("", 1);
      hora = parseInt(hora, 10);
      let horasMin = hora * 60;
      let min = movie.duration.split("", movie.duration.length-3);
      min = min.splice(3, 4);
      min = min.join("");
      min = parseInt(min, 10);
      let suma = horasMin + min;
        movie.duration = suma;
    }
    return movie;
  }) 
  return moviesToMinutes
}
  
turnHoursToMinutes(movies)

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  return Number(movies.reduce((acc, curr) => acc + Number(curr.rate) / movies.length, 0).toFixed(2))
}

ratesAverage(movies)


// Get the average of Drama Movies
function dramaMoviesRate(movies){ 
  const dramaMovies = movies.filter(original => original.genre.includes("Drama") && original.genre.length === 1 && original.rate !== "")
 let sum = dramaMovies.reduce((acc, curr) => acc + Number(curr.rate),0)
    sum = sum/ dramaMovies.length
    sum = sum.toFixed(2)
      console.log(sum);
      return sum
   }

dramaMoviesRate(movies)

// Order by time duration, in growing order
function orderByDuration(movies){
  const dramaMovies = movies.filter(original => original.genre.includes("Drama") && original.genre.length === 1)
  console.log("Orden por duración"+dramaMovies)
}
orderByDuration(movies)


// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){
  const dramaMovies = movies.filter(original => original.director == "Steven Spielberg" && original.genre.includes("Drama") )
  if (dramaMovies== 0){
    return undefined
  }
  else{
    console.log(`Steven Spielberg directed ${dramaMovies.length} drama movies!`)
  return `Steven Spielberg directed ${dramaMovies.length} drama movies!`;
  }
  
} 

howManyMovies(movies)

// Order by title and print the first 20 titles
function orderAlphabetically(movies){

}
 orderAlphabetically(movies)
// Best yearly rate average

function bestYearAvg(movies){

}
bestYearAvg(movies)