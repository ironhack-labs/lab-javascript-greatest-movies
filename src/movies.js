// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = movies => {
    return movies.map(movie => {
        return movie.director
    })
}

// console.log(getAllDirectors(movies))
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let getStevenSpilbergDramas = movies.filter(function (element) {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return getStevenSpilbergDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  let avarageRate = array.reduce(function (acc, val) {
      let rate = val.rate
      if(isNaN(rate)){
          rate = 0;
      }
    return acc + rate / array.length;
  }, 0);
  return Number(avarageRate.toFixed(2));

}


// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
   let dramaMovies =  movies.filter(movie => movie.genre.includes('Drama'));
   if(dramaMovies.length === 0){
       return 0;
   }
   let sumRates = dramaMovies.reduce(function(acc, movie){
    return acc + movie.rate
   }, 0);
   let averageDramaRate = sumRates/dramaMovies.length;
   return Number(averageDramaRate.toFixed(2));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {

   return movies.slice().sort(function(movie1, movie2){
        if(movie1.year < movie2.year) {
            return -1;
        };
        if(movie1.year > movie2.year) {
            return 1;
        };

        if(movie1.title < movie2.title) {
            return -1;
        };

        if(movie1.title > movie2.title) {
            return 1;
        }
        return 0;
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {
    const titles = movies.map(movie => movie.title);
    const sortedTitles = titles.sort();
    return sortedTitles.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
    return movies.map(function(movie){
        let newMovie = Object.assign({}, movie);

        const durationParts = newMovie.duration.split(' ');

        let durationInMinutes = 0;
        durationParts.forEach(part => {
            const unit = part.charAt(part.length-1);
            const time = Number.parseInt(part);

            if (unit === "h") {
                durationInMinutes += time * 60
            } else {
                durationInMinutes += time;
            }
        });
        newMovie.duration = durationInMinutes;
        return newMovie;

    });
}
// console.log(turnHoursToMinutes(movies))
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
