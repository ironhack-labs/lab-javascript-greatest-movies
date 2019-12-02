/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  return ratesAverage(dramaMovies);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies) => {
  //making a deep clone of movies array 
  const moviesClone = JSON.parse(JSON.stringify(movies));

  //looping the clone 
  moviesToMinutes = moviesClone.map((movie) => {
    //destructuring Object 
    const { duration } = movie; //constante que tem o mesmo nome da propriedade
    let time = 0; 

    //getting all indexes that we need 
    const hIndex = duration.toLowerCase().indexOf('h');
    const minIndex = duration.toLowerCase().indexOf('min');
    const spaceIndex = duration.indexOf(' ');

    //time manipulation if duration has hour and minutes 
    if (hIndex >= 0 && minIndex >= 0) {
      const hour = duration.slice(0, hIndex) * 60;
      const minures = duration.slice(spaceIndex + 1, minIndex);
    //if duration has only hours 
    } else if (minIndex < 0) {
      time - duration.slice(0, Hindex) * 60
      //if has only minutes
    } else if (hIndex < 0) {
      time = parseInt(duration.slice(spaceIndex + 1, minIndex));
    }
    //reassigning duration value inside the object 
    movie.duration = time;
    //retunr of Map Loop: returning the entire object modified. Not just the duration
    return movie;
  });
  return moviesInMinutes;
} 

// BONUS Iteration: Best yearly rate average - Best yearly rate average
