/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    const sum = arr.reduce(acc, movie) rm  {
            acc = acc + Number(movie.rate)
            return acc;
        },0) / arr.length;
        const avg = sum / arr.length; 
        return Number(avg.toFixed(2)); 
    }

    // Iteration 2: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(movies) {
        var drama = movies.filter(movie => movie.genre.includes("Drama"));
        if (drama.length === 0) {
          return 0;
        }
        return ratesAverage(drama);
       }

    // Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

    function orderByYear(arr) {
        return arr.sort((a, b) => {
          if (a.year - b.year === 0) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
          }
          return a.year - b.year;
        });

    // Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
    function howManyMovies(arr) {
        const stevensDramaMovies = arr.filter(movie => {
          return (
            movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
          );
        });
        return stevensDramaMovies.length;
      }

    // Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
    function orderAlphabetically(arr){
        return  arr.map(movie => {
             return movie.title
         }).sort((a,b) => {
             if(a > b) return 1;
             if( a < b) return -1;
             return 0;
         }).slice(0,20)
     }
    // Iteration 6: Time Format - Turn duration of the movies from hours to minutes
    function turnHoursToMinutes(arr){
        const copy =JSON.parse(JSON.stringify(arr));
        copy.forEach(movie => {
            let duration = 0 ; 
            const splittedTime = movie.duration.split(" ");
            if(splittedTime.length === 1){
                let hoursOrMinutes = splittedTime[0];
                if(hoursOrMinutes.includes("h")){
                    duration = parseFloat(hoursOrMinutes) * 60;
                    movie.duration = duration;
                    return;
                }
                if(hoursOrMinutes.includes("min")){
                    movie.duration = parseFloat(hoursOrMinutes)
                    return;
                }
            }
            let hours = parseFloat(splittedTime[0]) * 60;
            let minutes = parseFloat(splittedTime[1]);
            movie.duration = hours + minutes;
        })
        return copy;
    }
    
// BONUS Iteration: Best yearly rate average - Best yearly rate average// 