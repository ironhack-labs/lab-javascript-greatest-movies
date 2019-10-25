/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = (arr) => {
    const sumRatings = arr.reduce((acc, el) => {
        return Number(acc) + Number(el.rate);
    }, 0);
    return sumRatings/arr.length;
}
//ratesAverage(movies);
 
// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
    const dramaMovies = arr.filter(movie => {
      return movie.genre.includes('Drama');
      });

    if(dramaMovies.length === 0) {
        return 0;
    } 
    return Number(ratesAverage(dramaMovies).toFixed(2));
    
  };
  
//dramaMoviesRate(movies);

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByYear = (arr) => {
    return [...arr].sort((a,b) => {
      if (a.year > b.year){
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else {
          if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          } else {
            return 0;
          }
        }
      });
  }
  
  //orderByYear(movies)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {
    const dramaMovies = arr.filter(movie => {
      return movie.genre.includes('Drama');
        });
    const dirSteven = dramaMovies.filter(movie => {
      if(movie.director === 'Steven Spielberg')
        return movie;
    })
    return dirSteven.length;
  }
  
  //howManyMovies(movies);

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
    let titleMovies = [...arr].sort((a,b) => {
      if(a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  
    titleMovies = titleMovies.map(movie => movie.title);
  
    if(titleMovies.length > 20) {
      return titleMovies.slice(0, 20);
    }
  
    return titleMovies;
  }
  
  //orderAlphabetically(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


const turnHoursToMinutes = (arr) => {

    let list = arr.map((cur) => cur);
    
    let splitDuration;
    
    let hours;
    
    let minutes;
    
    let minutesConversion;
    
    let conversionArray = list.map((cur) => {
    
    //let durationSplit = cur.duration.split(' ');
    
    if (cur.duration.includes('h') && cur.duration.includes('min')) {
    
    splitDuration = cur.duration.split(' ');
    
    hours = splitDuration[0];
    
    minutes = splitDuration[1];
    
    minutesConversion = parseInt(hours) * 60 + parseInt(minutes);
    
    console.log(minutesConversion);
    
    return {
    
    title: cur.title,
    
    year: cur.year,
    
    director: cur.director,
    
    duration: minutesConversion,
    
    genre: cur.genre,
    
    rate: cur.rate
    
    };
    
    } else if (cur.duration.includes('h')) {
    
    hours = cur.duration;
    
    minutesConversion = parseInt(hours) * 60;
    
    console.log(minutesConversion);
    
    return {
    
    title: cur.title,
    
    year: cur.year,
    
    director: cur.director,
    
    duration: minutesConversion,
    
    genre: cur.genre,
    
    rate: cur.rate
    
    };
    
    } else {
    
    minutes = cur.duration;
    
    //console.log(parseInt(minutes));
    
    minutesConversion = parseInt(minutes);
    
    return {
    
    title: cur.title,
    
    year: cur.year,
    
    director: cur.director,
    
    duration: minutesConversion,
    
    genre: cur.genre,
    
    rate: cur.rate
    
    };
    
    }
    
    });
    
    return conversionArray;
    
    };

// BONUS Iteration: Best yearly rate average - Best yearly rate average