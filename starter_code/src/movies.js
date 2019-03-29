/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

const turnHoursToMinutes = arr => {
  const nwArr = arr.map(ele => {
    const duration = ele.duration;
    let minutes = 0;

    if (duration.includes(' ')) {
      duration.split(' ').forEach(time => {
        if (time.includes('h')) minutes += parseInt(time, 10) * 60;
        if (time.includes('m')) minutes += parseInt(time, 10);
      });
    } else {
      if (duration.includes('h')) minutes += parseInt(duration, 10) * 60;
      if (duration.includes('m')) minutes += parseInt(duration, 10);
    }
    return {
      ...ele,
      duration: minutes
    };
  });
  return nwArr;
};


// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
  const avgRate = arr.reduce(function(sum,movie){
    return sum += parseFloat(movie.rate)
  }, 0)
  return avgRate/arr.length
}

// Get the average of Drama Movies
function dramaMoviesRate(arr){
  const avgDrama = arr.filter(function(ele){
    ele.genre.includes('Drama')
}

// Order by time duration, in growing order
function orderByDuration(){
  
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(){

}

// Order by title and print the first 20 titles
function orderAlphabetically(){

}

// Best yearly rate average
function bestYearAvg(){

}
const drinkingGame = (player) => { player ? console.log(`${player} drink a shot of tequila `) : console.log("Drink a shot of tequila")}
