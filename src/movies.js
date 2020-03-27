/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = (array) => {
    let fYears = [...array].sort((a,b) => {
        if (a.year == b.year) {
          return a.title.localeCompare(b.title);
        }
        return a.year - b.year
    });
    return fYears;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

let howManyMovies = (arr) => {
    return arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = (arr) => {
    return [...arr].map(movie => movie.title).sort().splice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = (arr) => {
    
    if (arr.length === 0) {return 0}

    let sum = arr.reduce((acc, current) => {
        return current.rate ? current.rate + acc : acc
      }, 0);

    // return parseFloat((sum / arr.length).toFixed(2))
    return (Math.round((sum / arr.length) * 100) / 100)
}

// Iteration 5: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (arr) => {
   return ratesAverage(arr.filter(movie => movie.genre.includes("Drama")))
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

let turnHoursToMinutes = (arr) => {
    
    return arr.map(movie => {
        
        const dString = movie.duration;
        let duration = 0; 
        
        for (let value of dString.split(' ')) {
            const num = parseInt(value);
            
            if (value.includes('h')) {
                duration += num * 60;
            } else if (value.includes('min')) {
                duration += num; 
            } 
        } 
        
    return { ...movie, duration };
    }); 
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
    
    if (arr.length === 0) {return null;}

    const avgY = arr.map(movie => movie.year).filter((element, index, array) => array.indexOf(element) === index)
      .map(element => ({year: element, avgrate: ratesAverage(arr.filter(x => x.year === element))
      }));
  
    avgY.sort((a, b) => {
      if (a.avgrate === b.avgrate) {
        return a.year - b.year;
      }
      return b.avgrate - a.avgrate;
    });

    return ("The best year was " + avgY[0].year + " with an average rate of " + avgY[0].avgrate);
  }