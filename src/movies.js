// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesData){
  let allDirectors = [];
  allDirectors = moviesData
  .map(function (movie){
    
    return movie.director;
  })
  .filter(function(d, i, self){
    return i == self.indexOf(d);
  });
return allDirectors;

}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesData) {
  let SpielbergDramas = [];
  SpielbergDramas = moviesData.filter( movie => ( 
    movie.genre.includes("Drama") && movie.director == "Steven Spielberg") );
    return SpielbergDramas.length;
  }
  // Iteration 3: All rates average - Get the average of all rates with 2 decimals
  function ratesAverage(moviesData){
    if(moviesData.length === 0){
      return 0;
    }
    total = 0;  
    let ratingScores = []
    
    ratingScores =  moviesData.map(function(movie){
      if (!movie.rate){
        return movie.rate = 0;
      }
      return movie.rate;
    });
    const summedScores = ratingScores.reduce((max, currVal) => {
      return max + currVal
    }); 
    total = (summedScores / moviesData.length).toFixed(2)
    return Number.parseFloat(total)
    
  }
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesRate(moviesData) {
    
    const dramaMovies = moviesData.filter(function(movie) {
      return movie.genre.includes("Drama");
    })
    //console.log(dramaMovies)
    return ratesAverage(dramaMovies)
  }
  
  
  
  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(moviesData) {
    let sortedMovies = [...moviesData];
    sortedMovies.sort(function (a, b) {
      if (a.year === b.year){
        return a.title.localeCompare(b.title); //[a.title,b.title].sort()
      }
      return a.year - b.year;
    });
    console.log(sortedMovies)
    return sortedMovies;
  }
  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(moviesData) {
    let moviesNames = [];
    moviesNames = moviesData.map(function(movie){
      return movie.title;
    })
    
    if (moviesNames.length > 20) {
      moviesNames = moviesNames.sort().slice(0,20);
      return moviesNames
    }
    return moviesNames.sort()
  }
  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  
  function turnHoursToMinutes(moviesData) {
    let HoursTurnedIntoMinutes = [];
    HoursTurnedIntoMinutes = moviesData.map(function (movie) {
      //console.log(movie.duration)
      //HoursTurnedIntoMinutes.push(movie);
      // "2h 33min" -> ["2h", "33min"]
      // "2h" -> ["2h"]
      // "33min" -> ["33min"]
      let [hours, minutes] = [0, 0]
      let duration = movie.duration.split(" ");
      if (duration.length === 2) {
        hours = parseInt(duration[0]);
        minutes = parseInt(duration[1]);
      }
      // either we have only hours XOR minutes
      else {
        // so let's find out which one it is
        // get rid of the one-element array
        duration = duration[0];
        if (duration.includes("h")) {
          // duration must be hours
          hours = parseInt(duration);
        }
        // duration must be minutes
        else {
          minutes = parseInt(duration);
        }
      }
      
      //console.log("minutos: ",minutes)
      movie.duration = (hours * 60) + minutes;
      //console.log(movie.duration)
      return movie
    })  
    //console.log(HoursTurnedIntoMinutes);
    return [...HoursTurnedIntoMinutes]
  }
  
  // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
  
  function bestYearAvg(moviesData) {
if (moviesData.length === 0){
  return null;
}else if (moviesData.length === 1){
  return `The best year was ${moviesData[0].year} with an average rate of ${moviesData[0].rate}`;
} 
const data = {};
// const rateValue = [];
// const orderedByYear = orderByYear(moviesData).map(function(movie) {
//   return {
//     year: movie.year,
//     rate: movie.rate
//   }
// })
orderByYear(moviesData).forEach(function(movie) {
  data[movie.year] = [];
});


// data = {
//   '1992': [8, 7],
//   '1993': [6],
// }

moviesData.forEach(function (movie) {
  const rateArr = data[movie.year]; // obteniendo el value del key, osea un array;
  rateArr.push(movie.rate);
  data[movie.year] = rateArr;
});

for (let key in data) {
  const yearAverages = data[key];
  const average = yearAverages.reduce(function(sum, value){
    return sum + value;
  }, 0) / yearAverages.length;

  data[key] = Number.parseFloat(average.toFixed(2));
}

let bestYearRate = {
  year: '',
  rate: 0,
};

for (let key in data) {
  const avgRate = data[key];
  if(bestYearRate.rate > avgRate) {
    
  } else {
    bestYearRate.year = key;
    bestYearRate.rate = data[key];
  }

  return `The best year was ${bestYearRate.year} with an average rate of ${bestYearRate.rate}`;
}

// data = {
//   '1992': 8,
//   '1993': 5.
// }


}
  


  // Go ahead and find which year have the best average rate for the movies that were released on that year! 
  // Create bestYearAvg() function that receives an array of movies and gives us an answer which year was 
  // the best year for cinema and what was its average rate. The bestYearAvg() should return a string with 
  // the following structure: