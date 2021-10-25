
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data.js");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const directors = movies.map(eachfilm =>{
     return eachfilm.director
  })
  return (directors)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const numFilms = movies.filter(eachfilm=>{

    if(eachfilm.director === "Steven Spielberg" && eachfilm.genre.includes("Drama"))
    {
      return true
    }

  })

  return numFilms.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(movies) {

function scoresAverage(movies) {
  let cont = 0;
  const avgArray = movies.map(eachfilm=>eachfilm.score)
  const avg = avgArray.reduce(function(avge,value)
  {
    
    if (value != NaN && value != "" && value != undefined)
      {
        return (avge + value ) 
      } 
    else
      {
        return avge;
      }
  },0)
  
  if(avgArray.length != 0)
  {
    return Math.round((avg/avgArray.length)*100)/100
  }
  else
  {
    return 0;
  }

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

let cont = 0;
  const avgFullArray = movies.filter(eachfilm=>eachfilm.genre.includes("Drama"))
  const avgArray = avgFullArray.map(eachfilm=>eachfilm.score)
  const avg = avgArray.reduce(function(avge,value)
  {
    
    if (value != NaN && value != "" && value != undefined)
      {
        return (avge + value ) 
      } 
    else
      {
        return avge;
      }
  },0)
  
  if(avgArray.length != 0)
  {
    return Math.round((avg/avgArray.length)*100)/100
  }
  else
  {
    return 0;
  }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const orderedArray = movies.sort(function (value1, value2) {
    if (value1.year != value2.year) {
      return value1.year - value2.year;
    } else {
      if (value1.title > value2.title) {
        return 1;
      } else if (value1.title < value2.title) {
        return -1;
      } else {
        return 0;
      }
    } 
  });
  return [...orderedArray];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

const newOrderedArray = [...movies].sort(function (a, b) {
 
  return a.title.localeCompare(b.title);
});
  
const namesArray = newOrderedArray.map(eachfilm=>{
  return eachfilm.title })

  return namesArray.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newArray = [];
  let hours = '';
  let minutes = '';

  const toTime = [...movies].forEach((element) => {
    hours = element.duration.split('h');

    minutes = element.duration.split(' ');
    if (minutes[1] != undefined) {
      minutes = minutes[1].split('min');
      element.duration = parseInt(hours[0] * 60) + parseInt(minutes[0]);
    } else {
      element.duration = parseInt(hours[0] * 60);
    }
  });

  [...movies].forEach(element => {

    newArray.push(element)
  
  });

 return JSON.parse(JSON.stringify(newArray)) 
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {

  let years = movies.map(eachElement => eachElement.year)
  years = years.filter((item,index) => {
    return years.indexOf(item) === index
  })
  //console.log(years)
  let yearsAux =[];
  let average = 0;
  let year = 0;
  years = years.reverse()

  console.log(years)
  years.forEach(element => {
  
    movies.forEach(eachfilm => {

      if(eachfilm.year === element)
      {
        yearsAux.push(eachfilm.score)
      }
      
    });
    if ( yearsAux.reduce((partial_sum, a) => partial_sum + a,0) / yearsAux.length > average) {
      average = yearsAux.reduce((partial_sum, a) => partial_sum + a,0) / yearsAux.length
      year = element
    }
    yearsAux = []
  });
  if(movies.length != 0)
  {
  return(`The best year was ${year} with an average score of ${average}`)
  }
  
  else{
    return null
  }

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}