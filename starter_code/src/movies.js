/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let newMoviesArray = array.map(moviesobj => {
    if (
      moviesobj.duration.includes(`h`) &&
      moviesobj.duration.includes(`min`)
    ) {
      let splitDuration = moviesobj.duration.split(` `);
      newMoviesDuration =
        parseFloat(splitDuration[0]) * 60 + parseFloat(splitDuration[1]);
    } else if (
      moviesobj.duration.includes(`h`) &&
      !moviesobj.duration.includes(`min`)
    ) {
      newMoviesDuration = parseFloat(moviesobj.duration) * 60;
    } else {
      newMoviesDuration = parseFloat(moviesobj.duration);
    }
    let joinObj = { ...moviesobj, ...{ duration: newMoviesDuration } };
    return joinObj;
  });
  return newMoviesArray;
}

// Get the average of all rates with 2 decimals
function ratesAverage(array){
  let avg = array.reduce((prev, current) => { 
    return prev + current.rate
   }, 0) / array.length;

   return avg
} 
// Get the average of Drama Movies
function dramaMoviesRate(array){

  let dramaMovies = array.filter((genreVal) => {
    return genreVal.genre.indexOf("Drama") >= 0
  });
  if (dramaMovies.length === 0){return undefined}  
  // console.log(dramaMovies)

  let avg = ratesAverage(dramaMovies)

  // let avg = dramaMovies.reduce((prev, current) =>{
  //   return prev + current.rate
  // }, 0 ) / dramaMovies.length;
 
  return parseFloat(avg.toFixed(2))

} 
// Order by time duration, in growing order
function orderByDuration(array){
  // let sameAmount = turnHoursToMinutes(array);

  let orderDuration = array.sort((a, b) => {
    if (a.duration > b.duration) return 1;
    if (a.duration === b.duration){
      if (a.title > b.title){
        return 1
      } else if (a.title < b.title){
        return -1
      } 
    }
    if (a.duration < b.duration) return -1;
  })
 return orderDuration
  } 
// How many movies did STEVEN SPIELBERG
function howManyMovies(array){

  let dramaMoviesSpielberg = array.filter(movie => 
    movie.genre.includes(`Drama`) && movie.director == `Steven Spielberg`)
  

    if (array.length < 1) {
      return undefined;}
    else {

    return `Steven Spielberg directed ${dramaMoviesSpielberg.length} drama movies!`
  }


  // let spielbergMovies = array.filter((director) =>{
  //   return director.title.indexOf(`Spielberg`) >= 0
  // } )

  // let spielbergDramaMovies = spielbergMovies.filter((movies) => {
  //   return movies.genre.indexOf(`Drama`) >= 0
  // })

  // if (array.length === 0) {
  //   return `Steven Spielberg directed 0 drama movies!`
  // } 
} 
// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let titleOrder = array.sort((a, b) =>{
    if (a.title > b.title) {
      return 1;
  } else {
      return -1;
  }
}).splice(0, 20);

return titleOrder.map(movieName => movieName.title)
}
// Best yearly rate average
function bestYearAvg(){
  
} 