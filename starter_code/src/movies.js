const originalMoviesArray = require('./data.js');
/* eslint no-restricted-globals: 'off' */
function turnHoursToMinutes (moviesArray) {

    const getMinutes = moviesArray.map(function(eachMovie) {
        
        let durationInMinutes = [];
        let hourInMinutes = 0;
        let min = 0;
        
            if (eachMovie.duration.includes('H') || eachMovie.duration.includes('h')) {
                hourInMinutes = eachMovie.duration.slice(0, 1) * 60;
           } else {
                hourInMinutes = 0;          
           }

            if (eachMovie.duration.includes('min')) {
                min = eachMovie.duration.slice(eachMovie.duration.length - 5, eachMovie.duration.length - 3) * 1;   
            }
           durationInMinutes = hourInMinutes + min;
       
           return {
            title: eachMovie.title,
            year: eachMovie.year,
            director: eachMovie.director,
            duration: durationInMinutes,
            genre: eachMovie.genre,
            rate: eachMovie.rate
           }

    });
    return getMinutes;
};
turnHoursToMinutes(originalMoviesArray);


// Turn duration of the movies from hours to minutes 
function ratesAverage (moviesArray) {

   // const sumRates = moviesArray.reduce((acc, rate) => acc + parseFloat(rate.rate), 0);

    const sumRates = moviesArray.reduce(function(acc, rate) { 
      
        if (rate.rate === '' || rate.rate === '0' || rate.rate === null || rate.rate == false) {
          return acc + 0;
        }
        return acc + parseFloat(rate.rate);
        
    },0);

        const calcAvg = (sumRates / moviesArray.length).toFixed(2);
       
    return parseFloat(calcAvg);
};

// Get the average of Drama Movies
function dramaMoviesRate (moviesArray) {

    const onlyDramaMovies = moviesArray.filter(function(eachMovie) {
      //  if (eachMovie.genre.includes('Drama')){
            return eachMovie.genre.includes('Drama');
       // } 
    });
    
  if (onlyDramaMovies.length === 0) {
      return undefined;
  } else {
    return ratesAverage(onlyDramaMovies);
  }
};  
 
dramaMoviesRate(originalMoviesArray);

// Order by time duration, in growing order
function orderByDuration (moviesArray) {

    const getOrderByDuration = moviesArray.sort((a, b) => {

        if (a.duration < b.duration) {
            return - 1
        } else if (a.duration > b.duration) {
            return + 1
        } else if (a.duration === b.duration) {
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            }
        } 
    })
    return getOrderByDuration;
};
const array = turnHoursToMinutes(originalMoviesArray)
orderByDuration(array);

// How many movies did STEVEN SPIELBERG
function howManyMovies (moviesArray) {
if (moviesArray.length === 0) {return undefined};

const onlyDramaMoviesWithSpielberg = moviesArray.filter(function(eachMovie) {
    if (eachMovie.genre.includes('Drama') && eachMovie.director.includes('Steven Spielberg')){  
        return eachMovie.director.includes('Steven Spielberg');
    } 
  });

     return (`Steven Spielberg directed ${onlyDramaMoviesWithSpielberg.length} drama movies!`);
    

}
howManyMovies(originalMoviesArray);
// Order by title and print the first 20 titles
function orderAlphabetically (moviesArray){
 
    const getOrder = moviesArray.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        } else if (a.title > b.title) {
            return 1
        
        } else if (a.title === b.title) {
            return 0
        }
    })

    
      
    let firstTwenty = getOrder.slice(0,20);
     let titlesOnly = firstTwenty.map((moviesArray) => {
       return moviesArray.title;
     })
    return titlesOnly;
    }

orderAlphabetically(originalMoviesArray);

//Best yearly rate average
function bestYearAvg (moviesArray) {
    if (moviesArray.length === 0) return undefined;
  
    const moviesByYear = moviesArray.reduce((acc,eachMovie) => {
      if (!acc[eachMovie.year]) {
        acc[eachMovie.year] = { moviesNumbers: 1, rate: parseFloat(eachMovie.rate) };
      } else {
        acc[eachMovie.year].moviesNumbers += 1;
        acc[eachMovie.year].rate += parseFloat(eachMovie.rate);
        acc[eachMovie.year].rate = (acc[eachMovie.year].rate) / (acc[eachMovie.year].moviesNumbers);
      }
      return acc;
    }, {});
  
    const getYearsInOrder = Object.keys(moviesByYear);
  
    let bestAvg = 0; // ?
    let bestYear = 0; // ?
  
    getYearsInOrder.map((year) => {
      const yearRateAvg = moviesByYear[year].rate;
      if (yearRateAvg > bestAvg) {
        bestAvg = yearRateAvg;
        bestYear = year;
      }
    });
  
    return `The best year was ${bestYear} with an average rate of ${bestAvg}`;
  };
  bestYearAvg(originalMoviesArray)